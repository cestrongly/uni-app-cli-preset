<!--
 * @Author: cest
 * @Date: 2022-07-03 21:42:34
 * @LastEditTime: 2022-07-05 20:14:54
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/colorui/components/CuNavList/index.vue
 * @Description: 编辑描述内容
-->
<template lang="pug">
.nav-list
  navigator.nav-li(
    hover-class="none"
    :url="item.url" navigateTo
    :class="'bg-' + item.color"
    :style="[{ animation: 'show ' + ((index + 1) * 0.2 + 1) + 's 1' }]"
    v-for="(item, index) in list"
    :key="index"
  )
    .nav-title {{ item.title }}
    .nav-name {{ item.name }}
    text(:class="'cuIcon-' + item.cuIcon")
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
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

<style lang="stylus">
@import '@/pages/colorui/index/nav-list'
</style>
