<!--
* @Author: zhuangli qin
* @Date: 2022-6-14 16:08:39
 * @LastEditors: cest
 * @LastEditTime: 2022-07-02 13:33:46
 * @FilePath: /uni-app-cli/src/pages/index/components/home.vue
* @Description: 首页
-->
<template lang="pug">
view.u-page(style='padding-bottom: 70px')
  //- custom header
  cu-custom(bgColor='bg-gradual-blue', :isBack='false')
    block(slot='backText')
    block(slot='right', style='padding-left: 20rpx')
      text.text-df {{ getAppTitle }}
      text.text-xs {{ getEnvVersion }}
      //-| 欢迎！{{ deptName }} {{ nickName }}
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
    }
  },
  computed: {

  },
  watch: {},
  created () {

  },
  mounted () {

  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.swiper-box {
  flex: 1;
}

.swiper-item {
  height: 100%;
}

.message-box {
  width: 100%;
  height: 120rpx;
  // background: url(https://zhoukaiwen.com/img/icon/clock.gif) #FFFFFF;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-size: 100rpx 100rpx;
  background-position: 15rpx 10rpx;
  margin: 0rpx 0rpx 10rpx 0rpx;
  padding-left: 130rpx;

  .message-tltle {
    color: #797979;
    height: 65rpx;
    line-height: 70rpx;
    // font-weight: 600;
    font-size: 28rpx;
  }

  .message-content {
    color: #9a9a9a;

    span {
      background-color: #c30a00;
      color: #ffffff;
      padding: 2rpx 8rpx;
      border-radius: 8rpx;
      margin-right: 8rpx;
    }
  }
}

/*scroll-view外层*/
.skill-sequence-panel-content-wrapper {
  position: relative;
  white-space: nowrap;
  padding: 10rpx 0 10rpx 10rpx;
}

/*左右渐变遮罩*/
.hide-content-box {
  position: absolute;
  top: 0;
  height: 100%;
  width: 10px;
  z-index: 2;
}

.hide-content-box-left {
  left: 0;
  background-image: linear-gradient(to left, rgba(255, 255, 255, 0), #f3f3f3 60%);
}

.hide-content-box-right {
  right: 0;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #f3f3f3 60%);
}

.kite-classify-scroll {
  width: 100%;
  height: 284rpx;
  overflow: hidden;
  white-space: nowrap;
}

.kite-classify-cell {
  display: inline-block;
  width: 266rpx;
  height: 266rpx;
  margin-right: 20rpx;
  background-color: #ffffff;
  border-radius: 10rpx;
  overflow: hidden;
  box-shadow: 2px 2px 3px rgba(26, 26, 26, 0.2);
}

.nav-li {
  padding: 40rpx 30rpx;
  width: 100%;
  background-image: url(https://s1.ax1x.com/2020/06/27/NyU04x.png);
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
}

.nav-name {
  font-size: 28rpx;
  text-transform: Capitalize;
  margin-top: 20rpx;
  position: relative;
}

.nav-name::before {
  content: '';
  position: absolute;
  display: block;
  width: 40rpx;
  height: 6rpx;
  background: #fff;
  bottom: 0;
  right: 0;
  opacity: 0.5;
}

.nav-name::after {
  content: '';
  position: absolute;
  display: block;
  width: 100rpx;
  height: 1px;
  background: #fff;
  bottom: 0;
  right: 40rpx;
  opacity: 0.3;
}

.nav-content {
  width: 100%;
  padding: 15rpx;
  display: inline-block;
  overflow-wrap: break-word;
  white-space: normal;
  font-size: 24rpx;
}

.nav-btn {
  width: 200rpx;
  height: 60rpx;
  margin: 8rpx auto;
  text-align: center;
  line-height: 60rpx;
  border-radius: 10rpx;
}

.bg-index1 {
  background-color: rgb(229, 131, 8);
  color: #fff;
}

.bg-index2 {
  background-color: rgb(220, 87, 18);
  color: #fff;
}

.bg-index3 {
  background-color: rgb(244, 208, 0);
  color: #fff;
}

.bg-index4 {
  background-color: rgb(182, 194, 154);
  color: #fff;
}

.bg-index5 {
  background-color: rgb(138, 151, 123);
  color: #fff;
}

.bg-index6 {
  background-color: #7fd02b;
  color: #fff;
}

.item-name {
  margin-bottom: 15rpx;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>
