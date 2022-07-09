/*
 * @Author: zhuanglin qin
 * @Date: 2022-06-10 20:51:43
 * @LastEditors: zhuanglin qin
 * @LastEditTime: 2022-06-10 20:54:09
 * @FilePath: /pages/ticket/myticket/list/list/mixins/
 * @Description: 工单状态的业务处理
 */
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  data: function () {
    return {}
  },
  computed: {
    // => store: state
    // 工单状态
    ...mapState('application', {
      ticketStatus: 'ticketStatus'
    }),
    ...mapGetters('application', {
      ticketStatusFormat: 'ticketStatusFormat'
    }),
    /***
     * @description: 计算属性，根据工单状态的值设置颜色值，用于设置标签背景颜色。
     * @param {*}
     * @return {*} 返回 颜色值
     * @author: zhuangli qin
     */
    getSticketStatusCustomStyle() {
      return param => {
        let customStyle = ''
        // <!-- 工单状态 -->
        switch (param) {
          case '10':
            customStyle += '#00BFFF;'
            break
          case '20':
            customStyle += 'green;'
            break
          case '30':
            customStyle += 'orange;'
            break
          case '40':
            customStyle += '#82A0B3;'
            break
          case '50':
            customStyle += 'grey;'
            break
          case '60':
            customStyle += 'blue;'
            break
          case '70':
            customStyle += 'purple;'
            break
          case '80':
            customStyle += '#f05654;'
            break
          case '90':
            customStyle += '#E066FF;'
            break
          case '100':
            customStyle += '#FF1493;'
            break
        }
        return customStyle
      }
    }
  },
  methods: {
    ...mapActions('application', {
      asyncGetTicketStatus: 'getTicketStatus'
      // asyncGetTicketPriority: 'getTicketPriority'
    })
  }
}
