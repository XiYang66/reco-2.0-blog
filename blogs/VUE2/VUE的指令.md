---
title: VUE的指令
date: 2022-7-19
autoSort: 19
tags:
 - VUE2
categories: 
 - VUE2
---

## 常用指令

### v-if

> 用法：`<h1 v-if="yes">Yes!</h1>`

- 是条件渲染指令，它根据表达式的真假来删除和插入元素
- 会频繁卸载dom元素，频繁显示隐藏会有性能消耗

### v-else

> 用法：`<h1 v-else>No!</h1>`

- 必须和v-if一起用才可以 不能单独用 而且必须在v-if下面中间有别的标签也会报错

### v-show

> 用法：`<h1 v-show="yes">Yes!</h1>`

- 和v-if一样 区别是if是卸载掉 show隐藏
- 频繁卸载安装dom推荐使用

### v-for

> 用法：`<h1 v-for="item in items">Yes!</h1>`

- 基于数组渲染一个列表，和js中for遍历语法类似
- items是一个数组，item是当前被遍历的数组元素。

### v-bind

> 用法：`<h1 v-bind:argument="expression">Yes!</h1>`
> 简写：`<h1 :argument="expression">Yes!</h1>`

- 给改元素绑定值，冒号跟的通常是HTML元素的特性例如`:src`
- 可用于常用父子传参

### v-model

> 用法：`<input type="text" v-model="message">`

- 让表单元素和数据实现双向绑定（映射关系）

### v-on

> 用法：`<a v-on:click="doSomething">`
> 简写：`<a @click="doSomething">`

- 指令用于给监听DOM事件，它的用语法和v-bind是类似的

在调用事件的时候可以用修饰符来强化我们的代码
列入阻止事件冒泡，我们只需在结尾加上.stop修饰即可

事件修饰符

- .stop
- .prevent
- .capture
- .self
- .once
- .passive

```js
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

### v-text

> 用法：`<h1 v-text="expresstion">Yes!</h1>`

- 防止页面首次加载时 {{}} 出现在页面上。将对象中数据变量值显示在绑定的标签内容上。


## 自定义指令

> 如果想实现的功能不满足上述这些，可以自己定义一些指令<br>

例如这个情景:当页面加载时，该元素将获得焦点
### 全局注册
```js
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```
### 局部组件注册
```js
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

### 使用
然后你可以在模板中任何元素上使用新的 v-focus property，如下：
```html
<input v-focus>
```
