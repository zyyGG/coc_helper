// 引入库文件
import express from "express"


// 创建路由
const router = express.Router()

router.use("/", (req, res) => {
  res.send("hello wolrd")
})


// 导出路由
export default router