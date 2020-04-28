const UsePlugins = require('../config/UsePlugins');
const navConfig = require('../config/navConfig');
const valineConfig = require('../config/valineConfig');
const sidebarConfig = require('../config/sidebarConfig');
const frindLinkConfig = require('../config/frindLinkConfig');

module.exports = {
  title: 'liyoublog',
  description: '生活最佳状态是冷冷清清地风风火火。',
  theme: 'reco',
  head: [
    ['meta', {
      name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'
    }]
  ],

  themeConfig: {
    type: 'blog',
    logo: '/2.jpg',
    authorAvatar: '/2.jpg',
    // 导航
    nav: navConfig,

    // 配置分类与标签
    blogConfig: {
      // category: {        // 未知错误，所以用vuepress原生方法添加分类（和下拉列表）
      //   location: 2,     // 在导航栏菜单中所占的位置，默认2
      //   text: '分类'      // 默认文案 “分类”
      // },
      tag: {
        location: 4,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      }
    },
    // 友链
    friendLink: frindLinkConfig,
    // 侧边栏
    sidebar: sidebarConfig,
    // 评论
    valineConfig: valineConfig,

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
     repo: '/Runningliyou/blog',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页',

    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 最后更新的时间由于 lastUpdated 是基于 git 的,
    // 所以你只能在一个基于 git 的项目中启用它。
    // 此外，由于使用的时间戳来自 git commit，因此它将仅在给定页的第一次提交之后显示，并且仅在该页面后续提交更改时更新。
    lastUpdated: '最后更新',
    // 设置作者姓名
    author: 'liyou',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2019',
    // 启动页面滚动效果
    smoothScroll: true,
  },
  markdown: {
    // 启动代码块的数字序号
    lineNumbers: true,
    anchor: {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '🍋'
    }
  },
  // 插件
  plugins: UsePlugins
};