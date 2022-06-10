# Android证书制做
```shell
# Created
keytool -genkey -alias 别名 -keyalg RSA -validity 36500 -keystore FileName.keystore
# 查询
keytool -list -v -keystore ./签名文件
```
