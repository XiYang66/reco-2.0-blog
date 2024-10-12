---
title: TypeScript
date: 2022-9-8
autoSort: 1
tags:
 - TypeScript
categories: 
 - TypeScript
---

## 什么是 TypeScript

> 添加了类型系统的 JavaScript，适用于任何规模的项目

重点就两大个特征 类型约束 适用任何规模

## 安装 TypeScript

TypeScript 的命令行工具安装方法如下：

```jS
 npm install -g typescript
```

安装后会全局安装tsc命令，安装完成，我们可以在任何地方实行tsc命令

编译一个typescript文件：

```js
tsc hello.ts
```

## 自动编译js文件

可以通过配置文件中断运行自动监视ts文件动态生成js文件：

```js
tsc --init
```

在编译器中-终端-运行任务-显示所有任务-监视
![!](https://s1.ax1x.com/2022/09/08/vqeFfg.png)
