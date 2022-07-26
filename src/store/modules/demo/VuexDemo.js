/**
 * @Author: cest
 * @Date: 2022-07-26 16:00:24
 * @LastEditTime: 2022-07-26 16:28:20
 * @LastEditors: cest
 * @FilePath: /uni-app-cli-preset/src/store/modules/demo/VuexDemo.js
 * @Description: 编辑描述内容
 */

import * as VuexDemoMap from '@/store/maps/demo/VuexDemoMap'
export default {
  namespaced: true,
  state: {
    // vue data
    count: 0,
    appTitle: '应用标题',
    firstName: 'zhuangli',
    lastName: 'qin'
  },
  getters: {
    [VuexDemoMap.FULL_NAME](state, getters) {
      return state.firstName + state.lastName
    }
  },
  mutations: {
    // vue methods
    // 变更 count 累加
    [VuexDemoMap.INCREMENT](state, payload) {
      console.log('increment state', state)
      console.log('increment payload', payload)
      const n = payload || 1
      state.count += n
    }
  },
  actions: {
    [VuexDemoMap.ASYNC_GET_LIST](context, payload) {
      console.log('asyncGetList context', context)
      console.log('asyncGetList payload', payload)
      setTimeout(() => {
        // 500 毫秒以后执行
        console.log('asyncGetList')
      }, 5000)
    }
  }
}
