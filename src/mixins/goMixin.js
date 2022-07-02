/**
 * @Author: cest
 * @Date: 2022-06-20 08:11:57
 * @LastEditTime: 2022-06-21 15:41:40
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/mixins/goMixin.js
 * @Description: 编辑描述内容
 */
/*
 * @Author: zhuanglin qin
 * @Date: 2022-06-10 20:51:43
 * @LastEditors: zhuanglin qin
 * @LastEditTime: 2022-06-10 20:54:09
 * @FilePath: /pages/ticket/myticket/list/list/mixins/goMixin
 * @Description: 跳转页面功能
 */
import { mapMutations } from 'vuex'
import * as TYPES from '@/store/types'
export default {
  data: function () {
    return {}
  },
  methods: {
    ...mapMutations('application', {
      changeApplicationItem: TYPES.CHANGE_APPLICATION_ITEM
    }),
    /***
     * @description: 页面跳转。
     * @param {*} item 参数描述：需要传递的参数对象
     * @param {*} url 参数描述：跳转页面的url
     * @return {*} 无返回值
     * @author: zhuangli qin
     */
    go(item, url) {
      // 更新 state
      this.changeApplicationItem(item)
      this.$u.route(url)
    }
  }
}
