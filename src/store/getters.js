/**
 * @Author: cest
 * @Date: 2022-06-20 08:11:57
 * @LastEditTime: 2022-06-29 19:27:05
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/store/getters.js
 * @Description: 编辑描述内容
 */
import test from '@/uni_modules/uview-ui/libs/function/test'
import * as STRING_MAP from '@/store/string_map'
const {
	isEmpty
} = test
export default {
	defaultValue: (state, getters) => (value) => {
		return isEmpty(value) ? '' : value
	},

  getEnvVersion (state, getters) {
    const accountInfo = uni.getAccountInfoSync();
    let version = state[STRING_MAP.envVersion][accountInfo, accountInfo.miniProgram.envVersion]
    if (version !== '正式版') {
      return `(${version})`
    } else {
      return ''
    }
  },
  getAppTitle(state,getters) {
    return process.env['VUE_APP_TITLE']
  }
}
