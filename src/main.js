/**
 * @Author: zhuangli.qin
 * @Date: 2022-06-16 07:48:59
 * @LastEditors: cest
 * @LastEditTime: 2022-07-02 20:06:50
 * @FilePath: /uni-app-cli/src/main.js
 * @Description:
 * @Copyright (c) 2022 by cestrmail@163.com by zhuangli.qin, All Rights Reserved.
 */
import Vue from 'vue'
import App from './App'

// vuex
import store from './store'
// 引入全局uView
import uView from './uni_modules/uview-ui'
// 引入自定义顶部
import cuCustom from './util/colorui/components/cu-custom.vue'

// 注册组件 自定义顶部
Vue.component('cu-custom', cuCustom)
Vue.config.productionTip = false
App.mpType = 'app'
// 安装 uView 插件
Vue.use(uView)

const app = new Vue({
  ...App,
  store
})

// 引入请求封装
// require('./util/request/index')(app)

app.$mount()
