(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test-change-theme-change-theme"],{"08d8":function(t,e,n){"use strict";n.r(e);var i=n("0c26"),o=n("3b83");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("8ff1");var r,d=n("f0c5"),u=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"52d47a9b",null,!1,i["a"],r);e["default"]=u.exports},"0c26":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uLoadingIcon:n("b707").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-switch",class:[t.disabled&&"u-switch--disabled"],style:[t.switchStyle,t.$u.addStyle(t.customStyle)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-switch__bg",style:[t.bgStyle]}),n("v-uni-view",{ref:"u-switch__node",staticClass:"u-switch__node",class:[t.value&&"u-switch__node--on"],style:[t.nodeStyle]},[n("u-loading-icon",{attrs:{show:t.loading,mode:"circle",timingFunction:"linear",color:t.value?t.activeColor:"#AAABAD",size:.6*t.size}})],1)],1)},a=[]},1670:function(t,e,n){var i=n("b878");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("13d385b2",i,!0,{sourceMap:!1,shadowMode:!1})},"3b83":function(t,e,n){"use strict";n.r(e);var i=n("d37e"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"41d8":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"u-loading-icon",class:[t.vertical&&"u-loading-icon--vertical"],style:[t.$u.addStyle(t.customStyle)]},[t.webviewHide?t._e():n("v-uni-view",{ref:"ani",staticClass:"u-loading-icon__spinner",class:["u-loading-icon__spinner--"+t.mode],style:{color:t.color,width:t.$u.addUnit(t.size),height:t.$u.addUnit(t.size),borderTopColor:t.color,borderBottomColor:t.otherBorderColor,borderLeftColor:t.otherBorderColor,borderRightColor:t.otherBorderColor,"animation-duration":t.duration+"ms","animation-timing-function":"semicircle"===t.mode||"circle"===t.mode?t.timingFunction:""}},["spinner"===t.mode?t._l(t.array12,(function(t,e){return n("v-uni-view",{key:e,staticClass:"u-loading-icon__dot"})})):t._e()],2),t.text?n("v-uni-text",{staticClass:"u-loading-icon__text",style:{fontSize:t.$u.addUnit(t.textSize),color:t.textColor}},[t._v(t._s(t.text))]):t._e()],1):t._e()},a=[]},"500e":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={props:{loading:{type:Boolean,default:uni.$u.props.switch.loading},disabled:{type:Boolean,default:uni.$u.props.switch.disabled},size:{type:[String,Number],default:uni.$u.props.switch.size},activeColor:{type:String,default:uni.$u.props.switch.activeColor},inactiveColor:{type:String,default:uni.$u.props.switch.inactiveColor},value:{type:[Boolean,String,Number],default:uni.$u.props.switch.value},activeValue:{type:[String,Number,Boolean],default:uni.$u.props.switch.activeValue},inactiveValue:{type:[String,Number,Boolean],default:uni.$u.props.switch.inactiveValue},asyncChange:{type:Boolean,default:uni.$u.props.switch.asyncChange},space:{type:[String,Number],default:uni.$u.props.switch.space}}};e.default=i},"5eb2":function(t,e,n){var i=n("6074");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("9228e09c",i,!0,{sourceMap:!1,shadowMode:!1})},6074:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-d78e66de], uni-scroll-view[data-v-d78e66de], uni-swiper-item[data-v-d78e66de]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-loading-icon[data-v-d78e66de]{flex-direction:row;align-items:center;justify-content:center;color:#c8c9cc}.u-loading-icon__text[data-v-d78e66de]{margin-left:4px;color:#606266;font-size:14px;line-height:20px}.u-loading-icon__spinner[data-v-d78e66de]{width:30px;height:30px;position:relative;box-sizing:border-box;max-width:100%;max-height:100%;-webkit-animation:u-rotate-data-v-d78e66de 1s linear infinite;animation:u-rotate-data-v-d78e66de 1s linear infinite}.u-loading-icon__spinner--semicircle[data-v-d78e66de]{border-width:2px;border-color:transparent;border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-style:solid}.u-loading-icon__spinner--circle[data-v-d78e66de]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-width:2px;border-top-color:#e5e5e5;border-right-color:#e5e5e5;border-bottom-color:#e5e5e5;border-left-color:#e5e5e5;border-style:solid}.u-loading-icon--vertical[data-v-d78e66de]{flex-direction:column}[data-v-d78e66de]:host{font-size:0;line-height:1}.u-loading-icon__spinner--spinner[data-v-d78e66de]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.u-loading-icon__text[data-v-d78e66de]:empty{display:none}.u-loading-icon--vertical .u-loading-icon__text[data-v-d78e66de]{margin:6px 0 0;color:#606266}.u-loading-icon__dot[data-v-d78e66de]{position:absolute;top:0;left:0;width:100%;height:100%}.u-loading-icon__dot[data-v-d78e66de]:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.u-loading-icon__dot[data-v-d78e66de]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes u-rotate-data-v-d78e66de{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-rotate-data-v-d78e66de{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},"82ba":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a630"),n("3ca3");var o=i(n("e151")),a={name:"u-loading-icon",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var t=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:t:"transparent"}},watch:{show:function(t){}},mounted:function(){this.init()},methods:{init:function(){setTimeout((function(){}),20)},addEventListenerToWebview:function(){var t=this,e=getCurrentPages(),n=e[e.length-1],i=n.$getAppWebview();i.addEventListener("hide",(function(){t.webviewHide=!0})),i.addEventListener("show",(function(){t.webviewHide=!1}))}}};e.default=a},8565:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{pageName:"切换主题",value:!1,theme:"default"}},created:function(){},methods:{asyncChangeEventHandler:function(t){this.value=t,this.value?(this.theme="dark",uni.setBackgroundColor({backgroundColor:"#222222",backgroundColorTop:"#222222",backgroundColorBottom:"#222222"}),uni.setNavigationBarColor({backgroundColor:"#ffffff",frontColor:"#ffffff"}),uni.setBackgroundTextStyle({textStyle:"light"})):(this.theme="default",uni.setBackgroundColor({backgroundColor:"#ffffff",backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"}),uni.setNavigationBarColor({backgroundColor:"#222222",frontColor:"#ffffff"}),uni.setBackgroundTextStyle({textStyle:"dark"}))}}};e.default=i},"8ff1":function(t,e,n){"use strict";var i=n("1670"),o=n.n(i);o.a},"91be":function(t,e,n){"use strict";var i=n("5eb2"),o=n.n(i);o.a},9578:function(t,e,n){"use strict";n.r(e);var i=n("82ba"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},a95c:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uSwitch:n("08d8").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-page bg-color",class:t.theme},[n("cu-custom",{attrs:{"bg-color":"bg-gradual-blue","is-back":!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.pageName))])],2),n("v-uni-view",{staticClass:"u-block"},[n("v-uni-view",{staticClass:"u-block__title"},[t._v("切换主题")]),n("v-uni-view",{staticClass:"u-block__section"},[n("u-switch",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.asyncChangeEventHandler.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(t._s(t.value))],1)],1)],1)},a=[]},b707:function(t,e,n){"use strict";n.r(e);var i=n("41d8"),o=n("9578");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("91be");var r,d=n("f0c5"),u=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"d78e66de",null,!1,i["a"],r);e["default"]=u.exports},b878:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-52d47a9b], uni-scroll-view[data-v-52d47a9b], uni-swiper-item[data-v-52d47a9b]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-switch[data-v-52d47a9b]{\ndisplay:flex;\nflex-direction:row;box-sizing:border-box;position:relative;background-color:#fff;border-width:1px;border-radius:100px;transition:background-color .4s;border-color:rgba(0,0,0,.12);border-style:solid;justify-content:flex-end;align-items:center;overflow:hidden}.u-switch__node[data-v-52d47a9b]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:100px;background-color:#fff;border-radius:100px;box-shadow:1px 1px 1px 0 rgba(0,0,0,.25);transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.4s;transition-timing-function:cubic-bezier(.3,1.05,.4,1.05)}.u-switch__bg[data-v-52d47a9b]{position:absolute;border-radius:100px;background-color:#fff;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.4s;border-top-left-radius:0;border-bottom-left-radius:0;transition-timing-function:ease}.u-switch--disabled[data-v-52d47a9b]{opacity:.6}',""]),t.exports=e},d37e:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var o=i(n("500e")),a={name:"u-switch",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],watch:{value:{immediate:!0,handler:function(t){t!==this.inactiveValue&&t!==this.activeValue&&uni.$u.error("v-model绑定的值必须为inactiveValue、activeValue二者之一")}}},data:function(){return{bgColor:"#ffffff"}},computed:{isActive:function(){return this.value===this.activeValue},switchStyle:function(){var t={};return t.width=uni.$u.addUnit(2*this.size+2),t.height=uni.$u.addUnit(Number(this.size)+2),this.customInactiveColor&&(t.borderColor="rgba(0, 0, 0, 0)"),t.backgroundColor=this.isActive?this.activeColor:this.inactiveColor,t},nodeStyle:function(){var t={};t.width=uni.$u.addUnit(this.size-this.space),t.height=uni.$u.addUnit(this.size-this.space);var e=this.isActive?uni.$u.addUnit(this.space):uni.$u.addUnit(this.size);return t.transform="translateX(-".concat(e,")"),t},bgStyle:function(){var t={};return t.width=uni.$u.addUnit(2*Number(this.size)-this.size/2),t.height=uni.$u.addUnit(this.size),t.backgroundColor=this.inactiveColor,t.transform="scale(".concat(this.isActive?0:1,")"),t},customInactiveColor:function(){return"#fff"!==this.inactiveColor&&"#ffffff"!==this.inactiveColor}},methods:{clickHandler:function(){var t=this;if(!this.disabled&&!this.loading){var e=this.isActive?this.inactiveValue:this.activeValue;this.asyncChange||this.$emit("input",e),this.$nextTick((function(){t.$emit("change",e)}))}}}};e.default=a},e151:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={props:{show:{type:Boolean,default:uni.$u.props.loadingIcon.show},color:{type:String,default:uni.$u.props.loadingIcon.color},textColor:{type:String,default:uni.$u.props.loadingIcon.textColor},vertical:{type:Boolean,default:uni.$u.props.loadingIcon.vertical},mode:{type:String,default:uni.$u.props.loadingIcon.mode},size:{type:[String,Number],default:uni.$u.props.loadingIcon.size},textSize:{type:[String,Number],default:uni.$u.props.loadingIcon.textSize},text:{type:[String,Number],default:uni.$u.props.loadingIcon.text},timingFunction:{type:String,default:uni.$u.props.loadingIcon.timingFunction},duration:{type:[String,Number],default:uni.$u.props.loadingIcon.duration},inactiveColor:{type:String,default:uni.$u.props.loadingIcon.inactiveColor}}};e.default=i},eef8:function(t,e,n){"use strict";n.r(e);var i=n("8565"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},fd74:function(t,e,n){"use strict";n.r(e);var i=n("a95c"),o=n("eef8");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,d=n("f0c5"),u=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=u.exports}}]);