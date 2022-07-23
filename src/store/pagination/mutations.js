/**
 * @Author: cest
 * @Date: 2022-07-14 09:33:29
 * @LastEditTime: 2022-07-14 09:34:44
 * @LastEditors: cest
 * @FilePath: /dms-app-cli/src/store/pagination/mutations.js
 * @Description: 编辑描述内容
 */

import * as paginationMap from '@/store/maps/paginationMap'
export default {
  /**
   * 分页数据处理
   *
   * @param {*} state - 当前模块的 state
   * @param {*} payload - 负载参数，调用者传递过来的参数
   */
  [paginationMap.SET_LIST](state, { res, query }) {
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
  [paginationMap.CHANGE_ITEM](state, payload) {
    state.item = payload
  }
}
