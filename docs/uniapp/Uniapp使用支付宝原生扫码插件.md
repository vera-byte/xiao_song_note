# Uniapp使用支付宝原生扫码插件
> 支付宝原生扫码组件，包体积仅0.7MB，15分钟即可完成接入。同时，mPaaS提供「扫码分析」大盘

1. [mPaaS插件](https://ext.dcloud.net.cn/plugin?id=2636) 将此插件导入到项目
2. 开通阿里云mPaaS 
> 登录阿里云控制台，在 mPaaS 产品页点击 管理控制台，进入 开通产品 页面。点击 立即开通，即可开沟通 mPaaS 产品
3. 创建 mPaaS 应用
> 开通后您需要创建一个 mPaaS 应用
4. 配置 Config 并下载
>  Android
4.1.1 填写配置信息，并上传签名 APK。
点击 代码管理 > 代码配置 > Android，输入 Package Name（应用包名）（此处以 com.mpaas.demo 为例），上传编译并添加签名后的 APK 安装包。关于快速生成签名后的 APK 相关信息，请参见 生成控制台用签名 APK。
说明：此处需要上传签名后的 APK，mPaaS 会根据签名信息进行鉴权。

![](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/164968/AntCloud_zh/1589511367385/44.png)
![](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/pic/164968/AntCloud_zh/1589511594603/45.png)
>4.2 iOS
4.2.1 获取 mPaaS 的配置文件
点击 代码管理 > 代码配置 > iOS，输入 bundle ID，并点击下载配置，获取 .config 配置文件

![](http://tmpimage.oss-cn-hangzhou.aliyuncs.com/7EB29523-8AE2-4733-83B3-AFDF1E8A6730.png)

5. 导入 config 信息
> 使用 UniApp mPaaS 扫码插件的时候，需要您将 config 信息导入到 uni-app 工程里

> 4.1 Android
将 4.1.2 中下载好的 Android 的 config 信息，填入您的原生插件配置中，如图所示

![](http://mpaas-demo.oss-cn-hangzhou.aliyuncs.com/readme_images/7FD823CC-9C6E-4E73-9FA3-6ED435B35196.png)
![](http://mpaas-demo.oss-cn-hangzhou.aliyuncs.com/readme_images/4C69B573-6BC7-44DF-8741-107CB8CE066D.png)
>4.2 iOS
将 4.2.1 中下载的 config 文件，重命名为 meta.config，然后将这个文件放入到您项目中，例如： /XX project/nativeplugins/Mpaas-Scan/ios/meta.config

6.  使用 uniapp 调用 mPaaS 扫码

>经过上述6步，您已将 mPaaS 扫码组件添加到您的工程内了。您可以在 uniapp 端调起 mPaaS 扫码了，示例如下

``` javascript
var mpaasScanModule = uni.requireNativePlugin("Mpaas-Scan-Module")

mpaasScanModule.mpaasScan({
    // 扫码 UI 风格，参数可为 qr、bar，默认为 qr
    'type': 'qr',
    // 扫码识别类型，参数可多选，qrCode、barCode，不设置，默认识别所有
    'scanType':  ['qrCode','barCode'],
    // 是否隐藏相册，默认false不隐藏
    'hideAlbum': false
    },
    (ret) => {
    uni.showModal({
        title: "弹窗标题",
        // 返回值中，resp_code 表示返回结果值，10：用户取消，11：其他错误，1000：成功
        // 返回值中，resp_message 表示返回结果信息
        // 返回值中，resp_result 表示扫码结果，只有成功才会有返回
        content: JSON.stringify(ret),
        showCancel: false,
        confirmText: "确定"
    })
})
```