<!--
 * @Author: cest
 * @Date: 2022-07-12 20:15:54
 * @LastEditTime: 2022-07-12 20:35:45
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/z-paging/common-demo/common-demo.vue
 * @Description: 编辑描述内容
-->
<!-- 普通模式演示(vue) -->
<template lang="pug">
view.content
  z-paging(ref="paging" v-model="dataList" @query="queryList")
    //- 需要固定在顶部不滚动的view放在slot="top"的view中，如果需要跟着滚动，则不要设置slot="top"
    //- 注意！此处的z-tabs为独立的组件，可替换为第三方的tabs，若需要使用z-tabs，请在插件市场搜索z-tabs并引入，否则会报插件找不到的错误
    z-tabs(slot="top" @change="tabChange" :list="tabList")
    //- 如果希望其他view跟着页面滚动，可以放在z-paging标签内
    view.item(v-for="(item,index) in dataList" :key="index" @click="itemClick(item,index)")
      view.item-title {{item.title}}
      view.item-detail {{item.detail}}
      view.item-line
</template>

<script>
import $request from '@/pages/z-paging/http/request'
export default {
  components: {},
  data: () => ({
    // v-model绑定的这个变量不要在分页请求结束中自己赋值！！！
    dataList: [],
    tabList: ['测试1', '测试2', '测试3', '测试4'],
    tabIndex: 0
  }),
  computed: {},
  methods: {
    tabChange(index) {
				this.tabIndex = index;
				// 当切换tab或搜索时请调用组件的reload方法，请勿直接调用：queryList方法！！
				this.$refs.paging.reload();
			},
			queryList(pageNo, pageSize) {
				// 组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用
				// 这里的pageNo和pageSize会自动计算好，直接传给服务器即可
				// 模拟请求服务器获取分页数据，请替换成自己的网络请求
				const params = {
					pageNo,
					pageSize,
					type: this.tabIndex + 1
				}
				$request.queryList(params).then(res => {
					// 将请求的结果数组传递给z-paging
					this.$refs.paging.complete(res.data.list);
				}).catch(res => {
					// 如果请求失败写this.$refs.paging.complete(false);
					// 注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
					// 在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
					this.$refs.paging.complete(false);
				})
			},
			itemClick(item, index) {
				console.log('点击了', item.title);
			}
  },
  watch: {},

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

<style scoped>
.item {
		position: relative;
		height: 150rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0rpx 30rpx;
	}

	.item-detail {
		padding: 5rpx 15rpx;
		border-radius: 10rpx;
		font-size: 28rpx;
		color: white;
		background-color: #007AFF;
	}

	.item-line {
		position: absolute;
		bottom: 0rpx;
		left: 0rpx;
		height: 1px;
		width: 100%;
		background-color: #eeeeee;
	}
</style>
