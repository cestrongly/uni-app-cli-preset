<!--
 * @Author: cest
 * @Date: 2022-07-13 11:19:30
 * @LastEditTime: 2022-07-26 09:48:44
 * @LastEditors: cest
 * @FilePath: /dms-app-cli/src/pages/image-preview/components/NavBar/index.vue
 * @Description: 自定义导航栏
-->
<template lang="pug">
cu-custom(
  bg-color="bg-white"
  :is-back="showBack")
  block(slot="backText")
    .icon.icon-24gl-arrowLeft.icon-24gl-arrowLeft--custom
  block(slot="content")
    | {{ title }}
</template>

<script>
import '@/pages/image-preview/assets/scss/icon/index.scss'
export default {
  props: {
    // title	导航栏标题
    // 类型 String
    // 默认值 NavBar Title
    // 可选值 -
    title: {
      type: String,
      default: 'NavBar Title'
    },
    showBack: {
      type: [Boolean,String],
      default: false
    }
  },
  data: () => ({}),
  computed: {},
  methods: {},
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

<style lang="stylus" scoped>
.icon-24gl-arrowLeft--custom
  overflow hidden
  width 48rpx
  height 48rpx
</style>
