---
title: js数据类型判断
date: 2022-8-8
autoSort: 17
tags:
 - JavaScript
categories: 
 - JavaScript
---

## JS的数据类型

### JS的数据类型分为以下两类

1. 基本（原始）类型：String Number Boolean Null Undefined Symbol BigInt
2. 引用（对象）类型：Object Array Date Function RegExp 基本包装类型

### 基本类型和引用类型的区别

1. 储蓄方式不同，基本数据储存在`栈内存`，引用类型存储在`堆内存`（引入地址还是在栈内存上）
2. 原始类型不能携带属性和方法  [question](#为什么字符串有length属性)

### 为什么字符串有length属性 ？

``` js
let a='123'
a.b=1
console.log(a.b) //undefined
console.log(a.length) //3
```

如上代码a是一个字符串,向a上挂b属性，打印确实undefined而s.length打印确实3。<br>
因为`let a='123'`等于`let a =new String(123)`.他被new啦就一定会返回一个对象，所以a可以被称为字符串对象,`字符串被创建出来的时候,会返回携带字符串对象`<br>
所以他具备方法和属性,但是被计算机访问的时候，发现他是一个类型，就会自动delete删除，所以他就访问不到啦，所以打印a.b的时候是undefined不是报错，至于为什么a.length可以打印，只能说不会报错。不能说真的有这个属性

## JS的类型判断方式

### Object.prototype.toString.call()

> 嘎嘎厉害的判断方式,单词越长语法越牛,这个方法可以判断任何的类型,返回的是一个字符串
![dd](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b55591891ad4665a0c28df4cc6439a4~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

上图所示他会返回一个字符串，但是我们只想要后面的内容，我们可以用slice方法封装一个函数

```js
function myflag(target){
   return Object.prototype.toString.call(target).slice(8,Object.prototype.toString.call(target).length-1)
}
```

这样，就能得到变量类型的字符串，如下图返回'Boolean'
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/210cb6ed1eac419aa338f6a17510b6f2~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

### typeof()

> 这个方法用来准确判断基本类型，返回一个字符串

- 为什么判断null会返回'object'
  - 因为null转换为二进制时全是000000···，又因为object二进制是以000开头，所以000开头的会被计算机判定为object，null也就阴差阳错的被判定成object类型了。
- 判断引用数据类型会返回'object'，函数会返回'function'

<!-- >[本文摘抄掘金用户-不知道也没关系](https://juejin.cn/post/7118335356662972452#heading-0) -->

### instanceof()

> 判断类型为`引用类型`，返回一个布尔值，左侧是判断的值，右侧是数据类型

</br>

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6003e3f2f954ae0a0bacfc46352202e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

### 特定的判断方法

- 数组的方法`isArray()`返回布尔值
- 不合法数字`isNaN()`,合法数字false不合法tru
  
<br>

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0665d735800431a916af66a230876af~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/689cecc15a7049b387ac7470afa2ea45~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14e98c62f99148f38d315123010fb8fd~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

## JS的类型转换

### 显示类型转换，人为操作

- 转化为 Number 类型：Number() / parseFloat() / parseInt()
- 转化为 String 类型：String() / toString()
- 转化为 Boolean 类型: Boolean()<br>
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/60e869154bf3479eadc1cb7598c9834d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)
