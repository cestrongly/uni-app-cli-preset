<!--
 * @Author: cest
 * @Date: 2022-07-12 10:08:55
 * @LastEditTime: 2022-07-26 08:28:04
 * @LastEditors: cest
 * @FilePath: /dms-app-cli/src/components/cedo-image-preview/cedo-image-preview.vue
 * @Description: 编辑描述内容
-->
<template lang="pug">
.cedo-image-preview.padding-top.padding-bottom 图片预览
  .images
    u-row(gutter="10")
      u-col(span="4" v-for="(item, index) in list" :key="index")
        .square.margin-bottom-sm
          .con.light.bg-grey
            u-image(@click="goImgList" width="100%" height="100%" mode="aspectFit" :src="item.appendixUrl")
</template>

<script>
export default {
  name: 'CedoImagePreview',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({}),
  computed: {},
  methods: {
    goImgList() {
      uni.setStorageSync('imgPreviewPicList', this.list)
      this.$u.route('/pages/image-preview/preview/index')
    }
  },
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() {},
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {},
  // 组件周期函数--监听组件数据更新之后
  updated() {},
  // 组件周期函数--监听组件激活(显示)
  activated() {},
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {},
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() {}
}
</script>

<style scoped></style>
