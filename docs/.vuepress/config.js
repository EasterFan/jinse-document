module.exports = {
  title: '锦 瑟',
  description: '锦 瑟 | ✍️ 锦瑟无端五十弦，一弦一柱思华年',
  host: 'localhost',
  port: '4000',
  docsDir: 'docs',
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
      { text: '文 档', link: '/install-with-centos' },
      // { text: '社 区', link: 'https://bbs.halo.run' },
    ],
    sidebar: [
      {
        title: '是什么',
        collapsable: false,
        children: [
          '/whatis',
        ],
      },
      {
        title: '想干什么',
        collapsable: false,
        children: [
          '/whattodo'
        ],
      },
      {
        title: '理念',
        collapsable: false,
        children: [
          '/sprit'
        ],
      },
      {
        title: '参与',
        collapsable: false,
        children: [
          '/join'
        ],
      },
      {
        title: '作者吹牛逼时刻',
        collapsable: false,
        children: [
          '/nb'
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
        title: '协作',
        collapsable: false,
        children: [
          '/cooperation',
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
