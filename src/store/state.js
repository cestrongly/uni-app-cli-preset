/**
 * @Author: cest
 * @Date: 2022-06-20 08:11:57
 * @LastEditTime: 2022-07-09 02:28:04
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/store/state.js
 * @Description: 编辑描述内容
 */

export const state = () => ({
  // envVersion	string	小程序版本	2.10.0
  // 合法值	说明
  // develop	开发版
  // trial	体验版
  // release	正式版

  // 获取缓存中的用户信息，用来做重复登录校验
  userInfo: uni.getStorageSync('userInfo') ? uni.getStorageSync('userInfo') : {},

  token: uni.getStorageSync('token') || process.env.VUE_APP_MOCK_TOKEN,

  permissions: uni.getStorageSync('permissions') ? uni.getStorageSync('permissions') : [],

  envVersion: {
    develop: '开发版',
    trial: '体验版',
    release: '正式版'
  }
})

export default state
