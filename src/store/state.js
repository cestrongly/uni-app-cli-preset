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

  envVersion: {
    develop: '开发版',
    trial: '体验版',
    release: '正式版'
  }
})

export default state
