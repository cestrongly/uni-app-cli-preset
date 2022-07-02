/*
 * @Author: zhuanglin qin
 * @Date: 2022-06-10 20:51:43
 * @LastEditors: zhuanglin qin
 * @LastEditTime: 2022-06-10 20:54:09
 * @FilePath: /util/request/defaultConfig.js
 * @Description: DOWNLOAD请求 配置
 */

// #DOWNLOAD请求
// 具体参数说明：uni.downloadFile(opens new window)

export const config = {
	params: {},
	/* 会加在url上 */
	// #ifdef H5 || APP-PLUS
	timeout: 3000, // H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)
	// #endif
	header: {},
	/* 会与全局header合并，如有同名属性，局部覆盖全局 */
	custom: {}, // 自定义参数
	// 返回当前请求的task, options。非必填
	getTask: (task, options) => {
		// setTimeout(() => {
		//   task.abort()
		// }, 500)
	},
	//validateStatus: (statusCode) => { // statusCode 必存在。此处示例为全局默认配置。演示，非必填选项
	//	return statusCode >= 200 && statusCode < 300
	//}
}

// http.download('api/download', config).then(res => {
// 
// }).catch(err => {
// 
// })
