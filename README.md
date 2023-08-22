# COC小帮手
在线COC_跑团辅助工具
## 项目结构
1. `client` web客户端，这里放的是前端源代码
2. `server` web服务端，这里放的是后端源代码
3. `demo` 一些测试用的工具或者一些简单的原型代码
4. `package.json`

## 项目安装与配置
### 前置安装
在`当前文件夹`下运行以下命令
  npm install --global nodemon ts-node
  npm run auto-install

## 项目的启动配置等等
### 启动 run
`npm run dev[:(目标目录)]`
  同时启动前端与后端服务器，并预览。
  例如 `npm run dev:server` 是单独启动server文件夹下的服务
### 构建 build
`npm run build[:(目标目录)]`
  打包前端项目，然后生成目标文件夹



