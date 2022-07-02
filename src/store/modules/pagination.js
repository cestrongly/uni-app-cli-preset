/**
 * @Author: cest
 * @Date: 2022-06-28 10:53:08
 * @LastEditTime: 2022-07-02 13:37:22
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/store/modules/pagination.js
 * @Description: 分页业务
 */

import * as TYPES from '@/store/types'
export default {
  namespaced: true,

  state: () => ({
    // 设备列表
    list: [],
    // 分页总条数 - 默认值 2
    pageTotal: 2,
    // 选中设备
    item: {}
  }),

  getters: {},
  actions: {
    /**
     * 分页处理
     *
     * @param {*} context
     * @param {*} payload
     */
    async getList(context, payload) {
      // console.log('context:', context)
      // console.log('payload:', payload)
      // try {
      //   const res = await getList(payload)
      //   console.log('getList res:', res)
      //   context.commit(TYPES.SET_LIST, { res, query: payload })
      // } catch (e) {
      //   //TODO handle the exception
      //   console.error('getList err:', e)
      // }
    }
  },
  mutations: {
    /**
     * 分页数据处理
     *
     * @param {*} state - 当前模块的 state
     * @param {*} payload - 负载参数，调用者传递过来的参数
     */
    [TYPES.SET_LIST](state, { res, query }) {
      if (query.pageNum > 1) {
        state.list = state.list.concat(res.rows)
      } else {
        state.list = res.rows
      }
      state.pageTotal = res.pageTotal
    },
    /**
     *
     *
     * @param {*} state 当前模块的 state
     * @param {*} payload - 负载参数，调用者传递过来的参数
     */
    [TYPES.CHANGE_ITEM](state, payload) {
      state.item = payload
    }
  }
}
