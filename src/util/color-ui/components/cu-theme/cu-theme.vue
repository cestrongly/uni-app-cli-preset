<!--
 * @Author: cest
 * @Date: 2022-07-30 09:57:52
 * @LastEditTime: 2022-07-30 10:03:41
 * @LastEditors: cest
 * @FilePath: /uni-app-cli-preset/src/util/color-ui/components/cu-theme/cu-theme.vue
 * @Description: 主题组件
-->
<template lang="pug">
.cu-theme(:class="theme")
  slot
</template>

<script>
export default {
  props: {},
  data: () => ({}),
  computed: {
    theme() {
      return uni.getStorageSync('theme') || 'default'
    }
  },
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
  beforeDestroy() {}}

</script>

<style scoped></style>
