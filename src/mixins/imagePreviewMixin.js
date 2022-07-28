/**
 * @Author: cest
 * @Date: 2022-07-26 08:46:43
 * @LastEditTime: 2022-07-26 09:27:31
 * @LastEditors: cest
 * @FilePath: /dms-app-cli/src/mixins/imagePreviewMixin.js
 * @Description: 图片预览
 */

export default {
  data: function () {
    return {
      scrollTop: 0
    }
  },
  methods: {
    previewImage(list, index) {
      // 设置图片索引
      uni.setStorageSync('CurrentImageIndex', index)
      // 获取图片列表
      uni.setStorageSync('PreviewImageList', list)
      // 抵达图片预览页面
      this.$u.route('/pages/image-preview/preview/index')
    }
  }
}
