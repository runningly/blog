module.exports = [
  // 斜杠指向docs
  { text: '主页', link: '/', icon: 'reco-home' },

  {
    text: '前端',
    icon: 'reco-coding',
    items: [
      {
        text: '基础', items: [
          {text: 'HTML', link: '/frontEnd/html/'},
          {text: 'CSS', link: '/frontEnd/css/'},
          {text: 'JS', link: '/frontEnd/js/'}
        ]
      },
      {
        text: '框架', items: [
          {text: 'Angular', link: '/frontEnd/framework/angular/'},
          {text: 'React', link: '/frontEnd/framework/react/'},
          {text: 'Vue', link: '/frontEnd/framework/vue/'}
        ]
      }
    ]
  },

  { text: '分类', icon: 'reco-category',
    items: [ // 下拉列表
      { text: '前端', link: '/categories/frontEnd/' },
      { text: '后端', link: '/categories/backEnd/' },
      { text: 'life', link: '/categories/life/'}
    ]
  },
  { text: '时间轴', link: '/timeline/', icon: 'reco-date' },

]

