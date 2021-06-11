# Node.js笔记
## Node.js和Npm版本升级到最新
<CodeSwitcher :languages="{mac:'MacOs',win:'Windows'}">

<template v-slot:mac>

``` shell
    #1.，先查看本机node.js版本：
    node --version
    #2.，清除node.js的cache：
    sudo npm cache clean -f
    #3. 如果已经安装过 n 则可以忽略此步骤
    sudo npm install -g n
    #4.安装最新版本的node.js
    sudo n stable
    #5. 再次查看本机的node.js版本：
    node --version
    #6. 更新npm到最新版
    sudo npm install npm@latest -g
    #7. 再次检查node npm 版本
    node --version && npm --version

 ```

</template>
<template v-slot:win>



</template>

</CodeSwitcher>