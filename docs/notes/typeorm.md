# TypeORM笔记
## 数据库反向生成数据库TypeORM模型

> ### 方式一 使用 ``` typeorm-model-generator ```
>>typeorm-model-generator简单点就是将现有的数据库中的表使用命令的方式自动生成typeorm的数据模型(注意前提是数据库要有表)

#### 目前支持的数据库有

-  Microsoft SQL Server
-  PostgreSQL
-  MySQL
-  MariaDB
-  Oracle Database
-  SQLite

> ### 脚本参数提示
> - rm -rf entities表示先删除文件夹entities
> - npx typeorm-model-generator如果全局安装了就不需要加npx没有全局安装就加上去
> - ```-h``` localhost -d 数据库名字 -p 端口 -u 用户名 -x 密码 -e 数据库类型
> - ```-o`` entities表示输出到指定的文件夹
> - ```--noConfig``` true表示不生成ormconfig.json和tsconfig.json文件
> - ```--ce``` pascal表示将类名转换首字母是大写的驼峰命名
> - ```--cp``` camel表示将数据库中的字段比如create_at转换为createAt
> - ```-a```表示会继承一个BaseEntity的类,根据自己需求加

#### 如何使用

1. 全局安装模块(也可以使用npx,但是这种方式生成数据模型的时候会有点慢)

``` sh
npm i -g typeorm-model-generator
```
2. 新创建一个文件夹
3. 新建package.json的文件
4. 在package.json文件下的scripts配置命令
``` json
"scripts": {
  "db": "rm -rf entities & npx typeorm-model-generator -h localhost -d testdabase -p 3306 -u root -x root -e mysql -o entities --noConfig true --ce pascal --cp camel"
}
```
5. 直接运行命令就可以在entities文件夹下生成全部的数据模型(目前格式有点丑,需要自己手动调整下)
``` sh 
npn run db 
```
6. 如果成功,则会在package.json同级目录可以看到entities文件夹

