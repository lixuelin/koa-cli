# koa-cli

该框架内容使用 koa 为基础，使用 koa-router, koa-bodyparser,

## 模块划分

### router 路由

存放访问接口，可配置各个接口前缀

### service 业务逻辑

整个接口业务逻辑层，参数校验也是该层

### config 配置

整个服务所有配置

### model 数据

操作数据层

### util 工具

公共方法

### test 测试

测试模块

## 服务启动

执行命令 node app.js
