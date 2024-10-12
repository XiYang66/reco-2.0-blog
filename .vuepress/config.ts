import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "曦杨的随手笔记",
  description: "Just playing around",
  // 网页头部标签
  head: [
    ["link", { rel: "icon", href: "/logo.png" }]
  ],
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    // docsDir: '/series',
    // 自动设置分类
    autoSetBlogCategories: true,
    // 自动将分类和标签添加至头部导航条
    autoAddCategoryToNavbar: {
      location: 0, // 插入位置，默认 0
      showIcon: true, // 展示图标，默认 false
    },
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "曦杨",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    navbar: [
      {
        text: "博客",
        link: "/posts.html",
        icon: 'Blog'
      },
      {
        text: "时间轴",
        link: "/timeline.html",
        icon: 'Time'
      },
    ],
    categoriesText: '分类',
    tagsText:'标签',
    tip: '提示',
    info: '信息',
    danger: '危险',
    warning: '警告',
    details: '详情',
    backToHome: '返回首页',
    catalogTitle: '页面导航',
    editLinkText: '编辑当前页面',
    notFound: '哇哦，没有发现这个页面！',
    selectLanguageText: '语言',
    lastUpdatedText: '最后更新时间',
    selectLanguageName: '简体中文',
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
