/*
 * @Author: zhuanglin qin
 * @Date: 2022-06-10 20:51:43
 * @LastEditors: zhuanglin qin
 * @LastEditTime: 2022-6-14 13:50:15
 * @FilePath: /pages/ticket/myticket/list/list/mixins/backtopMixin
 * @Description: 返回顶部功能
 */
export default {
	data: function() {
		return {
			scrollTop: 0
		}
	},
	methods: {
		// 这个函数只能在 onPageScroll 钩子中调佣
		// onPageScroll(e) {
		// 	// this.scrollTop = e.scrollTop
		// },
		setBacktop(e) {
			this.scrollTop = e.scrollTop
		}
	}
}
