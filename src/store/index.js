/**
 * @Author: cest
 * @Date: 2022-06-17 23:02:14
 * @LastEditTime: 2022-07-13 14:05:42
 * @LastEditors: cest
 * @FilePath: /dms-app-cli/src/store/index.js
 * @Description: vuex 状态管理总管
 */

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// 动态引入 store modules
// 主要解决的问题每次建一个module需要自己去主index.js里面去注册
// 为了偷懒，也为了避免团队开发时同时对index.js 进行修改引发冲突
// 所以在index.js中 动态的对子目录和模块进行注册

// function loadModules() {
//   const context = require.context('./modules', true, /([a-z_]+)\.js$/i)

//   const modules = context
//     .keys()
//     .map(key => ({
//       key,
//       name: key.match(/([a-z_]+)\.js$/i)[1]
//     }))
//     .reduce(
//       (modules, { key, name }) => ({
//         ...modules,
//         [name]: context(key).default
//       }),
//       {}
//     )

//   return {
//     context,
//     modules
//   }
// }

// const { context, modules } = loadModules()

// 获取moudules文件下所有js文件
const context = require.context('./modules', true, /\.js$/)
// context.keys() 返回匹配成功模块的名字组成的数组
const modules = context.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  // 通过context(key)导出文件内容。在文件中时通过export.default导出的，所以后边加.default
  const fileModule = context(modulePath)
  // eslint-disable-next-line no-param-reassign
  modules[moduleName] = fileModule.default
  return modules
}, {})

const { createLogger } = Vuex
const store = new Vuex.Store({
  // Vuex 自带一个日志插件用于一般的调试:
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],

  // 开启严格模式
  // 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。

  // 开发环境与发布环境#
  // 不要在发布环境下启用严格模式！严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。

  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  actions,
  // modules
  modules
})

if (module.hot) {
  // 在任何模块发生改变时进行热重载。
  module.hot.accept(context.id, () => {
    store.hotUpdate({
      modules
    })
  })
}

export default store
