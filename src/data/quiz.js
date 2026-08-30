// ============================================================
// 综合测试题库
// 题目字段说明：
//   type       choice 选择题 / subjective 主观题
//   category   html / css / js（用于按范围抽题）
//   question   题干
//   options    选择题的选项数组（主观题无此字段）
//   answer     选择题正确答案的下标（从 0 开始）
//   explanation 选择题解析
//   reference  主观题参考答案
// ============================================================
export const quizQuestions = [
  // ---------- 占位示例（稍后填充完整题库） ----------
  {
    type: 'choice',
    category: 'html',
    question: '占位测试题：HTML 的中文含义是？',
    options: ['超文本标记语言', '层叠样式表', '脚本语言', '数据库'],
    answer: 0,
    explanation: 'HTML（HyperText Markup Language）即超文本标记语言。'
  },
  {
    type: 'subjective',
    category: 'html',
    question: '占位主观题：简述 HTML 的作用。',
    reference: 'HTML 用于描述网页的结构和内容，通过各种标签组织文字、图片、链接等元素。'
  }
]
