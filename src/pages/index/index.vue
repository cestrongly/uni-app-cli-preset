<template>
  <view>
    <index @ShowNews="ShowNews"
           v-if="PageCur == 'index'"></index>
    <!-- <search v-if="PageCur == 'search'"></search> -->
    <cases v-if="PageCur == 'cases'"></cases>
    <news v-if="PageCur == 'news'"></news>
    <me v-if="PageCur == 'me'"></me>

    <view class="box">
      <view class="cu-bar tabbar bg-white shadow foot">
        <view class="action"
              @click="NavChange"
              data-cur="index">
          <view class="cuIcon-cu-image">
            <image v-if="PageCur == 'index'"
                   src="/static/tabBar/index_cur.png"></image>
            <image v-if="PageCur != 'index'"
                   src="/static/tabBar/index.png"></image>
          </view>
          <view :class="PageCur == 'index' ? 'color_main' : 'text-gray'">首页</view>
        </view>

        <!-- <view class="action" @click="NavChange" data-cur="search">
					<view class='cuIcon-cu-image'>
						<image v-if="PageCur=='search'" src="/static/tabBar/shop_cur.png"></image>
						<image v-if="PageCur != 'search'" src="/static/tabBar/shop.png"></image>
					</view>
					<view :class="PageCur=='search'?'color_main':'text-gray'">我的工单</view>
				</view> -->

        <view @click="NavChange"
              class="action text-gray add-action"
              data-cur="cases">
          <image class="logo_btn"
                 mode="widthFix"
                 src="/static/wxiu.png"></image>
          <view :class="PageCur == 'cases' ? 'color_main' : 'text-gray'">提交</view>
        </view>

        <!-- <view class="action" @click="NavChange" data-cur="news">
					<view class="cuIcon-cu-image">
						<view class="cu-tag badge">{{ message }}</view>
						<image v-if="PageCur == 'news'" src="/static/tabBar/order_cur.png"></image>
						<image v-if="PageCur != 'news'" src="/static/tabBar/order.png"></image>
					</view>
					<view :class="PageCur == 'news' ? 'color_main' : 'text-gray'">咨询公告</view>
				</view> -->

        <view class="action"
              @click="NavChange"
              data-cur="me">
          <view class="cuIcon-cu-image">
            <view class="cu-tag badge">
              <!-- 红点 -->
            </view>
            <image v-if="PageCur == 'me'"
                   src="/static/tabBar/me_cur.png"></image>
            <image v-if="PageCur != 'me'"
                   src="/static/tabBar/me.png"></image>
          </view>
          <view :class="PageCur == 'me' ? 'color_main' : 'text-gray'">我的</view>
        </view>
      </view>
    </view>
    <!-- BackTop 返回顶部  -->
    <u-back-top :scroll-top="scrollTop"></u-back-top>
  </view>
</template>

<script>
//首页
import index from './components/home'
// import search from './search.vue' //服务评估
// 工单提交
import cases from './components/main'
//知识库
import news from './components/news'
//我的信息
import me from './components/me'
// 返回顶部的业务处理
import backtopMixin from '@/mixins/backtopMixin'
export default {
  // 混入业务
  mixins: [backtopMixin],
  components: {
    index,
    // search,
    cases,
    news,
    me
  },
  data () {
    return {
      PageCur: 'index',
      message: '2',
      openId: '',
      access_token: '',
      tip: '我是提示',
      duration: 1
    }
  },
  // 分享小程序
  onShareAppMessage (res) {
    return {
      title: '工单提交app'
    }
  },
  onLoad () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  onShareTimeline () {
    return {
      title: '工单提交app'
    }
  },
  methods: {
    ShowNews (e) {
      console.log(e)
      this.PageCur = e
    },
    NavChange: function (e) {
      console.log(e.currentTarget.dataset.cur)

      this.PageCur = e.currentTarget.dataset.cur

      if (this.PageCur == 'index') {
        // document.title = '首页'
      } else if (this.PageCur == 'component') {
        // document.title = '积分商城'
      } else if (this.PageCur == 'cases') {
        // document.title = '宅家学'
      } else if (this.PageCur == 'news') {
        // document.title = '文章资讯'
      } else if (this.PageCur == 'me') {
        // document.title = '个人中心'
      }

      // uni.setStorage({
      // 	key: 'PageCur',
      // 	data: this.PageCur,
      // 	success: function() {
      // 		console.log('保存成功！');
      // 	}
      // });
    },
    NavChange_xd: function () {
      uni.navigateTo({
        url: 'publish',
        animationType: 'slide-in-bottom',
        animationDuration: 200
      })
    }
  },
  onPageScroll (e) {
    this.scrollTop = e.scrollTop
  }
}
</script>

<style lang="scss">
.color_main {
  color: #000000;
  font-weight: 900;
}
.box {
  margin: 20rpx 0;
}
.box view.cu-bar {
  margin-top: 20rpx;
}

.logo_btn {
  width: 38 * 2rpx;
  height: 38 * 2rpx;
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  top: -40rpx;
  left: 0rpx;
  right: 0;
  margin: auto;
  padding: 0;
  background-color: aquamarine;
}
.cu-bar.tabbar .action.add-action {
  padding-top: 56rpx !important;
}
</style>
