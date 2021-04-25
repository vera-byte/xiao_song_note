# npm常用的三方库
## 终端库
- [chalk](https://www.npmjs.com/package/chalk)chalk终端样式库 

[![Coverage Status](https://coveralls.io/repos/github/chalk/chalk/badge.svg?branch=main)](https://coveralls.io/github/chalk/chalk?branch=main)
[![npm dependents](https://badgen.net/npm/dependents/chalk)](https://www.npmjs.com/package/chalk?activeTab=dependents) [![Downloads](https://badgen.net/npm/dt/chalk)](https://www.npmjs.com/package/chalk)
[![run on repl.it](https://repl.it/badge/github/chalk/chalk)](https://repl.it/github/chalk/chalk)
[![Support Chalk on DEV](https://badge.devprotocol.xyz/0x44d871aebF0126Bf646753E2C976Aa7e68A66c15/descriptive)](https://stakes.social/0x44d871aebF0126Bf646753E2C976Aa7e68A66c15)

<img src="https://cdn.jsdelivr.net/gh/chalk/ansi-styles@8261697c95bf34b6c7767e2cbe9941a851d59385/screenshot.svg" width="900">

``` sh
# 安装
npm i chalk
```
``` javascript
// 使用 
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
```
--------

- [commander](https://www.npmjs.com/package/commander)commander 完整的 node.js 命令行解决方案

[![Build Status](https://github.com/tj/commander.js/workflows/build/badge.svg)](https://github.com/tj/commander.js/actions?query=workflow%3A%22build%22)
[![NPM Version](http://img.shields.io/npm/v/commander.svg?style=flat)](https://www.npmjs.org/package/commander)
[![NPM Downloads](https://img.shields.io/npm/dm/commander.svg?style=flat)](https://npmcharts.com/compare/commander?minimal=true)
[![Install Size](https://packagephobia.now.sh/badge?p=commander)](https://packagephobia.now.sh/result?p=commander)

``` sh
# 安装
    npm i commander
```
``` javascript
// 使用
// 为简化使用，Commander 提供了一个全局对象。本文档的示例代码均按此方法使用：
const { program , Command} = require('commander');
program.version('0.0.1');

// 如果程序较为复杂，用户需要以多种方式来使用 Commander，如单元测试等。创建本地 Command 对象是一种更好的方式
const program = new Command();
program.version('0.0.1');
```
- [download-git-rep](https://)
[![GitLab pipeline](https://img.shields.io/gitlab/pipeline/flippidippi/download-git-repo)](https://gitlab.com/flippidippi/download-git-repo/builds)

``` sh
npm install download-git-repo
```

``` javascript
// 使用从master的Github存储库下载http
download('flippidippi/download-git-repo-fixture', 'test/tmp', function (err) {
  console.log(err ? 'Error' : 'Success')
})
```
