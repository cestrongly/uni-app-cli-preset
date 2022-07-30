/**
 * @Author: cest
 * @Date: 2022-06-16 07:48:59
 * @LastEditors: cest
 * @LastEditTime: 2022-07-30 09:52:24
 * @FilePath: /uni-app-cli-preset/src/main.js
 * @Description:
 * @Copyright (c) 2022 by cestrmail@163.com by cest, All Rights Reserved.
 */

// uView 样式
import './uni_modules/uview-ui/index.scss'
// color-ui 样式
import './util/color-ui/custom.scss'
// color-ui 轻量级动画库
import './util/color-ui/css/animation.css'
// 全局样式
import './assets/scss/index.scss'
// 默认主题
import './assets/theme/default/index.scss'
// 暗黑主题
import './assets/theme/dark/index.scss'

import App from './App.vue'
import Vue from 'vue'
// vuex
import store from './store'
// 引入全局uView
import uView from './uni_modules/uview-ui'
// 引入自定义导航栏
import cuCustom from './util/color-ui/components/cu-custom.vue'
// 引入自定义导航栏（新）
import cuNav from './util/color-ui/components/cu-nav/cu-nav'

// @test
// const host = 'https://unidemo.dcloud.net.cn/'
// @test
// Vue.prototype.$host = host

// 注册组件 自定义导航栏（旧）
Vue.component('cu-custom', cuCustom)
// 注册组件 自定义导航栏（新）
Vue.component('cu-nav', cuNav)
Vue.config.productionTip = false

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
