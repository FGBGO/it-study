<script setup>
// ============================================================
// 代码块组件：带标题栏与复制按钮，用于展示示例代码
// ============================================================
import { ref } from 'vue'

// 组件参数说明
const props = defineProps({
  code: { type: String, default: '' },  // 代码内容
  lang: { type: String, default: '' },  // 语言（如 html / css / js）
  title: { type: String, default: '' }  // 可选的示例标题
})

const copied = ref(false) // 是否复制成功（用于按钮文案变化）

// 复制代码到剪贴板
async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    // 1.5 秒后恢复按钮文案
    setTimeout(() => (copied.value = false), 1500)
  } catch (e) {
    // 个别环境下剪贴板不可用，忽略即可
  }
}
</script>

<template>
  <div class="code-block">
    <!-- 标题栏：显示示例标题 / 语言，右侧为复制按钮 -->
    <div class="code-block__bar">
      <span>{{ title || lang || '代码' }}</span>
      <button class="code-block__copy" @click="copyCode">
        {{ copied ? '已复制' : '复制' }}
      </button>
    </div>
    <!-- 代码主体：pre 保留换行与缩进 -->
    <pre class="code-block__pre"><code>{{ code }}</code></pre>
  </div>
</template>
