/**
 * @Author: zhuangli.qin
 * @Date: 2022-06-16 07:48:59
 * @LastEditors: cest
 * @LastEditTime: 2022-07-15 21:57:38
 * @FilePath: /uni-app-cli-preset/src/main.js
 * @Description:
 * @Copyright (c) 2022 by cestrmail@163.com by zhuangli.qin, All Rights Reserved.
 */

import './assets/theme/dark/index.scss'
import './assets/theme/default/index.scss'
import './util/colorui/index.scss'
import './util/colorui/animation.css'
import './uni_modules/uview-ui/index.scss'
import './assets/scss/index.scss'

import App from './App.vue'

// #ifndef VUE3
import Vue from 'vue'
// vuex
import store from './store'
// 引入全局uView
import uView from './uni_modules/uview-ui'
// 引入自定义顶部
import cuCustom from './util/colorui/components/cu-custom.vue'
// #endif

const host = 'https://unidemo.dcloud.net.cn/'

// 注册组件 自定义顶部
Vue.component('cu-custom', cuCustom)
Vue.config.productionTip = false
Vue.prototype.$host = host
App.mpType = 'app'
// 安装 uView 插件
Vue.use(uView)

const app = new Vue({
  ...App,
  store
})
app.$mount()

// #ifdef VUE3
export function createApp() {
  const { createSSRApp } = Vue
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
