<script setup>
// ============================================================
// 综合测试页
// 流程：配置（选择范围与题数）-> 逐题作答 -> 交卷 -> 结果与解析
// 题型：选择题（自动判分）为主，主观题（对照参考答案自评）为辅
// ============================================================
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { quizQuestions } from '../data/quiz'

const route = useRoute()

/* ---------- 阶段控制：config 配置 / run 作答 / result 结果 ---------- */
const stage = ref('config')

/* ---------- 配置项 ---------- */
const range = ref(route.query.range || 'all') // 测试范围：all / html / css / js
const count = ref(10)                          // 题目数量：10 / 20 / 0 表示全部

// 按范围筛选题库（只取选择题部分用于自动判分；主观题按比例追加到末尾）
const choicePool = computed(() =>
  quizQuestions.filter((q) => q.type === 'choice' && (range.value === 'all' || q.category === range.value))
)
const subjectivePool = computed(() =>
  quizQuestions.filter((q) => q.type === 'subjective' && (range.value === 'all' || q.category === range.value))
)

// 打乱数组（Fisher-Yates 洗牌算法）
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// 生成一次测试的题目列表：选择题为主体，主观题追加在最后
const paper = ref([]) // 本次试卷
const answers = ref({}) // 用户作答记录 { 题目id: 选项下标或文本 }

// 开始测试：抽题并进入作答阶段
function startQuiz() {
  const total = count.value === 0 ? choicePool.value.length : count.value
  const choices = shuffle(choicePool.value).slice(0, Math.min(total, choicePool.value.length))
  // 主观题最多取 2 道，作为辅助
  const subjective = shuffle(subjectivePool.value).slice(0, 2)
  // 题库数据没有 id 字段，这里按位置生成唯一 id，保证每道题的答案独立存储
  paper.value = [...choices, ...subjective].map((item, i) => ({ ...item, id: `q${i + 1}` }))
  answers.value = {}
  current.value = 0
  stage.value = 'run'
}

/* ---------- 作答状态 ---------- */
const current = ref(0) // 当前题目下标
const q = computed(() => paper.value[current.value])

// 选择题作答
function pick(idx) {
  answers.value[q.value.id] = idx
}

// 主观题作答（textarea 双向绑定）
function onSubjectiveInput(e) {
  answers.value[q.value.id] = e.target.value
}

// 是否最后一题
const isLast = computed(() => current.value === paper.value.length - 1)

// 已作答的题目数量（用于进度展示）
const answeredCount = computed(
  () => paper.value.filter((item) => answers.value[item.id] !== undefined).length
)

// 交卷：进入结果页
function submitQuiz() {
  stage.value = 'result'
}

/* ---------- 结果统计 ---------- */
// 选择题得分情况
const result = computed(() => {
  const choices = paper.value.filter((item) => item.type === 'choice')
  const right = choices.filter((item) => answers.value[item.id] === item.answer).length
  return { total: choices.length, right, wrong: choices.length - right }
})

// 分类名称映射（展示用）
const catNames = { html: 'HTML', css: 'CSS', js: 'JavaScript', vue: 'Vue', java: 'Java', python: 'Python', pg: 'PostgreSQL', all: '综合' }

// 测试范围选项（与题库的分类对应）
const rangeOptions = ['all', 'html', 'css', 'js', 'vue', 'java', 'python', 'pg']
</script>

<template>
  <div>
    <h1 class="page-title">综合测试</h1>
    <p class="page-desc">选择题自动判分，主观题请对照参考答案自评。</p>

    <!-- ========== 阶段一：测试配置 ========== -->
    <div v-if="stage === 'config'" class="card quiz-card">
      <!-- 范围选择 -->
      <div class="field">
        <p class="field-label">测试范围</p>
        <div class="options">
          <label v-for="r in rangeOptions" :key="r" class="option"
            :class="{ active: range === r }">
            <input type="radio" :value="r" v-model="range" />
            {{ catNames[r] }}
          </label>
        </div>
      </div>

      <!-- 题量选择 -->
      <div class="field">
        <p class="field-label">题目数量</p>
        <div class="options">
          <label v-for="n in [10, 20, 0]" :key="n" class="option" :class="{ active: count === n }">
            <input type="radio" :value="n" v-model="count" />
            {{ n === 0 ? '全部' : `${n} 题` }}
          </label>
        </div>
      </div>

      <button class="btn btn-primary" @click="startQuiz">开始测试</button>
    </div>

    <!-- ========== 阶段二：逐题作答 ========== -->
    <div v-else-if="stage === 'run' && q" class="card quiz-card">
      <!-- 进度信息 -->
      <div class="progress-info">
        <span>第 {{ current + 1 }} / {{ paper.length }} 题</span>
        <span class="progress-tag" :class="`cat-${q.category}`">{{ catNames[q.category] }}</span>
        <span>{{ q.type === 'choice' ? '选择题' : '主观题' }}</span>
      </div>

      <!-- 题目 -->
      <p class="question">{{ q.question }}</p>

      <!-- 选择题选项 -->
      <div v-if="q.type === 'choice'" class="options vertical">
        <label v-for="(opt, idx) in q.options" :key="idx" class="option"
          :class="{ active: answers[q.id] === idx }">
          <input type="radio" :name="q.id" :checked="answers[q.id] === idx" @change="pick(idx)" />
          {{ String.fromCharCode(65 + idx) }}. {{ opt }}
        </label>
      </div>

      <!-- 主观题作答区 -->
      <textarea v-else class="subjective-input" rows="6"
        placeholder="在此输入你的答案（不参与自动评分，交卷后可对照参考答案自评）"
        :value="answers[q.id] || ''" @input="onSubjectiveInput"></textarea>

      <!-- 上一题 / 下一题 / 交卷 -->
      <div class="quiz-nav">
        <button class="btn" :disabled="current === 0" @click="current--">上一题</button>
        <span class="answered-tip">已答 {{ answeredCount }} / {{ paper.length }}</span>
        <button v-if="!isLast" class="btn btn-primary" @click="current++">下一题</button>
        <button v-else class="btn btn-primary" @click="submitQuiz">交卷</button>
      </div>
    </div>

    <!-- ========== 阶段三：结果与解析 ========== -->
    <div v-else-if="stage === 'result'">
      <!-- 成绩卡片 -->
      <div class="card score-card">
        <p class="score-main">{{ result.right }} / {{ result.total }}</p>
        <p class="score-sub">选择题答对 {{ result.right }} 题，答错 {{ result.wrong }} 题</p>
        <p class="score-rate">正确率 {{ result.total ? Math.round((result.right / result.total) * 100) : 0 }}%</p>
        <button class="btn btn-primary" @click="stage = 'config'">再测一次</button>
      </div>

      <!-- 逐题解析 -->
      <div v-for="(item, idx) in paper" :key="item.id" class="card review-card">
        <p class="review-q">
          {{ idx + 1 }}. {{ item.question }}
          <span class="progress-tag" :class="`cat-${item.category}`">{{ catNames[item.category] }}</span>
        </p>

        <!-- 选择题：显示你的答案、正确答案与解析 -->
        <template v-if="item.type === 'choice'">
          <p class="review-line">
            你的答案：
            <b :class="answers[item.id] === item.answer ? 'ok' : 'bad'">
              {{ answers[item.id] !== undefined ? String.fromCharCode(65 + answers[item.id]) + '. ' + item.options[answers[item.id]] : '未作答' }}
            </b>
          </p>
          <p v-if="answers[item.id] !== item.answer" class="review-line ok">
            正确答案：{{ String.fromCharCode(65 + item.answer) }}. {{ item.options[item.answer] }}
          </p>
          <p class="review-exp">解析：{{ item.explanation }}</p>
        </template>

        <!-- 主观题：显示你的作答与参考答案 -->
        <template v-else>
          <p class="review-line">你的作答：</p>
          <p class="review-self">{{ answers[item.id] || '（未作答）' }}</p>
          <p class="review-line ok">参考答案：</p>
          <p class="review-ref">{{ item.reference }}</p>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quiz-card,
.score-card {
  max-width: 720px;
}

.field {
  margin-bottom: 18px;
}

.field-label {
  font-weight: 600;
  margin-bottom: 8px;
}

.options {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.options.vertical {
  flex-direction: column;
}

/* 选项样式：可点击的圆角块 */
.option {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 9px 14px;
  cursor: pointer;
  font-size: 14.5px;
  transition: all 0.12s;
  user-select: none;
}

.option:hover {
  border-color: var(--accent);
}

.option.active {
  border-color: var(--accent);
  background: var(--accent-light);
  color: var(--accent);
}

.option input {
  display: none; /* 隐藏原生单选框，用样式块代替 */
}

/* 作答区 */
.progress-info {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--muted);
  font-size: 13px;
  margin-bottom: 14px;
}

.progress-tag {
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 12px;
  background: #f3f4f6;
  color: var(--muted);
}

.progress-tag.cat-html { background: #fee2e2; color: #b91c1c; }
.progress-tag.cat-css  { background: #dbeafe; color: #1d4ed8; }
.progress-tag.cat-js   { background: #fef3c7; color: #b45309; }
.progress-tag.cat-java    { background: #ccfbf1; color: #0f766e; }
.progress-tag.cat-python  { background: #ede9fe; color: #7c3aed; }
.progress-tag.cat-pg      { background: #dbeafe; color: #336791; }
.progress-tag.cat-vue     { background: #dcfce7; color: #16a34a; }

.question {
  font-size: 16.5px;
  font-weight: 600;
  margin-bottom: 16px;
}

.subjective-input {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
}

.subjective-input:focus {
  outline: none;
  border-color: var(--accent);
}

.quiz-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.answered-tip {
  color: var(--muted);
  font-size: 13px;
}

/* 成绩卡片 */
.score-card {
  text-align: center;
  padding: 32px 20px;
  margin-bottom: 16px;
}

.score-main {
  font-size: 40px;
  font-weight: 700;
  color: var(--accent);
}

.score-sub {
  color: var(--muted);
  margin: 6px 0 2px;
}

.score-rate {
  margin-bottom: 16px;
}

/* 解析列表 */
.review-card {
  max-width: 720px;
  margin-bottom: 12px;
}

.review-q {
  font-weight: 600;
  margin-bottom: 8px;
}

.review-line {
  font-size: 14px;
  margin: 4px 0;
}

.review-exp {
  font-size: 13.5px;
  color: var(--muted);
  background: #f9fafb;
  border-radius: 6px;
  padding: 8px 12px;
  margin-top: 8px;
}

.review-self,
.review-ref {
  font-size: 14px;
  background: #f9fafb;
  border-radius: 6px;
  padding: 8px 12px;
  margin: 4px 0 8px;
  white-space: pre-wrap;
}

.ok { color: #16a34a; }
.bad { color: #dc2626; }
</style>
