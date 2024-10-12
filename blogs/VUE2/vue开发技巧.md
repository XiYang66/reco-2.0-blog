---
title: vue开发技巧
date: 2022-7-11
autoSort: 0
tags:
 - VUE2
categories: 
 - VUE2
---

## require.context()

1. 场景：如果页面上需要引入多个组件原始写法

```js
import titleCom from '@/components/home/titleCom'
import bannerCom from '@/components/home/bannerCom'
import cellCom from '@/components/home/cellCom'
components:{titleCom,bannerCom,cellCom}
```

2. 这样大量重复的代码，频繁写法，可以利用require.context优化

```js
const path = require('path')
const files = require.context('@/components/home', false, /\.vue$/)
const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  modules[name] = files(key).default || files(key)
})
components:modules
```

3. API方法

```js
实际上是 webpack 的方法,vue 工程一般基于 webpack,所以可以使用
require.context(directory,useSubdirectories,regExp)
接收三个参数:
directory：说明需要检索的目录
useSubdirectories：是否检索子目录
regExp: 匹配文件的正则表达式,一般是文件名
```

## 组件通信

### props写法

```js
// 数组:不建议使用
props:[]

// 对象
props:{
 inpVal:{
  type:Number, //传入值限定类型
  // type 值可为String,Number,Boolean,Array,Object,Date,Function,Symbol
  // type 还可以是一个自定义的构造函数，并且通过 instanceof 来进行检查确认
  required: true, //是否必传
  default:200,  //默认值,对象或数组默认值必须从一个工厂函数获取如 default:()=>[]
  validator:(value) {
    // 这个值必须匹配下列字符串中的一个
    return ['success', 'warning', 'danger'].indexOf(value) !== -1
  }
 }
}
```

### $emit

子级组件触发父组件方法

```js
// 父组件
<home @title="title">
// 子组件
this.$emit('title',[{title:'这是title'}])
```

### attrs和listeners

#### attrs

如果父传子有很多值,那么在子组件需要定义多个props解决:attrs获取子传父中未在 props 定义的值

```js
// 父组件
<home title="这是标题" width="80" height="80" imgUrl="imgUrl"/>

// 子组件
mounted() {
  console.log(this.$attrs) //{title: "这是标题", width: "80", height: "80", imgUrl: "imgUrl"}
},
```

如果定义props接收啦，打印的就是其余的props属性

```js
props: {
  width: {
    type: String,
    default: ''
  }
},
mounted() {
  console.log(this.$attrs) //{title: "这是标题", height: "80", imgUrl: "imgUrl"}
},
```

#### listeners

子组件需要调用父组件的方法解决:父组件的方法可以通过v−on="listeners" 传入内部组件——在创建更高层次的组件时非常有用

```js
// 父组件
<home @change="change"/>

// 子组件
mounted() {
  console.log(this.$listeners) //即可拿到 change 事件
}
```

## render 函数

> 有的代码在template里面会重复很多，可以使用render函数优化
未优化

```js
<template>
  <div>
    <div v-if="level === 1"> <slot></slot> </div>
    <p v-else-if="level === 2"> <slot></slot> </p>
    <h1 v-else-if="level === 3"> <slot></slot> </h1>
    <h2 v-else-if="level === 4"> <slot></slot> </h2>
    <strong v-else-if="level === 5"> <slot></slot> </stong>
    <textarea v-else-if="level === 6"> <slot></slot> </textarea>
  </div>
</template>
```

优化

```js
// 优化版,利用 render 函数减小了代码重复率
<template>
  <div>
    <child :level="level">Hello world!</child>
  </div>
</template>

<script type='text/javascript'>
  import Vue from 'vue'
  Vue.component('child', {
    render(h) {
      const tag = ['div', 'p', 'strong', 'h1', 'h2', 'textarea'][this.level-1]
      return h(tag, this.$slots.default)
    },
    props: {
      level: {  type: Number,  required: true  } 
    }
  })   
  export default {
    name: 'hehe',
    data() { return { level: 3 } }
  }
</script>

```
