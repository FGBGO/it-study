// ============================================================
// 路由配置：定义页面之间的跳转关系
// 使用 hash 模式（地址带 #），无需服务器额外配置，本地运行更稳定
// ============================================================
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'       // 首页：分类导航
import Category from '../views/Category.vue' // 分类页：章节与课时列表
import Lesson from '../views/Lesson.vue'   // 课时页：具体教学内容
import Quiz from '../views/Quiz.vue'       // 综合测试页

const routes = [
  // 首页
  { path: '/', name: 'home', component: Home },
  // 某个技能分类，例如 /#/category/html
  { path: '/category/:id', name: 'category', component: Category },
  // 具体课时，例如 /#/lesson/html-what-is
  { path: '/lesson/:id', name: 'lesson', component: Lesson },
  // 综合测试
  { path: '/quiz', name: 'quiz', component: Quiz },
  // 未匹配的地址统一回到首页
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 每次切换页面自动回到顶部
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
