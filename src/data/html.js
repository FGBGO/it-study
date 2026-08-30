// ============================================================
// HTML 分类教学数据
// 结构说明：
//   chapters  章节（用于把知识点分组成体系）
//     lessons 课时（每个知识点一课）
//       sections 内容块数组，type 可选：
//         text  文本段落（支持 **加粗**、`行内代码`）
//         list  要点列表 { title?, items }
//         code  代码示例 { title?, lang, code }
//         tip   学习提示 { content }
//         warn  易错提醒 { content }
//         table 对照表格 { title?, headers, rows }
// ============================================================
export default {
  id: 'html',
  name: 'HTML',
  short: 'H',
  color: '#e34f26',
  description: '网页的骨架：负责搭建页面的结构与内容',
  chapters: [
    {
      id: 'html-ch1',
      title: '第一章 HTML 入门',
      lessons: [
        {
          id: 'html-what-is',
          title: '什么是 HTML（占位）',
          sections: [
            { type: 'text', content: '占位内容，稍后填充完整教学数据。' }
          ]
        }
      ]
    }
  ]
}
