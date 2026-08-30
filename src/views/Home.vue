<script setup>
// ============================================================
// 首页：展示学习分类入口与综合测试入口
// ============================================================
import { computed } from 'vue'
import { categories } from '../data'

// 统计每个分类的课时数量，显示在卡片上
const categoryCards = computed(() =>
  categories.map((cat) => ({
    ...cat,
    // 把所有章节下的课时数量相加
    lessonCount: cat.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0)
  }))
)
</script>

<template>
  <div>
    <!-- 欢迎语 -->
    <section class="card hero">
      <h1 class="page-title">欢迎来到 IT 学习中心</h1>
      <p class="page-desc">
        这里是一套为个人学习整理的编程教程，涵盖前端三件套
        <strong>HTML</strong>、<strong>CSS</strong>、<strong>JavaScript</strong>，
        前端框架 <strong>Vue</strong>，后端语言 <strong>Java</strong>、
        <strong>Spring Boot</strong>、<strong>Python</strong>，
        以及数据库 <strong>PostgreSQL</strong>。
        每个知识点都配有讲解、要点总结和可复制的代码示例，
        学完后可以通过「综合测试」检验学习成果。
      </p>
      <p class="page-desc">
        建议路线：先学 <strong>HTML</strong> + <strong>CSS</strong> + <strong>JavaScript</strong> 打好基础，
        再学 <strong>Vue</strong> 进入现代前端开发；后端走 <strong>Java</strong> + <strong>Spring Boot</strong>
        或 <strong>Python</strong>，配合 <strong>PostgreSQL</strong> 掌握数据存储与查询。
      </p>
    </section>

    <!-- 技能分类卡片 -->
    <section class="grid">
      <RouterLink
        v-for="cat in categoryCards"
        :key="cat.id"
        :to="`/category/${cat.id}`"
        class="card cat-card"
      >
        <div class="cat-badge" :style="{ background: cat.color }">{{ cat.short }}</div>
        <h2>{{ cat.name }}</h2>
        <p class="page-desc">{{ cat.description }}</p>
        <span class="cat-count">共 {{ cat.lessonCount }} 个知识点</span>
      </RouterLink>
    </section>

    <!-- 综合测试入口 -->
    <section class="card quiz-entry">
      <div>
        <h2>综合测试</h2>
        <p class="page-desc">
          选择题为主、主观题为辅，覆盖 HTML / CSS / JS 全部知识点，
          用来检验阶段学习成果。
        </p>
      </div>
      <RouterLink to="/quiz" class="btn btn-primary">开始测试</RouterLink>
    </section>
  </div>
</template>

<style scoped>
/* 首页专属样式（scoped 只作用于本组件） */
.hero {
  margin-bottom: 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.cat-card {
  display: block;
  color: var(--text);
  transition: all 0.15s;
}

.cat-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.08);
}

.cat-card h2 {
  margin: 12px 0 4px;
  font-size: 18px;
}

.cat-badge {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}

.cat-count {
  font-size: 13px;
  color: var(--accent);
}

.quiz-entry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

/* 手机上分类卡片变为一列 */
@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
