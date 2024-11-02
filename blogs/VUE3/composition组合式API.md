---
title: composition组合式API
date: 2022-9-27
tags:
 - VUE3
categories: 
 - VUE3
---

## setup

### 简单用法

> setup函数式Composition API的入口，在这里里面定义的变量，方法都需要return出去

把vue2中的data和methods配置函数混在啦一起

```js
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  setup (){
   let name = '路飞'
   //方法
   function say(){
    console.log(`我叫${name},是要成为海贼王的男人！`)
   }

   //返回一个对象
   return {
    name,
    say
   }
  }
 })
</script>
```

### setup细节问题

#### 执行时机

1. setup是在beforeCreate生命周期回调之前就执行，而且就执行了一次
2. setup在执行的时候，当前的组件没有被创建出来，组件实例对象this不能用
3. this是undefined，说明不能通过this调用data、computed、methods、props相关信息
4. 其实所有的composition API相关回调函数都不可以

#### 返回值

1. 返回一个对象，为页面提供数据，在模板中可以直接使用此对象的方法和属性
2. 返回对象中的属性和data函数中返回的对象属性合并
3. 返回对象中的方法和methods方法合并
4. 如果有重名setup优先
5. 一般不要混合使用data和setup以及methods和setup
6. 不能是一个async函数，因为返回值不在是一个对象而是一个promise

#### setup参数

- props 接收父组件向子组件传递的数据
- context
  - attrs对象(获取组件标签上所有属性对象，即使props上没有生命定义接收的属性，他也能获取到该标签上的属性)
  - emit方法（分发事件）可以通过emit实现子传父，第一个参数是属性名字，第二个参数是传的值(相当于v2的this.$emit)
  - slots对象（插槽）

## ref与reactive

### ref

在setup中定义的变量不是响应式的，此时需要用ref将它变成响应式的

> ref函数会把变量变成对象，在修改的时候要.value去修改，页面上，vue3检测到时ref对象就自动给.value啦

```ts
<script lang="ts">
import { defineComponent,ref } from 'vue';
export default defineComponent({
  name: 'App',
  setup(){
    const age=ref(10)
    function setUser(){
      age.value++
    }
    return{
      age,
      setUser
    }
  }
});
</script>
```

### reactive

- 比ref更好用，不用通过.value就可以改变数据
- 接收一个普通对象，返回一个proxy代理对象

```ts

<script lang="ts">
import { defineComponent,ref ,reactive} from 'vue';
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  setup(){
    const user=reactive({
      name:'路飞',
      age:12
    })
    function setUser(){
      user.age++
    }
    return{
      user,
      setUser
    }
  }
});
</script>

<style>
```

### vue2和vue3响应式原理不同

vue2原理使用`Object.defineProperty`中的get和set进行数据劫持，他这样会存在一定的缺陷，当新增和删除的时候捕获不到，导致页面也不会更新

vue3中使用`proxy`(代理)连接对象对象中任意值的变换深度监听响应式的，再通过`Reflect`(反射)对源对象的属性进行操作

## computed 和 watch （计算属性和监听属性）

在setup中使用需要在vue中引入 `import {...,computed,watch} from vue`

### computed

computed 必须有一个返回值

第一种写法，如果只传入一个回调函数，表示get

```js
 setup(){
   const fullName1=computed(()=>{
     return user.firstName+'_'+user.lastName
   })
 }
```

第二种写法，get 和 set

```js
setup(){
   const fullName2=computed({
     get() {
        return `${ user.firstName }_${ user.lastName }`
      },
      set(val:string) {
        user.firstName = val.split('_')[0]
        user.lastName = val.split('_')[1]
      },
   })
 }

```

### watch

监听单个

```js
watch(user,()=>{
  console.log('user发生变换');
},{deep:true,immediate:false})
```

监听多个

```js
watch([user,age],()=>{
  console.log('user或age发什么变换');
})
```

监视对象中的属性

```js
watch(()=>user.firstName,()=>{
  console.log(`firstName改变了`)
})
```

### watchEffect

他是来跟watch抢饭碗的，是vue3新特性，默认开启immediate，用到了谁就监视谁

```js
watchEffect(()=>{
  const firstName=user.firstName
  console.log('🚀 ~ file: index.vue ~ line 52 ~ watchEffect ~ firstName', firstName)
})
```

## 生命周期

在vue3中没有 `beforeCreate`与`created`,setup就相当于这两个生命周期函数

vue3声明周期需要在vux中引入 ，有些函数名字发生了变换 `import { 生命周期 } from 'vue'`

beforeMount ===>onBeforeMount（dom元素加载之前，属性挂载完毕）</br>
mounted=======>onMounted （dom元素加载完毕） </br>
beforeUpdate===>onBeforeUpdate （dom元素更新之前）</br>
updated =======>onUpdated   （dom元素更新之后）</br>
beforeUnmount ==>onBeforeUnmount (组件被卸载之前)</br>
unmounted =====>onUnmounted  （组件被销货）</br>

## 自定义hook

相当于v2中的mixin混入，不同在与 hooks 是函数

hook函数能帮助我们提高代码的复用性，让我们在不同的组件中利用hooks函数

例子：获取鼠标点击位置
例如创建一个ts文件

```ts

import {ref,onMounted,onBeforeUnmount} from 'vue'

export default function(){
  const x=ref(0)
  const y=ref(0)
  const savePoint=(e:MouseEvent)=>{
    x.value=e.pageX
    y.value=e.pageY
  }
  onMounted(()=>{
    window.addEventListener('click',savePoint)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click',savePoint)
  })
  return {
    x,
    y
  }
}

```

在vue文件中引入

```js
<template>
<div>
  x:{{x}}
  y:{{y}}
</div>
</template>
<script lang="ts">
import mousePosition from '@/hooks/mousePosition'
import { defineComponent } from 'vue'
  export default defineComponent({
    name:'',
    setup() {
      let {x,y}=mousePosition()
      return{
        x,y
      }
    }
  })
</script>
```

## shallowReactive和shallowRef  

浅响应式，深层数据无法响应式修改

> shallowReactive : 只处理了对象内最外层属性的响应式(也就是浅响应式)

> shallowRef: 只处理了value的响应式, 不进行对象的reactive处理

- 什么时候用浅响应式呢?
  - 一般情况下使用ref和reactive即可
  - 如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive
  - 如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef

## readonly和shallowReadonly

只读属性

- readonly
  - 深度只读数据
  - 只读代理是深层的：访问的任何嵌套 property 也是只读的
- shallowReadonly
  - 浅只读数据
  - 第一次是只读的，深层就不只读啦

## toRaw 与 markRaw

- toRaw
  - 将响应式代理转换为普通对象
- markRaw
  - 标记一个对象，使其永远不会转换为代理
  - 设置某些特定的值，当渲染具有不可变数据源的大列表时

## toRef

- 为源响应式对象上的某个属性创建一个 ref对象, 二者内部操作的是同一个数据值, 更新时二者是同步的
- 区别ref: 拷贝了一份新的数据值单独操作, 更新时相互不影响

## customRef

- 创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制


## provide 与 inject

- 实现跨层级组件(祖孙)间通信

```js
// 爷爷   注册
provide('color', color)
// 孙子 获取
const color = inject('color')
```
