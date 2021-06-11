(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{735:function(s,t,a){"use strict";a.r(t);var n=a(64),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"npm笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm笔记"}},[s._v("#")]),s._v(" Npm笔记")]),s._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("ol",[a("li",[s._v("添加用户")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" adduser\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("添加镜像")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("//淘宝镜像\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  config  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v("  registry  https://registry.npm.taobao.org \n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("恢复镜像")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  config  delete  registry\n或\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  config  edit（手动删除）\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("安装")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  -g  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  包名  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  全局安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  根据package.json文件安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  包名  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  本地安装，在npm运行目录下安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  包名@1.x  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  安装指定版本")]),s._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("卸载")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  uninstall  包名\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("更新")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  -g  update  包名  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  全局更新")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  update  包名  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  本地更新")]),s._v("\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[s._v("查看已安装的模块")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[s._v("生成符号链接")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、在本地安装好的模块中，运行（添加本地模块到全局链接）：\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、在要使用的本地目录中，运行（从全局中获取链接）：\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("  模块名\n")])])]),a("ol",{attrs:{start:"9"}},[a("li",[s._v("执行脚本")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  run  在package.json的scripts中定义的脚本命令\n")])])]),a("ol",{attrs:{start:"10"}},[a("li",[s._v("登录")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  login\n")])])]),a("ol",{attrs:{start:"11"}},[a("li",[s._v("发布包")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  publish\n")])])]),a("ol",{attrs:{start:"12"}},[a("li",[s._v("撤销发布")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  -f  unpublish  dollarphpajax@*\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);