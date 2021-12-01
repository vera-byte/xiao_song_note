(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{733:function(t,s,a){"use strict";a.r(s);var e=a(95),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-graysite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-graysite"}},[t._v("#")]),t._v(" vuepress-plugin-graysite")]),t._v(" "),a("p",[t._v("全站变灰插件，一般用于哀悼日。"),a("a",{attrs:{href:"https://github.com/zpfz/vuepress-plugin-graysite",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.shields.io/github/package-json/v/zpfz/vuepress-plugin-graysite?style=flat-square",alt:"Version"}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/npm/l/vuepress-plugin-graysite?style=flat-square",alt:"NPM"}})]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vuepress-plugin-graysite\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D vuepress-plugin-graysite")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'graysite'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'graysite'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      startDate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020-04-03 00:00:00'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      endDate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020-04-04 23:59:59'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"选项-必选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项-必选"}},[t._v("#")]),t._v(" 选项（必选）")]),t._v(" "),a("h3",{attrs:{id:"startdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#startdate"}},[t._v("#")]),t._v(" startDate")]),t._v(" "),a("p",[t._v("设置哀悼日开始日期。")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("date")])]),t._v(" "),a("li",[t._v("默认: "),a("code",[t._v("null")])])]),t._v(" "),a("h3",{attrs:{id:"enddate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enddate"}},[t._v("#")]),t._v(" endDate")]),t._v(" "),a("p",[t._v("设置哀悼日结束日期。")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("date")])]),t._v(" "),a("li",[t._v("默认: "),a("code",[t._v("null")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);