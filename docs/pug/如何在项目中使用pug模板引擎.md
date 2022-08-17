<!--
 * @Author: cest
 * @Date: 2022-08-17 04:46:01
 * @LastEditTime: 2022-08-17 15:38:40
 * @LastEditors: cest
 * @FilePath: /docs/pug/如何在项目中使用pug模板引擎.md
 * @Description: 编辑描述内容
-->

# 如何在项目中使用 pug 模板引擎

![pug](./pug-logo.svg 'pug')

## why pug

pug 是一套外观优雅并且功能丰富的模板引擎，以前叫做 jade。目前，越来越多的公司和开发者使用 pug 取代 html 作为模板语言。那么它有什么好处呢？

1. **无需结束标签**

   在 html 中，几乎每个标签都需要写相应的结束标签，这既耗费时间和精力又使代码更加冗长，而且万一忘了写结束标签会导致不可预期又难以定位的错误。相比之下，pug 没有结束标签，代码更加简洁高效。

2. 强制缩进

   强制缩进有人喜欢有人不喜欢，但是它带来的好处却是无可置疑的：它使得团队中所有人的风格都统一了起来，使得阅读别人的代码不再那么恐怖，让所有人都养成了缩进代码的好习惯，也减少了因为代码格式化产生的冲突等问题。

3. 代码复用和维护

   pug 中的 include 功能让我们可以不再一遍又一遍地写相同的代码，如头部引用和组件模板等。遇到要修改时也不用一个又一个地去搜索和修改每一个地方，只需修改一个地方一次。

4. 标签写法与CSS相同

   pug 中的标签的写法与 CSS 中的选择器相同，因此写 CSS 时更加方便，可以直接拷贝 tag 作为选择器编写样式。

## 使用

`template` 模板指定`lang`为 `pug`

```html
<template lang="pug">
<template>
```

### 语法说明

#### 元素选择器(或组件)

```html
<template lang="pug">
div
  YourComponent 自定义组件
<template>
```

output:

```html
<template>
<div>
  <YourComponent>自定义组件</YourComponent>  
</div>
<template>
```

#### id 选择器

```html
<template lang="pug">
#container
  #header
  #body
  #footer
<template>
```

output:

```html
<template>
<div id="container">
  <div id="header"></div>
  <div id="body"></div> 
  <div id="footer"></div>   
</div>
<template>
```

#### 类选择器

```html
<template lang="pug">
.container
  .header
  .body
  .footer
<template>
```

output:

```html
<template>
<div class="container">
  <div class="header"></div>
  <div class="body"></div> 
  <div class="footer"></div>   
</div>
<template>
```

#### 属性 Attribute

```html
<template lang="pug">
div  
  a(href='baidu.com') 百度
  a(class='button' href='baidu.com') 百度
<template>
```

output:

```html
<template>
<div>
  <a href='baidu.com'>百度</a>
  <a class='button' href='baidu.com'>百度</a>  
</div>
<template>
```

如果您有很多属性，您可以把它们分几行写：

```html
<template lang="pug">
input(
  type='checkbox'
  name='agreement'
  checked
)
<template>
```

页面使用的场景

```html
<template lang="pug">
view.content
  z-paging(ref="paging" v-model="dataList" @query="queryList")
    //- 需要固定在顶部不滚动的view放在slot="top"的view中，如果需要跟着滚动，则不要设置slot="top"
    //- 注意！此处的z-tabs为独立的组件，可替换为第三方的tabs，若需要使用z-tabs，请在插件市场搜索z-tabs并引入，否则会报插件找不到的错误
    z-tabs(slot="top" @change="tabChange" :list="tabList")
    //- 如果希望其他view跟着页面滚动，可以放在z-paging标签内
    view.item(v-for="(item,index) in dataList" :key="index" @click="itemClick(item,index)")
      view.item-title {{item.title}}
      view.item-detail {{item.detail}}
      view.item-line
</template>
```

output:

```html
<template>
  <view class="content">
    <z-paging
      ref="paging"
      v-model="dataList"
      @query="queryList"
    >
      <!--  需要固定在顶部不滚动的view放在slot="top"的view中，如果需要跟着滚动，则不要设置slot="top" --><!--  注意！此处的z-tabs为独立的组件，可替换为第三方的tabs，若需要使用z-tabs，请在插件市场搜索z-tabs并引入，否则会报插件找不到的错误 --><z-tabs
        slot="top"
        @change="tabChange"
        :list="tabList"
      /><!--  如果希望其他view跟着页面滚动，可以放在z-paging标签内 --><view
        class="item"
        v-for="(item,index) in dataList"
        :key="index"
        @click="itemClick(item,index)"
      >
        <view class="item-title">
          {{ item.title }}
        </view><view class="item-detail">
          {{ item.detail }}
        </view><view class="item-line" />
      </view>
    </z-paging>
  </view>
</template>
```

[了解更多](https://pugjs.org/zh-cn/api/getting-started.html)
