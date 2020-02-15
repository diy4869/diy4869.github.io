/*
 * @Author: last order
 * @Date: 2019-08-08 13:04:15
 * @LastEditTime: 2020-02-15 15:12:53
 */
const path = require('path')
const dir = path.resolve(__dirname, '../docs')
console.log(dir)

module.exports = {
  base: '/LoPlayer-Docs/',
  dest: dir,
  markdown: {
    // lineNumbers: true,
    toc: {
      includeLevel: [2, 3]
    }
  },
  // plugins: ['autobar'],
  themeConfig: {
    sidebar: 'auto',
    nav: [{
      text: '学习',
      link: '/guide/'
    },
    {
      text: 'Github',
      link: 'https://github.com/diy4869/LoPlayer'
    }]
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'LoPlayer',
      description: '一个简易的播放器'
    }
  }
}