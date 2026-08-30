// ============================================================
// 应用入口：创建 Vue 应用、注册路由并挂载到页面
// ============================================================
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' // 全局样式

// 创建应用实例 -> 挂载路由 -> 渲染到 index.html 的 #app 节点
createApp(App).use(router).mount('#app')
