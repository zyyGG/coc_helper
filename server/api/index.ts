// 引入库文件
import express from "express"
// 引入下级路由文件
import test from "./test"

// 创建路由
const router = express.Router()
// 挂载路由
router.use("/test", test)

// 导出路由
export default router