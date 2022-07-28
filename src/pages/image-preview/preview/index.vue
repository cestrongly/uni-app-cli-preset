<!--
 * @Author: cest
 * @Date: 2022-07-05 08:53:27
 * @LastEditTime: 2022-07-26 09:51:40
 * @LastEditors: cest
 * @FilePath: /dms-app-cli/src/pages/image-preview/preview/index.vue
 * @Description: 图片预览
-->
<template lang="pug">
view
  NavBar(
      showBack="true"
      title="图片预览")
  view.mask
    swiper.my_swiper(
      @change="changeSwiperEventHandler"
      :current="current"
      :circular="circular"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :duration="duration"
    )
      swiper-item(v-for="(x, y) in list" :key="y")
        // <view class="bg_img" :style="{ backgroundImage: 'url('+x.picPath+')'}"></view>
        view.bg_img(:style="{ backgroundImage: 'url(' + x.url + ')' }")
  view.page(v-if="list.length > 0")
    | {{ current + 1 }} / {{ list.length }}
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      list: [],
      indicatorDots: false,
      autoplay: false,
      duration: 500,
      circular: true,
      current: 0
    }
  },
  methods: {
    _initPage() {
      // 获取图片索引
      this.current = uni.getStorageSync('CurrentImageIndex')
      // 获取图片列表
      this.list = uni.getStorageSync('PreviewImageList')
    },
    changeSwiperEventHandler(e) {
      this.current = e.target.current
    }
  },
  created() {
    this._initPage()
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: fixed;
  z-index: 6;
  color: #fff;
  bottom: 20rpx;
  text-align: center;
  width: 100%;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  z-index: 5;
  align-items: stretch;
  > .my_swiper {
    width: 100%;
    height: 100%;
    .bg_img {
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 100%;
    }
  }
}

.pic_list {
  display: flex;
  flex-flow: row wrap;
  > view {
    flex: 0 0 33.3vw;
    height: 33.3vw;
    padding: 1vw;
    > image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
