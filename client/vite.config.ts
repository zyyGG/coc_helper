import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:"./", //开发或生产环境服务的公共基础路径
  resolve:{
    alias:{
      '@':resolve(__dirname,'src'), // 路径别名
      '@api':resolve(__dirname,'src/api'),
      '@store':resolve(__dirname,'src/store'),
      '@utils':resolve(__dirname,'src/utils'),
      '@cpt':resolve(__dirname,'src/components'),
      '@ui':resolve(__dirname,'src/ui')
    },
    extensions:[".js",".ts",".json"] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  build:{
    outDir:"../server/public"
  }
})
