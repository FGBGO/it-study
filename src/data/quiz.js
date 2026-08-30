// ============================================================
// 综合测试题库
// 题目字段说明：
//   type        choice 选择题 / subjective 主观题
//   category    html / css / js（用于按范围抽题）
//   question    题干
//   options     选择题的选项数组（主观题无此字段）
//   answer      选择题正确答案的下标（从 0 开始）
//   explanation 选择题解析
//   reference   主观题参考答案
// 出题原则：全部题目都来自本站教学内容，做完可以回对应课时复习
// ============================================================
export const quizQuestions = [
  /* ==================== HTML 选择题 ==================== */
  {
    type: 'choice',
    category: 'html',
    question: 'HTML 的中文全称是？',
    options: ['超文本标记语言', '层叠样式表', '脚本编程语言', '可扩展标记语言'],
    answer: 0,
    explanation: 'HTML（HyperText Markup Language）即超文本标记语言，负责网页的结构。'
  },
  {
    type: 'choice',
    category: 'html',
    question: '防止网页中文乱码，需要设置哪个 meta 标签？',
    options: ['<meta name="viewport">', '<meta charset="UTF-8">', '<meta http-equiv="refresh">', '<meta name="keywords">'],
    answer: 1,
    explanation: '`<meta charset="UTF-8">` 声明字符编码，是每个网页的标配。'
  },
  {
    type: 'choice',
    category: 'html',
    question: '关于标题标签，下列说法正确的是？',
    options: [
      'h1 到 h6 字号逐渐变大',
      '一个页面建议只使用一个 h1',
      'h7 是最小的标题',
      '标题标签只能放英文字母'
    ],
    answer: 1,
    explanation: 'h1 代表页面主标题，语义最重要，一般一个页面只用一次。'
  },
  {
    type: 'choice',
    category: 'html',
    question: '想在段落中强制换行，应该使用哪个标签？',
    options: ['<p>', '<br>', '<hr>', '<span>'],
    answer: 1,
    explanation: '`<br>` 是单标签，用于强制换行；`<hr>` 是水平分隔线。'
  },
  {
    type: 'choice',
    category: 'html',
    question: '想要加粗文字并表达"内容重要"的语义，推荐使用？',
    options: ['<b>', '<strong>', '<bold>', '<big>'],
    answer: 1,
    explanation: '`<strong>` 带有"重要"语义，比纯视觉加粗的 `<b>` 更推荐。'
  },
  {
    type: 'choice',
    category: 'html',
    question: '在 HTML 中显示小于号 <，正确的写法是？',
    options: ['&lt;', '&gt;', '&nbsp;', '&amp;'],
    answer: 0,
    explanation: '`&lt;` 是小于号实体，`&gt;` 是大于号实体。'
  },
  {
    type: 'choice',
    category: 'html',
    question: '关于 ul 无序列表，下列说法错误的是？',
    options: [
      'ul 是列表容器，li 是列表项',
      'ul 的直接子元素只能是 li',
      '导航栏常用 ul + li 搭建',
      'ul 里面必须直接嵌套 a 标签'
    ],
    answer: 3,
    explanation: 'a 标签应写在 li 里面，ul 的直接子元素只能是 li。'
  },
  {
    type: 'choice',
    category: 'html',
    question: '链接在新标签页中打开，应设置哪个属性？',
    options: ['href="_blank"', 'target="_blank"', 'rel="_blank"', 'open="new"'],
    answer: 1,
    explanation: '`target="_blank"` 表示在新窗口/标签页打开。'
  },
  {
    type: 'choice',
    category: 'html',
    question: 'img 标签的 alt 属性作用是？',
    options: [
      '设置图片的加载动画',
      '图片的替换文本：加载失败时显示，也是无障碍必需品',
      '控制图片的模糊程度',
      '设置图片的链接地址'
    ],
    answer: 1,
    explanation: 'alt 是图片描述，加载失败时显示，也供屏幕阅读器朗读。'
  },
  {
    type: 'choice',
    category: 'html',
    question: '图片路径写成 `../images/cat.jpg`，其中 `../` 的含义是？',
    options: ['当前目录', '下一级目录', '上一级目录', '根目录'],
    answer: 2,
    explanation: '`../` 表示上一级目录，`../../` 是上两级。'
  },
  {
    type: 'choice',
    category: 'html',
    question: '合并单元格时，"跨列合并"使用的属性是？',
    options: ['rowspan', 'colspan', 'span', 'merge'],
    answer: 1,
    explanation: '`colspan` 跨列，`rowspan` 跨行；被占的位置不要再写单元格。'
  },
  {
    type: 'choice',
    category: 'html',
    question: '表单中的控件如果不写 name 属性，提交时会发生什么？',
    options: [
      '数据正常提交',
      '该控件的数据不会被提交',
      '表单会报错',
      '浏览器会自动补上 name'
    ],
    answer: 1,
    explanation: 'name 是提交数据的键名，没有 name 的控件数据不会随表单提交。'
  },
  {
    type: 'choice',
    category: 'html',
    question: '多个单选框要实现"只能选一个"，必须保证？',
    options: [
      '它们的 id 相同',
      '它们的 value 相同',
      '它们的 name 相同',
      '它们的 class 相同'
    ],
    answer: 2,
    explanation: 'radio 同组必须同 name，才能互斥单选；id 反而必须唯一。'
  },
  {
    type: 'choice',
    category: 'html',
    question: '表单中按钮 button 不写 type 属性时，默认是？',
    options: ['button', 'reset', 'submit', 'submit-button'],
    answer: 2,
    explanation: '默认是 submit，容易导致意外提交表单，普通按钮要写 type="button"。'
  },
  {
    type: 'choice',
    category: 'html',
    question: '下列哪个标签表示"页面主要内容"，且一个页面只能有一个？',
    options: ['<section>', '<main>', '<article>', '<aside>'],
    answer: 1,
    explanation: '`<main>` 是页面核心内容区域，每页只能出现一次。'
  },
  {
    type: 'choice',
    category: 'html',
    question: '点击链接跳转到页面内指定位置（锚点），链接的 href 应该写成？',
    options: ['链接到元素所在行号', '# 加上目标元素的 id', 'target 加上元素名', 'scroll 加上数字'],
    answer: 1,
    explanation: '锚点写法：`<a href="#目标id">`，目标元素需要设置对应的 id。'
  },

  /* ==================== CSS 选择题 ==================== */
  {
    type: 'choice',
    category: 'css',
    question: 'CSS 的中文全称是？',
    options: ['超文本标记语言', '层叠样式表', '文档对象模型', '异步脚本语言'],
    answer: 1,
    explanation: 'CSS（Cascading Style Sheets）即层叠样式表，负责网页外观。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '实际开发中最推荐的 CSS 引入方式是？',
    options: ['行内样式', '内部样式', '外部样式表', 'js 动态写入'],
    answer: 2,
    explanation: '外部样式表（link 引入）结构与样式分离、可复用、易维护。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '类选择器的语法是？',
    options: ['#name', '.name', 'name', '*name'],
    answer: 1,
    explanation: '类选择器用点号（.name），id 选择器用井号（#name）。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '选择器 `.nav a` 和 `.nav > a` 的区别是？',
    options: [
      '完全一样',
      '前者选中 .nav 的所有后代 a，后者只选中直接子级 a',
      '前者只选中直接子级 a，后者选中所有后代 a',
      '前者是错误写法'
    ],
    answer: 1,
    explanation: '空格是后代选择器（不管嵌套多深），> 是子代选择器（只取直接子级）。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '鼠标悬停在按钮上时改变背景色，应使用哪个伪类？',
    options: [':hover', ':focus', ':active', ':visited'],
    answer: 0,
    explanation: ':hover 是悬停状态；:focus 是焦点；:active 是按下的瞬间。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '表格斑马纹（偶数行变灰）常用哪个结构伪类？',
    options: [':first-child', ':nth-child(even)', ':last-child', ':only-child'],
    answer: 1,
    explanation: '`nth-child(even)` 选中偶数个子元素，odd 是奇数。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '以下选择器优先级最高的是？',
    options: ['p', '.text', '#intro', 'p.active'],
    answer: 2,
    explanation: 'id（100）> 类（10）> 标签（1），#intro 权重最高。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '十六进制颜色 `#f00` 表示什么颜色？',
    options: ['绿色', '蓝色', '红色', '黑色'],
    answer: 2,
    explanation: '#f00 是 #ff0000 的缩写，红色通道拉满，即红色。'
  },
  {
    type: 'choice',
    category: 'css',
    question: 'rem 这个单位相对于谁？',
    options: ['父元素的字号', '根元素 html 的字号', '视口宽度', '元素自身字号'],
    answer: 1,
    explanation: 'rem 相对根元素 html 的字号（默认 16px）；em 才相对父元素。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '块级元素在父容器中水平居中（有固定宽度），经典写法是？',
    options: [
      'text-align: center',
      'margin: 0 auto',
      'padding: 0 auto',
      'vertical-align: middle'
    ],
    answer: 1,
    explanation: '左右 margin 设为 auto 会自动平分剩余空间，实现水平居中。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '盒模型中，"内容与边框之间"的距离用哪个属性控制？',
    options: ['margin', 'padding', 'border', 'gap'],
    answer: 1,
    explanation: 'padding 是内边距（内容到边框），margin 是外边距（盒子到盒子）。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '全局设置 `box-sizing: border-box` 后，元素的 width 包含？',
    options: [
      '只包含内容',
      '内容 + 内边距 + 边框',
      '内容 + 外边距',
      '内容 + 四个方向的 margin 和 padding'
    ],
    answer: 1,
    explanation: 'border-box 模式下 width = 内容 + padding + border，所见即所得。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '使用 position: absolute 定位时，元素相对于谁定位？',
    options: [
      '永远相对于浏览器窗口',
      '最近的非 static 定位的祖先元素',
      '它的父元素，无论父元素什么定位',
      '文档根节点'
    ],
    answer: 1,
    explanation: 'absolute 相对最近的非 static 祖先；没有就逐级往外，最后相对页面。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '关于三种隐藏元素的方式，下列说法正确的是？',
    options: [
      'display: none 的元素仍占据空间',
      'visibility: hidden 的元素不占空间',
      'opacity: 0 的元素仍占据空间且可交互',
      '三种方式效果完全一样'
    ],
    answer: 2,
    explanation: 'display:none 不占空间；visibility:hidden 占空间但不可交互；opacity:0 占空间且可点击。'
  },
  {
    type: 'choice',
    category: 'css',
    question: 'Flex 布局中，主轴（默认水平方向）的居中对齐用哪个属性？',
    options: ['align-items: center', 'justify-content: center', 'text-align: center', 'align-content: center'],
    answer: 1,
    explanation: 'justify-content 管主轴，align-items 管交叉轴（默认垂直）。'
  },
  {
    type: 'choice',
    category: 'css',
    question: 'Flex 项目设置 `flex: 1` 的效果是？',
    options: [
      '固定不变',
      '自动分配剩余空间（等分放大）',
      '隐藏该项目',
      '把项目移到最前面'
    ],
    answer: 1,
    explanation: '`flex: 1` = 放大 1、缩小 1、基准 0%，即均分剩余空间。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '想让元素"水平垂直双向居中"，最简洁的现代方案是？',
    options: [
      '父级 display:flex + justify-content:center + align-items:center',
      '子级 margin: auto 一个就够了（任何场景）',
      'text-align: center + line-height',
      'float + clear'
    ],
    answer: 0,
    explanation: 'Flex 居中大法：justify-content 管水平，align-items 管垂直。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '悬停时有平滑的颜色渐变效果（而不是瞬间变化），应使用？',
    options: ['animation', 'transition', 'transform', 'filter'],
    answer: 1,
    explanation: 'transition 负责两个状态之间的平滑过渡；animation 负责多关键帧动画。'
  },
  {
    type: 'choice',
    category: 'css',
    question: '媒体查询 `@media (min-width: 768px)` 的含义是？',
    options: [
      '只在 768px 宽时生效',
      '视口宽度大于等于 768px 时生效',
      '视口高度大于 768px 时生效',
      '768px 以下生效'
    ],
    answer: 1,
    explanation: 'min-width 表示"最小宽度"，即 >= 768px 时应用其中的样式。'
  },

  /* ==================== JS 选择题 ==================== */
  {
    type: 'choice',
    category: 'js',
    question: '现代 JavaScript 中声明"不可重新赋值"的常量，应使用？',
    options: ['var', 'let', 'const', 'final'],
    answer: 2,
    explanation: 'const 声明常量，赋值后不能重新赋值；let 声明可变变量。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '`typeof null` 的返回值是？',
    options: ['"null"', '"undefined"', '"object"', '"boolean"'],
    answer: 2,
    explanation: '这是 JS 著名的历史 bug，返回 "object"；判断 null 请用 === null。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '表达式 `"1" + 1` 的结果是？',
    options: ['2', '"11"', 'NaN', '报错'],
    answer: 1,
    explanation: '任何值与字符串相加都会变成字符串拼接，结果为 "11"。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '下列哪个是 JS 中的"假值"？',
    options: ['"0"（非空字符串）', '[]（空数组）', '0（数字零）', '{}（空对象）'],
    answer: 2,
    explanation: '六个假值：false、0、""、null、undefined、NaN；注意 "0"、[]、{} 都是真值。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '比较两个值是否相等，推荐的运算符是？',
    options: ['==', '===', '=', '=>'],
    answer: 1,
    explanation: '=== 严格相等，类型和值都要一样；== 会隐式转换类型，容易出错。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '`10 % 3` 的结果是？',
    options: ['3', '3.33', '1', '0'],
    answer: 2,
    explanation: '% 是取余运算符，10 除以 3 余 1；常用于判断奇偶。'
  },
  {
    type: 'choice',
    category: 'js',
    question: 'switch 语句中漏写 break 会导致？',
    options: [
      '语法错误',
      '穿透到下一个 case 继续执行',
      '自动结束整个 switch',
      '跳过 default'
    ],
    answer: 1,
    explanation: '不写 break 会继续执行下一个 case 的代码，这叫"穿透"。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '循环中"提前结束整个循环"使用的关键字是？',
    options: ['continue', 'break', 'return', 'exit'],
    answer: 1,
    explanation: 'break 结束整个循环；continue 只是跳过本轮、进入下一轮。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '数组 `["a","b","c"]` 的下标范围是？',
    options: ['1 到 3', '0 到 3', '0 到 2', '1 到 2'],
    answer: 2,
    explanation: '数组下标从 0 开始，长度为 3 的数组下标是 0、1、2。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '想在数组尾部追加一个元素，使用哪个方法？',
    options: ['push', 'pop', 'shift', 'unshift'],
    answer: 0,
    explanation: 'push 尾部加，pop 尾部删，unshift 头部加，shift 头部删。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '对数字数组 `[10, 1, 5]` 直接调用 sort() 不传参数，结果是？',
    options: ['[1, 5, 10] 正确排序', '[1, 10, 5] 按字符串排序', '[10, 5, 1]', '报错'],
    answer: 1,
    explanation: 'sort 默认把元素转成字符串比较；数字排序要传比较函数 (a, b) => a - b。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '`map` 方法的作用是？',
    options: [
      '筛选出符合条件的元素',
      '对每个元素加工后返回新数组',
      '把数组汇总成一个值',
      '原地反转数组'
    ],
    answer: 1,
    explanation: 'map 逐个加工并返回新数组；filter 筛选；reduce 汇总。三者都不改原数组。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '对象方法中使用 `this`，它通常指向？',
    options: [
      '全局对象 window',
      '调用该方法的那个对象',
      'undefined',
      '永远指向函数自身'
    ],
    answer: 1,
    explanation: '普通方法中的 this 指向"谁调用就指向谁"，即调用方法的那个对象。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '从对象 `{ name: "小明", age: 18 }` 中用解构取出 name，正确的写法是？',
    options: [
      'let [name] = user;',
      'let { name } = user;',
      'let name = user->name;',
      'let name := user.name;'
    ],
    answer: 1,
    explanation: '对象解构用大括号：`let { name } = user;`，数组解构才是方括号。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '在 DOM 操作中，用 CSS 选择器"选中第一个匹配的元素"的方法是？',
    options: [
      'document.getElementById()',
      'document.querySelector()',
      'document.querySelectorAll()',
      'document.getElementsByTagName()'
    ],
    answer: 1,
    explanation: 'querySelector 返回第一个匹配元素；querySelectorAll 返回所有匹配。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '监听元素点击事件的标准方法是？',
    options: ['onclick 属性（唯一方式）', 'addEventListener("click", fn)', 'listen("click")', 'bindClick(fn)'],
    answer: 1,
    explanation: 'addEventListener 是标准写法，可绑定多个监听器，也更灵活。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '在事件处理函数中，"真正被点击的那个子元素"是？',
    options: ['e.currentTarget', 'e.target', 'this（总是）', 'e.srcElement 只有它对'],
    answer: 1,
    explanation: 'e.target 是实际触发事件的目标元素；e.currentTarget 是绑定监听的元素。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '阻止表单提交时页面刷新，应调用？',
    options: ['e.stopPropagation()', 'e.preventDefault()', 'return false 之外没别的办法', 'window.stop()'],
    answer: 1,
    explanation: 'preventDefault 阻止默认行为；stopPropagation 阻止事件冒泡，两者作用不同。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '`setInterval` 与 `setTimeout` 的核心区别是？',
    options: [
      'setTimeout 重复执行，setInterval 执行一次',
      'setInterval 重复执行，setTimeout 只执行一次',
      '两者完全一样',
      'setTimeout 只能用于动画'
    ],
    answer: 1,
    explanation: 'setInterval 是"闹钟反复响"，setTimeout 是"响一次"；都要记得用对应的 clear 清除。'
  },
  {
    type: 'choice',
    category: 'js',
    question: '把对象存入 localStorage 前，必须先做哪一步？',
    options: [
      '用 JSON.stringify 转成字符串',
      '用 toString() 转换',
      '压缩对象',
      '不需要任何处理，直接存'
    ],
    answer: 0,
    explanation: 'localStorage 只能存字符串，对象要用 JSON.stringify 序列化，取出时 JSON.parse。'
  },
  {
    type: 'choice',
    category: 'js',
    question: 'async 函数内部，等待一个 Promise 出结果的关键字是？',
    options: ['yield', 'await', 'async', 'defer'],
    answer: 1,
    explanation: 'await 会"暂停"等待 Promise 完成，让异步代码读起来像同步代码。'
  },

  /* ==================== Java 选择题 ==================== */
  {
    type: 'choice',
    category: 'java',
    question: '关于 JDK、JRE、JVM 三者关系，正确的是？',
    options: ['JVM 包含 JDK', 'JDK 包含 JRE，JRE 包含 JVM', '三者互不相关', 'JRE 包含 JDK'],
    answer: 1,
    explanation: 'JDK（开发工具包）= JRE + 编译器等工具；JRE（运行环境）= JVM + 核心类库。写代码必须装 JDK。'
  },
  {
    type: 'choice',
    category: 'java',
    question: 'Java 程序的入口 main 方法的正确写法是？',
    options: [
      'public void main(String args)',
      'static void Main()',
      'public static void main(String[] args)',
      'void main(String[] args)'
    ],
    answer: 2,
    explanation: '固定格式：public static void main(String[] args)，一个字母都不能错，JVM 从这里开始执行。'
  },
  {
    type: 'choice',
    category: 'java',
    question: 'System.out.println(10 / 3) 的输出结果是？',
    options: ['3.33', '3', '3.0', '4'],
    answer: 1,
    explanation: '两个整数相除只保留整数部分，结果是 3；想得到小数至少一方要是浮点数。'
  },
  {
    type: 'choice',
    category: 'java',
    question: '声明一个 long 类型的变量并直接赋大数值，末尾需要加什么？',
    options: ['加 L', '加 l 或不加都行', '加 D', '不需要任何后缀'],
    answer: 0,
    explanation: 'long 字面量结尾要加 L（推荐大写，小写 l 容易和 1 混淆）；float 则加 F。'
  },
  {
    type: 'choice',
    category: 'java',
    question: '比较两个字符串的内容是否相等，正确的写法是？',
    options: ['s1 == s2', 's1.equals(s2)', 's1 = s2', 'compare(s1, s2)'],
    answer: 1,
    explanation: '== 比较的是引用地址，equals() 才比较内容。这是 Java 最经典的易错点。'
  },
  {
    type: 'choice',
    category: 'java',
    question: '关于方法重载（Overload），下列说法正确的是？',
    options: [
      '重载要求方法名和参数列表完全相同',
      '改变返回值类型就能构成重载',
      '重载要求方法名相同、参数列表不同，与返回值无关',
      '重载必须发生在父子类之间'
    ],
    answer: 2,
    explanation: '重载看参数（个数或类型不同），不看返回值；发生在同一个类里。重写（Override）才发生在父子类之间。'
  },
  {
    type: 'choice',
    category: 'java',
    question: '关于构造方法，下列说法错误的是？',
    options: [
      '构造方法名必须与类名相同',
      '构造方法没有返回值类型，也不能写 void',
      '如果自己写了有参构造，无参构造会自动保留',
      '构造方法在创建对象（new）时自动执行'
    ],
    answer: 2,
    explanation: '一旦自己写了有参构造，编译器赠送的无参构造就消失了，需要时要自己补写。'
  },
  {
    type: 'choice',
    category: 'java',
    question: '多态写法 Animal a = new Dog() 中，调用 a.eat() 时？',
    options: [
      '编译看左边（父类），运行看右边（实际执行子类重写的方法）',
      '编译和运行都看右边',
      '只能执行父类的方法体',
      '编译和运行都看左边'
    ],
    answer: 0,
    explanation: '编译期检查父类是否有该方法（没有就报错），运行时执行的是子类重写后的版本。'
  },
  {
    type: 'choice',
    category: 'java',
    question: '关于抽象类，下列说法正确的是？',
    options: [
      '抽象类可以被直接 new 出来',
      '抽象类不能有构造方法',
      '抽象类不能被实例化，只能被继承',
      '有抽象方法的类可以不是抽象类'
    ],
    answer: 2,
    explanation: '抽象类不能 new，但有构造方法供子类 super 调用；有抽象方法的类必须是抽象类。'
  },
  {
    type: 'choice',
    category: 'java',
    question: '需要存储一组"不允许重复"的元素，应该使用哪个集合？',
    options: ['ArrayList', 'HashSet', 'HashMap', 'LinkedList'],
    answer: 1,
    explanation: 'Set 的特点是不允许重复；List 有序可重复；Map 是键值对。'
  },

  /* ==================== Python 选择题 ==================== */
  {
    type: 'choice',
    category: 'python',
    question: 'input() 函数读取到的用户输入是什么类型？',
    options: ['整数 int', '字符串 str', '浮点数 float', '取决于用户输入的内容'],
    answer: 1,
    explanation: 'input() 永远返回字符串，"5" 不能直接做算术，要先 int() 转换。'
  },
  {
    type: 'choice',
    category: 'python',
    question: '表达式 7 // 2 的结果是？',
    options: ['3.5', '3', '4', '1'],
    answer: 1,
    explanation: '// 是整除（向下取整）得 3；/ 是普通除法得 3.5；% 是取余得 1。'
  },
  {
    type: 'choice',
    category: 'python',
    question: '表达式 2 ** 10 的结果是？',
    options: ['20', '12', '1024', '100'],
    answer: 2,
    explanation: '** 是幂运算符，2 的 10 次方等于 1024。'
  },
  {
    type: 'choice',
    category: 'python',
    question: 'Python 用什么来表示代码块的层次（代替其他语言的大括号）？',
    options: ['大括号 {}', 'begin...end', '缩进', '分号'],
    answer: 2,
    explanation: '冒号后缩进（通常 4 空格）的部分属于该代码块，缩进错误会直接报错。'
  },
  {
    type: 'choice',
    category: 'python',
    question: '列表 nums = [10, 20, 30]，nums[-1] 的值是？',
    options: ['10', '报错', '30', '20'],
    answer: 2,
    explanation: '负数下标从尾部数起，-1 是最后一个元素 30，-2 是倒数第二个。'
  },
  {
    type: 'choice',
    category: 'python',
    question: '关于元组（tuple），下列说法正确的是？',
    options: [
      '元组创建后可以随意增删改元素',
      '元组是不可变序列，创建后不能修改',
      '元组就是另一个名字的列表',
      '元组只能存数字'
    ],
    answer: 1,
    explanation: '元组是不可变的，适合存放不应被修改的数据；需要增删改就用列表。'
  },
  {
    type: 'choice',
    category: 'python',
    question: '从字典中取值时希望"键不存在也不报错、还能给默认值"，应该用？',
    options: ['d[key]', 'd.get(key, 默认值)', 'd.key', 'd->key'],
    answer: 1,
    explanation: 'd[key] 键不存在会抛 KeyError；get() 不存在返回 None 或指定的默认值。'
  },
  {
    type: 'choice',
    category: 'python',
    question: '想最快把列表 [1,2,2,3,3,3] 去重，最方便的做法是？',
    options: ['用 for 循环逐个判断', 'list(set(nums))', 'nums.unique()', 'nums.sort()'],
    answer: 1,
    explanation: '集合（set）天生不重复，set(nums) 一行去重，再转回列表即可。'
  },
  {
    type: 'choice',
    category: 'python',
    question: '生成器函数中，"交出一个值并暂停，下次从这继续"的关键字是？',
    options: ['return', 'yield', 'pass', 'raise'],
    answer: 1,
    explanation: 'yield 让函数变成生成器，边生成边消费，不把全部数据一次性放进内存。'
  },
  {
    type: 'choice',
    category: 'python',
    question: '脚本里常见的 if __name__ == "__main__": 的作用是？',
    options: [
      '声明程序的主类',
      '只有直接运行本文件时才执行其下代码，被 import 时不执行',
      'Python 程序必须写的固定开头',
      '导入所有第三方库'
    ],
    answer: 1,
    explanation: '被别人 import 时 __name__ 是模块名而不是 "__main__"，这句判断可以避免导入时执行主逻辑。'
  },

  /* ==================== 主观题 ==================== */
  {
    type: 'subjective',
    category: 'html',
    question: '简述 HTML、CSS、JavaScript 三者在网页中的作用，并说明为什么说"语义化标签"很重要。',
    reference:
      'HTML 负责网页的结构与内容（骨架），CSS 负责外观样式（皮肤），JavaScript 负责交互行为（大脑）。\n' +
      '语义化标签的重要性：\n' +
      '1. 代码可读性强，开发者一眼能看出 header/nav/main/footer 各是什么区域；\n' +
      '2. 有利于搜索引擎优化（SEO），搜索引擎能更好地理解页面结构；\n' +
      '3. 对无障碍访问友好，屏幕阅读器可以按语义朗读内容；\n' +
      '4. 便于团队协作与后期维护。'
  },
  {
    type: 'subjective',
    category: 'html',
    question: '写出表单中 get 和 post 两种提交方式的主要区别，并各举一个适用场景。',
    reference:
      '主要区别：\n' +
      '1. 数据位置：get 把数据拼接在网址后面（?key=value），post 把数据放在请求体中，地址栏不可见；\n' +
      '2. 数据量：get 受网址长度限制，post 基本无限制；\n' +
      '3. 安全性：get 的数据直接暴露在网址中（不适合密码），post 相对安全；\n' +
      '适用场景：get 适合搜索、筛选、分页等幂等查询；post 适合登录、注册、上传文件等提交数据的操作。'
  },
  {
    type: 'subjective',
    category: 'css',
    question: '请解释盒模型的四层结构，并说明 box-sizing: content-box 与 border-box 的区别。',
    reference:
      '盒模型由内到外四层：\n' +
      '1. content 内容区：元素的实际内容（文字、图片等），width/height 默认控制这一层；\n' +
      '2. padding 内边距：内容与边框之间的空隙，会显示背景色；\n' +
      '3. border 边框：盒子的描边；\n' +
      '4. margin 外边距：盒子与其他盒子之间的距离，不显示背景。\n' +
      '区别：content-box（默认）下 width 只包含内容，加 padding/border 会把盒子撑大；\n' +
      'border-box 下 width 包含内容 + padding + border，设置多少就是多大，计算直观，\n' +
      '现代项目通常全局设置 * { box-sizing: border-box; }。'
  },
  {
    type: 'subjective',
    category: 'css',
    question: '要实现"元素在父容器中水平垂直同时居中"，请写出至少两种不同的 CSS 方案。',
    reference:
      '方案一（Flex，推荐）：\n' +
      '.parent { display: flex; justify-content: center; align-items: center; }\n' +
      '方案二（Grid）：\n' +
      '.parent { display: grid; place-items: center; }\n' +
      '方案三（绝对定位 + transform）：\n' +
      '.parent { position: relative; }\n' +
      '.child { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }\n' +
      '方案四（老式，单行文本场景）：text-align: center + line-height 等于容器高度（只适合单行文字水平垂直居中）。'
  },
  {
    type: 'subjective',
    category: 'js',
    question: '说明 let/const 与 var 的区别，并举出 var 在循环中的一个经典问题。',
    reference:
      '区别：\n' +
      '1. 作用域：let/const 有块级作用域（{} 内有效），var 只有函数作用域；\n' +
      '2. 重复声明：let/const 不允许重复声明，var 允许；\n' +
      '3. const 声明后不能重新赋值；\n' +
      'var 的经典问题：在 for 循环中用 var 声明循环变量，配合 setTimeout 打印时，\n' +
      '由于 var 是全局/函数级的一个变量，循环结束后 i 已经是 3，三次回调都打印 3；\n' +
      '改用 let 后每轮循环都会创建一个新的 i，可以正确打印 0、1、2。'
  },
  {
    type: 'subjective',
    category: 'js',
    question: '什么是事件委托？它解决了什么问题？请描述实现思路。',
    reference:
      '事件委托：利用事件冒泡机制，把子元素的事件监听统一绑定在它们的父元素上，\n' +
      '在父级的处理函数中通过 e.target 判断真正被点击的子元素，再执行对应逻辑。\n' +
      '解决的问题：\n' +
      '1. 性能：1000 个列表项只需要 1 个监听器，而不是 1000 个；\n' +
      '2. 动态元素：后续通过 JS 新增的子元素自动生效，不需要重新绑定事件。\n' +
      '实现思路：父元素 addEventListener("click", e => { if (e.target 匹配目标) { 处理 } })。'
  },
  {
    type: 'subjective',
    category: 'java',
    question: '面向对象三大特性是封装、继承、多态，请分别说明各自的作用，并举例说明多态给程序带来的好处。',
    reference:
      '封装：把属性用 private 隐藏，通过 public 的 getter/setter 提供受控访问，\n' +
      '可以在方法里加校验逻辑，防止外部写入非法数据，降低模块间耦合。\n' +
      '继承：子类通过 extends 复用父类的属性和方法（代码复用），并可在父类基础上扩展或重写。\n' +
      '多态：父类引用指向子类对象，同一方法调用在不同子类上有不同表现。\n' +
      '多态的好处举例：feed(Animal a) 方法可以接收任何 Animal 子类对象（狗、猫、鸟），\n' +
      '新增动物种类时无需修改 feed 方法，符合"对扩展开放、对修改关闭"的原则，\n' +
      '这是框架和大型系统能保持灵活可扩展的基石。'
  },
  {
    type: 'subjective',
    category: 'python',
    question: '比较 Python 中列表（list）、元组（tuple）、字典（dict）、集合（set）四种容器的特点，并各举一个典型使用场景。',
    reference:
      '列表：有序、可变、允许重复，下标访问。场景：购物清单、待办事项等需要频繁增删改的序列。\n' +
      '元组：有序、不可变、允许重复。场景：坐标点 (x, y)、函数返回多个值、不应被修改的配置常量。\n' +
      '字典：键值对映射、键唯一、查询极快（3.7+ 保持插入顺序）。场景：一个学生的信息 {"name": "小明", "age": 18}，通过名字查值的场合。\n' +
      '集合：无序、不重复。场景：列表去重、求两份数据的交集/并集/差集（如共同好友）。'
  }
]
