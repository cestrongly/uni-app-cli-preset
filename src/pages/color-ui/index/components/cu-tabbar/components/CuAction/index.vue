<!--
 * @Author: cest
 * @Date: 2022-07-03 09:45:31
 * @LastEditTime: 2022-07-10 17:21:32
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/color-ui/index/components/cu-tabbar/components/CuAction/index.vue
 * @Description: tabbar item
-->
<template lang="pug">
.action(@click="changeEventHandler" data-cur="basics")
  .cuIcon-cu-image
    .cu-tabbar__img(:class="isActive?imgClassActive:imgClass")
  .text(:class="isActive?'text-green':'text-gray'")
    | {{text}}
</template>

<script>
export default {
  name: 'CuAction',
  props: {
    // 名字
    text: {
      type: String,
      default: '元素'
    },
    // 是否是当前项激活
    isActive: {
      type: Boolean,
      default: false
    },
    // 图片类名
    imgClass: {
      type: String,
      default: 'basics'
    }
  },
  data: () => ({}),
  computed: {
    // 图片类名 激活的
    imgClassActive() {
      return `${this.imgClass}_cur`
    }
  },
  methods: {
    changeEventHandler(e) {
      console.log('changeEventHandler', e)
      this.$emit('change', e)
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
