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
    /* ============ 第一章 HTML 入门 ============ */
    {
      id: 'html-ch1',
      title: '第一章 HTML 入门',
      lessons: [
        {
          id: 'html-what-is',
          title: '1.1 什么是 HTML',
          sections: [
            { type: 'text', content: 'HTML（HyperText Markup Language，**超文本标记语言**）是用来描述网页结构的语言。你看到的每一个网页，都是由 HTML 搭建出骨架，再由 CSS 美化外观、JavaScript 添加交互的。' },
            { type: 'text', content: '所谓「标记语言」，就是通过一堆**标签（tag）**来告诉浏览器：这里是一个标题、这里是一段文字、这里是一张图片。' },
            {
              type: 'list',
              title: '网页三要素',
              items: [
                '**HTML**：结构（骨架）—— 页面上有什么内容',
                '**CSS**：样式（皮肤）—— 内容长什么样子',
                '**JavaScript**：行为（大脑）—— 页面如何响应用户操作'
              ]
            },
            {
              type: 'code',
              title: '一段最简单的 HTML',
              lang: 'html',
              code: '<h1>我是一个一级标题</h1>\n<p>我是一个段落。</p>\n<a href="https://example.com">我是一个链接</a>'
            },
            {
              type: 'tip',
              content: 'HTML 不是编程语言，它没有变量、判断这些概念，只负责"描述结构"，学起来非常轻松。'
            }
          ]
        },
        {
          id: 'html-first-page',
          title: '1.2 第一个 HTML 页面：文档结构',
          sections: [
            { type: 'text', content: '每个完整的 HTML 文件都有一套固定的结构。新建一个 `index.html` 文件，输入以下内容，再用浏览器打开，就得到了你的第一个网页。' },
            {
              type: 'code',
              title: '标准文档结构',
              lang: 'html',
              code: '<!DOCTYPE html>\n<html lang="zh-CN">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>我的第一个网页</title>\n  </head>\n  <body>\n    <h1>你好，世界！</h1>\n    <p>这是我写的第一个网页。</p>\n  </body>\n</html>'
            },
            {
              type: 'table',
              title: '结构中各部分的作用',
              headers: ['部分', '作用'],
              rows: [
                ['`<!DOCTYPE html>`', '声明这是 HTML5 文档，必须放在第一行'],
                ['`<html>`', '网页的根元素，所有内容都在它里面'],
                ['`<head>`', '头部：存放页面的配置信息，用户看不到'],
                ['`<meta charset="UTF-8">`', '声明字符编码为 UTF-8，防止中文乱码'],
                ['`<title>`', '浏览器标签页上显示的标题'],
                ['`<body>`', '主体：用户在页面上看到的所有内容都写在这里']
              ]
            },
            {
              type: 'warn',
              content: '`<meta charset="UTF-8">` 千万不要漏写，否则中文很可能显示成乱码。'
            }
          ]
        },
        {
          id: 'html-tag-syntax',
          title: '1.3 标签语法：元素、属性与嵌套',
          sections: [
            { type: 'text', content: 'HTML 的核心语法很简单：**标签成对出现，内容夹在中间，属性写在开始标签里**。' },
            {
              type: 'list',
              title: '三条基本规则',
              items: [
                '**双标签**：`<p>内容</p>`，开始标签 + 内容 + 结束标签（结束标签多一个 `/`）',
                '**单标签**：`<br>`、`<img>` 等没有内容的标签可以只写一个',
                '**属性**：写在开始标签中，格式为 `名称="值"`，多个属性用空格隔开'
              ]
            },
            {
              type: 'code',
              title: '标签与属性示例',
              lang: 'html',
              code: '<!-- 双标签：段落 -->\n<p>这是一个段落。</p>\n\n<!-- 带属性的标签：href 是属性名，引号内是属性值 -->\n<a href="https://example.com">打开链接</a>\n\n<!-- 单标签：换行 -->\n<p>第一行<br>第二行</p>'
            },
            {
              type: 'text', content: '标签可以**嵌套**，但必须先开始的后结束，不能交叉：' },
            {
              type: 'code',
              lang: 'html',
              title: '正确与错误写法对比',
              code: '<!-- 正确：先 <p> 后 <b>，则先 </b> 后 </p> -->\n<p>这是 <b>加粗文字</b>。</p>\n\n<!-- 错误：标签交叉了 -->\n<p>这是 <b>加粗文字</p></b>'
            },
            {
              type: 'tip',
              content: 'HTML 标签不区分大小写，但约定俗成全部使用**小写**。注释写法：`<!-- 这是注释 -->`。'
            }
          ]
        }
      ]
    },

    /* ============ 第二章 常用文本标签 ============ */
    {
      id: 'html-ch2',
      title: '第二章 常用文本标签',
      lessons: [
        {
          id: 'html-heading-paragraph',
          title: '2.1 标题与段落',
          sections: [
            { type: 'text', content: '文章需要标题来分层，需要段落来承载内容，这是网页中使用频率最高的一组标签。' },
            {
              type: 'code',
              title: '六级标题与段落',
              lang: 'html',
              code: '<h1>一级标题：页面主标题（一个页面最好只用一次）</h1>\n<h2>二级标题：大的章节</h2>\n<h3>三级标题：小节</h3>\n<h4>四级标题</h4>\n<h5>五级标题</h5>\n<h6>六级标题：最小的标题</h6>\n\n<p>这是一个段落，浏览器会自动在段落之间留出空隙。</p>\n<p>这是另一个段落。段落内部想强制换行可以用 br 标签：<br>这里就换到第二行了。</p>'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '标题从 `h1` 到 `h6` 逐渐变小变细，**重要性递减**',
                '`<h1>` 一般只出现一次，代表页面主题',
                '`<p>` 是段落，段落之间自带间距；`<br>` 是强制换行；`<hr>` 是水平分隔线',
                '不要为了「字大一点」而滥用标题，标题表达的是**层级关系**'
              ]
            }
          ]
        },
        {
          id: 'html-format',
          title: '2.2 文本格式化标签',
          sections: [
            { type: 'text', content: '想让某些文字突出显示，就需要格式化标签。它们能让文字加粗、倾斜、加下划线等等。' },
            {
              type: 'code',
              title: '常用格式化标签',
              lang: 'html',
              code: '<p><strong>strong：加粗，表示重要内容（推荐）</strong></p>\n<p><em>em：倾斜，表示强调（推荐）</em></p>\n<p><mark>mark：黄色高亮标记</mark></p>\n<p><del>del：删除线，表示已删除的内容</del></p>\n<p><ins>ins：下划线，表示新插入的内容</ins></p>\n<p>水的化学式：H<sub>2</sub>O，上标示例：2<sup>3</sup> = 8</p>\n<p><small>small：更小的字，常用于版权、备注</small></p>'
            },
            {
              type: 'table',
              title: 'strong 与 b 的区别',
              headers: ['标签', '效果', '语义'],
              rows: [
                ['`<strong>`', '加粗', '表示内容**重要**，搜索引擎能理解'],
                ['`<b>`', '加粗', '纯粹视觉上加粗，无特殊含义'],
                ['`<em>`', '倾斜', '表示**强调**语气'],
                ['`<i>`', '倾斜', '纯粹视觉上倾斜，常用于术语、外语']
              ]
            },
            {
              type: 'tip',
              content: '日常开发中优先使用 `strong` 和 `em`，因为它们带有语义，对搜索引擎优化（SEO）和无障碍访问更友好。'
            }
          ]
        },
        {
          id: 'html-entities',
          title: '2.3 特殊字符（实体字符）',
          sections: [
            { type: 'text', content: '有些字符在 HTML 中有特殊用途（比如 `<`、`>` 是标签的一部分），想原样显示它们，就要用**实体字符**——以 `&` 开头、`;` 结尾的特殊写法。' },
            {
              type: 'code',
              title: '常用实体字符',
              lang: 'html',
              code: '<p>显示小于号：1 &lt; 2</p>\n<p>显示大于号：3 &gt; 2</p>\n<p>显示引号：他说&quot;你好&quot;</p>\n<p>显示与符号：AT&amp;T</p>\n<p>多个连续空格需要用&nbsp;&nbsp;&nbsp;空格实体才能保留</p>\n<p>版权符号：&copy; 2026 我的网站</p>'
            },
            {
              type: 'table',
              title: '必会的实体字符',
              headers: ['写法', '显示效果', '说明'],
              rows: [
                ['`&lt;`', '<', '小于号（less than）'],
                ['`&gt;`', '>', '大于号（greater than）'],
                ['`&amp;`', '&', '与符号'],
                ['`&quot;`', '"', '双引号'],
                ['`&nbsp;`', '空格', '不换行空格，连续写多个可保留空白'],
                ['`&copy;`', '©', '版权符号']
              ]
            },
            {
              type: 'warn',
              content: '在 HTML 源码里直接敲多个空格、多个回车，浏览器只会当成一个空格。想保留空白请用 `&nbsp;` 或改用 CSS 控制。'
            }
          ]
        },
        {
          id: 'html-div-span',
          title: '2.4 div 与 span：通用容器',
          sections: [
            { type: 'text', content: '`<div>` 和 `<span>` 本身没有任何样式和含义，它们是两个"空盒子"，专门用来**把内容分组**，方便整体设置样式或布局。' },
            {
              type: 'list',
              title: '两者的区别',
              items: [
                '`<div>`：**块级元素**，独占一行，用来划分大的区域（如整块布局）',
                '`<span>`：**行内元素**，不换行，用来包住一行文字中的一小段'
              ]
            },
            {
              type: 'code',
              title: 'div 与 span 的典型用法',
              lang: 'html',
              code: '<!-- div：把相关内容分成一块 -->\n<div class="header-area">\n  <h1>网站标题</h1>\n  <p>网站简介</p>\n</div>\n\n<!-- span：包住行内的一小段文字 -->\n<p>这件商品价格 <span class="price">99 元</span>，数量有限。</p>'
            },
            {
              type: 'tip',
              content: '有语义合适的标签（如 `header`、`p`）时优先用语义标签；找不到合适的，才用 `div`、`span` 兜底。'
            }
          ]
        }
      ]
    },

    /* ============ 第三章 语义化标签 ============ */
    {
      id: 'html-ch3',
      title: '第三章 语义化标签',
      lessons: [
        {
          id: 'html-semantic',
          title: '3.1 语义化与页面结构标签',
          sections: [
            { type: 'text', content: '**语义化**就是"用贴切的标签表达内容的含义"。以前的网页满屏都是 `div`，而 HTML5 提供了一组结构标签，让"页头、导航、页脚"一眼就能看出来。' },
            {
              type: 'code',
              title: '一个典型的语义化页面骨架',
              lang: 'html',
              code: '<body>\n  <header>页头：放 Logo、网站名</header>\n  <nav>导航栏：放菜单链接</nav>\n  <main>主体：页面核心内容（一个页面只有一个）</main>\n  <footer>页脚：放版权信息、联系方式</footer>\n</body>'
            },
            {
              type: 'list',
              title: '常用结构标签',
              items: [
                '`<header>`：页头或某个区块的头部',
                '`<nav>`：导航链接区域',
                '`<main>`：页面主要内容，**每页只能有一个**',
                '`<footer>`：页脚',
                '`<aside>`：侧边栏、与主体内容关系不大的信息'
              ]
            },
            {
              type: 'tip',
              content: '语义化的好处：代码可读性强、方便搜索引擎理解页面、屏幕阅读器（无障碍）能正确朗读内容。'
            }
          ]
        },
        {
          id: 'html-semantic2',
          title: '3.2 内容分区：article、section 与 figure',
          sections: [
            { type: 'text', content: '除了页面级结构，HTML5 还提供了表达"内容块"的标签，常用于 `main` 内部组织文章内容。' },
            {
              type: 'code',
              title: 'article 与 section 示例',
              lang: 'html',
              code: '<main>\n  <article>\n    <h1>一篇独立的文章</h1>\n    <p>article 表示一段独立完整的内容，例如一篇博客、一条评论、一条新闻。</p>\n\n    <section>\n      <h2>第一节</h2>\n      <p>section 表示文章中的一个主题分区。</p>\n    </section>\n\n    <section>\n      <h2>第二节</h2>\n      <p>每个 section 通常应该有自己的标题。</p>\n    </section>\n  </article>\n\n  <figure>\n    <img src="chart.png" alt="销量统计图">\n    <figcaption>图 1：2026 年销量统计</figcaption>\n  </figure>\n</main>'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`<article>`：**独立成篇**的内容（文章、评论、卡片），脱离页面也说得通',
                '`<section>`：主题分组，一般配合标题使用',
                '`<figure>` + `<figcaption>`：图片/图表 + 图注的组合',
                '`<time datetime="2026-01-01">`：标注时间，方便机器识别'
              ]
            },
            {
              type: 'warn',
              content: '不确定用哪个语义标签时，用 `div` 也可以，不要为了语义化而强行套用。'
            }
          ]
        }
      ]
    },

    /* ============ 第四章 列表 ============ */
    {
      id: 'html-ch4',
      title: '第四章 列表',
      lessons: [
        {
          id: 'html-ul',
          title: '4.1 无序列表 ul / li',
          sections: [
            { type: 'text', content: '无序列表用于罗列**没有先后顺序**的内容，比如菜单、功能清单。浏览器默认给每项前面加一个圆点。' },
            {
              type: 'code',
              title: '无序列表',
              lang: 'html',
              code: '<ul>\n  <li>苹果</li>\n  <li>香蕉</li>\n  <li>橘子</li>\n</ul>'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`<ul>`（unordered list）是列表容器，`<li>`（list item）是每一项',
                '`ul` 的**直接子元素只能是 `li`**，其他标签都不合法',
                '网站导航栏 90% 都是用 `ul + li` 搭建的',
                '前面的圆点样式可以由 CSS 的 `list-style` 属性修改或去掉'
              ]
            }
          ]
        },
        {
          id: 'html-ol',
          title: '4.2 有序列表 ol / li',
          sections: [
            { type: 'text', content: '有序列表用于**有先后顺序**的内容，比如步骤说明、排行榜，每项前面自动带编号。' },
            {
              type: 'code',
              title: '有序列表及其属性',
              lang: 'html',
              code: '<!-- 普通有序列表：1 2 3 -->\n<ol>\n  <li>打开电脑</li>\n  <li>登录系统</li>\n  <li>开始工作</li>\n</ol>\n\n<!-- 从 5 开始编号 -->\n<ol start="5">\n  <li>第五名</li>\n  <li>第六名</li>\n</ol>\n\n<!-- 倒序编号 -->\n<ol reversed>\n  <li>第三名</li>\n  <li>第二名</li>\n  <li>第一名</li>\n</ol>'
            },
            {
              type: 'table',
              title: 'ol 的常用属性',
              headers: ['属性', '作用', '示例'],
              rows: [
                ['`start`', '设置起始编号', '`<ol start="5">` 从 5 开始'],
                ['`reversed`', '倒序排列', '3 2 1'],
                ['`type`', '编号样式', '`1` 数字、`a` 小写字母、`A` 大写字母、`i` 罗马数字']
              ]
            }
          ]
        },
        {
          id: 'html-dl-nest',
          title: '4.3 定义列表与嵌套列表',
          sections: [
            { type: 'text', content: '定义列表用于「**术语 + 解释**」这种成对的内容；而列表里再套列表，就是嵌套列表，常用于多级菜单。' },
            {
              type: 'code',
              title: '定义列表 dl / dt / dd',
              lang: 'html',
              code: '<dl>\n  <dt>HTML</dt>\n  <dd>超文本标记语言，负责网页结构</dd>\n\n  <dt>CSS</dt>\n  <dd>层叠样式表，负责网页样式</dd>\n</dl>\n<!-- dt 是术语，dd 是解释，可以一 dt 对多个 dd -->'
            },
            {
              type: 'code',
              title: '嵌套列表（二级菜单）',
              lang: 'html',
              code: '<ul>\n  <li>水果\n    <ul>\n      <li>苹果</li>\n      <li>香蕉</li>\n    </ul>\n  </li>\n  <li>蔬菜\n    <ul>\n      <li>白菜</li>\n      <li>萝卜</li>\n    </ul>\n  </li>\n</ul>'
            },
            {
              type: 'tip',
              content: '嵌套列表的子列表要放在**父项的 `li` 内部**，而不是 `ul` 直接子元素的位置。'
            }
          ]
        }
      ]
    },

    /* ============ 第五章 链接与媒体 ============ */
    {
      id: 'html-ch5',
      title: '第五章 链接与媒体',
      lessons: [
        {
          id: 'html-link',
          title: '5.1 超链接 a 标签',
          sections: [
            { type: 'text', content: '超链接是互联网的灵魂，`<a>` 标签让页面之间可以互相跳转。`href` 属性指定跳转目标。' },
            {
              type: 'code',
              title: 'a 标签常见用法',
              lang: 'html',
              code: '<!-- 跳转到外部网站 -->\n<a href="https://example.com">去别的网站</a>\n\n<!-- 跳转到本地页面 -->\n<a href="./about.html">关于我们</a>\n\n<!-- 新窗口打开（target="_blank"） -->\n<a href="https://example.com" target="_blank">新窗口打开</a>\n\n<!-- 链接到邮箱和电话 -->\n<a href="mailto:someone@example.com">发邮件</a>\n<a href="tel:10086">打电话</a>'
            },
            {
              type: 'table',
              title: 'target 属性的取值',
              headers: ['取值', '效果'],
              rows: [
                ['`_self`', '当前窗口打开（默认值）'],
                ['`_blank`', '新窗口/新标签页打开'],
                ['`_parent`', '在父框架中打开（配合 iframe 使用）'],
                ['`_top`', '在整个窗口中打开（配合 iframe 使用）']
              ]
            },
            {
              type: 'warn',
              content: '使用 `target="_blank"` 时建议加上 `rel="noopener"`，防止新页面通过 `window.opener` 操控原页面，更安全。'
            }
          ]
        },
        {
          id: 'html-anchor',
          title: '5.2 锚点：页面内跳转',
          sections: [
            { type: 'text', content: '点击后跳到当前页面的某个指定位置，这种功能叫**锚点**。实现方式：给目标元素一个 `id`，链接的 `href` 写 `#id`。' },
            {
              type: 'code',
              title: '锚点跳转',
              lang: 'html',
              code: '<!-- 点击链接跳到页面对应位置 -->\n<a href="#chapter2">跳到第二章</a>\n<a href="#bottom">跳到页面底部</a>\n\n<!-- 目标元素：id 与 # 后面的名字对应 -->\n<h2 id="chapter2">第二章</h2>\n<p>这里有很多内容...</p>\n\n<div id="bottom">页面底部</div>\n\n<!-- href="#" 表示空锚点，常用于"回到顶部" -->\n<a href="#">回到顶部</a>'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`id` 在同一个页面内**必须唯一**',
                '跨页面的锚点写法：`about.html#contact`（跳到 about 页的 contact 区域）',
                '配合 CSS 的 `scroll-behavior: smooth` 可以实现平滑滚动'
              ]
            }
          ]
        },
        {
          id: 'html-img',
          title: '5.3 图片 img 标签',
          sections: [
            { type: 'text', content: '`<img>` 是单标签，通过 `src` 指定图片地址，`alt` 提供图片加载失败或无障碍场景下的文字说明。' },
            {
              type: 'code',
              title: '图片的基本用法',
              lang: 'html',
              code: '<!-- 基本用法 -->\n<img src="cat.jpg" alt="一只橘猫趴在窗台上">\n\n<!-- 指定宽高（建议只设一个，另一个等比缩放） -->\n<img src="cat.jpg" alt="一只橘猫" width="300">\n\n<!-- 使用网络图片 -->\n<img src="https://example.com/logo.png" alt="网站标志">'
            },
            {
              type: 'table',
              title: '常用属性',
              headers: ['属性', '作用'],
              rows: [
                ['`src`', '图片路径，**必填**'],
                ['`alt`', '图片描述，**必填**：加载失败时显示，也是无障碍必需品'],
                ['`width` / `height`', '宽高，单位像素，一般只设置一个以保持比例'],
                ['`loading="lazy"`', '懒加载：滚动到附近才加载，提升页面速度']
              ]
            },
            {
              type: 'list',
              title: '常见图片格式怎么选',
              items: [
                '`.jpg`：照片类图片，体积小，不支持透明',
                '`.png`：需要透明背景的图片、截图',
                '`.gif`：简单动画',
                '`.webp`：新一代格式，体积更小，现代浏览器都支持',
                '`.svg`：矢量图标，放大不失真，适合 Logo 和图标'
              ]
            }
          ]
        },
        {
          id: 'html-path',
          title: '5.4 相对路径与绝对路径',
          sections: [
            { type: 'text', content: '引用图片、链接其他页面时都要写**路径**。路径分两种：绝对路径是完整地址，相对路径是相对于当前文件的位置。' },
            {
              type: 'code',
              title: '相对路径的写法',
              lang: 'html',
              code: '<!-- 假设当前文件是 index.html，位于 site 文件夹中 -->\n\n<!-- 同目录下的图片 -->\n<img src="cat.jpg" alt="">\n\n<!-- 下一级 images 文件夹中的图片 -->\n<img src="images/cat.jpg" alt="">\n\n<!-- 上一级文件夹中的图片（../ 表示上一级） -->\n<img src="../cat.jpg" alt="">\n\n<!-- 上两级 -->\n<img src="../../cat.jpg" alt="">'
            },
            {
              type: 'table',
              title: '符号含义',
              headers: ['写法', '含义'],
              rows: [
                ['`./` 或不写', '当前文件所在目录'],
                ['`images/xx.jpg`', '当前目录下的 images 文件夹里'],
                ['`../`', '上一级目录'],
                ['`../../`', '上两级目录'],
                ['`https://...`', '绝对路径：完整的网络地址']
              ]
            },
            {
              type: 'tip',
              content: '项目内的文件一律用相对路径，这样整个项目文件夹移动位置后依然正常工作。'
            }
          ]
        },
        {
          id: 'html-audio-video',
          title: '5.5 音频与视频',
          sections: [
            { type: 'text', content: 'HTML5 之前播放音视频要靠 Flash 插件，现在用原生 `<audio>` 和 `<video>` 标签即可。' },
            {
              type: 'code',
              title: '音频与视频示例',
              lang: 'html',
              code: '<!-- 音频：controls 显示播放控件 -->\n<audio controls src="music.mp3">\n  您的浏览器不支持音频播放。\n</audio>\n\n<!-- 视频：可以设置宽高和多个属性 -->\n<video src="movie.mp4" controls width="500" poster="cover.jpg">\n  您的浏览器不支持视频播放。\n</video>\n\n<!-- source 写法：提供多种格式，浏览器自动选择支持的 -->\n<video controls>\n  <source src="movie.webm" type="video/webm">\n  <source src="movie.mp4" type="video/mp4">\n  您的浏览器不支持视频播放。\n</video>'
            },
            {
              type: 'table',
              title: '常用属性',
              headers: ['属性', '作用'],
              rows: [
                ['`controls`', '显示播放/暂停/音量等控件'],
                ['`autoplay`', '自动播放（浏览器一般要求静音时才允许）'],
                ['`loop`', '循环播放'],
                ['`muted`', '静音'],
                ['`poster`', '视频封面图（仅 video）'],
                ['`preload`', '预加载策略：`auto` / `metadata` / `none`']
              ]
            }
          ]
        },
        {
          id: 'html-iframe',
          title: '5.6 iframe：在页面中嵌页面',
          sections: [
            { type: 'text', content: '`<iframe>` 可以把另一个网页"嵌"进当前页面，像开了一扇小窗户。地图、在线文档、视频平台常用这种方式提供嵌入代码。' },
            {
              type: 'code',
              title: 'iframe 示例',
              lang: 'html',
              code: '<!-- 嵌入其他网页 -->\n<iframe src="https://example.com" width="600" height="400" title="示例页面"></iframe>\n\n<!-- 嵌入本地页面 -->\n<iframe src="./demo.html" width="100%" height="300" title="演示"></iframe>\n\n<!-- 视频平台的嵌入代码一般长这样（以通用格式示意） -->\n<iframe src="https://player.example.com/video/123" \n        width="560" height="315" \n        allowfullscreen title="视频"></iframe>'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '务必写 `title` 属性，说明这个嵌入内容是什么',
                '`allowfullscreen` 允许全屏播放',
                '很多网站通过安全策略禁止被 iframe 嵌入，嵌不了不是你的代码写错了',
                'iframe 会拖慢页面加载，能不用尽量不用'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第六章 表格 ============ */
    {
      id: 'html-ch6',
      title: '第六章 表格',
      lessons: [
        {
          id: 'html-table-basic',
          title: '6.1 表格基础：table / tr / td',
          sections: [
            { type: 'text', content: '表格用来展示**行列结构的数据**。`<table>` 是表格，`<tr>` 是一行（table row），`<td>` 是一个单元格（table data）。' },
            {
              type: 'code',
              title: '最简单的表格',
              lang: 'html',
              code: '<table>\n  <tr>\n    <th>姓名</th>\n    <th>年龄</th>\n  </tr>\n  <tr>\n    <td>小明</td>\n    <td>18</td>\n  </tr>\n  <tr>\n    <td>小红</td>\n    <td>17</td>\n  </tr>\n</table>\n\n<!-- th 是表头单元格（加粗居中），td 是普通数据单元格 -->'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '第一行用 `th` 表头，其余用 `td`',
                '表格默认**没有边框**，需要用 CSS 添加：`table, th, td { border: 1px solid #333; }`',
                '相邻边框默认有间隙，用 `border-collapse: collapse` 合并为单线'
              ]
            },
            {
              type: 'warn',
              content: '表格只适合展示数据，**不要用表格做页面布局**——那是十多年前的做法，现代布局请用 CSS（Flex/Grid）。'
            }
          ]
        },
        {
          id: 'html-table-structure',
          title: '6.2 表格结构化：caption、thead、tbody、tfoot',
          sections: [
            { type: 'text', content: '数据多的表格，应该分成表头、表身、表脚三个区域，再加上标题。结构清晰，也方便 CSS 分区控制样式。' },
            {
              type: 'code',
              title: '结构完整的表格',
              lang: 'html',
              code: '<table>\n  <caption>2026 年第一季度销售统计</caption>\n\n  <thead>\n    <tr>\n      <th>月份</th>\n      <th>销售额</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr>\n      <td>1 月</td>\n      <td>10 万</td>\n    </tr>\n    <tr>\n      <td>2 月</td>\n      <td>12 万</td>\n    </tr>\n  </tbody>\n\n  <tfoot>\n    <tr>\n      <td>合计</td>\n      <td>22 万</td>\n    </tr>\n  </tfoot>\n</table>'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`<caption>`：表格标题，必须写在 `table` 的**第一个子元素**位置',
                '`<thead>`：表头区（放 `th` 那一行）',
                '`<tbody>`：表身区（数据行），即使不写浏览器也会自动生成',
                '`<tfoot>`：表脚区（合计行），写在 HTML 里虽然在最后，渲染时也固定在底部'
              ]
            }
          ]
        },
        {
          id: 'html-table-merge',
          title: '6.3 合并单元格：rowspan 与 colspan',
          sections: [
            { type: 'text', content: '想让某个单元格"占多行"或"占多列"，需要用合并属性：`rowspan` 跨行合并，`colspan` 跨列合并。' },
            {
              type: 'code',
              title: '合并单元格示例',
              lang: 'html',
              code: '<table>\n  <tr>\n    <th rowspan="2">姓名</th>\n    <th colspan="2">成绩</th>\n  </tr>\n  <tr>\n    <td>语文</td>\n    <td>数学</td>\n  </tr>\n  <tr>\n    <td>小明</td>\n    <td>90</td>\n    <td>95</td>\n  </tr>\n</table>\n\n<!-- "姓名"占 2 行，"成绩"占 2 列 -->\n<!-- 被合并的位置不需要再写单元格，写了会错位 -->'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`colspan="2"`：该单元格横向占 2 列',
                '`rowspan="2"`：该单元格纵向占 2 行',
                '合并后，被占掉的位置**不要再写** `td` / `th`',
                '复杂合并容易算错，建议先在纸上画格子，数清每行的单元格数量'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第七章 表单 ============ */
    {
      id: 'html-ch7',
      title: '第七章 表单',
      lessons: [
        {
          id: 'html-form',
          title: '7.1 表单 form 与第一个输入框',
          sections: [
            { type: 'text', content: '表单是网页**收集用户输入**的工具：登录框、搜索框、注册页都是表单。`<form>` 是表单容器，里面放各种输入控件。' },
            {
              type: 'code',
              title: '第一个表单',
              lang: 'html',
              code: '<form action="/submit" method="get">\n  <!-- input 是单标签，type 决定控件形态 -->\n  <input type="text" name="username" placeholder="请输入用户名">\n  <input type="password" name="pwd" placeholder="请输入密码">\n  <button type="submit">登录</button>\n</form>\n\n<!-- action：数据提交到哪个地址 -->\n<!-- method：提交方式，get 或 post -->\n<!-- name：控件的名字，提交数据时的 key，非常重要 -->'
            },
            {
              type: 'list',
              title: '三个关键属性',
              items: [
                '`action`：表单数据要提交到的服务器地址',
                '`method`：提交方式 `get`（数据在网址里）或 `post`（数据在请求体里）',
                '`name`：每个控件的"变量名"，**没有 name 的控件数据不会被提交**'
              ]
            }
          ]
        },
        {
          id: 'html-input-types',
          title: '7.2 input 常用类型',
          sections: [
            { type: 'text', content: '`<input>` 通过 `type` 属性变化出十多种形态，是表单里最灵活的控件。' },
            {
              type: 'code',
              title: '常用 input 类型',
              lang: 'html',
              code: '<!-- 文本框 -->\n<input type="text" placeholder="文本">\n\n<!-- 密码框：输入内容显示为圆点 -->\n<input type="password" placeholder="密码">\n\n<!-- 数字框：只能输入数字，可带步进按钮 -->\n<input type="number" min="0" max="100" step="1">\n\n<!-- 邮箱框：提交时自动校验格式 -->\n<input type="email" placeholder="邮箱">\n\n<!-- 日期选择 -->\n<input type="date">\n\n<!-- 文件选择 -->\n<input type="file" accept="image/*">\n\n<!-- 滑块 -->\n<input type="range" min="0" max="100">\n\n<!-- 隐藏域：用户看不到，但会随表单提交 -->\n<input type="hidden" name="token" value="abc123">'
            },
            {
              type: 'table',
              title: '常用通用属性',
              headers: ['属性', '作用'],
              rows: [
                ['`placeholder`', '提示文字（输入前显示的灰色提示）'],
                ['`value`', '默认值'],
                ['`required`', '必填项，为空时提交会被拦截'],
                ['`disabled`', '禁用控件（灰色不可操作，不提交数据）'],
                ['`readonly`', '只读（不能改，但会提交数据）'],
                ['`maxlength`', '最大输入长度'],
                ['`min` / `max` / `step`', '数字/日期的范围与步长']
              ]
            },
            {
              type: 'tip',
              content: 'HTML5 的 `email`、`url` 等类型自带浏览器校验，能省不少 JS 验证代码。'
            }
          ]
        },
        {
          id: 'html-select-radio',
          title: '7.3 选择类控件：radio、checkbox、select',
          sections: [
            { type: 'text', content: '单选、多选、下拉选择是表单的三大选择控件，它们的共同点是：靠 `name` 分组、靠 `value` 提供提交值。' },
            {
              type: 'code',
              title: '三种选择控件',
              lang: 'html',
              code: '<!-- 单选框：同一组 name 相同，只能选一个 -->\n<p>性别：</p>\n<input type="radio" name="gender" value="male" checked> 男\n<input type="radio" name="gender" value="female"> 女\n\n<!-- 复选框：同一组 name 相同，可多选 -->\n<p>爱好：</p>\n<input type="checkbox" name="hobby" value="read"> 阅读\n<input type="checkbox" name="hobby" value="run" checked> 跑步\n<input type="checkbox" name="hobby" value="music"> 音乐\n\n<!-- 下拉框：select 容器 + option 选项 -->\n<p>城市：</p>\n<select name="city">\n  <option value="">-- 请选择 --</option>\n  <option value="beijing" selected>北京</option>\n  <option value="shanghai">上海</option>\n  <option value="guangzhou">广州</option>\n</select>'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'radio **同组必须同 `name`**，否则起不到单选互斥的效果',
                '`checked` / `selected` 表示默认选中',
                '用户看到的是选项文字，实际提交的是 `value` 的值',
                '`select` 加 `multiple` 属性可变成多选下拉（按住 Ctrl 选）',
                '`<optgroup label="分组名">` 可以给 option 分组'
              ]
            }
          ]
        },
        {
          id: 'html-label',
          title: '7.4 label 与控件分组',
          sections: [
            { type: 'text', content: '点一下文字就能选中对应的输入框？这就是 `<label>` 的作用。它把文字和控件**关联**起来，大幅提升点击体验。' },
            {
              type: 'code',
              title: 'label 的两种写法',
              lang: 'html',
              code: '<!-- 写法一：for 指向控件的 id -->\n<label for="user">用户名</label>\n<input type="text" id="user" name="username">\n\n<!-- 写法二：直接把控件包进 label（不用写 for/id） -->\n<label>\n  <input type="radio" name="gender" value="male"> 男\n</label>\n<label>\n  <input type="radio" name="gender" value="female"> 女\n</label>\n\n<!-- fieldset：把控件分组，legend 是组标题 -->\n<fieldset>\n  <legend>联系方式</legend>\n  <input type="tel" name="phone" placeholder="电话">\n  <input type="email" name="mail" placeholder="邮箱">\n</fieldset>'
            },
            {
              type: 'tip',
              content: 'radio 和 checkbox 强烈建议配 label，否则那个小小的圆圈很难点中。'
            }
          ]
        },
        {
          id: 'html-textarea-button',
          title: '7.5 多行文本 textarea 与按钮 button',
          sections: [
            { type: 'text', content: '`<textarea>` 是多行文本输入框，`<button>` 是按钮。button 有三种类型，行为完全不同。' },
            {
              type: 'code',
              title: 'textarea 与 button',
              lang: 'html',
              code: '<!-- 多行文本框：rows 行数，cols 列数 -->\n<textarea name="intro" rows="5" cols="40" placeholder="介绍一下自己...">默认内容写在这里</textarea>\n\n<!-- 按钮的三种类型 -->\n<button type="submit">提交（默认类型，提交表单）</button>\n<button type="reset">重置（清空表单所有输入）</button>\n<button type="button">普通按钮（不干任何事，配合 JS 使用）</button>'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'textarea 是**双标签**，默认值写在标签中间，不是 `value` 属性',
                '`resize: none`（CSS）可以禁止用户拖拽右下角调整大小',
                '表单里的 button **不写 type 时默认是 submit**，容易误提交，要留意',
                '按钮也可以用 `<input type="submit" value="提交">` 实现，但 button 更灵活（可以放图标等）'
              ]
            }
          ]
        },
        {
          id: 'html-form-submit',
          title: '7.6 表单提交与 get / post',
          sections: [
            { type: 'text', content: '点击提交按钮后，浏览器会把表单里**所有带 `name` 的控件**打包，按 `method` 指定的方式发送到 `action` 地址。' },
            {
              type: 'code',
              title: 'get 提交后的网址变化',
              lang: 'html',
              code: '<form action="/search" method="get">\n  <input type="text" name="keyword" placeholder="搜索关键词">\n  <button type="submit">搜索</button>\n</form>\n\n<!-- 提交后地址栏变成： -->\n<!-- /search?keyword=html -->\n<!-- 多个数据用 & 连接：/search?keyword=html&page=2 -->'
            },
            {
              type: 'table',
              title: 'get 与 post 的区别',
              headers: ['对比项', 'get', 'post'],
              rows: [
                ['数据位置', '拼接在网址后面（?key=value）', '放在请求体里，地址栏看不到'],
                ['数据量', '受网址长度限制，较小', '基本无限制'],
                ['安全性', '低：密码等会直接显示在网址里', '相对高'],
                ['典型场景', '搜索、筛选、分页', '登录、注册、上传文件']
              ]
            },
            {
              type: 'warn',
              content: '涉及密码、隐私的操作必须用 `post`；文件上传的表单还要加 `enctype="multipart/form-data"`。'
            }
          ]
        }
      ]
    },

    /* ============ 第八章 全局属性与 HTML5 ============ */
    {
      id: 'html-ch8',
      title: '第八章 全局属性与 HTML5',
      lessons: [
        {
          id: 'html-global-attrs',
          title: '8.1 全局属性：id、class 与更多',
          sections: [
            { type: 'text', content: '全局属性是**所有标签都能用**的属性。它们是 HTML 与 CSS、JavaScript 之间的桥梁，必须熟练掌握。' },
            {
              type: 'code',
              title: '常用全局属性',
              lang: 'html',
              code: '<!-- id：唯一标识，一个页面不能重复 -->\n<h1 id="main-title">标题</h1>\n\n<!-- class：类名，可以重复、可以多个（空格隔开） -->\n<p class="text red">我有两个类</p>\n<p class="text">我有一个类</p>\n\n<!-- style：行内样式，直接写 CSS（优先级高，但不推荐多用） -->\n<p style="color: blue;">我是蓝色</p>\n\n<!-- title：鼠标悬停时的提示文字 -->\n<span title="这是一段补充说明">悬停看我</span>\n\n<!-- hidden：直接隐藏元素 -->\n<p hidden>你看不到我</p>\n\n<!-- contenteditable：让内容可以编辑 -->\n<p contenteditable>点我试试，这段文字可以编辑</p>\n\n<!-- data-*：自定义数据属性，常给 JS 提供数据 -->\n<button data-goods-id="1001" data-price="99">加入购物车</button>'
            },
            {
              type: 'table',
              title: 'id 与 class 对比',
              headers: ['对比项', 'id', 'class'],
              rows: [
                ['唯一性', '页面内必须唯一', '可以重复使用'],
                ['多个值', '只能一个', '空格隔开可写多个'],
                ['CSS 选择器', '`#main-title`', '`.text`'],
                ['JS 获取', '`document.getElementById`', '`querySelector(".text")`'],
                ['使用建议', '锚点、单个关键元素', '**日常开发的主力**']
              ]
            }
          ]
        },
        {
          id: 'html5-new-tags',
          title: '8.2 HTML5 实用新标签',
          sections: [
            { type: 'text', content: '除了语义标签，HTML5 还带来了一批实用的小控件标签，不用写一行 JS 就有交互效果。' },
            {
              type: 'code',
              title: 'details、datalist、progress 与 meter',
              lang: 'html',
              code: '<!-- details：点击展开/收起，summary 是标题 -->\n<details>\n  <summary>什么是 HTML？</summary>\n  <p>HTML 是超文本标记语言，用来搭建网页结构。</p>\n</details>\n\n<!-- datalist：为输入框提供候选选项 -->\n<input type="text" list="cities" placeholder="输入城市">\n<datalist id="cities">\n  <option value="北京">\n  <option value="上海">\n  <option value="广州">\n</datalist>\n\n<!-- progress：进度条 -->\n<progress value="70" max="100"></progress>\n\n<!-- meter：度量值（如磁盘用量） -->\n<meter value="6" min="0" max="10" low="3" high="8"></meter>'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`details` 默认收起，加 `open` 属性默认展开',
                '`datalist` 的 `id` 要和输入框的 `list` 值对应',
                '`progress` 表进度（0 到 max），`meter` 表度量（有正常/警戒范围）',
                '还有 `<mark>` 高亮、`<time>` 时间等小标签，见前面章节'
              ]
            }
          ]
        },
        {
          id: 'html5-overview',
          title: '8.3 HTML5 新特性概览',
          sections: [
            { type: 'text', content: 'HTML5 是一次大版本升级，除了新标签，还包含一系列新能力。这里先建立整体印象，学到 JS 部分会用到其中几个。' },
            {
              type: 'list',
              title: 'HTML5 的主要新特性',
              items: [
                '**语义化标签**：header、nav、article、section 等（第三章已学）',
                '**多媒体**：audio、video 原生播放（第五章已学）',
                '**表单增强**：email/date/range 等新类型 + 自带校验（第七章已学）',
                '**绘图**：`<canvas>` 用 JS 画图，`<svg>` 矢量图形',
                '**本地存储**：localStorage / sessionStorage，网页也能存数据',
                '**地理定位**：浏览器经纬度接口',
                '**Web Workers**：后台多线程计算'
              ]
            },
            {
              type: 'code',
              title: 'canvas 与 svg 长什么样',
              lang: 'html',
              code: '<!-- canvas：一块画布，内容由 JS 绘制 -->\n<canvas id="board" width="200" height="100"></canvas>\n\n<!-- svg：矢量图形，直接写标签就能显示 -->\n<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" fill="steelblue"></circle>\n</svg>'
            },
            {
              type: 'tip',
              content: '到这里 HTML 的常用知识点已经齐全了。建议动手做一个"个人介绍页"，用上标题、段落、列表、图片、链接、表格和表单，做出来才算真的掌握。接下来进入 **CSS** 的学习。'
            }
          ]
        }
      ]
    }
  ]
}
