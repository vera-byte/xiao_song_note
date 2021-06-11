(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{729:function(s,e,a){"use strict";a.r(e);var t=a(64),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"在-vuepress-creator-中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-vuepress-creator-中使用"}},[s._v("#")]),s._v(" 在 VuePress-Creator 中使用")]),s._v(" "),a("p",[s._v("VuePress-Creator 1.x 版本主要是用于快速创建 VuePress 项目（并不是为主题而生），为满足主题生态需要，我们开发了 VuePress-Creator 2.x 版本。关于 VuePress-Creator 1.x 版本，有不少小伙伴反馈 1.x 版本的创建流程太繁琐，所以对脚手架进行了重构，并优化大部分的交互体验。下面就来看看怎么利用 VuePress-Creator 来创建带有 AntDocs 主题的模板吧！")]),s._v(" "),a("h2",{attrs:{id:"全局安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局安装"}},[s._v("#")]),s._v(" 全局安装")]),s._v(" "),a("p",[s._v("我们需要在命令行中安装 VuePress-Creator 工具，这里推荐使用 "),a("code",[s._v("yarn")]),s._v(" 进行全局安装：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress-creator\n")])])]),a("p",[s._v("或者如果你只使用 "),a("code",[s._v("npm")]),s._v(" :")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g vuepress-creator\n")])])]),a("a-alert",{attrs:{type:"warning",showIcon:""}},[a("span",{attrs:{slot:"message"},slot:"message"},[s._v("\n    部分用户在 yarn 环境下可能无法正常识别 vuepress-creator 命令，经测试，可通过命令行 yarn global bin 获取 yarn 全局安装包路径，然后添加至系统环境变量中即可解决。\n  ")])]),s._v(" "),a("h2",{attrs:{id:"创建-vuepress-模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-vuepress-模板"}},[s._v("#")]),s._v(" 创建 VuePress 模板")]),s._v(" "),a("p",[s._v("在命令行窗口输入以下命令开始创建项目：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("vuepress-creator init myproject\n")])])]),a("p",[s._v("其中，可以把 "),a("code",[s._v("myproject")]),s._v(" 替换为你想要的名称。回车后，会跳出一个选项：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 为 VuePress 选择一个主题？ 默认：Default\nPick a theme for VuePress?\n> Default\n  AntDocs (Ant Design style)\n")])])]),a("p",[s._v("选择完毕后，脚手架将自动进行一系列的操作，直到配置完毕。再此期间，请你耐心等待。")]),s._v(" "),a("h3",{attrs:{id:"扩展命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展命令"}},[s._v("#")]),s._v(" 扩展命令")]),s._v(" "),a("p",[s._v("为了方便直接创建想要的模板，我们还添加了两条命令：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接创建默认模板")]),s._v("\nvuepress-creator def myproject\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接创建带有 AntDocs 主题的模板")]),s._v("\nvuepress-creator ads myproject\n")])])]),a("p",[s._v("关于 VuePress-Creator 2.x 版本的其他命令，请见 "),a("a",{attrs:{href:"https://zpfz.github.io/vuepress-creator/zh/guide/guide.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress-Creator"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"开发运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发运行"}},[s._v("#")]),s._v(" 开发运行")]),s._v(" "),a("p",[s._v("打开已经配置完毕的项目，在命令行窗口输入以下命令：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者：npm run dev")]),s._v("\n")])])]),a("h2",{attrs:{id:"生产运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生产运行"}},[s._v("#")]),s._v(" 生产运行")]),s._v(" "),a("p",[s._v("要生成静态的 HTML 文件，运行：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者：npm run build")]),s._v("\n")])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);