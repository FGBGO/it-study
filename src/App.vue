<script setup>
// ============================================================
// 根组件：负责整体页面框架（顶部导航 + 内容区 + 页脚）
// 每个具体页面由 <RouterView> 根据路由动态渲染
// ============================================================
</script>

<template>
  <!-- 顶部导航栏 -->
  <header class="site-header">
    <div class="header-inner">
      <!-- 站点 Logo，点击回到首页 -->
      <RouterLink to="/" class="logo">IT <span>学习中心</span></RouterLink>

      <!-- 主导航：技能分类 + 综合测试（新增分类时在这里加一项） -->
      <nav class="main-nav">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/category/html">HTML</RouterLink>
        <RouterLink to="/category/css">CSS</RouterLink>
        <RouterLink to="/category/js">JavaScript</RouterLink>
        <RouterLink to="/category/vue">Vue</RouterLink>
        <RouterLink to="/category/java">Java</RouterLink>
        <RouterLink to="/category/python">Python</RouterLink>
        <RouterLink to="/category/pg">PostgreSQL</RouterLink>
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
    IT 学习中心 · 个人学习使用 · HTML / CSS / JavaScript / Vue / Java / Python / PostgreSQL
  </footer>
</template>
