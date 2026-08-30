// ============================================================
// Vite 配置文件：开发服务器与构建的基本设置
// ============================================================
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // 使用 Vue 单文件组件支持插件
  plugins: [vue()],

  // 开发服务器设置
  server: {
    port: 5173,        // 固定端口，关闭脚本 stop.bat 依赖该端口查找进程
    strictPort: true,  // 端口被占用时直接报错退出，而不是悄悄换端口（否则 stop.bat 会找不到服务）
    host: '127.0.0.1', // 仅本机访问，适合个人使用
    open: false        // 不自动打开浏览器，由启动脚本提示访问地址
  }
})
