/*
 * @Author: your name
 * @Date: 2021-05-21 14:03:38
 * @LastEditTime: 2021-06-13 16:22:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /note/docs/.vuepress/config/nav.js
 */
module.exports = [{
    text: '首页',
    link: '/'
  },
  {
    text: '日常笔记',
    link: '/notes/git'
  },
  {
    text: '专题笔记',
    // link: '/guide/',
    items: [{
        text: '网址收藏',
        link: '/website/webclient'
      },
      {
        text: 'Uniapp',
        link: '/uniapp/uniapp'
      },
      {
        text: 'JavaScript',
        link: '/js/'
      },
      {
        text: 'Flutter',
        link: '/flutter/index.html'
      },
      {
        text: 'Electron',
        link: '/electron/'
      },
      {
        text: 'Egg',
        link: '/egg/'
      }, {
        text: '留言板',
        link: '/messageboard'
      }
    ]
  },
  {
    text: '私有项目',
    link: '/Vera/'
  },
];