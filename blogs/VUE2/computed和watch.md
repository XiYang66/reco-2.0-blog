---
title: computed和watch
date: 2022-7-21
autoSort: 17
tags:
 - VUE2
categories: 
 - VUE2
---

## computed计算属性

介绍：
- return一个对data或者props处理的值
- 写法像函数，但他不是一个函数，他是一个属性值
- 必须返回一个返回值，他有自己的作用域（缓存）
- 如果变换的值如上次的变换的一样就不会执行，从自己的缓存中获取数据结果直接返回

### 对象写法
  
set 赋值修改 get返回处理的值
```js
computed: {
  fullName: {
    set (val) {
      const names = val.split(' ');
      this.firstName = names[0];
      this.lastName = names[names.length - 1];
    }
    get () {
      return `${this.firstName} ${this.lastName}`;
    },
  }
}
```
### 函数写法
  
在函数中直接处理并return处理的数据
```js
computed: {
  fullName () {
    return `${this.firstName} ${this.lastName}`;
  }
}
``` 
调用：

```js
<h1>{{fullName}} </h1>
```
总结：
- 他不是函数，是一个属性值
- 必须有返回值（return）
- 他有自己的作用域（缓存）

## watch 监听属性

介绍：
- 监听一个状态的变换并且执行函数
- 有两种写法 对象 函数
- 有两个默认参数  （newdata,olddata）

### 对象写法

``` js
watch: {
  firstName: {
    handler(newName, oldName) {
      this.fullName = newName + ' ' + this.lastName;
    },
    immediate: true,
    deep:true
  }
}
``` 
- immediate 默认调用
- deep 深度监听 监听为对象时,obj.a发生变换也可触发
  
> 项目中经常使用deep对性能的影响很大,当可以监听对象中的某一个的值的时候可以做以下优化
``` js
watch: {
  'obj.a': {
    handler(newName, oldName) {
      console.log('obj.a changed');
    },
    immediate: true,
    // deep: true
  }
}
```
### 函数写法

``` js
watch: {
  firstName(){
      this.fullName = newName + ' ' + this.lastName;
  }
}
```
不能深度监听 数据简单处理的写法
