<script setup>
// ============================================================
// 根组件：负责整体页面框架（顶部导航 + 内容区 + 页脚）
// 每个具体页面由 <RouterView> 根据路由动态渲染
// 导航栏把相关分类分组放进下拉菜单，让顶部更简洁
// ============================================================
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 当前展开的下拉菜单名（null 表示全部收起）
const openMenu = ref(null)

// 分类 id -> 下拉分组的映射，用于判断当前页面属于哪个组
const GROUP_MAP = {
  html: 'frontend',
  css: 'frontend',
  js: 'frontend',
  vue: 'frontend',
  uniapp: 'frontend',
  java: 'backend',
  python: 'backend',
  pg: 'backend',
  git: 'tools',
  maven: 'tools'
}

// 当前路由所属分组（用于高亮对应的下拉按钮）
const activeGroup = computed(() => GROUP_MAP[route.params.id] || null)

// 点击按钮：展开或收起对应的下拉菜单
function toggleMenu(name) {
  openMenu.value = openMenu.value === name ? null : name
}

// 点击下拉面板里的链接后收起菜单
function closeMenu() {
  openMenu.value = null
}

// 点击导航以外区域时，收起所有下拉菜单
function onDocClick(e) {
  if (!e.target.closest('.nav-dropdown')) openMenu.value = null
}

// 组件挂载后监听全局点击，卸载前移除监听
onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))
</script>

<template>
  <!-- 顶部导航栏 -->
  <header class="site-header">
    <div class="header-inner">
      <!-- 站点 Logo，点击回到首页 -->
      <RouterLink to="/" class="logo">IT <span>学习中心</span></RouterLink>

      <!-- 主导航：相关分类分组下拉（新增分类时在对应分组里加一项） -->
      <nav class="main-nav">
        <RouterLink to="/">首页</RouterLink>

        <!-- 前端开发下拉 -->
        <div
          class="nav-dropdown"
          :class="{ open: openMenu === 'frontend', active: activeGroup === 'frontend' }"
        >
          <button class="nav-drop-btn" type="button" @click="toggleMenu('frontend')">
            前端开发 <span class="caret">▾</span>
          </button>
          <div class="nav-drop-panel">
            <RouterLink to="/category/html" @click="closeMenu">HTML</RouterLink>
            <RouterLink to="/category/css" @click="closeMenu">CSS</RouterLink>
            <RouterLink to="/category/js" @click="closeMenu">JavaScript</RouterLink>
            <RouterLink to="/category/vue" @click="closeMenu">Vue</RouterLink>
            <RouterLink to="/category/uniapp" @click="closeMenu">小程序(uni-app)</RouterLink>
          </div>
        </div>

        <!-- 后端与数据库下拉 -->
        <div
          class="nav-dropdown"
          :class="{ open: openMenu === 'backend', active: activeGroup === 'backend' }"
        >
          <button class="nav-drop-btn" type="button" @click="toggleMenu('backend')">
            后端与数据库 <span class="caret">▾</span>
          </button>
          <div class="nav-drop-panel">
            <RouterLink to="/category/java" @click="closeMenu">Java</RouterLink>
            <RouterLink to="/category/springboot" @click="closeMenu">Spring Boot</RouterLink>
            <RouterLink to="/category/python" @click="closeMenu">Python</RouterLink>
            <RouterLink to="/category/pg" @click="closeMenu">PostgreSQL</RouterLink>
          </div>
        </div>

        <!-- 开发工具下拉 -->
        <div
          class="nav-dropdown"
          :class="{ open: openMenu === 'tools', active: activeGroup === 'tools' }"
        >
          <button class="nav-drop-btn" type="button" @click="toggleMenu('tools')">
            开发工具 <span class="caret">▾</span>
          </button>
          <div class="nav-drop-panel">
            <RouterLink to="/category/git" @click="closeMenu">Git</RouterLink>
            <RouterLink to="/category/maven" @click="closeMenu">Maven</RouterLink>
          </div>
        </div>

        <RouterLink to="/quiz">综合测试</RouterLink>
      </nav>
    </div>
  </header>

  <!-- 页面主体：由路由决定显示哪个视图 -->
  <main class="page-main">
    <RouterView />
  </main>

  <!-- 页脚 -->
  <footer class="site-footer">
    IT 学习中心 · 个人学习使用 · HTML / CSS / JavaScript / Vue / 小程序 / Java / Spring Boot / Python / PostgreSQL / Git / Maven
  </footer>
</template>
