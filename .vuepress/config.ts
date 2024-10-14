import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "曦杨的随手笔记",
  description: "Just playing around",
  // 网页头部标签
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }]
  ],
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  // 主题配置
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
    authorAvatar: "/logo.png",
    docsRepo: "https://github.com/XiYang66/reco-2.0-blog",
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
    commentConfig: {
      type: 'valine',
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        appId: 'M3gzGIpnfpx7i5UYepo4HHtc-gzGzoHsz',//从LeanCloud的应用中得到的appId.
        appKey: 'jo1HbkGYuYFepCvxokfFEaer',//从LeanCloud的应用中得到的appKey.
        recordIP: true, //是否记录评论者IP
        visitor: true, // 阅读量统计
        enableQQ: true, // 是否启用昵称框自动获取QQ昵称和QQ头像
        placeholder: '昵称填写QQ号可以显示QQ头像和昵称哦~ ',
      },
    },
  }),
  // 插件
  plugins: [

  ],
  // debug: true,
});
