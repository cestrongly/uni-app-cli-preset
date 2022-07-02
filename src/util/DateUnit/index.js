/**
 * @Author: cest
 * @Date: 2022-06-30 14:37:04
 * @LastEditTime: 2022-06-30 15:01:30
 * @LastEditors: cest
 * @FilePath: /cedo-app-cli/src/util/DateUnit/index.js
 * @Description: 转换时间单位
 */

/*
# DateUnit 把时间转换成有单位的字符串

  - 方法： humanize - 转换方法，
    参数：毫秒 - Number 类型
    返回值： - String 类型 `刚刚`|`x[秒、分、时、天、月、年]前`

  - 方法： format - 转换方法，
    参数：日期字符串 - 格式为 yyyy-mm-dd HH:MM:ss
    返回值： - String 类型 `刚刚`|`x[秒、分、时、天、月、年]前`

  - 示例：

    import DateUnit from '...'

    DateUnit.humanize(100) // -> '刚刚'
    DateUnit.humanize(1000) // -> '1秒前'
    DateUnit.humanize(100000) // -> '1分前'

*/

 export default {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},

	humanize: function(milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function(dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};
