/*
 * @Author: your name
 * @Date: 2021-05-21 14:03:38
 * @LastEditTime: 2021-06-12 13:25:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /note/docs/.vuepress/config.js
 */
module.exports = {
  title: "全栈攻城狮",
  theme: "antdocs",
  description: "欢迎来到全栈攻城狮的分享集",
  // base: "/",
  // dest: 'public',
  head: [
    ["link", {
      rel: 'icon',
      href: '/assets/img/logo.gif'
    }],
    ["script", {
      type: "text/javascript",
      src: "/assets/js/push.js"
    }],

    ["meta", {
      name: "referrer",
      content: "never"
    }],
    [
      "meta",
      {
        name: "keywords",
        content: "全栈笔记,vuepress,git,electron,vue,uniapp,coding,全栈工程师,小宋,antdocs,antdeisgn,vuepress,vuepress-theme,theme,ant,docs,antd,antdocs of vuepress,主题,vuepress主题,antd设计,blog,vuepress-blog"
      }
    ]
  ],
  plugins: {
    sitemap: {
      hostname: "https://note.metoyun.com/"
    }
  },
  markdown: {
    lineNumbers: false,
    anchor: {
      permalinkBefore: true
    }
  },
  plugins: require("./config/plugins"),
  themeConfig: {
    backToTop: true,
    smoothScroll: true,
    logo: "/assets/logo.gif",
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    sidebarDepth: 0,
    lastUpdated: "上次更新",
    repo: "https://github.com/metoyun/xiao_song_note",
    editLinks: false,
    ads: {
      // style: 2,
      // image: "https://www.rainyun.com/img/rainyun.png",
      // text: "免费又稳定，签到换延期，来试试雨云主机...",
      // link: "http://redirect.rainyun.cn/?ref=11126",
      // items: [{
      //     text: "点击链接快来和我一起加入语雀文档，体验全新知识创作，让你的协作更高效！",
      //     image: "https://s1.ax1x.com/2020/04/06/GsL0Z6.md.png",
      //     link: "https://www.yuque.com/register?invite_token=f44225123bcab02038f11cc0a7ab720cb9016a02bec6a30f5e10994a9946152a"
      //   },
      //   {
      //     text: "免费又稳定，签到换延期，来试试雨云主机吧！",
      //     image: "https://s1.ax1x.com/2020/04/06/GsvilQ.md.png",
      //     link: "http://redirect.rainyun.cn/?ref=11126"
      //   }
      // ]
    }
  },
  // configureWebpack: (config, isServer) => {
  //   // config.entry = glob.sync("./dist/*.js");
  //   if (!isServer) {
  //     config.output = {
  //       libraryTarget: "commonjs2",
  //       path: path.resolve(__dirname, "dist"),
  //       filename: "bundle.js"
  //     };
  //   }
  // }
};