---
title: 博客搭建
date: 2022-6-23
tags:
 - 博客搭建
categories: 
 - reco1.0博客搭建
---

作为一个技术程序员，搭建一个属于自己炫酷的博客是一个很屌的事情。是记录自己分享自己的笔记以及经验很好的一个地方
## 准备工作
电脑需部署node环境，[node官网](http://nodejs.cn/)
>这边推荐使用,[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)这个主题框架。风格简单易理解，减少啦一些烦琐的配置。根据文档结合[vuepress](https://vuepress.vuejs.org/zh/)官网就可以很好开发
## 步骤
### 1、引入vuepress-theme-reco主题
``` javascript
  npx @vuepress-reco/theme-cli init 文件名称
```

### 2、配置项目

![配置](https://s1.ax1x.com/2022/06/23/jCvjcn.png)<br>
1.项目名称<br>
2.描述<br>
3.作者名称<br>
4.选择版本（可根据自己喜好）<br>
### 3、启动项目
进入目录
``` javascript
  cd xiyang
```
安装node_module
``` javascript
  npm install
```
启动
``` javascript
  npm run dev
```
