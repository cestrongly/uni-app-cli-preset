/**
 * @Author: cest
 * @Date: 2022-07-12 17:40:37
 * @LastEditTime: 2022-07-26 08:44:46
 * @LastEditors: cest
 * @FilePath: /dms-app-cli/src/mixins/backtopMixin.js
 * @Description: 返回顶部
 */

export default {
  data: function () {
    return {
      scrollTop: 0
    }
  },
  methods: {
    setBackTop(e) {
      this.scrollTop = e.scrollTop
    }
  }
}
