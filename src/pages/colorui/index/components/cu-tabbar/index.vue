<!--
 * @Author: cest
 * @Date: 2022-07-03 09:06:40
 * @LastEditTime: 2022-07-09 03:36:51
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/colorui/index/components/cu-tabbar/index.vue
 * @Description: tabbar 组件
-->
<template lang="pug">
.cu-bar.tabbar.shadow.foot(:class="bgColor")
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
  beforeDestroy() {}
}
</script>
