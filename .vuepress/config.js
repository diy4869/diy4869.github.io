/*
 * @Author: last order
 * @Date: 2019-08-08 13:04:15
 * @LastEditTime : 2020-02-14 13:36:03
 */
const path = require('path')
const dir = path.resolve(__dirname, '../docs')
console.log(dir)

module.exports = {
  base: '/LoPlayer-Docs/',
  title: 'LoPlayer',
  description: '一个简易的播放器',
  dest: dir,
  themeConfig: {
    nav: [{
      text: '学习',
      link: '/guide/'
    },
    {
      text: 'Github',
      link: 'https://github.com/diy4869/LoPlayer'
    }]
  }
}