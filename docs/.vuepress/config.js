module.exports = {
  title: '锦 瑟',
  description: '锦 瑟 | ✍️ 锦瑟无端五十弦，一弦一柱思华年',
  host: 'localhost',
  port: '4000',
  docsDir: 'docs',
  base: '/jinse-document/',
  // ga: 'UA-110780416-2',
  head: [
    ['link', { rel: 'icon', href: '/pic.jpg' }],
  ],
  siteConfig: {
    links: {
      github: 'https://github.com/easterfan/jinse-document',
    },
  },
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    repo: 'easterfan/jinse-document',
    nav: [
      { text: '首 页', link: '/' },
      { text: '文 档', link: '/start' },
      // { text: '社 区', link: 'https://bbs.halo.run' },
    ],
    sidebar: [
      {
        title: '开始',
        collapsable: false,
        children: [
          '/start',
          '/view',
        ],
      },
      {
        title: 'FAQ',
        collapsable: false,
        children: [
          '/faq'
        ],
      },
      {
        title: '复制一个',
        collapsable: false,
        children: [
          '/copy'
        ],
      },
      {
        title: '捐赠',
        collapsable: false,
        children: [
          '/donate',
        ],
      },
    ],
    lastUpdated: 'Still Laughing at',
  },
}
