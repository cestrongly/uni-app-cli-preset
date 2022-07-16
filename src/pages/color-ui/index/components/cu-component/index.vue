<!--
 * @Author: cest
 * @Date: 2022-07-03 21:36:04
 * @LastEditTime: 2022-07-03 22:16:36
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/color-ui/index/components/CuComponent/index.vue
 * @Description: 编辑描述内容
-->
<template lang="pug">
scroll-view.basics(scroll-y)
  img.response.animation-fade(src="@/pages/color-ui/static/componentBg.png" mode="widthFix")
  CuNavList(:list="elements")
  .cu-tabbar-height
</template>

<script>
import CuNavList from '@/pages/color-ui/components/CuNavList'
export default {
  name: 'CuComponent',
  components: {
    CuNavList
  },
  props: {},
  data: () => ({
    elements: [
      {
        title: '操作条',
        name: 'bar',
        color: 'purple',
        cuIcon: 'vipcard'
      },
      {
        title: '导航栏 ',
        name: 'nav',
        color: 'mauve',
        cuIcon: 'formfill'
      },
      {
        title: '列表',
        name: 'list',
        color: 'pink',
        cuIcon: 'list'
      },
      {
        title: '卡片',
        name: 'card',
        color: 'brown',
        cuIcon: 'newsfill'
      },
      {
        title: '表单',
        name: 'form',
        color: 'red',
        cuIcon: 'formfill'
      },
      {
        title: '时间轴',
        name: 'timeline',
        color: 'orange',
        cuIcon: 'timefill'
      },
      {
        title: '聊天',
        name: 'chat',
        color: 'green',
        cuIcon: 'messagefill'
      },
      {
        title: '轮播',
        name: 'swiper',
        color: 'olive',
        cuIcon: 'album'
      },
      {
        title: '模态框',
        name: 'modal',
        color: 'grey',
        cuIcon: 'squarecheckfill'
      },
      {
        title: '步骤条',
        name: 'steps',
        color: 'cyan',
        cuIcon: 'roundcheckfill'
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
