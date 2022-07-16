<!--
 * @Author: cest
 * @Date: 2022-07-03 09:06:40
 * @LastEditTime: 2022-07-10 18:29:14
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/color-ui/index/components/cu-tabbar/index.vue
 * @Description: tabbar 组件
-->
<template lang="pug">
.cu-tabbar.cu-bar.tabbar.shadow.foot(:class="bgColor")
  CuAction(
    v-for="(item, index) in tabbarList"
    :key="index"
    :text="item.text"
    :isActive="item.isActive"
    :imgClass="item.imgClass"
    @change="change({item,index},$event)"
  )
</template>

<script>
import CuAction from './components/CuAction'
export default {
  name: 'CuTabbar',
  components: {
    CuAction
  },
  props: {
    isDark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabbarList: [
        {
          text: '元素',
          isActive: true,
          imgClass: 'basics'
        },
        {
          text: '组件',
          isActive: false,
          imgClass: 'component'
        },
        {
          text: '扩展',
          isActive: false,
          imgClass: 'plugin'
        }
      ]
    }
  },
  computed: {
    bgColor() {
      console.log('darK?', this.isDark)
      return this.isDark ? 'bg-dark' : 'bg-white'
    }
  },
  methods: {
    change({ item, index }, e) {
      console.log('change:', index, e)
      // item.isActive = true
      this.tabbarList = this.tabbarList.map(item => {
        return { ...item, isActive: false }
      })
      this.tabbarList.splice(index, 1, { ...item, isActive: true })
      // console.log('this.tabbarList：', this.tabbarList)
      console.log('darK?', this.isDark)
      this.$emit('changeItem', { item, index })
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
  beforeDestroy() {},
  // 解决 uniapp ::v-deep 设置 uni-app 组件样式时 h5 生效，小程序失效问题
  options: { styleIsolation: 'shared' },
}
</script>

<style lang="stylus" scoped>

.cu-tabbar
  // background-color red
::v-deep .cu-tabbar
  &__img
    background-size 100%
    width 50rpx
    height 50rpx
    display inline-block
    &.basics
      background-image url('@/pages/color-ui/static/tabbar/basics.png')
      &_cur
        background-image url(@/pages/color-ui/static/tabbar/basics_cur.png)
    &.component
      background-image url('@/pages/color-ui/static/tabbar/component.png')
      &_cur
        background-image url(@/pages/color-ui/static/tabbar/component_cur.png)
    &.plugin
      background-image url('@/pages/color-ui/static/tabbar/plugin.png')
      &_cur
        background-image url(@/pages/color-ui/static/tabbar/plugin_cur.png)
</style>
