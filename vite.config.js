// ============================================================
// Vite 配置文件：开发服务器与构建的基本设置
// 注：GitHub Pages 部署需要设置 base 为仓库名，如 /it-study/。
// 用法：
//   npm run build                本地预览 / 自定义服务器  →  base = '/'
//   VITE_BASE=/your-repo/ npm run build   GitHub Pages 子路径
// ============================================================
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 读取环境变量 VITE_BASE，未设置则回退到 '/'（本地默认）
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  // 资源前缀：GitHub Pages 子路径部署时必须写成 /仓库名/，两端斜杠都不能少
  base,

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
