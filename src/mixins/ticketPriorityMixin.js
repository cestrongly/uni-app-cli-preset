/*
 * @Author: zhuanglin qin
 * @Date: 2022-06-10 20:51:43
 * @LastEditors: zhuanglin qin
 * @LastEditTime: 2022-06-10 20:54:09
 * @FilePath: /pages/ticket/myticket/list/list/mixins/ticketPriorityMixin
 * @Description: 工单优先级状态的业务处理
 */
import {
	mapState,
	mapGetters,
	mapMutations,
	mapActions
} from 'vuex'
export default {
	data: function() {
		return {}
	},
	computed: {
		
		// => store: getters
		...mapGetters('application', {
			ticketPriorityFormat: 'ticketPriorityFormat'
		})
		
	},
	methods: {
		...mapActions('application', {
			asyncGetTicketPriority: 'getTicketPriority'
		}),
	}
}
