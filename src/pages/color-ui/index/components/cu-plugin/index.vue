<!--
 * @Author: cest
 * @Date: 2022-07-04 20:18:12
 * @LastEditTime: 2022-07-28 11:32:20
 * @LastEditors: cest
 * @FilePath: /dms-app-cli/src/pages/color-ui/index/components/cu-plugin/index.vue
 * @Description: 插件扩展
-->
<template lang="pug">
scroll-view.page.bg-black(scroll-y)
  cu-custom
    block(slot="content")
      img.animation-fade(
        src="@/pages/color-ui/static/cjkz.png"
        mode="aspectFill"
        style="width: 240upx; height: 60upx")
  .cu-card
    .cu-item.shadow-blur.animation-show(
      :style="[{ animation: 'show ' + ((index + 1) * 0.2 + 1) + 's 1' }]"
      @tap="toChild"
      :data-url="item.url"
      v-for="(item, index) in list"
      :key="index"
    )
      img.img-bg(:src="item.img")
      .cardTitle {{ item.title }}
  .cu-tabbar-height
</template>

<script>
export default {
  props: {},
  data() {
    return {
      // StatusBar: this.StatusBar,
      // CustomBar: this.CustomBar,
      list: [
        {
          title: '索引列表',
          url: '../plugin/indexes',
          img: '/pages/color-ui/static/nav-list-bg.png'
        },
        {
          title: '微动画',
          url: '../plugin/animation',
          img: '/pages/color-ui/static/nav-list-bg.png'
        },
        {
          title: '全屏抽屉',
          url: '../plugin/drawer',
          img: '/pages/color-ui/static/nav-list-bg.png'
        },
        {
          title: '垂直导航',
          url: '../plugin/verticalnav',
          img: '/pages/color-ui/static/nav-list-bg.png'
        }
      ]
    }
  },
  computed: {},
  methods: {},
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

<style lang="scss" scoped>
.page {
  height: 100vh;
}

.cu-item {
  position: relative;
  background-color: var(--black);
  .img-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}

::v-deep .tabbar {
  background-color: var(--black);
}

.cardTitle {
  color: #fff;
  padding: 90upx 60upx;
  font-size: 40upx;
  font-weight: 300;
  transform: skew(-10deg, 0deg);
  position: relative;
  text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3);
}

.cardTitle::before {
  content: '';
  position: absolute;
  width: 60upx;
  height: 6upx;
  border-radius: 20upx;
  background-color: #fff;
  display: block;
  top: 60upx;
  left: 50upx;
  transform: skew(10deg, 0deg);
}

.cardTitle::after {
  content: '';
  position: absolute;
  width: 140upx;
  border-radius: 6upx;
  height: 24upx;
  background-color: #fff;
  display: block;
  bottom: 76upx;
  left: 90upx;
  transform: skew(10deg, 0deg);
  opacity: 0.1;
}
</style>
