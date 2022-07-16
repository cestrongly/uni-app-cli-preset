<!--
 * @Author: cest
 * @Date: 2022-07-03 20:20:11
 * @LastEditTime: 2022-07-16 14:24:57
 * @LastEditors: cest
 * @FilePath: /uni-app-cli-preset/src/pages/colorui/index/components/cu-basics/index.vue
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
        cuIcon: 'newsfill',
        url: '/pages/colorui/layout/index'
      },
      {
        title: '背景',
        name: 'background',
        color: 'blue',
        cuIcon: 'colorlens',
        url: '/pages/colorui/background/index'
      },
      {
        title: '文本',
        name: 'text',
        color: 'purple',
        cuIcon: 'font',
        url: '/pages/colorui/text/index'
      },
      {
        title: '图标 ',
        name: 'icon',
        color: 'mauve',
        cuIcon: 'cuIcon',
        url: '/pages/colorui/icon/index'
      },
      {
        title: '按钮',
        name: 'button',
        color: 'pink',
        cuIcon: 'btn',
        url: '/pages/colorui/button/index'
      },
      {
        title: '标签',
        name: 'tag',
        color: 'brown',
        cuIcon: 'tagfill',
        url: '/pages/colorui/tag/index'
      },
      {
        title: '头像',
        name: 'avatar',
        color: 'red',
        cuIcon: 'myfill',
        url: '/pages/colorui/avatar/index'
      },
      {
        title: '进度条',
        name: 'progress',
        color: 'orange',
        cuIcon: 'icloading',
        url: '/pages/colorui/progress/index'
      },
      {
        title: '边框阴影',
        name: 'shadow',
        color: 'olive',
        cuIcon: 'copy',
        url: '/pages/colorui/shadow/index'
      },
      {
        title: '加载',
        name: 'loading',
        color: 'green',
        cuIcon: 'loading2',
        url: '/pages/colorui/loading/index'
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
