<!--
 * @Author: cest
 * @Date: 2022-08-17 16:02:35
 * @LastEditTime: 2022-08-17 16:19:41
 * @LastEditors: cest
 * @FilePath: /docs/stylus/Stylus.md
 * @Description: 编辑描述内容
-->
# Stylus

## Stylus - 富有表现力的、动态的、健壮的CSS

### CSS需要有个巴神

下面中规中矩的CSS代码是否看得眼睛生茧了？

```css
body {
  font: 12px Helvetica, Arial, sans-serif;
}
a.button {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
```

如果我们让花括号卖锅

```stylus
body
  font: 12px Helvetica, Arial, sans-serif;
  
a.button
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
```  

又或者是分号酱油

```stylus
body
  font: 12px Helvetica, Arial, sans-serif
  
a.button
  -webkit-border-radius: 5px
  -moz-border-radius: 5px
  border-radius: 5px
```
  
冒号，你妈叫你回家吃饭

```stylus
body
  font 12px Helvetica, Arial, sans-serif
  
a.button
  -webkit-border-radius 5px
  -moz-border-radius 5px
  border-radius 5px
```  

来点干货

```stylus
border-radius()
  -webkit-border-radius arguments
  -moz-border-radius arguments
  border-radius arguments
  
body
  font 12px Helvetica, Arial, sans-serif
  
a.button
  border-radius(5px)
```
  
明显的混合书写又如何？

```stylus
border-radius()
  -webkit-border-radius arguments
  -moz-border-radius arguments
  border-radius arguments
  
body
  font 12px Helvetica, Arial, sans-serif
  
a.button
  border-radius 5px
```
  
创建与分享

```stylus
@import 'vendor'

body
  font 12px Helvetica, Arial, sans-serif
  
a.button
  border-radius 5px
```
  
甚至是语言函数

```stylus
sum(nums)
  sum = 0
  sum += n for n in nums
  
sum(1 2 3 4)
// => 10

```

如果所有都是可选的又将怎样？

```stylus
fonts = helvetica, arial, sans-serif

body {
  padding: 50px;
  font: 14px/1.4 fonts;
}
```

关于stylus更多信息（如文档以及使用示例打包下载-英文）可以去[GitHub](https://github.com/learnboost/stylus)查看。

## Stylus的特征

- 冒号可选
- 分号可选
- 逗号可选
- 括号可选
- 变量
- 插值
- 混合书写
- 算术
- 强制类型转换
- 动态导入
- 条件
- 迭代
- 嵌套选择
- 父级参考
- 变量函数调用
- 词法作用域
- 内置函数(>25)
- 内部语言函数
- 压缩可选
- 图像内联可选
- 可执行Stylus
- 健壮的错误报告
- 单行和多行注释
- CSS字面量
- 字符转义
- TextMate捆绑
- 以及其他更多
