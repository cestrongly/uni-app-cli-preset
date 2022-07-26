<!--
 * @Author: cest
 * @Date: 2022-07-26 14:52:03
 * @LastEditTime: 2022-07-26 16:22:30
 * @LastEditors: cest
 * @FilePath: /uni-app-cli-preset/src/pages/test/vuex-demo/index.vue
 * @Description: 编辑描述内容
-->
<template lang="pug">
.container.flex.flex-direction
  .text-xxl {{ count }}
  button(@click="clickEventHandler") 点击
  .flex.align-center.justify-center
    .padding-sm.text-bold.text-red {{appTitle}}
    .padding-sm.text-bold.text-Abc {{fullName2}}
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import * as TYPES from '@/store/mutation-types'
import * as MAP from '@/store/maps/index'
import * as VuexDemoMap from '@/store/maps/demo/VuexDemoMap'
export default {
  components: {},
  data: () => ({}),
  computed: {
    // 公共部分的store
    ...mapState([MAP.envVersion]),
    // count() {
    //   return this.$store.state.count
    // }
    ...mapState(VuexDemoMap.NAMESPACED, { count: VuexDemoMap.COUNT, appTitle: VuexDemoMap.APP_TITLE }),

    // fullName2() {
    //   return this.$store.getters.fullName
    // }
    ...mapGetters(VuexDemoMap.NAMESPACED, {
      fullName2: VuexDemoMap.FULL_NAME
    })
  },
  methods: {
    ...mapMutations(VuexDemoMap.NAMESPACED, [VuexDemoMap.INCREMENT]),
    ...mapActions(VuexDemoMap.NAMESPACED, [VuexDemoMap.ASYNC_GET_LIST]),
    clickEventHandler(e) {
      console.log('clickEventHandler e', e)
      // this.$store.commit(TYPES.INCREMENT,10)
      this[VuexDemoMap.INCREMENT](10)
    }
  },
  watch: {},
  created() {
    console.log('created: store', this.$store)
    // this.$store.dispatch('asyncGetList')
    this[VuexDemoMap.ASYNC_GET_LIST]({ pageNum: 1, pageSize: 10 })
    console.log('envVersion', this[MAP.envVersion])
  },

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {}
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
}
</script>

<style scoped></style>
