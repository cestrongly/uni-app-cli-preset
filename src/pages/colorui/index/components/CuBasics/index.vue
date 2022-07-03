<!--
 * @Author: cest
 * @Date: 2022-07-03 20:20:11
 * @LastEditTime: 2022-07-03 22:16:18
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/colorui/index/components/CuBasics/index.vue
 * @Description: 基础元素
-->
<template lang="pug">
scroll-view.basics(scroll-y)
  img.response.animation-fade(src="@/pages/colorui/static/BasicsBg.png" mode="widthFix")
  CuNavList(:list="elements")
  .cu-tabbar-height
</template>

<script>
import CuNavList from '@/pages/colorui/components/CuNavList'
export default {
  name: 'CuBasics',
  components: {
    CuNavList
  },
  props: {},
  data: () => ({
    elements: [
      {
        title: '布局',
        name: 'layout',
        color: 'cyan',
        cuIcon: 'newsfill'
      },
      {
        title: '背景',
        name: 'background',
        color: 'blue',
        cuIcon: 'colorlens'
      },
      {
        title: '文本',
        name: 'text',
        color: 'purple',
        cuIcon: 'font'
      },
      {
        title: '图标 ',
        name: 'icon',
        color: 'mauve',
        cuIcon: 'cuIcon'
      },
      {
        title: '按钮',
        name: 'button',
        color: 'pink',
        cuIcon: 'btn'
      },
      {
        title: '标签',
        name: 'tag',
        color: 'brown',
        cuIcon: 'tagfill'
      },
      {
        title: '头像',
        name: 'avatar',
        color: 'red',
        cuIcon: 'myfill'
      },
      {
        title: '进度条',
        name: 'progress',
        color: 'orange',
        cuIcon: 'icloading'
      },
      {
        title: '边框阴影',
        name: 'shadow',
        color: 'olive',
        cuIcon: 'copy'
      },
      {
        title: '加载',
        name: 'loading',
        color: 'green',
        cuIcon: 'loading2'
      }
    ]
  }),
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

.page {
		height: 100vh;
	}
</style>
