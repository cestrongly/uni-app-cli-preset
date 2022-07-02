/**
 * @Author: zhuangli.qin
 * @Date: 2022-06-16 07:49:00
 * @LastEditors: zhuangli.qin
 * @LastEditTime: 2022-06-16 10:35:49
 * @FilePath: \cedo-app-cli\src\service\http\requestInterceptors.js
 * @Description: 
 * @Copyright (c) 2022 by cestrmail@163.com by zhuangli.qin, All Rights Reserved. 
 */
import store from "@/store";
// 请求拦截器
// http.interceptors.request.use((config) => { // 可使用async await 做异步操作
// 	config.header = {
// 		...config.header,
// 		a: 1 // 演示拦截器header加参
// 	}
// 	// 演示custom 用处
// 	// if (config.custom.auth) {
// 	//   config.header.token = 'token'
// 	// }
// 	// if (config.custom.loading) {
// 	//  uni.showLoading()
// 	// }
// 	// 演示
// 	// if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
// 	// 	return Promise.reject(config)
// 	// }
// 	return config
// }, config => { // 可使用async await 做异步操作
// 	return Promise.reject(config)
// })

/**
 * 请求拦截
 * @param {Object} http
 */

module.exports = (http) => {
  http.interceptors.request.use(
    (config) => {
      // 可使用async await 做异步操作
      // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
      config.data = config.data || {}

      /*存在token*/
      if (store.state.token) {
        config.header["Authorization"] = "Bearer " + store.state.token
      }
      return config
    },
    (
      config // 可使用async await 做异步操作
    ) => Promise.reject(config)
  );
};
