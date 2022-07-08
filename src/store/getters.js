/**
 * @Author: cest
 * @Date: 2022-06-20 08:11:57
 * @LastEditTime: 2022-07-09 01:49:55
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/store/getters.js
 * @Description: 编辑描述内容
 */
import test from '@/uni_modules/uview-ui/libs/function/test'
import * as STRING_MAP from '@/store/string_map'
const { isEmpty } = test
export default {
  defaultValue:
    () =>
    (value, defaultValue = '') => {
      return isEmpty(value) ? defaultValue : value
    },

  /**
   * 获取小程序版本信息
   * @param {*} state
   * @returns 小程序版本信息
   */
  getEnvVersion: state => {
    const accountInfo = uni.getAccountInfoSync()
    const version = state[STRING_MAP.envVersion][(accountInfo, accountInfo.miniProgram.envVersion)]
    if (version !== '正式版') {
      return `(${version})`
    } else {
      return ''
    }
  },

  /**
   * 获取 APP 标题
   */

  getAppTitle: () => {
    return process.env.VUE_APP_TITLE
  }
}
