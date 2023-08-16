// 库文件引入
import express from "express"
import cors from "cors"
import dotenv from "dotenv"


// 路由文件引入
import api from "./api"
import utils from "./utils"

// 执行
// 引入配置文件
dotenv.config()
// 创建app并使用路由
const app = express();
// 配置文件处理
app.use("/api", api)
// 跨域处理
app.use(cors())
// body处理
app.use(express.json())
// 静态资源文件夹
app.use(express.static("./public"))

app.listen(process.env.PORT, () => {
  console.log("服务器已经开启...")
  console.log("http://localhost:" + process.env.PORT)
  console.log("http://" + process.env.HOST + "/" + process.env.PORT)
})




