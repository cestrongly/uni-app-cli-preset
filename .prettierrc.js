/**
 * @Author: zhuangli.qin
 * @Date: 2022-06-16 10:55:39
 * @LastEditors: cest
 * @LastEditTime: 2022-07-09 00:29:01
 * @FilePath: /uni-app-cli/.prettierrc.js
 * @Description: prettier 常用配置
 * @Copyright (c) 2022 by cestrmail@163.com by zhuangli.qin, All Rights Reserved.
 */
module.exports = {
  // trailingComma 末尾逗号
  // - none 末尾没有逗号
  // - es5 es5有效的地方保留
  // - all 在可能的地方都加上逗号
  trailingComma: 'none',
  // 缩进字节数
  tabWidth: 2,
  // 缩进不使用tab，使用空格
  useTabs: false,
  // semi是否使用分号，默认true，使用分号
  semi: false,
  // 使用单引号代替双引号
  singleQuote: true,
  // 超过最大值换行
  printWidth: 120,
  // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  arrowParens: 'avoid',
  // bracketSpacing 对象左右两侧需要空格，默认 true
  // true - Example: { foo: bar }.
  // false - Example: {foo: bar}.
  bracketSpacing: true,
  // html 关闭标签换行
  jsxBracketSameLine: false
}
