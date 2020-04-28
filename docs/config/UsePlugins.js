module.exports = [
// 图片放大
  ['@vuepress/plugin-medium-zoom', {
    selector: '.theme-default-content :not(a) > img',
    options: {
      margin: 16
    }
  }],
  // 最后更新
  ['@vuepress/last-updated'],
  ['@vuepress-reco/vuepress-plugin-loading-page'
  ],
  // 分页
  ['@vuepress-reco/vuepress-plugin-pagation'],

  // 设置可变标题和icon
  [
    "dynamic-title",
    {
      showIcon: "/d1.jpg",
      showText: "(～￣▽￣)～ ",
      hideIcon: "/d2.jpg",
      hideText: "(￢_￢)liyoublog",
      recoverTime: 2000
    }
  ],
  // 背景彩带
[
  "ribbon",
  {
    size: 90, // 彩带的宽度，默认为 90
    opacity: 0.1, // 彩带的不透明度，默认为 0.3
    zIndex: -2 // 彩带的 z-index 属性，默认值为 -1
  }
],
  [ // 看版娘
    "@vuepress-reco/kan-ban-niang",
    {
      // 模型名称，可传入一个字符串或者数组
      theme: ['koharu','wanko'],
      modelStyle: {
        left: '90px',
        bottom: '-10px',
        opacity: '0.9'
      },
      messageStyle: {
        left: '68px',
        bottom: '190px'
      },
      btnStyle: {
        left: '90px',
        bottom: '40px',
      },
      height: '242px',
      width: '165px'
    }
  ],
];