<!--
 * @Author: cest
 * @Date: 2022-07-03 09:06:40
 * @LastEditTime: 2022-07-03 17:18:47
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/colorui/index/components/CuTabbar/index.vue
 * @Description: tabbar 组件
-->
<template lang="pug">
.cu-bar.tabbar.bg-white.shadow.foot
  CuAction(
    v-for="(item, index) in tabbarList"
    :key="index"
    :text="item.text"
    :isActive="item.isActive"
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
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    const tabbarList = this.list
    return {
      tabbarList
    }
  },
  computed: {},
  methods: {
    change({ item, index }, e) {
      console.log('change:', index, e)
      item.isActive = true
      this.tabbarList = this.tabbarList.map(item => {
        return { ...item, isActive: false }
      })
      this.tabbarList.splice(index, 1, item)
      console.log('this.tabbarList：', this.tabbarList)

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
