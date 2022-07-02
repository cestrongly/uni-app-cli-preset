/***
 * @description: removeAt() 方法通过删除现有元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
 * @param {Number} index 数组索引
 * @return {Array} 返回被修改内容后的组数
 * @author: zhuangli qin
 * @example 示例：
 * const months = ['Jan', 'March', 'April', 'June']
 * months.removeAt(3)
 * -> 结果 months ['Jan', 'March', 'April']
 */
Array.prototype['removeAt'] = function(index) {
	const startIndex = index
	// console.log(startIndex)
	if (startIndex !== -1 && startIndex <= this.length) {
		this.splice(startIndex, 1)
	}
	return this
}

/***
 * @description: removeRange(index[,count]) 方法通过删除现有元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
 * @param {Number} index 可选，默认值为0，数组索引
 * @param {Number} count 可选，默认值为1，删除元素个数
 * @return {Array} 返回被修改内容后的组数
 * @author: zhuangli qin
 * @example 示例：
 * const months = ['Jan', 'March', 'April', 'June']
 * months.removeRange(1,2)
 * -> 结果 months ['Jan', 'April']
 */
Array.prototype['removeRange'] = function(index = 0, count = 1) {
	const startIndex = index
	// console.log(startIndex)
	if (startIndex !== -1 && startIndex <= this.length) {
		this.splice(startIndex, count)
	}
	return this
}

/***
 * @description: remove() 方法通过删除现有元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
 * @param {Function} callback 针对数组中的每个元素，都会执行该回调函数，执行时会自动传入下面三个参数：
 * element
 * 当前元素。
 * index
 * 当前元素的索引。
 * array
 * 调用findIndex的数组。
 * @return {Array} 返回被修改内容后的组数
 * @author: zhuangli qin
 * @example 示例：
 * const months = ['Jan', 'March', 'April', 'June']
 * months.remove(item =>{return item === 'April'}) 或者 months.remove(item => item === 'April')
 * -> 结果 months ['Jan', 'March', 'June']
 */
Array.prototype['remove'] = function(callback) {
	const startIndex = this.findIndex(callback)
	// console.log(startIndex)
	if (startIndex !== -1) {
		this.splice(startIndex, 1)
	}
	return this
}
