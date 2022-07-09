/**
 * @Author: cest
 * @Date: 2022-07-09 13:50:40
 * @LastEditTime: 2022-07-09 14:55:20
 * @LastEditors: cest
 * @FilePath: /uni-app-preset/src/service/http/responseInterceptors.js
 * @Description: 编辑描述内容
 */
import store from '@/store'
// 响应拦截器
// http.interceptors.response.use((response) => {
// 	/* 对响应成功做点什么 可使用async await 做异步操作*/
// 	// if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
// 	//    	return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
// 	// if (response.config.custom.verification) { // 演示自定义参数的作用
// 	//   	return response.data
// 	// }
// 	console.log(response)
// 	return response
// }, (response) => {
// 	/*  对响应错误做点什么 （statusCode !== 200）*/
// 	console.log(response)
// 	return Promise.reject(response)
// })

/**
 * 响应拦截
 * @param {Object} http
 */

module.exports = http => {
  http.interceptors.response.use(
    response => {
      /*  对响应成功做点什么 （statusCode === 200）可使用async await 做异步操作 */
      console.log('响应成功：', response)
      // 处理后端返回的接口状态码
      let { code, message } = response.data
      if (code !== 200) {
        // 401	Authentication	表示认证类型的错误，一般需要登录认证
        if (code === 401) {
          store.commit('logout')
          uni.reLaunch({
            url: '/pages/login/login'
          })
        } else if (response.data.code === 500) {
          message = '账号异常，请联系系统管理员。错误原因:' + response.data.message
        } else {
          message = '出现错误，请稍后再试.' + response.errMsg
        }

        // 自定义字段
        const custom = response.config?.custom
        // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
        if (custom.toast !== false) {
          uni.$u.toast(message)
        }
        // 如果需要catch返回，则进行reject
        if (custom?.catch) {
          return Promise.reject(response)
        } else {
          // 否则返回一个pending中的promise
          return new Promise(() => {})
        }
      }
      return response.data || {}
    },
    response => {
      /*  对响应错误做点什么 （statusCode !== 200） */
      console.error('响应错误：response', response)
      uni.$u.toast(response?.errMsg ?? '请求超时')
      return Promise.reject(response)
    }
  )
}
