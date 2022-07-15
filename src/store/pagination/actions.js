/**
 * @Author: cest
 * @Date: 2022-07-14 09:31:27
 * @LastEditTime: 2022-07-14 09:32:18
 * @LastEditors: cest
 * @FilePath: /dms-app-cli/src/store/pagination/actions.js
 * @Description: 编辑描述内容
 */

import * as TYPES from '@/store/types'
export default {
  /**
   * 分页处理
   *
   * @param {*} context
   * @param {*} payload
   */
  async getList(context, { getList, query }) {
    try {
      const res = await getList(query)
      console.log('getList res:', res)
      context.commit(TYPES.SET_LIST, { res, query })
    } catch (e) {
      // TODO handle the exception
      console.error('getList err:', e)
    }
  }
}
