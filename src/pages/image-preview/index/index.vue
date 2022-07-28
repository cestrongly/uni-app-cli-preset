<template>
  <view>
    <view
      @click="goImgList"
      class="top"
    >
      <image :src="picList[0].picPath" />
      <view>{{ picList.length }}张图片</view>
    </view>
    <view class="list">
      虎（学名：Panthera tigris ；英文名：Tiger）： 大型猫科动物；毛色浅黄或棕黄色，满身黑色横纹；头圆、耳短，耳背面黑色，中央有一白斑甚显著；四肢健壮有力；尾粗长，具黑色环纹，尾端黑色。
    </view>
    <view class="list">
      老虎是典型的山地林栖动物，由南方的热带雨林、常绿阔叶林，以至北方的落叶阔叶林和针阔叶混交林，都能很好的生活。在中国东北地区，也常出没于山脊、矮林灌丛和岩石较多或砾石塘等山地，以利于捕食。
    </view>
    <view class="list">
      虎常单独活动，只有在繁殖季节雌雄才在一起生活。无固定巢穴，多在山林间游荡寻食。能游泳。由于林区开发、人口激增，过去偏远地区都已发展为村镇，虎亦常到林区居民点附近觅食。虎多黄昏活动，白天多潜伏休息，没有惊动则很少出来。虎的活动范围较大，在北方日寻食活动范围可达数十公里；在南方西双版纳因食物较多则活动距离较短。
    </view>
    <view class="list" />
    <view class="list" />
    <view class="list" />
  </view>
</template>

<script>
export default {
	data() {
		return {
			picList: []
		};
	},
	onLoad() {
		this.picListInit();
	},
	methods: {
		picListInit() {
			// 图片列表数据初始化
			this.picList = [
				{
					picPath: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1387561229,2277799936&fm=26&gp=0.jpg'
				},
				{
					picPath:
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576129362543&di=8eff78721202517fe7d369f50ec1075d&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171018%2Fc70c7af2fd374f42af70a073dc5115d8.jpeg'
				},
				{
					picPath:
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576129382355&di=ac9a99b185716c7a4119c7e7bf9a548e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170920%2Fc246838e40bf45b39ab0e816ac07d351.jpeg'
				},
				{
					picPath:
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576129396706&di=d2789e97f05722ea77de07249e006048&imgtype=0&src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1703%2F1008-1F3301FU3.jpg'
				},
				{
					picPath:
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576129416485&di=788223df9463b93ce2a75964dd1ad6ca&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F57579d7ed11c73d6858ff723157eaa4b76182dbb35c34-t7mn6b_fw658'
				},
				{
					picPath:
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576129447419&di=dbe09302e4c4eb8cf67994ab78c99e55&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F001DLQZJzy78udj3LE165%26690'
				}
			];
		},
		goImgList() {
			uni.setStorageSync('imgPreviewPicList', this.picList);
			uni.navigateTo({
				url: '/pages/imgList/imgList'
			});
		}
	}
};
</script>

<style scoped lang="scss">
	.list{
		padding: 20rpx 20rpx;
	}
.top {
	width: 100%;
	height: 400rpx;
	position: relative;
	> image {
		width: 100%;
		height: 100%;
	}
	> view {
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		color: #fff;
		align-items: center;
		justify-content: center;
		padding: 0 14rpx;
		height: 40rpx;
		position: absolute;
		bottom: 30rpx;
		right: 30rpx;
		font-size: 30rpx;
		border-radius: 4rpx;
	}
}
</style>
