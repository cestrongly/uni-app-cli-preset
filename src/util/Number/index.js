/**
 * @Author: cest
 * @Date: 2022-07-13 10:29:15
 * @LastEditTime: 2022-07-13 10:29:37
 * @LastEditors: cest
 * @FilePath: /dms-app-cli/src/util/Number/index.js
 * @Description: 编辑描述内容
 */

function toPrice(val) {
  if (!val) {
    val = 0
  }

  return val.toFixed(2)
}

function parsePrice(val) {
  if (!val) {
    val = 0
  }

  return val.toFixed(2).split('.')
}

function array_contain(array, obj) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == obj)
      // 如果要求数据类型也一致，这里可使用恒等号===
      return true
  }

  return false
} // 判断当前的规格值 是否可以选，即其他

function props_contain(allProperties, selectedPropObj, key, item, propKeys) {
  let properties = ''
  selectedPropObj[key] = item

  for (let j = 0; j < propKeys.length; j++) {
    properties += propKeys[j] + ':' + selectedPropObj[propKeys[j]] + ';'
  }

  properties = properties.substring(0, properties.length - 1)
  let find = false

  for (let i = 0; i < allProperties.length; i++) {
    if (properties == allProperties[i]) {
      find = true
      break
    }
  }

  return find
}

function parseDiscount(discountRule) {
  if (discountRule == 0) {
    return '满额减'
  } else if (discountRule == 1) {
    return '满件减'
  } else if (discountRule == 2) {
    return '满额折'
  } else if (discountRule == 3) {
    return '满件折'
  } else {
    return ''
  }
}

function parseDiscountMsg(discountRule, needAmount, discount) {
  if (discountRule == 0) {
    return '购满' + needAmount + '元减' + discount + '元'
  } else if (discountRule == 1) {
    return '购满' + needAmount + '件减' + discount + '元'
  } else if (discountRule == 2) {
    return '购满' + needAmount + '元打' + discount + '折'
  } else if (discountRule == 3) {
    return '购满' + needAmount + '件打' + discount + '折'
  } else {
    return ''
  }
}

module.exports = {
  toPrice,
  parsePrice,
  array_contain,
  props_contain,
  parseDiscount,
  parseDiscountMsg
}
