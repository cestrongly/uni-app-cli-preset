<template>
  <view>
    <view class="pic_list">
      <view
        @tap="clickPic(y)"
        v-for="(x, y) in picList"
        :key="y"
      >
        <image
          class="light bg-grey"
          :src="x.picPath"
          mode="aspectFit"
        />
      </view>
    </view>
  </view>
</template>

<script>
export default {
	data() {
		return {
			picList: [],
		};
	},
	onLoad(query) {
		// 获取图片列表数据
		this.picList=uni.getStorageSync("imgPreviewPicList");
	},
	onUnload() {
		uni.removeStorageSync("imgPreviewPicList");
		uni.removeStorageSync("currentImgIndex");
	},
	methods: {
		clickPic(index) {
			uni.setStorageSync("currentImgIndex",index);
			// uni.navigateTo({
			// 	url: '/pages/imgPreview/imgPreview'
			// });
			this.$u.route('pages/image-preview/imgPreview/imgPreview')
		}
	}
};
</script>

<style lang="scss" scoped>
.pic_list {
	display: flex;
	flex-flow: row wrap;
	> view {
		flex: 0 0 240rpx;
		height: 240rpx;
		margin: 7.5rpx 0 0 7.5rpx;
		> image {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
