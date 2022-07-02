/**
 * @Author: zhuangli.qin
 * @Date: 2022-06-16 07:48:59
 * @LastEditors: cest
 * @LastEditTime: 2022-06-30 13:57:23
 * @FilePath: /cedo-app-cli/src/main.js
 * @Description:
 * @Copyright (c) 2022 by cestrmail@163.com by zhuangli.qin, All Rights Reserved.
 */
import Vue from 'vue'
import App from './App'

// vuex
import store from './store'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'

// 引入自定义顶部
import cuCustom from './colorui/components/cu-custom.vue'

// 引入自定义顶部
// import TnCustom from './components/TnCustom/TnCustom.vue'

// 验证权限
import {
	hasPermi
} from '@/util'

// 注册组件 自定义顶部
Vue.component('cu-custom', cuCustom)
// 注册组件 自定义顶部
// Vue.component('tn-custom', TnCustom)


// vuex 默认已挂载，不需要显示挂载
// Vue.prototype.$store = store

// Boolean 权限校验
Vue.prototype.hasPermi = hasPermi

/**
 * 应该删除部分
 * @param {Object} arr
 * @param {Object} item
 */
Vue.prototype.removeArray = function(arr, item) {
	delete arr[arr.indexOf(item)]
	let tempArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			tempArr.push(arr[i])
		}
	}
	return tempArr
}

/**
 * 应该删除部分
 * @param {Object} arr
 * @param {Object} index
 */
Vue.prototype.removeIndex = function(arr, index) {
	delete arr[index];
	let tempArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			tempArr.push(arr[i])
		}
	}
	return tempArr;
}

Vue.config.productionTip = false
App.mpType = 'app'
// 安装 uView 插件
Vue.use(uView);

const app = new Vue({
	...App,
	store
})
// 引入请求封装
// require('./util/request/index')(app)
app.$mount()
