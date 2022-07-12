<!--
 * @Author: cest
 * @Date: 2022-07-12 20:02:40
 * @LastEditTime: 2022-07-12 20:29:08
 * @LastEditors: cest
 * @FilePath: /uni-app-cli/src/pages/z-paging/index/index.vue
 * @Description: 编辑描述内容
-->
<template lang="pug">
view.content
  z-paging(ref="paging" refresher-only @onRefresh="onRefresh")
    view(slot="refresher" style="height: 120rpx;display: flex;justify-content: center;align-items: center;")
      img(style="width: 300rpx;height: 60rpx;" src="@/pages/z-paging/static/logo_loading.gif")
    view.demo-list
      view.demo-item(v-for="(item,index) in list" :key="index" @click="itemClick(item)")
        view.demo-item-main
          view.demo-item-title {{ item.title }}
          view.demo-item-subtitle(v-if="item.subTitle.length")
            | {{ item.subTitle }}
          view.demo-item-file
            text(v-if="item.title.indexOf('nvue')===-1")
              | {{ item.file + '.vue' }}
            text(v-else style="background-color: #01c301;")
              | {{ item.file + '.nvue' }}
        image.demo-item-more-img(src="@/pages/z-paging/static/more_icon.png")
</template>

<script>
import { version } from '@/uni_modules/z-paging/package.json'
export default {
  components: {},
  data: () => ({
    list: [
      {
        title: '普通模式演示',
        file: 'common-demo',
        subTitle: ''
      },
      {
        title: '自定义下拉刷新与上拉加载演示',
        file: 'custom-demo',
        subTitle: ''
      },
      {
        title: '滑动切换选项卡演示(标准写法)',
        file: 'swiper-demo',
        subTitle: ''
      },
      {
        title: '滑动切换选项卡演示(简化写法,不推荐)',
        file: 'swiper-simplify-demo',
        subTitle: ''
      },
      {
        title: '使用页面滚动示例',
        file: 'page-default-demo',
        subTitle: ''
      },
      {
        title: '虚拟列表演示',
        file: 'virtual-list-demo',
        subTitle: ''
      },
      {
        title: '滚动吸附效果演示',
        file: 'sticky-demo',
        subTitle: ''
      },
      {
        title: '滑动切换选项卡+吸顶演示①',
        file: 'sticky-swiper-demo',
        subTitle: '上一个tab数据保留，滚动过渡效果不够流畅，具体可点击体验'
      },
      {
        title: '滑动切换选项卡+吸顶演示②',
        file: 'sticky-swiper-next-demo',
        subTitle: '上一个tab数据不保留，滚动过渡效果流畅'
      },
      {
        title: '显示最后更新时间演示',
        file: 'show-update-time-demo',
        subTitle: ''
      },
      {
        title: '自定义导航栏演示',
        file: 'custom-nav-demo',
        subTitle: '使用了uView的自定义导航栏组件'
      },
      {
        title: '聊天记录模式演示',
        file: 'chat-history-demo',
        subTitle: ''
      },
      {
        title: '保证数据一致性演示',
        file: 'consistency-demo',
        subTitle: '将request.js中的loadingTime修改为2000可更直观体验'
      },
      {
        title: 'i18n国际化演示',
        file: 'i18n-demo',
        subTitle: ''
      },
      {
        title: '自定义返回顶部按钮演示',
        file: 'custom-back-to-top-demo',
        subTitle: ''
      },
      {
        title: '基于z-paging封装个性化分页组件演示',
        file: 'my-paging-demo',
        subTitle: '可将重复的配置或者重复插入的slot封装在自定义的分页组件中'
      },
      {
        title: '极简写法演示',
        file: 'minimalism-demo',
        subTitle: '此写法可省略重复的v-model和@query'
      },
      {
        title: '内置列表模式演示',
        file: 'inner-list-demo',
        subTitle: '使用内置for循环渲染list，无需书写v-for，也无需v-model绑定list(不支持字节跳动小程序)'
      }
    ]
  }),
  computed: {},
  methods: {
    // 下拉刷新被触发
    onRefresh() {
      // 以告知z-paging下拉刷新结束，这样才可以开始下一次的下拉刷新
      setTimeout(() => {
        // 1.5秒之后停止刷新动画
        this.$refs.paging.complete()
      }, 1500)
    },
    itemClick(item) {
      uni.navigateTo({
        url: `/pages/z-paging/${item.file}/${item.file}`
      })
    }
  },
  watch: {},

  created() {
    console.log(
      `%c z-paging %c v${version} `,
      'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      'background:#007AFF ;padding: 1px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;'
    )
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

<style scoped>
.demo-item {
  display: flex;
  align-items: center;
  border-bottom: #eeeeee solid 1px;
  padding: 20rpx 30rpx;
}

.demo-item-main {
  flex: 1;
  margin-right: 20rpx;
}

.demo-item-main > view:not(:last-child) {
  margin-bottom: 10rpx;
}

.demo-item-more-img {
  width: 24rpx;
  height: 24rpx;
}

.demo-item-title {
  font-size: 32rpx;
  font-weight: bold;
}

.demo-item-subtitle {
  font-size: 26rpx;
  color: #666666;
}

.demo-item-file > text {
  background-color: #007aff;
  color: white;
  font-size: 24rpx;
  padding: 5rpx 10rpx;
  border-radius: 8rpx;
}

.demo-nvue-tip {
  width: 100%;
  padding: 20rpx;
  color: #aaaaaa;
  font-size: 24rpx;
  text-align: center;
}

.tip-bottom {
  background-color: #007aff;
  color: white;
  padding: 20rpx 0rpx;
  text-align: center;
}
</style>
