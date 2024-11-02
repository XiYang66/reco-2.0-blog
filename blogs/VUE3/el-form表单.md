---
title: el-form表单
date: 2024-10-19
tags:
 - VUE3
categories: 
 - VUE3
---


## 深层校验

当我们需要操作的表单结构是多级数组时候需要用到深层校验，例如下结构
```js
{
    deep:{
        deep1:'',
        deep2:'',
    }
}
```
此时我们的 **< el-form-item >** 可以这么写,循环遍历这个对象,重点就是这个**prop**的写法
>在VUE中遍历渲染一个对象第一个值是`value `第二值是`key`

```html
    <!-- 循环生成的 el-form-item -->
    <el-form-item v-for="(value, key) in deep" :key="key" :label="`深层校验${key}:`" :prop="`deep.${key}`">
        <el-input v-model="deep[key]" type="text" autocomplete="off" />
    </el-form-item>
```

这是rules规则写法

```js
// 校验规则
const rules = reactive({
    deep: {
        deep1: {
            required: true,
            message: '请输入内容(1)',
            trigger: 'blur'
        },
        deep2: {
            required: true,
            message: '请输入内容(2)',
            trigger: 'blur'
        }
    }
});
```


