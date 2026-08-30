// ============================================================
// 格式化工具：处理教学内容中的内联标记
// 支持两种简单标记：**加粗** 与 `行内代码`
// ============================================================

/**
 * 转义 HTML 特殊字符
 * 防止教学文本中出现的 <、> 等符号被浏览器当作标签执行
 */
export function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * 渲染内联标记为安全的 HTML
 * 流程：先转义特殊字符，再把 **加粗** 和 `行内代码` 替换为对应标签
 */
export function renderInline(str = '') {
  let s = escapeHtml(str)
  // `代码` -> <code class="inline-code">代码</code>
  s = s.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
  // **文字** -> <strong>文字</strong>
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  return s
}
