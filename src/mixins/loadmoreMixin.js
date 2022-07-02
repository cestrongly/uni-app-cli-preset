/**
 * @Author: cest
 * @Date: 2022-06-20 08:11:57
 * @LastEditTime: 2022-06-20 18:28:13
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/mixins/loadmoreMixin.js
 * @Description: u-loadmore 组件的业务处理
 */
export default {
  data: function () {
    return {
      // u-loadmore 组件的属性
      loadmore: {
        status: 'loading', // 可选值 loading | nomore | loadmore
        iconType: 'flower',
        loadText: {
          loadmore: '轻轻上拉',
          loading: '努力加载中',
          nomore: '实在没有了'
        }
      }
    }
  }
}
