<script setup>
// ============================================================
// 分类页：展示某个技能（HTML/CSS/JS）下的章节与课时列表
// ============================================================
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { categories } from '../data'

const route = useRoute()
const router = useRouter()

// 根据路由参数找到对应分类；找不到则回首页
const category = computed(() => {
  const cat = categories.find((c) => c.id === route.params.id)
  if (!cat) router.replace('/')
  return cat
})

// 统计课时总数
const lessonCount = computed(() =>
  category.value
    ? category.value.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0)
    : 0
)
</script>

<template>
  <div v-if="category">
    <!-- 分类标题区 -->
    <div class="cat-head">
      <div class="cat-badge" :style="{ background: category.color }">
        {{ category.short }}
      </div>
      <div>
        <h1 class="page-title">{{ category.name }}</h1>
        <p class="page-desc">{{ category.description }} · 共 {{ lessonCount }} 个知识点</p>
      </div>
    </div>

    <!-- 章节列表：每章一张卡片，内含课时链接 -->
    <section v-for="chapter in category.chapters" :key="chapter.id" class="card chapter">
      <h2 class="chapter-title">{{ chapter.title }}</h2>
      <ul class="lesson-list">
        <li v-for="lesson in chapter.lessons" :key="lesson.id">
          <RouterLink :to="`/lesson/${lesson.id}`" class="lesson-link">
            {{ lesson.title }}
            <span class="arrow">&gt;</span>
          </RouterLink>
        </li>
      </ul>
    </section>

    <!-- 底部：去测试该分类 -->
    <div class="cat-footer">
      <RouterLink :to="`/quiz?range=${category.id}`" class="btn btn-primary">
        测试 {{ category.name }} 掌握情况
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.cat-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}

.cat-badge {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.chapter {
  margin-bottom: 16px;
}

.chapter-title {
  font-size: 16px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--border);
  color: var(--accent);
}

.lesson-list {
  list-style: none;
  padding: 0;
}

.lesson-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 10px;
  border-radius: 8px;
  color: var(--text);
  font-size: 14.5px;
  transition: all 0.12s;
}

.lesson-link:hover {
  background: var(--accent-light);
  color: var(--accent);
}

.arrow {
  color: var(--muted);
  font-size: 12px;
}

.cat-footer {
  text-align: center;
  margin-top: 24px;
}
</style>
