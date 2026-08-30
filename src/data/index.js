// ============================================================
// 教学数据入口：汇总所有分类，并提供查找工具函数
// 每个分类是一个独立的 JS 文件（html.js / css.js / js.js），
// 后续新增技能时在此处引入并加入 categories 数组即可
// ============================================================
import htmlData from './html.js'
import cssData from './css.js'
import jsData from './js.js'

// 所有教学分类
export const categories = [htmlData, cssData, jsData]

// ------------------------------------------------------------
// 构建「课时 id -> 课时信息」的扁平索引，方便路由快速查找
// ------------------------------------------------------------
const lessonIndex = new Map()

categories.forEach((cat) => {
  cat.chapters.forEach((chapter) => {
    chapter.lessons.forEach((lesson) => {
      lessonIndex.set(lesson.id, { lesson, chapter, category: cat })
    })
  })
})

/**
 * 根据课时 id 查找课时及其所属章节、分类
 */
export function getLessonById(id) {
  return lessonIndex.get(id) || null
}

/**
 * 获取某个课时的上一课 / 下一课（按分类内顺序）
 * 返回 { prev, next }，不存在的一侧为 null
 */
export function getNeighbors(id) {
  const cat = lessonIndex.get(id)?.category
  if (!cat) return { prev: null, next: null }

  // 把该分类所有章节的课时拉平成一条序列
  const flat = cat.chapters.flatMap((ch) => ch.lessons)
  const idx = flat.findIndex((l) => l.id === id)
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null
  }
}
