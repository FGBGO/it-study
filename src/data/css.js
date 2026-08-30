// ============================================================
// CSS 分类教学数据（结构与 html.js 相同，见该文件头部说明）
// ============================================================
export default {
  id: 'css',
  name: 'CSS',
  short: 'C',
  color: '#2563eb',
  description: '网页的皮肤：负责页面的外观、布局与动效',
  chapters: [
    /* ============ 第一章 CSS 入门 ============ */
    {
      id: 'css-ch1',
      title: '第一章 CSS 入门',
      lessons: [
        {
          id: 'css-what-is',
          title: '1.1 什么是 CSS 与三种引入方式',
          sections: [
            { type: 'text', content: 'CSS（Cascading Style Sheets，**层叠样式表**）负责网页的外观：颜色、字体、大小、位置、动画，全都由它控制。HTML 说"这里有个标题"，CSS 说"这个标题是红色、36 像素"。' },
            {
              type: 'code',
              title: '三种引入 CSS 的方式',
              lang: 'html',
              code: '<!-- 方式一：行内样式（写在标签的 style 属性里） -->\n<p style="color: red; font-size: 18px;">红色文字</p>\n\n<!-- 方式二：内部样式（写在 head 的 style 标签里） -->\n<head>\n  <style>\n    p { color: red; }\n  </style>\n</head>\n\n<!-- 方式三：外部样式（单独的 .css 文件，推荐） -->\n<head>\n  <link rel="stylesheet" href="style.css">\n</head>'
            },
            {
              type: 'list',
              title: '三种方式怎么选',
              items: [
                '**外部样式**（推荐）：结构与样式分离，可以多页面共用，方便维护',
                '**内部样式**：单个页面的小demo、临时实验可以用',
                '**行内样式**：优先级最高，但难以复用，只在个别地方临时覆盖时使用'
              ]
            },
            {
              type: 'tip',
              content: '三种方式同时存在时，行内样式 > 内部样式 / 外部样式（后写的覆盖先写的）。'
            }
          ]
        },
        {
          id: 'css-syntax',
          title: '1.2 基本语法与注释',
          sections: [
            { type: 'text', content: 'CSS 的一句话语法：**选中谁（选择器），改什么（属性），改成什么（值）**。' },
            {
              type: 'code',
              title: 'CSS 语法结构',
              lang: 'css',
              code: '/* 这是 CSS 的注释，只有这一种写法 */\n\n/* 选择器 { 属性: 值; } */\np {\n  color: red;        /* 文字颜色 */\n  font-size: 16px;   /* 字号 */\n  line-height: 1.6;  /* 行高 */\n}\n\n/* 多个选择器写在一起（并集） */\nh1, h2, h3 {\n  font-weight: bold;\n}\n\n/* 一个属性多个值，空格隔开 */\ndiv {\n  border: 1px solid #333;  /* 宽度 样式 颜色 */\n}'
            },
            {
              type: 'list',
              title: '书写规范建议',
              items: [
                '每条声明以**分号**结尾（最后一条也建议写）',
                '属性名不区分大小写，但约定全部**小写**',
                '注释用 `/* */`，**不能嵌套**注释',
                '缩进用 2 或 4 空格，保持统一'
              ]
            },
            {
              type: 'warn',
              content: 'CSS 注释只有 `/* */` 一种，`//` 在 CSS 里是非法的，会导致后面的样式失效。'
            }
          ]
        }
      ]
    },

    /* ============ 第二章 选择器 ============ */
    {
      id: 'css-ch2',
      title: '第二章 选择器',
      lessons: [
        {
          id: 'css-basic-selectors',
          title: '2.1 基础选择器',
          sections: [
            { type: 'text', content: '选择器决定样式作用于**哪些元素**，是 CSS 最重要的基础。先掌握四个基础选择器。' },
            {
              type: 'code',
              title: '四大基础选择器',
              lang: 'css',
              code: '/* 1. 标签选择器：选中所有该标签 */\np {\n  color: #333;\n}\n\n/* 2. 类选择器：选中 class="active" 的元素（最常用） */\n.active {\n  color: blue;\n}\n\n/* 3. id 选择器：选中 id="header" 的唯一元素 */\n#header {\n  background: #f5f5f5;\n}\n\n/* 4. 通配符选择器：选中所有元素（常用于清除默认样式） */\n* {\n  margin: 0;\n  padding: 0;\n}'
            },
            {
              type: 'code',
              title: '对应的 HTML',
              lang: 'html',
              code: '<p>我是段落，会被标签选择器选中</p>\n<p class="active">我还会被类选择器选中</p>\n<div id="header">我唯一</div>'
            },
            {
              type: 'tip',
              content: '日常开发中**类选择器使用频率最高**：不与标签绑定、可复用、可叠加多个类。'
            }
          ]
        },
        {
          id: 'css-combine-selectors',
          title: '2.2 组合选择器',
          sections: [
            { type: 'text', content: '单个选择器可以组合起来，实现更精准的定位。重点掌握**后代**与**子代**的区别。' },
            {
              type: 'code',
              title: '五种组合方式',
              lang: 'css',
              code: '/* 1. 后代选择器：空格隔开 —— 选中 .nav 里面所有的 a（不管嵌套多深） */\n.nav a {\n  color: #333;\n}\n\n/* 2. 子代选择器：> 隔开 —— 只选中 .nav 的直接子级 a */\n.nav > a {\n  color: blue;\n}\n\n/* 3. 相邻兄弟选择器：+ —— 紧跟在 h2 后面的第一个 p */\nh2 + p {\n  font-weight: bold;\n}\n\n/* 4. 通用兄弟选择器：~ —— h2 后面所有的 p（同层级） */\nh2 ~ p {\n  color: gray;\n}\n\n/* 5. 交集选择器：连写 —— 既是 p 又有 .active 类 */\np.active {\n  color: red;\n}\n\n/* 并集选择器：逗号隔开 —— 同时选中多种 */\nh1, h2, .title {\n  font-size: 24px;\n}'
            },
            {
              type: 'code',
              title: '看懂后代与子代的区别',
              lang: 'html',
              code: '<div class="nav">\n  <a href="#">直接子级，后代与子代选择器都选中</a>\n  <ul>\n    <li><a href="#">更深层，只有后代选择器选中</a></li>\n  </ul>\n</div>'
            },
            {
              type: 'warn',
              content: '后代选择器是空格，交集选择器是连写（无分隔符），`div.active` 和 `div .active` 是完全不同的两个选择器。'
            }
          ]
        },
        {
          id: 'css-pseudo-class',
          title: '2.3 伪类选择器',
          sections: [
            { type: 'text', content: '伪类用**单个冒号**表示，用来选中元素的**某种状态**或**特定位置**，比如鼠标悬停、第一个子元素。' },
            {
              type: 'code',
              title: '常用状态伪类',
              lang: 'css',
              code: '/* 鼠标悬停（最常用） */\nbutton:hover {\n  background: #2563eb;\n}\n\n/* 获得焦点（输入框点击/Tab进入时） */\ninput:focus {\n  border-color: #2563eb;\n  outline: none;\n}\n\n/* 被激活（按下去的瞬间） */\nbutton:active {\n  transform: scale(0.98);\n}\n\n/* 表单禁用状态 */\ninput:disabled {\n  background: #eee;\n}'
            },
            {
              type: 'code',
              title: '结构伪类：按位置选择',
              lang: 'css',
              code: '/* 第一个和最后一个子元素 */\nli:first-child { font-weight: bold; }\nli:last-child { border-bottom: none; }\n\n/* 第 3 个子元素 */\nli:nth-child(3) { color: red; }\n\n/* 偶数行（2、4、6...）常用于表格斑马纹 */\ntr:nth-child(even) { background: #fafafa; }\n\n/* 奇数行 */\ntr:nth-child(odd) { background: #fff; }\n\n/* 3 的倍数 */\nli:nth-child(3n) { color: blue; }\n\n/* 倒数第 2 个 */\nli:nth-last-child(2) { color: gray; }'
            },
            {
              type: 'tip',
              content: '`nth-child` 的参数很灵活：`even` 偶数、`odd` 奇数、`2n` 倍数、`3n+1` 带余数的公式。'
            }
          ]
        },
        {
          id: 'css-pseudo-element',
          title: '2.4 伪元素选择器',
          sections: [
            { type: 'text', content: '伪元素用**两个冒号**表示，用来选中元素的一部分内容，甚至**创造不存在的元素**。最经典的是 `::before` 和 `::after`。' },
            {
              type: 'code',
              title: '常用伪元素',
              lang: 'css',
              code: '/* ::before / ::after：在元素内容前/后插入内容 */\n.price::before {\n  content: "￥";          /* content 必须写，哪怕是空字符串 */\n  color: red;\n}\n\n.clearfix::after {\n  content: "";\n  display: block;\n  clear: both;            /* 经典的清除浮动写法 */\n}\n\n/* ::first-letter：第一个字，常做首字放大 */\narticle p::first-letter {\n  font-size: 2em;\n}\n\n/* ::selection：用户选中文字时的样式 */\np::selection {\n  background: #2563eb;\n  color: white;\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`::before` / `::after` **必须配合 `content` 属性**使用',
                '插入的内容默认是**行内元素**，可以设置 `display` 改变',
                '伪元素在 DOM 里**真实不存在**，无法被 JS 直接选中，但可以美化界面而不增加 HTML',
                '单冒号 `:before` 是旧写法，现在统一用双冒号'
              ]
            }
          ]
        },
        {
          id: 'css-attr-selector',
          title: '2.5 属性选择器',
          sections: [
            { type: 'text', content: '属性选择器按**HTML 属性**来匹配元素，不需要额外加类名，写表单样式和图标时特别好用。' },
            {
              type: 'code',
              title: '属性选择器全家桶',
              lang: 'css',
              code: '/* 选中拥有 disabled 属性的按钮 */\nbutton[disabled] {\n  background: #eee;\n}\n\n/* 选中 type="text" 的输入框 */\ninput[type="text"] {\n  border: 1px solid #ccc;\n}\n\n/* class 属性值"包含"单词 icon 的元素 */\n[class~="icon"] {\n  display: inline-block;\n}\n\n/* href 以 https 开头的链接 */\na[href^="https"] {\n  color: green;\n}\n\n/* href 以 .pdf 结尾的链接，自动加图标提示 */\na[href$=".pdf"]::after {\n  content: " (PDF)";\n  font-size: 12px;\n  color: red;\n}\n\n/* alt 属性中包含"猫"的图片 */\nimg[alt*="猫"] {\n  border: 2px solid orange;\n}'
            },
            {
              type: 'table',
              title: '符号含义速记',
              headers: ['写法', '含义'],
              rows: [
                ['`[attr]`', '拥有该属性'],
                ['`[attr="v"]`', '属性值完全等于 v'],
                ['`[attr~="v"]`', '属性值包含单词 v（按空格分词）'],
                ['`[attr^="v"]`', '以 v **开头**（^ 像向上的箭头）'],
                ['`[attr$="v"]`', '以 v **结尾**（$ 像结尾符号）'],
                ['`[attr*="v"]`', '包含 v 这段**子串**']
              ]
            }
          ]
        },
        {
          id: 'css-specificity',
          title: '2.6 优先级、继承与 !important',
          sections: [
            { type: 'text', content: '多条规则命中同一个元素时听谁的？这就是**优先级（层叠性）**问题。CSS 有一套明确的权重算法。' },
            {
              type: 'table',
              title: '优先级从高到低',
              headers: ['排名', '选择器', '权重示意'],
              rows: [
                ['1', '行内样式 `style="..."`', '1000'],
                ['2', 'id 选择器 `#id`', '100'],
                ['3', '类 / 伪类 / 属性选择器 `.a` `:hover` `[attr]`', '10'],
                ['4', '标签 / 伪元素选择器 `p` `::before`', '1'],
                ['5', '通配符 `*`、继承的样式', '0']
              ]
            },
            {
              type: 'code',
              title: '权重比较示例',
              lang: 'css',
              code: '/* 权重 = 1 个标签 = 1 */\np { color: gray; }\n\n/* 权重 = 1 个类 = 10，胜出 */\n.text { color: blue; }\n\n/* 权重 = 1 个 id = 100，再胜出 */\n#intro { color: red; }\n\n/* 权重 = id + 类 = 110，最终胜出 */\n#intro.text { color: green; }'
            },
            {
              type: 'list',
              title: '三条判定规则',
              items: [
                '权重**逐级比较**：先比 id 个数，再比类个数，最后比标签个数',
                '权重相同时，**后写的覆盖先写的**',
                '属性值带 `inherit`（继承）的样式永远打不过直接选中的样式'
              ]
            },
            {
              type: 'warn',
              content: '`!important` 可以强行提权到最高，但会破坏正常的层叠逻辑，让代码难维护，**不到万不得已不要用**。'
            }
          ]
        }
      ]
    },

    /* ============ 第三章 样式基础 ============ */
    {
      id: 'css-ch3',
      title: '第三章 样式基础',
      lessons: [
        {
          id: 'css-color',
          title: '3.1 颜色的四种表示法',
          sections: [
            { type: 'text', content: 'CSS 中颜色有四种写法，日常开发前两种最常用，`rgba` 在需要透明度时必备。' },
            {
              type: 'code',
              title: '四种颜色写法',
              lang: 'css',
              code: 'div {\n  /* 1. 颜色关键字 */\n  color: red;\n\n  /* 2. 十六进制：#RRGGBB，可缩写成三位 */\n  color: #ff0000;   /* 红色 */\n  color: #f00;      /* 等价缩写 */\n  color: #333333;   /* 深灰（网页最常用的文字色） */\n  color: #fff;      /* 白色 */\n\n  /* 3. rgb：红绿蓝三通道，各 0~255 */\n  color: rgb(255, 0, 0);\n\n  /* 4. rgba：多一个透明度 alpha，0 全透明 ~ 1 不透明 */\n  color: rgba(255, 0, 0, 0.5);   /* 半透明红色 */\n  background: rgba(0, 0, 0, 0.6); /* 常用于遮罩层 */\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '十六进制的本质就是 rgb，`#f00` = `rgb(255,0,0)`',
                '`rgba` 的透明度写在**第四个参数**，0.5 也可以写成 `.5`',
                '透明色可用 `transparent` 关键字',
                '还有 `hsl(色相, 饱和度, 亮度)` 写法，调色更直观，感兴趣可自行了解'
              ]
            }
          ]
        },
        {
          id: 'css-units',
          title: '3.2 尺寸单位：px、em、rem、vw、vh、%',
          sections: [
            { type: 'text', content: 'CSS 单位分**绝对单位**（px）和**相对单位**（em、rem、vw、vh、%）。掌握相对单位是做响应式页面的前提。' },
            {
              type: 'table',
              title: '常用单位一览',
              headers: ['单位', '相对于谁', '典型用途'],
              rows: [
                ['`px`', '固定像素，不随环境变化', '边框、图标等需要精确的场合'],
                ['`em`', '**父元素**的字号', '行高、内边距随字号缩放'],
                ['`rem`', '**根元素** html 的字号（默认 16px）', '整体字号、间距，响应式首选'],
                ['`vw` / `vh`', '视口宽/高的 1%', '全屏横幅、满屏布局'],
                ['`%`', '父元素的对应属性', '宽度自适应']
              ]
            },
            {
              type: 'code',
              title: 'rem 的换算示例',
              lang: 'css',
              code: '/* html 默认 font-size: 16px */\nhtml {\n  font-size: 16px;\n}\n\n/* 1rem = 16px，1.5rem = 24px */\nh1 {\n  font-size: 1.5rem;   /* 24px */\n}\n\np {\n  font-size: 0.875rem; /* 14px */\n  line-height: 1.6;    /* 行高不带单位 = 字号的 1.6 倍（推荐写法） */\n}\n\n/* 移动端常用：改根字号，全页随动 */\n@media (max-width: 640px) {\n  html { font-size: 14px; }\n}'
            },
            {
              type: 'tip',
              content: '经验法则：**字号、间距用 rem，布局宽度用 %，全屏区块用 vw/vh，边框用 px**。'
            }
          ]
        },
        {
          id: 'css-font',
          title: '3.3 字体属性 font',
          sections: [
            { type: 'text', content: '字体属性控制文字的**字体族、大小、粗细、样式**，是最常调整的一组外观属性。' },
            {
              type: 'code',
              title: '字体全家桶',
              lang: 'css',
              code: 'p {\n  /* 字体族：从左往右找，找到系统里有的为止，最后必须兜底 */\n  font-family: "Microsoft YaHei", "PingFang SC", Arial, sans-serif;\n\n  /* 字号 */\n  font-size: 16px;\n\n  /* 粗细：normal=400，bold=700，也可以写数字 */\n  font-weight: 700;      /* 100~900，越大越粗 */\n\n  /* 样式：italic 斜体 */\n  font-style: italic;\n\n  /* font 复合写法：样式 粗细 字号/行高 字体族 */\n  font: italic 700 16px/1.5 "Microsoft YaHei", sans-serif;\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`font-family` 里带空格的字体名要**加引号**',
                '最后一定要写一个通用兜底：`sans-serif`（无衬线）或 `serif`（衬线）',
                '中文网页常用：微软雅黑（Windows）、苹方（Mac）',
                '`font-weight` 用数字更精确：400 常规、500 中等、600 半粗、700 粗'
              ]
            },
            {
              type: 'tip',
              content: '想在网页用特殊字体，可用 `@font-face` 引入字体文件，或使用在线字体服务；注意中文字体文件较大。'
            }
          ]
        },
        {
          id: 'css-text',
          title: '3.4 文本属性 text 与行高',
          sections: [
            { type: 'text', content: '文本属性控制整段文字的**对齐、装饰、间距**等排版效果，学会它们页面立刻精致起来。' },
            {
              type: 'code',
              title: '常用文本属性',
              lang: 'css',
              code: 'p {\n  /* 颜色 */\n  color: #333;\n\n  /* 对齐：left / center / right / justify（两端对齐） */\n  text-align: center;\n\n  /* 装饰线：underline 下划线 / line-through 删除线 / none 去掉 */\n  text-decoration: none;   /* 常用于去掉 a 标签下划线 */\n\n  /* 字间距 与 词间距 */\n  letter-spacing: 2px;\n  word-spacing: 4px;\n\n  /* 首行缩进：2em = 缩进两个汉字 */\n  text-indent: 2em;\n\n  /* 大小写转换（英文场景） */\n  text-transform: uppercase;\n\n  /* 行高：数字写法 = 字号的倍数（推荐） */\n  line-height: 1.7;\n\n  /* 文字溢出省略（单行，三件套缺一不可） */\n  white-space: nowrap;      /* 不换行 */\n  overflow: hidden;         /* 溢出隐藏 */\n  text-overflow: ellipsis;  /* 溢出显示省略号 */\n}'
            },
            {
              type: 'list',
              title: '行高的两个妙用',
              items: [
                '**让单行文字垂直居中**：把 `line-height` 设为元素高度一样，按钮文字居中就是这原理',
                '正文行高建议 `1.5 ~ 1.8`，阅读体验最舒适'
              ]
            }
          ]
        },
        {
          id: 'css-list-table',
          title: '3.5 列表与表格样式',
          sections: [
            { type: 'text', content: '列表和表格都有默认的浏览器样式（圆点、边框间隙），实际开发中第一件事通常是调整或去掉它们。' },
            {
              type: 'code',
              title: '列表样式',
              lang: 'css',
              code: '/* 去掉列表圆点（做导航栏必用） */\nul {\n  list-style: none;\n}\n\n/* 换成实心方块 / 数字 / 自定义图标 */\nul.square { list-style-type: square; }\nol.roman  { list-style-type: lower-roman; }\nul.custom { list-style-image: url("dot.png"); }'
            },
            {
              type: 'code',
              title: '表格样式',
              lang: 'css',
              code: 'table {\n  /* 合并相邻边框：collapse 是表格美化第一步 */\n  border-collapse: collapse;\n\n  width: 100%;\n}\n\nth, td {\n  border: 1px solid #ddd;\n  padding: 8px 12px;\n  text-align: left;\n}\n\n/* 表头底色 */\nth {\n  background: #f5f5f5;\n}\n\n/* 斑马纹：偶数行灰底（伪类结合使用） */\ntbody tr:nth-child(even) {\n  background: #fafafa;\n}\n\n/* 鼠标经过行高亮 */\ntbody tr:hover {\n  background: #eff6ff;\n}'
            }
          ]
        }
      ]
    },

    /* ============ 第四章 盒模型 ============ */
    {
      id: 'css-ch4',
      title: '第四章 盒模型',
      lessons: [
        {
          id: 'css-box-model',
          title: '4.1 盒模型：一切皆盒子',
          sections: [
            { type: 'text', content: '页面上每个元素都是一个**矩形盒子**，由内到外分四层：内容 content、内边距 padding、边框 border、外边距 margin。这就是盒模型，CSS 布局的基石。' },
            {
              type: 'code',
              title: '盒模型四层结构',
              lang: 'css',
              code: 'div {\n  /* 1. 内容区：width 和 height 默认只控制这一层 */\n  width: 200px;\n  height: 100px;\n\n  /* 2. 内边距：内容与边框之间的空隙（在盒子内部） */\n  padding: 20px;\n\n  /* 3. 边框：盒子的描边 */\n  border: 2px solid #333;\n\n  /* 4. 外边距：盒子与别的盒子之间的距离（在盒子外部） */\n  margin: 10px;\n}'
            },
            {
              type: 'list',
              title: '记忆口诀',
              items: [
                '**padding 在内**：想撑开盒子的"留白"用 padding',
                '**margin 在外**：想拉开盒子之间的距离用 margin',
                'padding 会显示背景色，margin 区域不显示背景'
              ]
            },
            {
              type: 'tip',
              content: '浏览器 F12 打开开发者工具，Elements 面板里能直观看到每个元素的盒模型图，学习时多打开看。'
            }
          ]
        },
        {
          id: 'css-padding-margin',
          title: '4.2 padding 与 margin 的简写和技巧',
          sections: [
            { type: 'text', content: 'padding 和 margin 都支持 1~4 个值的简写，还各有一两个必须掌握的经典技巧。' },
            {
              type: 'code',
              title: '简写规则（以 margin 为例，padding 完全相同）',
              lang: 'css',
              code: 'div {\n  /* 1 个值：上下左右都是 10px */\n  margin: 10px;\n\n  /* 2 个值：上下 10px，左右 20px */\n  margin: 10px 20px;\n\n  /* 3 个值：上 10px，左右 20px，下 30px */\n  margin: 10px 20px 30px;\n\n  /* 4 个值：上 右 下 左（顺时针方向） */\n  margin: 10px 20px 30px 40px;\n\n  /* 也可以单独写某一边 */\n  margin-top: 10px;\n  padding-left: 20px;\n}'
            },
            {
              type: 'code',
              title: '两个经典技巧',
              lang: 'css',
              code: '/* 1. 块级元素水平居中：左右 margin 设为 auto */\n.container {\n  width: 800px;\n  margin: 0 auto;   /* 上下 0，左右自动平分 = 居中 */\n}\n\n/* 2. margin 合并现象：\n      相邻两个块级元素的上下 margin 会"合并"取较大值，\n      不会叠加。上盒子的 margin-bottom: 30px\n      + 下盒子的 margin-top: 20px = 实际间距 30px */'
            },
            {
              type: 'warn',
              content: 'margin 合并只发生在**垂直方向**的相邻块级元素之间；padding 没有"合并"一说，但会把盒子撑大，注意总宽度计算。'
            }
          ]
        },
        {
          id: 'css-border',
          title: '4.3 边框、圆角与轮廓',
          sections: [
            { type: 'text', content: '边框 border 是盒子的描边；圆角 border-radius 能把方盒子变圆、甚至变圆球，是美化页面的利器。' },
            {
              type: 'code',
              title: '边框与圆角',
              lang: 'css',
              code: 'div {\n  /* 边框三要素：宽度 样式 颜色 */\n  border: 1px solid #ccc;\n\n  /* 常见样式：solid 实线 / dashed 虚线 / dotted 点线 / none 无 */\n\n  /* 只给某一边加边框 */\n  border-bottom: 2px solid #2563eb;\n\n  /* 圆角：数值越大越圆 */\n  border-radius: 8px;       /* 四个角都是 8px */\n  border-radius: 8px 0 0 0; /* 只圆左上角 */\n  border-radius: 50%;       /* 正方形变圆球 */\n  border-radius: 18px 18px 0 0; /* 顶部圆角卡片 */\n}\n\n/* 轮廓 outline：不占空间的"外描边"，常用于表单焦点 */\ninput:focus {\n  outline: 2px solid #2563eb;\n}\n\n/* 去掉轮廓（记得提供其他焦点样式） */\nbutton { outline: none; }'
            },
            {
              type: 'tip',
              content: '`border-radius: 50%` 与 `999px` 都能做圆形/胶囊形，前者适合正方形，后者适合长条（如标签、按钮）。'
            }
          ]
        },
        {
          id: 'css-box-sizing',
          title: '4.4 box-sizing：盒子到底多大',
          sections: [
            { type: 'text', content: '默认情况下（`content-box`），`width` 只算内容区，加上 padding 和 border 后，**盒子实际占的宽度会更大**。这常让布局算不准。' },
            {
              type: 'code',
              title: '两种盒模型的区别',
              lang: 'css',
              code: '/* 默认：content-box，width 只包含内容 */\n/* 实际宽度 = 200 + 20*2 + 1*2 = 242px */\n.box1 {\n  box-sizing: content-box;\n  width: 200px;\n  padding: 20px;\n  border: 1px solid #333;\n}\n\n/* border-box：width 包含内容 + padding + border */\n/* 实际宽度 = 200px，所见即所得 */\n.box2 {\n  box-sizing: border-box;\n  width: 200px;\n  padding: 20px;\n  border: 1px solid #333;\n}\n\n/* 工程实践：全局改成 border-box，一劳永逸 */\n* {\n  box-sizing: border-box;\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`content-box`：width = 内容宽度（传统模式，越用越宽）',
                '`border-box`：width = 整个盒子宽度（改 padding 不会撑大盒子）',
                '现代项目几乎**全局使用 `border-box`**，计算简单直觉'
              ]
            }
          ]
        },
        {
          id: 'css-shadow-overflow',
          title: '4.5 阴影与溢出处理',
          sections: [
            { type: 'text', content: '阴影让元素有"浮起来"的立体感；overflow 控制内容装不下时的表现，两者都是高频属性。' },
            {
              type: 'code',
              title: '阴影 box-shadow',
              lang: 'css',
              code: '.card {\n  /* 参数：x偏移 y偏移 模糊半径 扩散半径 颜色 */\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n\n  /* 向下的柔和阴影：最常用的卡片效果 */\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n\n  /* 内阴影（inset）：输入框凹陷感 */\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);\n\n  /* 阴影不占空间，多个阴影逗号隔开 */\n  box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 4px 8px rgba(0,0,0,.1);\n}'
            },
            {
              type: 'code',
              title: '溢出 overflow',
              lang: 'css',
              code: '.box {\n  width: 200px;\n  height: 100px;\n\n  /* visible：默认，溢出部分照常显示 */\n  overflow: visible;\n\n  /* hidden：裁掉溢出部分（做头像圆框、滚动区常用） */\n  overflow: hidden;\n\n  /* auto：装不下就出现滚动条 */\n  overflow: auto;\n\n  /* scroll：始终显示滚动条（包括横向） */\n  overflow: scroll;\n\n  /* 分开控制：横向隐藏，竖向可滚 */\n  overflow-x: hidden;\n  overflow-y: auto;\n}'
            },
            {
              type: 'tip',
              content: '`overflow: hidden` 还有一个隐藏功能：**清除浮动**、**阻止 margin 合并**（形成 BFC），后面布局章节会用到。'
            }
          ]
        }
      ]
    },

    /* ============ 第五章 显示与定位 ============ */
    {
      id: 'css-ch5',
      title: '第五章 显示与定位',
      lessons: [
        {
          id: 'css-display',
          title: '5.1 display 与元素类型',
          sections: [
            { type: 'text', content: '元素分为**块级**和**行内**两大类，display 属性可以改变它们的排布方式，是理解布局的第一道门。' },
            {
              type: 'table',
              title: '块级 vs 行内 vs 行内块',
              headers: ['对比项', 'block 块级', 'inline 行内', 'inline-block 行内块'],
              rows: [
                ['独占一行', '是', '否', '否'],
                ['设置宽高', '有效', '**无效**', '有效'],
                ['默认宽度', '占满父级', '由内容撑开', '由内容撑开'],
                ['典型标签', 'div、p、h1、ul、li', 'span、a、strong', 'img、button（本质）']
              ]
            },
            {
              type: 'code',
              title: 'display 常用取值',
              lang: 'css',
              code: 'a {\n  /* 把行内 a 变成行内块：可以设置宽高，又不换行 */\n  display: inline-block;\n  width: 100px;\n  height: 40px;\n  line-height: 40px;  /* 单行文字垂直居中 */\n  text-align: center;\n}\n\nspan {\n  /* 行内变块级 */\n  display: block;\n}\n\n/* 两个主流布局模式（后面章节详解） */\n.flex-box { display: flex; }\n.grid-box { display: grid; }'
            },
            {
              type: 'tip',
              content: '记忆点：行内元素设置宽高无效，想设置就先 `display: inline-block` 或 `block`。'
            }
          ]
        },
        {
          id: 'css-visibility',
          title: '5.2 隐藏元素的三种方式',
          sections: [
            { type: 'text', content: '把元素从眼前"藏起来"有三种常用手段，它们的区别是高频面试题，实际使用场景也不同。' },
            {
              type: 'table',
              title: '三种隐藏方式对比',
              headers: ['方式', '占不占空间', '能否交互/显示子内容', '能否过渡动画'],
              rows: [
                ['`display: none`', '不占（彻底消失）', '否', '不能'],
                ['`visibility: hidden`', '占（隐身但占位）', '否', '可以'],
                ['`opacity: 0`', '占', '**能**（透明但可点击）', '可以（最常用）']
              ]
            },
            {
              type: 'code',
              title: '典型用法',
              lang: 'css',
              code: '/* 彻底移除显示：菜单切换、条件渲染 */\n.modal { display: none; }\n.modal.open { display: block; }\n\n/* 淡入淡出动画必须用 opacity */\n.tip {\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.tip:hover {\n  opacity: 1;\n}'
            },
            {
              type: 'warn',
              content: '`opacity: 0` 的元素**仍然可以点击和被屏幕阅读器读到**，如果想"看不见也不响应"，请用 `visibility: hidden` 或 `display: none`。'
            }
          ]
        },
        {
          id: 'css-position',
          title: '5.3 position 定位',
          sections: [
            { type: 'text', content: '定位让元素**脱离常规排布**，可以放到页面的任意位置：悬浮按钮、固定导航、角标都靠它实现。' },
            {
              type: 'table',
              title: '五种定位方式',
              headers: ['取值', '参考物', '是否脱标', '典型场景'],
              rows: [
                ['`static`', '无（默认值）', '否', '普通文档流'],
                ['`relative`', '自己原来的位置', '否', '做定位父级、微调位置'],
                ['`absolute`', '**最近的非 static 祖先**', '是', '角标、覆盖层'],
                ['`fixed`', '浏览器视口', '是', '固定导航、回到顶部'],
                ['`sticky`', '滚动容器', '半脱离', '吸顶表头']
              ]
            },
            {
              type: 'code',
              title: '定位标准写法（子绝父相）',
              lang: 'css',
              code: '/* 父级：相对定位（作为参照物，不改变自身显示） */\n.card {\n  position: relative;\n}\n\n/* 子级：绝对定位，贴在父级右上角 */\n.badge {\n  position: absolute;\n  top: -8px;      /* 上边距（可以为负） */\n  right: -8px;    /* 右边距 */\n}\n\n/* 固定导航：始终钉在窗口顶部 */\n.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n/* 吸顶效果：滚到顶就粘住 */\n.table-head {\n  position: sticky;\n  top: 0;\n}'
            },
            {
              type: 'warn',
              content: '使用 `absolute` 前先给**父级加 `position: relative`**（子绝父相），否则元素会一直往外找，最后相对整个页面定位，位置就乱了。'
            }
          ]
        },
        {
          id: 'css-zindex',
          title: '5.4 z-index 与层叠顺序',
          sections: [
            { type: 'text', content: '定位元素重叠时，谁在上面？`z-index` 控制堆叠顺序，数值越大越靠上，类似图层的概念。' },
            {
              type: 'code',
              title: 'z-index 基本用法',
              lang: 'css',
              code: '/* 弹窗遮罩：盖住整个页面 */\n.mask {\n  position: fixed;\n  inset: 0;            /* 四边贴满（top/right/bottom/left 的简写） */\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n}\n\n/* 弹窗本体：盖在遮罩上面 */\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);  /* 居中三件套 */\n  z-index: 101;\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`z-index` **只对定位元素**（非 static）和 flex/grid 子项生效',
                '数值不需要很大：10、100、1000 这种分层即可',
                '元素自身的 DOM 顺序也会影响：同级未设 z-index 时，后来的在上',
                '如果 z-index "不生效"，多半是父级创建了独立的层叠上下文，检查父级是否设置了 opacity、transform、z-index 等'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第六章 布局 ============ */
    {
      id: 'css-ch6',
      title: '第六章 布局',
      lessons: [
        {
          id: 'css-float',
          title: '6.1 文档流与浮动 float',
          sections: [
            { type: 'text', content: '元素默认按"从上到下、从左到右"排列，这叫**文档流**。float 最初是为了实现"文字环绕图片"，后被广泛用于横向排列。' },
            {
              type: 'code',
              title: '浮动与清除',
              lang: 'css',
              code: '/* 图片浮动：文字环绕效果 */\nimg {\n  float: left;       /* left / right / none */\n  margin: 0 12px 8px 0;\n}\n\n/* 浮动的副作用：父级高度塌陷\n   （子级全部浮动后，父级当子级不存在） */\n\n/* 清除浮动方案一：父级加 overflow: hidden */\n.parent {\n  overflow: hidden;\n}\n\n/* 清除浮动方案二：伪元素清除法（经典写法） */\n.clearfix::after {\n  content: "";\n  display: block;\n  clear: both;      /* 左右浮动都不允许 --> 撑起父级 */\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '浮动元素**脱离文档流**，但文字会环绕它',
                '浮动的最大坑：**父级高度塌陷**，必须清除浮动',
                '现代开发中 float 已基本被 Flex/Grid 取代，重点掌握"清除浮动"的思路即可'
              ]
            },
            {
              type: 'tip',
              content: '看到老项目里满屏 float 不必惊讶，那也是当时的主流方案；新项目请直接用下一课的 Flex。'
            }
          ]
        },
        {
          id: 'css-flex-container',
          title: '6.2 Flex 布局：容器属性',
          sections: [
            { type: 'text', content: 'Flex（弹性布局）是现代布局的第一主力：一行代码实现横向排列、垂直居中、两端对齐。给父元素加 `display: flex`，它就成了 flex 容器，子元素自动弹性排列。' },
            {
              type: 'code',
              title: '容器四大常用属性',
              lang: 'css',
              code: '.container {\n  display: flex;          /* 开启弹性布局 */\n\n  /* 主轴方向：row 横向（默认）/ column 纵向 */\n  flex-direction: row;\n\n  /* 换行：默认 nowrap 不换行（会被压缩），wrap 换行 */\n  flex-wrap: wrap;\n\n  /* 主轴对齐（横向）：最常用的一组值 */\n  justify-content: flex-start;   /* 起点（默认） */\n  justify-content: center;       /* 居中 */\n  justify-content: space-between;/* 两端对齐，中间平分 */\n  justify-content: space-around; /* 每项两侧等距 */\n  justify-content: space-evenly; /* 完全等距 */\n\n  /* 交叉轴对齐（纵向）：垂直居中就靠它 */\n  align-items: center;\n  align-items: flex-start;  /* 顶部 */\n  align-items: flex-end;    /* 底部 */\n  align-items: stretch;     /* 拉伸铺满（默认） */\n\n  /* 行与行的间距（多行时） */\n  align-content: space-between;\n\n  /* 项目之间的间距（新属性，很好用） */\n  gap: 12px;\n}'
            },
            {
              type: 'code',
              title: '万能居中大法',
              lang: 'css',
              code: '/* 水平垂直同时居中：Flex 之前很难，之后一行搞定 */\n.parent {\n  display: flex;\n  justify-content: center;  /* 水平居中 */\n  align-items: center;      /* 垂直居中 */\n}'
            },
            {
              type: 'tip',
              content: '记忆技巧：`justify-content` 管**主轴**（默认水平），`align-items` 管**交叉轴**（默认垂直）。'
            }
          ]
        },
        {
          id: 'css-flex-item',
          title: '6.3 Flex 项目属性与经典实例',
          sections: [
            { type: 'text', content: '容器里的每个子元素叫 flex 项目，它们也有自己的弹性属性，尤其是 `flex: 1`，实现"剩余空间自动分配"。' },
            {
              type: 'code',
              title: '项目常用属性',
              lang: 'css',
              code: '/* flex: 1 --> 自动吃掉剩余空间（万能等分布局） */\n.main {\n  flex: 1;\n}\n\n.sidebar {\n  /* 不放大、不缩小、固定 200px */\n  flex: 0 0 200px;\n}\n\n.item {\n  /* 单个项目"自己"的交叉轴对齐（覆盖容器的 align-items） */\n  align-self: flex-end;\n\n  /* 排序：数值小的在前，默认都是 0 */\n  order: -1;\n\n  /* 不许被压缩 */\n  flex-shrink: 0;\n}'
            },
            {
              type: 'code',
              title: '经典布局：上导航 + 中主体 + 下页脚',
              lang: 'css',
              code: 'body {\n  display: flex;\n  flex-direction: column;  /* 改成纵向主轴 */\n  min-height: 100vh;       /* 至少占满整个视口高 */\n}\n\nmain {\n  flex: 1;                 /* 中间区域自动吃掉剩余高度 */\n}\n/* 这样无论内容多少，页脚都贴在底部 */'
            },
            {
              type: 'list',
              title: 'flex 缩写速记',
              items: [
                '`flex: 1` = 放大 1、缩小 1、基准 0% --> **均分剩余空间**',
                '`flex: none` = 不放大不缩小 --> 固定尺寸',
                '`flex: auto` = 放大缩小都行，按内容分配'
              ]
            }
          ]
        },
        {
          id: 'css-grid',
          title: '6.4 Grid 布局入门',
          sections: [
            { type: 'text', content: 'Grid（网格布局）擅长**二维布局**：同时管行和列，做卡片列表、页面骨架比 Flex 更省事。同样写在父元素上。' },
            {
              type: 'code',
              title: 'Grid 核心用法',
              lang: 'css',
              code: '.container {\n  display: grid;\n\n  /* 定义 3 列：每列等宽（1fr = 一份剩余空间） */\n  grid-template-columns: 1fr 1fr 1fr;\n\n  /* 更简洁的等分写法：自动铺满每行，每行 3 个 */\n  grid-template-columns: repeat(3, 1fr);\n\n  /* 行高定义 */\n  grid-template-rows: auto;\n\n  /* 网格间距（横竖都管） */\n  gap: 16px;\n\n  /* 不定列数的响应式写法：\n     每列最少 250px，能塞几个塞几个（超好用） */\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n}\n\n/* 项目跨行跨列 */\n.feature {\n  grid-column: span 2;   /* 横跨 2 列 */\n  grid-row: span 2;      /* 纵跨 2 行 */\n}'
            },
            {
              type: 'table',
              title: 'Flex 与 Grid 怎么选',
              headers: ['场景', '推荐'],
              rows: [
                ['一行/一维排列（导航、按钮组）', 'Flex'],
                ['多行多列（卡片墙、相册）', 'Grid'],
                ['内容多少不定、沿一个方向伸缩', 'Flex'],
                ['行列结构规整、需要跨行跨列', 'Grid'],
                ['两者混用完全没问题', '外层 Grid，内层 Flex']
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第七章 进阶效果 ============ */
    {
      id: 'css-ch7',
      title: '第七章 进阶效果',
      lessons: [
        {
          id: 'css-background',
          title: '7.1 背景样式与渐变',
          sections: [
            { type: 'text', content: '背景不止是纯色：图片、平铺方式、位置、大小、渐变，组合起来能做出丰富的视觉效果。' },
            {
              type: 'code',
              title: '背景全家桶',
              lang: 'css',
              code: '.banner {\n  /* 背景色 */\n  background-color: #2563eb;\n\n  /* 背景图（可与颜色共存） */\n  background-image: url("bg.jpg");\n\n  /* 平铺：no-repeat 不平铺 / repeat / repeat-x */\n  background-repeat: no-repeat;\n\n  /* 位置：关键词或百分比 */\n  background-position: center;\n\n  /* 尺寸：cover 铺满并裁剪（最常用）/ contain 完整显示 */\n  background-size: cover;\n\n  /* 固定背景：滚动页面时背景不动（视差感） */\n  background-attachment: fixed;\n\n  /* 复合简写 */\n  background: #2563eb url("bg.jpg") no-repeat center / cover;\n}'
            },
            {
              type: 'code',
              title: '渐变背景（不用图片）',
              lang: 'css',
              code: '.box {\n  /* 线性渐变：方向 + 颜色列表 */\n  background: linear-gradient(to right, #2563eb, #7c3aed);\n  background: linear-gradient(135deg, #667eea, #764ba2);\n\n  /* 径向渐变：从中心向外扩散 */\n  background: radial-gradient(circle, #fff, #ddd);\n\n  /* 半透明渐变叠在图片上：Banner 常用 */\n  background:\n    linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),\n    url("bg.jpg") center / cover;\n}'
            }
          ]
        },
        {
          id: 'css-transition',
          title: '7.2 过渡 transition',
          sections: [
            { type: 'text', content: 'transition 让属性值的变化**平滑过渡**而不是瞬间跳变：悬停变色、卡片浮起都靠它，是最简单实用的动效。' },
            {
              type: 'code',
              title: '过渡写法',
              lang: 'css',
              code: '.card {\n  background: #fff;\n  transform: translateY(0);\n\n  /* 参数：属性 时长 缓动函数 延迟 */\n  transition: all 0.3s ease;\n\n  /* 推荐写法：指明具体属性，性能更好 */\n  transition: background 0.3s, transform 0.3s;\n}\n\n.card:hover {\n  background: #f0f7ff;\n  transform: translateY(-4px);   /* 悬停上浮 */\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n}\n\n/* 缓动函数常用值 */\n.ease-demo {\n  transition-timing-function: ease;     /* 默认，先快后慢 */\n  transition-timing-function: linear;   /* 匀速 */\n  transition-timing-function: ease-in;  /* 慢进 */\n  transition-timing-function: ease-out; /* 慢出 */\n  transition-timing-function: cubic-bezier(.4, 0, .2, 1); /* 自定义 */\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'transition 写在**元素本身**上（不是 :hover 里），鼠标移出时才有回弹动画',
                '并非所有属性都能过渡：能"算中间值"的才行（颜色、尺寸、位移可以；display 不行）',
                '时长建议 0.2s ~ 0.4s，太快看不清，太慢显得拖沓'
              ]
            }
          ]
        },
        {
          id: 'css-transform',
          title: '7.3 变换 transform',
          sections: [
            { type: 'text', content: 'transform 能对元素做**位移、旋转、缩放、倾斜**，且不占据布局空间、不影响其他元素，配合 transition 就是最顺滑的动效方案。' },
            {
              type: 'code',
              title: '2D 变换四件套',
              lang: 'css',
              code: '.box {\n  /* 位移：x 和 y，可用 %（相对自身） */\n  transform: translate(20px, -10px);\n\n  /* 旋转：正数顺时针 */\n  transform: rotate(45deg);\n\n  /* 缩放：1 = 原始大小，1.2 放大 20% */\n  transform: scale(1.2);\n  transform: scale(1.2, 0.8);  /* x、y 方向分别缩放 */\n\n  /* 倾斜 */\n  transform: skew(10deg);\n\n  /* 组合：从左到右依次执行，顺序不同结果不同 */\n  transform: translate(20px) rotate(10deg) scale(1.1);\n}\n\n/* 水平垂直居中的经典用法 */\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}'
            },
            {
              type: 'tip',
              content: '动画位移优先用 `transform: translate`，而不是 `top/left`：transform 由 GPU 加速，性能好得多。'
            }
          ]
        },
        {
          id: 'css-animation',
          title: '7.4 动画 animation 与 @keyframes',
          sections: [
            { type: 'text', content: 'transition 只能处理"两个状态之间"的变化；要**多关键帧的复杂动画**（循环跳动、多段变化），就需要 animation。' },
            {
              type: 'code',
              title: '定义并使用动画',
              lang: 'css',
              code: '/* 第一步：用 @keyframes 定义动画的关键帧 */\n@keyframes bounce {\n  0%   { transform: translateY(0); }\n  50%  { transform: translateY(-20px); }\n  100% { transform: translateY(0); }\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(10px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n/* 第二步：把动画绑到元素上 */\n.ball {\n  /* 动画名 时长 缓动 循环次数 */\n  animation: bounce 1s ease infinite;   /* infinite = 无限循环 */\n}\n\n.tips {\n  animation: fadeIn 0.5s ease both;     /* both = 保持首尾状态 */\n  animation-delay: 0.3s;                /* 延迟开始 */\n}'
            },
            {
              type: 'table',
              title: '常用动画属性',
              headers: ['属性', '作用'],
              rows: [
                ['`animation-name`', '关键帧名称'],
                ['`animation-duration`', '一轮时长'],
                ['`animation-timing-function`', '缓动函数（同 transition）'],
                ['`animation-delay`', '延迟'],
                ['`animation-iteration-count`', '次数：数字或 `infinite`'],
                ['`animation-direction`', '`alternate` 往返播放'],
                ['`animation-fill-mode`', '`both` 保持开始/结束状态']
              ]
            },
            {
              type: 'tip',
              content: '做加载动画的经典组合：`rotate` 关键帧 + `infinite` 循环，几行 CSS 就有一个转圈圈效果。'
            }
          ]
        },
        {
          id: 'css-media',
          title: '7.5 媒体查询与响应式布局',
          sections: [
            { type: 'text', content: '响应式布局让同一份代码在手机、平板、电脑上都显示良好。核心工具是**媒体查询**：满足条件时才应用某段样式。' },
            {
              type: 'code',
              title: '媒体查询写法',
              lang: 'css',
              code: '/* 基础样式：手机优先（默认就是小屏样式） */\n.container {\n  width: 100%;\n  padding: 12px;\n}\n\n/* 平板：>= 768px 时生效 */\n@media (min-width: 768px) {\n  .container {\n    width: 720px;\n    margin: 0 auto;\n  }\n}\n\n/* 桌面：>= 1024px 时生效 */\n@media (min-width: 1024px) {\n  .container {\n    width: 960px;\n  }\n\n  .sidebar { display: block; }  /* 小屏隐藏的侧栏这时显示 */\n}\n\n/* 也可以针对横竖屏、暗色模式等条件 */\n@media (prefers-color-scheme: dark) {\n  body { background: #111; color: #eee; }\n}'
            },
            {
              type: 'code',
              title: 'viewport 设置（响应式第一步）',
              lang: 'html',
              code: '<!-- 必须写在 head 里，否则手机会按 980px 宽渲染页面 -->\n<meta name="viewport" content="width=device-width, initial-scale=1.0">'
            },
            {
              type: 'list',
              title: '响应式开发套路',
              items: [
                'HTML 里先加 `viewport` 的 meta 标签',
                '全局 `box-sizing: border-box`，用 % / rem / flex / grid 布局',
                '手机优先写基础样式，再用 `min-width` 逐级增强大屏',
                '常用断点：768px（平板）、1024px（笔记本）、1280px（桌面）'
              ]
            },
            {
              type: 'tip',
              content: '到这里 CSS 的常用知识点已经齐全了。试着把你的 HTML 个人介绍页加上样式：导航、卡片、悬停动效、手机适配。完成后进入 **JavaScript** 的学习。'
            }
          ]
        }
      ]
    }
  ]
}
