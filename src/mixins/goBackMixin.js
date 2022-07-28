/**
 * @Author: cest
 * @Date: 2022-07-20 14:55:54
 * @LastEditTime: 2022-07-26 08:44:38
 * @LastEditors: cest
 * @FilePath: /dms-app-cli/src/mixins/goBackMixin.js
 * @Description: 返回上一页或者首页
 */

export default {
  methods: {
    back() {
      /*
      uni.navigateBack({
        delta: 1
      })
      */
      // 处理兼容，如果没有上一级界面则返回首页
      const pages = getCurrentPages()
      if (pages.length === 2) {
        uni.navigateBack({
          delta: 1
        })
      } else if (pages.length === 1) {
        uni.switchTab({
          url: '/pages/home/home'
        })
      } else {
        uni.navigateBack({
          delta: 1
        })
      }
    }
  }
}
