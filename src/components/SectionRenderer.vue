<script setup>
// ============================================================
// 教学内容渲染组件：按 section 的 type 渲染不同形式的内容
// 支持的类型：
//   text  文本段落（支持 **加粗**、`行内代码`）
//   list  要点列表（title 可选，items 为数组）
//   code  代码示例（code / lang / title）
//   tip   学习提示（蓝色框）
//   warn  易错提醒（黄色框）
//   table 对照表格（headers 表头数组，rows 行数组）
// ============================================================
import CodeBlock from './CodeBlock.vue'
import { renderInline } from '../utils/format.js'

// 接收当前课时的全部内容块
defineProps({
  sections: { type: Array, default: () => [] }
})
</script>

<template>
  <div class="sections">
    <template v-for="(s, i) in sections" :key="i">
      <!-- 文本段落 -->
      <p v-if="s.type === 'text'" class="sec-text" v-html="renderInline(s.content)"></p>

      <!-- 要点列表 -->
      <div v-else-if="s.type === 'list'" class="sec-list">
        <p v-if="s.title" class="sec-list-title" v-html="renderInline(s.title)"></p>
        <ul>
          <li v-for="(item, j) in s.items" :key="j" v-html="renderInline(item)"></li>
        </ul>
      </div>

      <!-- 代码示例 -->
      <CodeBlock
        v-else-if="s.type === 'code'"
        :code="s.code"
        :lang="s.lang"
        :title="s.title"
      />

      <!-- 提示框 -->
      <div v-else-if="s.type === 'tip'" class="sec-tip">
        <span class="sec-tag">提示</span><span v-html="renderInline(s.content)"></span>
      </div>

      <!-- 注意框 -->
      <div v-else-if="s.type === 'warn'" class="sec-warn">
        <span class="sec-tag">注意</span><span v-html="renderInline(s.content)"></span>
      </div>

      <!-- 对照表格 -->
      <div v-else-if="s.type === 'table'">
        <p v-if="s.title" class="sec-list-title" v-html="renderInline(s.title)"></p>
        <table class="sec-table">
          <thead>
            <tr>
              <th v-for="(h, k) in s.headers" :key="k" v-html="renderInline(h)"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, r) in s.rows" :key="r">
              <td v-for="(cell, c) in row" :key="c" v-html="renderInline(cell)"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>
