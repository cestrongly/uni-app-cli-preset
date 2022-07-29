<!--
 * @Author: cest
 * @Date: 2022-07-28 09:41:39
 * @LastEditTime: 2022-07-28 10:15:15
 * @LastEditors: cest
 * @FilePath: /dms-app-cli/src/components/u-modal-warning/u-modal-warning.vue
 * @Description: Modal 模态框 警告 - 基于 uView2.x u-modal 扩展的警告提示窗口
-->
<template lang="pug">
.u-modal-warning
  u-modal(
    :show="show"
    :title="title"
    :showCancelButton="true"
    :buttonReverse="true"
    @confirm="confirmEventHandler"
    @cancel="cancelEventHandler"
    @close="closeEventHandler")
    view.slot-content
      .text {{content}}
</template>

<script>
export default {
  props: {
    show: {
      type: [Boolean, String],
      default: true
    },
    title: {
      type: String,
      default: '警告'
    },
    content: {
      type: String,
      default: '确定删除选择的数据吗'
    }
  },
  data: () => ({}),
  computed: {},
  methods: {
    confirmEventHandler(e){
      console.log('confirmEventHandler e',e)
    },
    cancelEventHandler(e) {
       console.log('cancelEventHandler e',e)
    },
    closeEventHandler(e) {
       console.log('closeEventHandler e',e)
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

<style scoped></style>
