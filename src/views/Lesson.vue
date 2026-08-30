<script setup>
// ============================================================
// 课时页：展示一节课的完整教学内容，并支持上一课 / 下一课切换
// ============================================================
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getLessonById, getNeighbors } from '../data'
import SectionRenderer from '../components/SectionRenderer.vue'

const route = useRoute()
const router = useRouter()

// 根据路由参数查找课时（找不到则回首页）
const current = computed(() => {
  const found = getLessonById(route.params.id)
  if (!found) router.replace('/')
  return found
})

// 计算上一课 / 下一课，用于页面底部导航
const neighbors = computed(() =>
  current.value ? getNeighbors(current.value.lesson.id) : { prev: null, next: null }
)

// 路由参数变化时同步修改浏览器标签页标题
watch(
  () => route.params.id,
  () => {
    if (current.value) document.title = `${current.value.lesson.title} - IT 学习中心`
  },
  { immediate: true }
)

// 切换课时的公共方法
function go(id) {
  if (id) router.push(`/lesson/${id}`)
}
</script>

<template>
  <div v-if="current">
    <!-- 面包屑导航：分类 > 章节 > 课时 -->
    <div class="crumbs">
      <RouterLink :to="`/category/${current.category.id}`">
        {{ current.category.name }}
      </RouterLink>
      <span class="sep">/</span>
      <span>{{ current.chapter.title }}</span>
      <span class="sep">/</span>
      <span class="cur">{{ current.lesson.title }}</span>
    </div>

    <!-- 课时标题 -->
    <h1 class="page-title lesson-title">{{ current.lesson.title }}</h1>

    <!-- 教学内容主体 -->
    <article class="card lesson-body">
      <SectionRenderer :sections="current.lesson.sections" />
    </article>

    <!-- 上一课 / 下一课导航 -->
    <div class="lesson-nav">
      <button class="btn" :disabled="!neighbors.prev" @click="go(neighbors.prev && neighbors.prev.id)">
        &lt; 上一课{{ neighbors.prev ? `：${neighbors.prev.title}` : '' }}
      </button>
      <button class="btn btn-primary" :disabled="!neighbors.next" @click="go(neighbors.next && neighbors.next.id)">
        {{ neighbors.next ? `下一课：${neighbors.next.title}` : '已是最后一课' }} &gt;
      </button>
    </div>
  </div>
</template>

<style scoped>
.crumbs {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 12px;
}

.crumbs .sep {
  margin: 0 6px;
}

.crumbs .cur {
  color: var(--text);
}

.lesson-title {
  font-size: 22px;
  margin-bottom: 16px;
}

.lesson-body {
  min-height: 300px;
}

.lesson-nav {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 20px;
}

.lesson-nav .btn {
  max-width: 48%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
