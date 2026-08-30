// ============================================================
// JavaScript 分类教学数据（结构与 html.js 相同，见该文件头部说明）
// 注意：本文件的代码示例统一使用双引号字符串
// ============================================================
export default {
  id: 'js',
  name: 'JavaScript',
  short: 'JS',
  color: '#b45309',
  description: '网页的大脑：负责页面的交互逻辑与数据处理',
  chapters: [
    /* ============ 第一章 JS 入门 ============ */
    {
      id: 'js-ch1',
      title: '第一章 JS 入门',
      lessons: [
        {
          id: 'js-what-is',
          title: '1.1 JavaScript 是什么',
          sections: [
            { type: 'text', content: 'JavaScript（简称 JS）是网页的**编程语言**。HTML 搭好骨架、CSS 化好妆之后，JS 负责"活起来"：响应用户的点击、请求数据、验证表单、更新页面内容。' },
            {
              type: 'list',
              title: 'JS 能做什么',
              items: [
                '**操作页面**：点击按钮弹出窗口、切换菜单、轮播图',
                '**处理数据**：表单校验、列表筛选、计算统计',
                '**网络请求**：从服务器获取数据，无需刷新页面（Ajax/Fetch）',
                '**运行环境广泛**：浏览器里是前端，服务器上（Node.js）也能跑，桌面、小程序都支持'
              ]
            },
            {
              type: 'code',
              title: '第一段 JS：点按钮弹提示',
              lang: 'html',
              code: '<button onclick="alert(\"你点了我！\")">点我</button>\n\n<!-- 页面瞬间就"活"了：点击按钮弹出提示框 -->'
            },
            {
              type: 'tip',
              content: 'JS 和 Java 除了名字像，几乎是两种语言。名字带 Java 纯粹是当年的营销策略。'
            }
          ]
        },
        {
          id: 'js-usage',
          title: '1.2 在页面中使用 JS：script 标签',
          sections: [
            { type: 'text', content: 'JS 代码要写进 `<script>` 标签里（或引入外部 .js 文件），浏览器解析到 script 才会执行代码。' },
            {
              type: 'code',
              title: '三种使用方式',
              lang: 'html',
              code: '<!-- 方式一：内联脚本（写多少行都行） -->\n<script>\n  console.log("你好，JS！");\n</script>\n\n<!-- 方式二：外部文件（推荐，结构与逻辑分离） -->\n<script src="main.js"></script>\n\n<!-- 方式三：行内事件（只适合一两句的简单场景） -->\n<button onclick="alert(1)">按钮</button>\n\n<!-- 推荐：script 放在 body 最后，或加 defer -->\n<script src="main.js" defer></script>'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'script 放在 `</body>` 前：等 HTML 都加载完再执行，避免找不到元素',
                '现代写法加 `defer` 属性：脚本下载不阻塞页面，执行时机在文档解析完后',
                '外部 JS 文件里**不需要**再写 `<script>` 标签，直接写代码',
                '网页注释同样支持 `//` 单行 和 `/* */` 多行'
              ]
            }
          ]
        },
        {
          id: 'js-console',
          title: '1.3 控制台：JS 的第一个朋友',
          sections: [
            { type: 'text', content: '按 `F12` 打开浏览器开发者工具，切到 Console（控制台）面板——它是 JS 的"终端"，`console.log` 的内容都打印在这里，报错也在这里看。**学 JS 全程都离不开它**。' },
            {
              type: 'code',
              title: '常用输出方式',
              lang: 'js',
              code: '// 打印普通信息（用得最多）\nconsole.log("Hello, JavaScript!");\n\n// 可以一次打印多个值\nconsole.log("姓名：", "小明", "年龄：", 18);\n\n// 警告与错误信息（黄色/红色）\nconsole.warn("这是一条警告");\nconsole.error("这是一条错误");\n\n// 弹窗三兄弟（调试少用，交互场景用）\nalert("弹出提示框");                 // 提示\nvar ok = confirm("确定删除吗？");     // 确认框，返回 true/false\nvar name = prompt("你叫什么名字？");  // 输入框，返回输入内容或 null'
            },
            {
              type: 'tip',
              content: '控制台还能直接敲代码回车执行，做实验最方便——不用写文件，输入 `1 + 1` 回车看看。'
            }
          ]
        }
      ]
    },

    /* ============ 第二章 基础语法 ============ */
    {
      id: 'js-ch2',
      title: '第二章 变量与数据类型',
      lessons: [
        {
          id: 'js-variables',
          title: '2.1 变量与常量：let、const、var',
          sections: [
            { type: 'text', content: '变量是存放数据的"盒子"，数据可以随时更换；常量一旦赋值就不能再改。现代 JS 使用 `let`（变量）和 `const`（常量），`var` 是老写法，认识即可。' },
            {
              type: 'code',
              title: 'let 与 const 的使用',
              lang: 'js',
              code: '// let：声明变量，值可以变\nlet age = 18;\nage = 19;           // 重新赋值，没问题\n\n// const：声明常量，值不能变\nconst name = "小明";\n// name = "小红";   // 报错！常量不能重新赋值\n\n// 注意：const 的"对象内容"可以改，只是不能换对象\nconst user = { name: "小明" };\nuser.name = "小红";  // 允许\n// user = {};       // 报错\n\n// 一行声明多个\nlet a = 1, b = 2, c = 3;'
            },
            {
              type: 'table',
              title: 'let / const / var 对比',
              headers: ['对比项', 'let', 'const', 'var（旧）'],
              rows: [
                ['重复声明', '不允许', '不允许', '允许（容易出错）'],
                ['修改值', '可以', '不行', '可以'],
                ['块级作用域', '有', '有', '没有'],
                ['使用建议', '默认用它', '声明后不改就它', '**别再用**']
              ]
            },
            {
              type: 'list',
              title: '命名规则',
              items: [
                '只能包含字母、数字、下划线、`$`，且**不能以数字开头**',
                '区分大小写：`age` 和 `Age` 是两个变量',
                '不能用关键字（如 `if`、`let`、`function`）',
                '约定**驼峰命名**：`userName`、`totalCount`、`onClickHandler`'
              ]
            }
          ]
        },
        {
          id: 'js-data-types',
          title: '2.2 数据类型总览与 typeof',
          sections: [
            { type: 'text', content: 'JS 的数据分两大类：**基本类型**和**引用类型（对象）**。用 `typeof` 可以查看一个值的类型。' },
            {
              type: 'table',
              title: '七种数据类型',
              headers: ['类型', '说明', '示例'],
              rows: [
                ['`number`', '数字（整数小数都算）', '`1`、`3.14`、`-10`'],
                ['`string`', '字符串', '`"hello"`、`"你好"`'],
                ['`boolean`', '布尔：真或假', '`true`、`false`'],
                ['`undefined`', '声明了但没赋值', '`let a;`'],
                ['`null`', '空值，通常主动表示"没有"', '`null`'],
                ['`object`', '对象、数组、日期等', '`{}`、`[]`'],
                ['`symbol`', '唯一标识符（进阶）', '`Symbol()`']
              ]
            },
            {
              type: 'code',
              title: 'typeof 实操',
              lang: 'js',
              code: 'console.log(typeof 42);           // "number"\nconsole.log(typeof "hello");      // "string"\nconsole.log(typeof true);         // "boolean"\nconsole.log(typeof undefined);    // "undefined"\nconsole.log(typeof null);         // "object"（历史遗留的 bug，记住即可）\nconsole.log(typeof {});           // "object"\nconsole.log(typeof []);           // "object"（数组也是对象）\nconsole.log(typeof function(){}); // "function"'
            },
            {
              type: 'warn',
              content: '`typeof null` 返回 `"object"` 是 JS 出名的历史 bug，判断 null 请用 `value === null`。'
            }
          ]
        },
        {
          id: 'js-number-string',
          title: '2.3 数字与字符串基础',
          sections: [
            { type: 'text', content: '数字类型要注意几个特殊值；字符串是日常打交道最多的类型，先掌握基本操作，更多方法第七章细讲。' },
            {
              type: 'code',
              title: '数字类型',
              lang: 'js',
              code: 'let n1 = 10;       // 整数\nlet n2 = 3.14;     // 小数\n\n// 特殊数字值\nconsole.log(10 / 0);   // Infinity（无穷）\nconsole.log("abc" * 2); // NaN（Not a Number，非法运算）\nconsole.log(isNaN("abc" * 2)); // true，NaN 与任何值都不相等\n\n// 常用：数字与字符串相加会拼接\nconsole.log(1 + 1);     // 2\nconsole.log("1" + 1);   // "11"（字符串拼接！）'
            },
            {
              type: 'code',
              title: '字符串基础',
              lang: 'js',
              code: 'let s1 = "单引号也可以";\nlet s2 = "双引号";\n\n// 引号嵌套：外双内单 或 外单内双\nlet s3 = "他说：\\"你好\\"";\nlet s4 = "他说：";\nconsole.log(s1.length);   // 长度：6（中文也按 1 个算）\nconsole.log(s4.length);   // 5\n\n// 字符串拼接用 +\nlet msg = "我是" + "小明" + "，今年" + 18 + "岁";\nconsole.log(msg);  // 我是小明，今年18岁'
            },
            {
              type: 'tip',
              content: '拼接字符串记一个坑：**任何值 + 字符串都会变成字符串拼接**，`"1" + 1` 是 "11" 而不是 2。'
            }
          ]
        },
        {
          id: 'js-template-literal',
          title: '2.4 模板字符串：拼接的优雅写法',
          sections: [
            { type: 'text', content: '用 `+` 拼接变量多了非常难读。ES6 的**模板字符串**用反引号（`` ` ``）包裹，变量直接写在 `${}` 里，清晰又强大。' },
            {
              type: 'code',
              title: '对比：加号拼接 vs 模板字符串',
              lang: 'js',
              code: 'let name = "小明";\nlet age = 18;\n\n// 老写法：引号、加号满天飞\nvar msg1 = "我是" + name + "，今年" + age + "岁";\n\n// 新写法：反引号 + ${变量}\nlet msg2 = "我是" + name + "，今年" + age + "岁";\n\n// 模板字符串支持任意表达式\nlet price = 99;\nlet info = "总价：${price * 2} 元";   // 总价：198 元\n\n// 可以直接换行，保持格式\nlet html = "\n  <ul>\n    <li>" + name + "</li>\n    <li>" + age + " 岁</li>\n  </ul>\n";'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '必须用**反引号** `` ` `` 包裹，普通引号没有此功能',
                '变量/表达式写法：`${...}`，大括号里可以运算、调用函数',
                '天然支持多行文本，不需要 `\\n`',
                '本站的代码块里为了展示用加号代替了嵌套反引号，自己写代码请放心用 `${}`'
              ]
            }
          ]
        },
        {
          id: 'js-conversion',
          title: '2.5 类型转换与 == / ===',
          sections: [
            { type: 'text', content: 'JS 是"弱类型"语言，类型经常自动转换。显式转换靠 `Number()`、`String()`、`Boolean()`；比较时**强烈建议用 `===` 严格相等**。' },
            {
              type: 'code',
              title: '显式转换',
              lang: 'js',
              code: '// 转数字\nNumber("123");     // 123\nNumber("12.5");    // 12.5\nNumber("abc");     // NaN\nNumber("");        // 0\nparseInt("18px");  // 18（解析开头的整数）\nparseFloat("3.14m"); // 3.14（解析小数）\n\n// 转字符串\nString(123);       // "123"\n(123).toString();  // "123"\n\n// 转布尔：空值都是 false，其余 true\nBoolean(0);        // false\nBoolean("");       // false\nBoolean(null);     // false\nBoolean(undefined);// false\nBoolean("0");      // true（非空字符串）'
            },
            {
              type: 'code',
              title: '== 与 === 的区别',
              lang: 'js',
              code: '// == 会先转换类型再比较（容易出错）\nconsole.log(1 == "1");    // true\nconsole.log(0 == "");     // true\nconsole.log(null == undefined); // true\n\n// === 类型和值都必须一样（推荐）\nconsole.log(1 === "1");   // false\nconsole.log(1 === 1);     // true\n\n// 结论：永远使用 === 和 !=='
            },
            {
              type: 'warn',
              content: '记住铁律：**判断相等一律用 `===`**，`==` 的隐式转换规则坑过无数人。'
            }
          ]
        }
      ]
    },

    /* ============ 第三章 运算符与流程控制 ============ */
    {
      id: 'js-ch3',
      title: '第三章 运算符与流程控制',
      lessons: [
        {
          id: 'js-operators',
          title: '3.1 运算符全家桶',
          sections: [
            { type: 'text', content: '运算符负责计算和判断，分算术、赋值、比较、逻辑几大类，绝大多数和数学课上的直觉一致。' },
            {
              type: 'code',
              title: '算术与赋值运算符',
              lang: 'js',
              code: '// 算术：+ - * / %（取余） **（幂）\nconsole.log(10 % 3);   // 1（取余，判断奇偶常用）\nconsole.log(2 ** 10);  // 1024（2 的 10 次方）\n\n// 自增自减\nlet i = 5;\ni++;   // i 变成 6（相当于 i = i + 1）\ni--;   // i 变回 5\n\n// 复合赋值\nlet n = 10;\nn += 5;  // n = n + 5 --> 15\nn -= 3;  // 12\nn *= 2;  // 24\nn /= 4;  // 6'
            },
            {
              type: 'code',
              title: '逻辑运算符与短路',
              lang: 'js',
              code: '// 与 &&：都真才真\n// 或 ||：有一个真就真\n// 非 !：取反\nconsole.log(true && false);  // false\nconsole.log(true || false);  // true\nconsole.log(!true);          // false\n\n// 短路技巧 1：|| 给默认值（左边是假值就用右边）\nlet name = "";\nlet nick = name || "匿名用户";   // "匿名用户"\n\n// 短路技巧 2：&& 满足条件才执行\nlet user = { name: "小明" };\nuser && console.log(user.name);\n\n// ES2020 新增：?. 可选链（存在才访问）\n// user.profile?.age --> profile 不存在也不报错，返回 undefined'
            }
          ]
        },
        {
          id: 'js-if',
          title: '3.2 if 条件语句',
          sections: [
            { type: 'text', content: '条件语句让程序"看情况办事"：满足条件才执行某段代码，这是所有逻辑判断的地基。' },
            {
              type: 'code',
              title: 'if 的三种形态',
              lang: 'js',
              code: '// 1. 单分支\nlet age = 20;\nif (age >= 18) {\n  console.log("已成年");\n}\n\n// 2. 双分支\nlet score = 55;\nif (score >= 60) {\n  console.log("及格");\n} else {\n  console.log("不及格");\n}\n\n// 3. 多分支（从上往下匹配，命中即止）\nscore = 85;\nif (score >= 90) {\n  console.log("优秀");\n} else if (score >= 80) {\n  console.log("良好");     // 命中这条\n} else if (score >= 60) {\n  console.log("及格");\n} else {\n  console.log("不及格");\n}'
            },
            {
              type: 'list',
              title: '假值速记',
              items: [
                '条件里的值会被转成布尔：以下六个是**假值**',
                '`false`、`0`、`""`（空字符串）、`null`、`undefined`、`NaN`',
                '其余全是真值（包括 `"0"`、`[]`、`{}`）'
              ]
            },
            {
              type: 'tip',
              content: '三元表达式是 if/else 的简写：`var result = score >= 60 ? "及格" : "不及格";`，简单判断时很好用。'
            }
          ]
        },
        {
          id: 'js-switch',
          title: '3.3 switch 语句',
          sections: [
            { type: 'text', content: '对**同一个变量的多种取值**分别处理时，switch 比 if/else 更清晰。别忘了每个 case 后面写 `break`。' },
            {
              type: 'code',
              title: 'switch 用法',
              lang: 'js',
              code: 'let day = 3;\n\nswitch (day) {\n  case 1:\n    console.log("星期一");\n    break;\n  case 2:\n    console.log("星期二");\n    break;\n  case 3:\n    console.log("星期三");   // 命中这里\n    break;\n  default:\n    console.log("无效的日期");  // 都不匹配时执行\n}\n\n// 不写 break 的后果：穿透到下一个 case 继续执行！\n// 有时反而利用穿透：\nswitch (day) {\n  case 1:\n  case 2:\n  case 3:\n  case 4:\n  case 5:\n    console.log("工作日");\n    break;\n  case 6:\n  case 7:\n    console.log("周末");\n    break;\n}'
            },
            {
              type: 'warn',
              content: 'switch 使用**严格相等（===）**比较，`case "3"` 不会匹配数字 3。'
            }
          ]
        },
        {
          id: 'js-for',
          title: '3.4 for 循环',
          sections: [
            { type: 'text', content: '循环让一段代码**重复执行**。for 循环最经典，适合"知道要循环几次"的场景，比如遍历数组。' },
            {
              type: 'code',
              title: 'for 循环结构与遍历数组',
              lang: 'js',
              code: '// 结构：for (初始; 条件; 更新)\nfor (let i = 1; i <= 5; i++) {\n  console.log("第 " + i + " 次");\n}\n\n// 遍历数组：最常用的套路\nlet fruits = ["苹果", "香蕉", "橘子"];\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(i, fruits[i]);\n}\n\n// ES6 的 for...of：直接拿值，更简洁\nfor (const fruit of fruits) {\n  console.log(fruit);\n}'
            },
            {
              type: 'list',
              title: '执行顺序',
              items: [
                '① 初始化（只执行一次）',
                '② 判断条件 --> true 执行循环体 / false 结束',
                '③ 执行循环体',
                '④ 执行更新表达式，回到 ②',
                '括号里的两个分号**不能省**'
              ]
            }
          ]
        },
        {
          id: 'js-while',
          title: '3.5 while 与 do...while',
          sections: [
            { type: 'text', content: 'while 适合"**不知道循环几次，满足条件就一直做**"的场景，比如掷骰子直到掷出 6。' },
            {
              type: 'code',
              title: 'while 与 do...while',
              lang: 'js',
              code: '// while：先判断再执行（可能一次都不执行）\nlet count = 0;\nwhile (count < 3) {\n  console.log("count = " + count);\n  count++;   // 千万别忘了更新条件，否则死循环！\n}\n\n// do...while：先执行一次再判断（至少执行一次）\nlet input;\ndo {\n  // 模拟用户输入\n  input = "y";\n  console.log("你输入了：" + input);\n} while (input !== "y");'
            },
            {
              type: 'warn',
              content: '条件永远为真的循环叫**死循环**，会卡死页面。写 while 时确认循环体内有让条件趋向 false 的代码。'
            }
          ]
        },
        {
          id: 'js-break-nest',
          title: '3.6 break、continue 与循环嵌套',
          sections: [
            { type: 'text', content: '`break` 提前结束整个循环，`continue` 跳过本轮进入下一轮；循环里再套循环可以处理二维数据。' },
            {
              type: 'code',
              title: 'break 与 continue',
              lang: 'js',
              code: '// break：找到就停\nfor (let i = 1; i <= 10; i++) {\n  if (i === 5) {\n    break;          // 到 5 直接结束整个循环\n  }\n  console.log(i);   // 只输出 1 2 3 4\n}\n\n// continue：跳过不要的\nfor (let i = 1; i <= 10; i++) {\n  if (i % 2 === 0) {\n    continue;       // 跳过偶数\n  }\n  console.log(i);   // 输出 1 3 5 7 9\n}'
            },
            {
              type: 'code',
              title: '嵌套循环：九九乘法表',
              lang: 'js',
              code: '// 外层控制行，内层控制列\nfor (let i = 1; i <= 9; i++) {\n  let line = "";\n  for (let j = 1; j <= i; j++) {\n    line += j + "x" + i + "=" + (i * j) + "\\t";\n  }\n  console.log(line);\n}'
            }
          ]
        }
      ]
    },

    /* ============ 第四章 函数与作用域 ============ */
    {
      id: 'js-ch4',
      title: '第四章 函数与作用域',
      lessons: [
        {
          id: 'js-function-basic',
          title: '4.1 函数基础：封装一段可复用的代码',
          sections: [
            { type: 'text', content: '函数把一段代码**打包命名**，随取随用。写函数三步：定义（参数）-> 调用（传参）-> 返回（结果）。' },
            {
              type: 'code',
              title: '函数的定义与调用',
              lang: 'js',
              code: '// 定义：function 函数名(参数)\nfunction greet(name) {\n  return "你好，" + name + "!";   // return 把结果交出去\n}\n\n// 调用：函数名(实参)\nlet msg = greet("小明");\nconsole.log(msg);        // 你好，小明!\n\n// 多个参数\nfunction add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 5));  // 8\n\n// 没写 return 的函数默认返回 undefined\nfunction logIt(x) {\n  console.log(x);\n}\nconsole.log(logIt(1));   // 先打印 1，再打印 undefined'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '**参数**是函数的输入占位，调用时传入具体值',
                '**return** 立即结束函数并交出结果，后面的代码不再执行',
                '函数只有**被调用**才会执行，定义时不执行',
                '函数是"一等公民"：可以赋值给变量、当参数传递'
              ]
            }
          ]
        },
        {
          id: 'js-arrow-function',
          title: '4.2 函数表达式与箭头函数',
          sections: [
            { type: 'text', content: '除了 function 声明，函数还能写成**表达式**和更简洁的**箭头函数**（ES6）。回调场景里箭头函数是绝对主流。' },
            {
              type: 'code',
              title: '三种写法对比',
              lang: 'js',
              code: '// 1. 函数声明\nfunction double(n) {\n  return n * 2;\n}\n\n// 2. 函数表达式：函数没有名字，赋给变量\nvar double2 = function (n) {\n  return n * 2;\n};\n\n// 3. 箭头函数\nvar double3 = (n) => {\n  return n * 2;\n};\n\n// 箭头函数简化：只有一个参数可省括号，直接 return 可省大括号\nvar double4 = n => n * 2;\n\n// 两个参数、无参数\nvar add = (a, b) => a + b;\nvar hello = () => console.log("hi");'
            },
            {
              type: 'list',
              title: '箭头函数使用注意',
              items: [
                '语法糖链：`(参数) => 表达式` 自动 return 该表达式的值',
                '箭头函数**没有自己的 this**，继承外层作用域（后面对象章节会体会）',
                '适合当**回调函数**：数组方法、事件处理里大量使用',
                '不适合做对象方法（this 指向不符合预期）'
              ]
            }
          ]
        },
        {
          id: 'js-scope',
          title: '4.3 作用域与变量查找',
          sections: [
            { type: 'text', content: '作用域决定变量"**在哪里可见**"。JS 有全局作用域、函数作用域和块级作用域（let/const），查找变量时由内向外逐层找。' },
            {
              type: 'code',
              title: '作用域示例',
              lang: 'js',
              code: 'let global = "全局变量，哪里都能用";\n\nfunction outer() {\n  let outerVar = "函数变量，只在函数里可用";\n\n  function inner() {\n    // 由内向外找：inner 没有 --> outer 有 --> 用它\n    console.log(outerVar);\n    console.log(global);   // 也能找到全局的\n  }\n  inner();\n}\n\n// 块级作用域：{} 内声明的 let/const 出了块就不可见\nif (true) {\n  let blockVar = "块内变量";\n}\n// console.log(blockVar); // 报错：blockVar is not defined'
            },
            {
              type: 'code',
              title: 'var 的经典坑：循环里的函数',
              lang: 'js',
              code: '// var 没有块级作用域，三次都打印 3\nfor (var i = 0; i < 3; i++) {\n  setTimeout(function () {\n    console.log(i);   // 3 3 3\n  }, 100);\n}\n\n// let 每轮创建新的 i，正常打印 0 1 2\nfor (let j = 0; j < 3; j++) {\n  setTimeout(function () {\n    console.log(j);   // 0 1 2\n  }, 100);\n}'
            },
            {
              type: 'tip',
              content: '这节课是理解 JS 的分水岭。记住一句话：**let/const 在哪个大括号里声明，就只在那个大括号里活着**。'
            }
          ]
        }
      ]
    },

    /* ============ 第五章 数组 ============ */
    {
      id: 'js-ch5',
      title: '第五章 数组',
      lessons: [
        {
          id: 'js-array-basic',
          title: '5.1 数组基础与遍历',
          sections: [
            { type: 'text', content: '数组是**有序的数据集合**，把一组数据装进一个变量里。它是 JS 中使用频率最高的数据结构。' },
            {
              type: 'code',
              title: '数组的创建与访问',
              lang: 'js',
              code: '// 创建数组（字面量写法，推荐）\nlet fruits = ["苹果", "香蕉", "橘子"];\nlet mixed = [1, "文字", true, null];  // 可以混装任意类型\n\n// 访问：下标从 0 开始\nconsole.log(fruits[0]);   // 苹果\nconsole.log(fruits[2]);   // 橘子\nconsole.log(fruits[5]);   // undefined（越界不报错）\n\n// length：元素个数\nconsole.log(fruits.length);  // 3\n\n// 修改\nfruits[1] = "葡萄";\nconsole.log(fruits);  // ["苹果", "葡萄", "橘子"]'
            },
            {
              type: 'code',
              title: '三种遍历方式',
              lang: 'js',
              code: 'let arr = ["a", "b", "c"];\n\n// 1. for 循环（能拿到下标）\nfor (let i = 0; i < arr.length; i++) {\n  console.log(i, arr[i]);\n}\n\n// 2. for...of（只要值时最简洁）\nfor (const item of arr) {\n  console.log(item);\n}\n\n// 3. forEach（数组自带的方法）\narr.forEach(function (item, index) {\n  console.log(index, item);\n});'
            }
          ]
        },
        {
          id: 'js-array-add-remove',
          title: '5.2 数组增删：push、pop、splice',
          sections: [
            { type: 'text', content: '数组可随时增删元素。头尾操作用四个单词方法，**中间任意位置增删用 splice**，它是最强大的一个。' },
            {
              type: 'code',
              title: '头尾增删四件套',
              lang: 'js',
              code: 'let arr = ["b", "c"];\n\n// 尾部\narr.push("d");       // 尾部加 --> ["b", "c", "d"]\narr.pop();           // 尾部删（返回被删的） --> ["b", "c"]\n\n// 头部\narr.unshift("a");    // 头部加 --> ["a", "b", "c"]\narr.shift();         // 头部删 --> ["b", "c"]'
            },
            {
              type: 'code',
              title: 'splice：任意位置增删改',
              lang: 'js',
              code: 'let arr = ["a", "b", "c", "d"];\n\n// 语法：splice(起始下标, 删除个数, 要插入的元素...)\n\n// 删除：从下标 1 开始删 2 个\narr.splice(1, 2);\nconsole.log(arr);       // ["a", "d"]\n\n// 插入：下标 1 处删 0 个，插入 x 和 y\narr.splice(1, 0, "x", "y");\nconsole.log(arr);       // ["a", "x", "y", "d"]\n\n// 替换：删 1 个的同时插入新的\narr.splice(1, 1, "z");\nconsole.log(arr);       // ["a", "z", "y", "d"]'
            }
          ]
        },
        {
          id: 'js-array-search',
          title: '5.3 数组查找、切割与排序',
          sections: [
            { type: 'text', content: '这组方法负责"找到目标"、"变成字符串"、"重新排列"，是处理列表数据的日常工具。' },
            {
              type: 'code',
              title: '查找与转换',
              lang: 'js',
              code: 'let arr = [3, 1, 4, 1, 5];\n\n// 查找\nconsole.log(arr.indexOf(4));     // 2（首次出现的下标，找不到返回 -1）\nconsole.log(arr.includes(5));    // true（是否包含）\n\n// 截取：slice(起, 止)，不含止，不改变原数组\nconsole.log(arr.slice(1, 3));    // [1, 4]\nconsole.log(arr);                // 原数组没变\n\n// 合并与反转\nlet a = [1, 2].concat([3, 4]);   // [1, 2, 3, 4]\n[1, 2, 3].reverse();             // [3, 2, 1]\n\n// 转字符串\nconsole.log([1, 2, 3].join("-")); // "1-2-3"'
            },
            {
              type: 'code',
              title: '排序 sort 的坑与正解',
              lang: 'js',
              code: 'let nums = [10, 1, 5, 2];\n\n// 坑：sort 默认按"字符串"排序\nconsole.log(nums.sort());      // [1, 10, 2, 5] 不是想要的！\n\n// 正解：传入比较函数\nnums.sort(function (a, b) {\n  return a - b;   // 升序（b - a 则是降序）\n});\nconsole.log(nums);  // [1, 2, 5, 10]\n\n// 对象数组排序\nlet users = [\n  { name: "小明", age: 20 },\n  { name: "小红", age: 18 }\n];\nusers.sort((x, y) => x.age - y.age);  // 按年龄升序'
            },
            {
              type: 'warn',
              content: '`sort` 和 `reverse` 会**修改原数组**；`slice`、`concat`、`join` 不修改。分不清时先打印原数组验证。'
            }
          ]
        },
        {
          id: 'js-array-hof',
          title: '5.4 高阶方法：map、filter、reduce',
          sections: [
            { type: 'text', content: '这三个方法接受**函数作为参数**，对数组做"加工"，是 ES6 后处理数据的主力，也是箭头函数的主场。' },
            {
              type: 'code',
              title: 'map：每个元素加工一遍',
              lang: 'js',
              code: 'let nums = [1, 2, 3];\n\n// 全部乘 2，返回新数组\nlet doubled = nums.map(n => n * 2);\nconsole.log(doubled);   // [2, 4, 6]\n\n// 取对象的部分字段\nlet users = [\n  { name: "小明", age: 20 },\n  { name: "小红", age: 18 }\n];\nlet names = users.map(u => u.name);\nconsole.log(names);   // ["小明", "小红"]'
            },
            {
              type: 'code',
              title: 'filter：筛选符合条件的',
              lang: 'js',
              code: 'let nums = [5, 12, 8, 130, 44];\n\n// 保留大于 10 的\nlet big = nums.filter(n => n > 10);\nconsole.log(big);   // [12, 130, 44]\n\nlet users = [\n  { name: "小明", age: 20 },\n  { name: "小红", age: 17 }\n];\nlet adults = users.filter(u => u.age >= 18);\nconsole.log(adults.length);   // 1'
            },
            {
              type: 'code',
              title: 'reduce：汇总成一个值',
              lang: 'js',
              code: 'let nums = [1, 2, 3, 4];\n\n// 求和：prev 是累加结果，next 是当前元素\n// 0 是初始值\nlet sum = nums.reduce((prev, next) => prev + next, 0);\nconsole.log(sum);   // 10\n\n// find：找到第一个符合条件的元素（返回元素本身）\nlet first = nums.find(n => n > 2);\nconsole.log(first);   // 3\n\n// some / every：只要有一个 / 全部\nconsole.log(nums.some(n => n > 3));   // true\nconsole.log(nums.every(n => n > 0));  // true'
            },
            {
              type: 'tip',
              content: '三个方法都**不改变原数组**，都返回新数据。链式调用很常见：`arr.filter(...).map(...)`。'
            }
          ]
        }
      ]
    },

    /* ============ 第六章 对象 ============ */
    {
      id: 'js-ch6',
      title: '第六章 对象',
      lessons: [
        {
          id: 'js-object-basic',
          title: '6.1 对象基础：属性与方法的集合',
          sections: [
            { type: 'text', content: '对象用**键值对**描述一个"东西"：名字、年龄、会做什么。数组管"一堆同类的值"，对象管"一个东西的多方面信息"。' },
            {
              type: 'code',
              title: '对象的创建与读写',
              lang: 'js',
              code: '// 创建对象：大括号 + 属性名: 属性值\nlet user = {\n  name: "小明",\n  age: 18,\n  isStudent: true,\n  hobbies: ["篮球", "游戏"],        // 属性值可以是数组\n  sayHi: function () {              // 属性值是函数时叫"方法"\n    console.log("大家好，我是 " + this.name);  // this 指向当前对象\n  }\n};\n\n// 读取属性：点语法 或 方括号\nconsole.log(user.name);      // 小明\nconsole.log(user["age"]);    // 18（方括号里是字符串）\n\n// 修改 / 新增\nuser.age = 20;\nuser.email = "xm@test.com";  // 原本没有，就是新增\n\n// 删除\ndelete user.isStudent;\n\n// 调用方法\nuser.sayHi();   // 大家好，我是 小明'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '属性名一般不加引号；含特殊字符时加引号：`"my-name": 1`',
                '点语法取不到**变量做属性名**的值，那种情况用方括号：`obj[key]`',
                '`this` 在方法里指向**调用方法的那个对象**',
                '访问不存在的属性得到 `undefined`，不报错'
              ]
            }
          ]
        },
        {
          id: 'js-object-traverse',
          title: '6.2 对象遍历、解构与展开',
          sections: [
            { type: 'text', content: '遍历对象要借助 `Object.keys` 等工具；ES6 的解构和展开运算符让对象操作极其顺手，在 Vue/React 项目里天天见。' },
            {
              type: 'code',
              title: '遍历对象',
              lang: 'js',
              code: 'let user = { name: "小明", age: 18, city: "北京" };\n\n// 方式一：for...in 遍历所有键\nfor (const key in user) {\n  console.log(key, user[key]);\n}\n\n// 方式二：Object.keys 拿到键数组再遍历（更常用）\nObject.keys(user).forEach(key => {\n  console.log(key, user[key]);\n});\n\n// Object.values / Object.entries\nconsole.log(Object.values(user));   // ["小明", 18, "北京"]\nconsole.log(Object.entries(user));  // [["name","小明"], ["age",18], ...]'
            },
            {
              type: 'code',
              title: '解构与展开（ES6 明星语法）',
              lang: 'js',
              code: 'let user = { name: "小明", age: 18 };\n\n// 解构：一次性取出多个属性存成变量\nlet { name, age } = user;\nconsole.log(name, age);   // 小明 18\n\n// 展开运算符：复制对象并覆盖/新增属性\nlet updated = { ...user, age: 20 };\nconsole.log(updated);   // { name: "小明", age: 20 }\n\n// 数组同样支持\nlet arr = [1, 2, 3];\nlet copy = [...arr, 4];   // [1, 2, 3, 4]\n\n// 解构函数参数（Vue 组件里超常见）\nfunction showUser({ name, age }) {\n  console.log(name + " " + age + " 岁");\n}\nshowUser(user);   // 小明 18 岁'
            },
            {
              type: 'tip',
              content: '记住高频套路：**改对象前先展开复制**（`{ ...obj, 新值 }`），不直接改原对象，这叫"不可变更新"，主流框架都这么干。'
            }
          ]
        }
      ]
    },

    /* ============ 第七章 字符串、数学与日期 ============ */
    {
      id: 'js-ch7',
      title: '第七章 字符串、数学与日期',
      lessons: [
        {
          id: 'js-string-methods',
          title: '7.1 字符串常用方法',
          sections: [
            { type: 'text', content: '字符串方法负责查找、截取、替换、拆分。**注意：所有方法都不改变原字符串**，而是返回新字符串。' },
            {
              type: 'code',
              title: '常用方法一览',
              lang: 'js',
              code: 'let s = "Hello JavaScript";\n\n// 长度与访问\nconsole.log(s.length);            // 15\nconsole.log(s[0]);                // "H"\nconsole.log(s.charAt(0));         // "H"\n\n// 查找\nconsole.log(s.indexOf("Script")); // 7（找不到返回 -1）\nconsole.log(s.includes("Java"));  // true\nconsole.log(s.startsWith("He"));  // true\n\n// 截取：slice(起, 止)，支持负数（倒数）\nconsole.log(s.slice(0, 5));       // "Hello"\nconsole.log(s.slice(-6));         // "Script"\nconsole.log(s.substring(0, 5));   // "Hello"（不支持负数）\n\n// 替换（只替换第一个匹配）\nconsole.log(s.replace("Java", "Type"));  // "Hello TypeScript"\n\n// 大小写\nconsole.log(s.toUpperCase());  // 全大写\nconsole.log(s.toLowerCase());  // 全小写\n\n// 去两端空白（处理用户输入必备）\nconsole.log("  hi  ".trim());  // "hi"\n\n// 拆分成数组\nconsole.log("a,b,c".split(","));  // ["a", "b", "c"]'
            },
            {
              type: 'tip',
              content: '高频组合：`input.trim()` 清理输入 --> `includes` 判断 --> `split` 拆开处理。'
            }
          ]
        },
        {
          id: 'js-math',
          title: '7.2 Math 数学对象',
          sections: [
            { type: 'text', content: 'Math 是内置的数学工具箱：取整、绝对值、随机数、最大最小值，不需要创建，直接 `Math.xxx` 使用。' },
            {
              type: 'code',
              title: '常用 Math 方法',
              lang: 'js',
              code: '// 取整三兄弟\nconsole.log(Math.round(4.5));  // 5（四舍五入）\nconsole.log(Math.floor(4.9));  // 4（向下取整）\nconsole.log(Math.ceil(4.1));   // 5（向上取整）\n\nconsole.log(Math.abs(-3));     // 3（绝对值）\nconsole.log(Math.max(1, 5, 3)); // 5\nconsole.log(Math.min(1, 5, 3)); // 1\n\n// 随机数：0 ~ 1 之间的小数（不含 1）\nconsole.log(Math.random());\n\n// 经典公式：随机整数 [min, max]\nfunction randomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nconsole.log(randomInt(1, 10));   // 随机 1~10，掷骰子！\n\n// 随机点名\nlet names = ["小明", "小红", "小刚"];\nlet lucky = names[Math.floor(Math.random() * names.length)];\nconsole.log(lucky);'
            }
          ]
        },
        {
          id: 'js-date',
          title: '7.3 Date 日期对象',
          sections: [
            { type: 'text', content: 'Date 对象处理日期时间。注意**月份从 0 开始**（0 = 一月），这是出了名的坑。' },
            {
              type: 'code',
              title: 'Date 基本用法',
              lang: 'js',
              code: '// 当前时间\nlet now = new Date();\nconsole.log(now);\n\n// 获取各部分\nconsole.log(now.getFullYear());  // 年 2026\nconsole.log(now.getMonth());     // 月 0~11（！要 +1 才是真实月份）\nconsole.log(now.getDate());      // 日\nconsole.log(now.getDay());       // 星期 0（周日）~6（周六）\nconsole.log(now.getHours());     // 时\nconsole.log(now.getMinutes());   // 分\nconsole.log(now.getSeconds());   // 秒\n\n// 格式化为 常见样式\nfunction format(date) {\n  const pad = n => String(n).padStart(2, "0");\n  return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) +\n    " " + pad(date.getHours()) + ":" + pad(date.getMinutes());\n}\nconsole.log(format(now));   // 例如 2026-08-30 14:05\n\n// 时间戳（毫秒数，常用于计算、排序）\nconsole.log(Date.now());'
            },
            {
              type: 'tip',
              content: '实际项目里更推荐用 `dayjs` 等日期库处理复杂需求，但 Date 的基本操作是必须懂的底子。'
            }
          ]
        }
      ]
    },

    /* ============ 第八章 DOM 与事件 ============ */
    {
      id: 'js-ch8',
      title: '第八章 DOM 与事件',
      lessons: [
        {
          id: 'js-dom-get',
          title: '8.1 DOM：用 JS 选中页面元素',
          sections: [
            { type: 'text', content: 'DOM（文档对象模型）把 HTML 变成 JS 可操作的**对象树**。操作页面的第一步永远是：**选中元素**。' },
            {
              type: 'code',
              title: '获取元素的两组方法',
              lang: 'js',
              code: '// 【推荐】querySelector 系列：CSS 选择器语法，现代主流\nconst box = document.querySelector(".box");     // 第一个匹配的\nconst items = document.querySelectorAll("li");  // 所有匹配的（NodeList）\nconst btn = document.querySelector("#submit-btn");\n\n// 【传统】按 id / 类名 / 标签名\nconst el = document.getElementById("app");\nconst list = document.getElementsByClassName("item");\nconst divs = document.getElementsByTagName("div");\n\n// 遍历 querySelectorAll 的结果\nitems.forEach(function (item) {\n  console.log(item.textContent);\n});'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`querySelector` 参数就是 **CSS 选择器**：`".a"`、`"#b"`、`"div > p"`',
                '`querySelectorAll` 返回的是"伪数组"，可以用 `forEach`',
                '选不到元素返回 `null`，后续操作前最好先判断',
                '脚本尽量写在 `</body>` 前，保证元素已经存在'
              ]
            }
          ]
        },
        {
          id: 'js-dom-modify',
          title: '8.2 修改内容、样式与属性',
          sections: [
            { type: 'text', content: '选中元素后就能为所欲为：改文字、改样式、改属性。这三件事是 DOM 操作的日常。' },
            {
              type: 'code',
              title: '内容、样式、属性',
              lang: 'js',
              code: 'const title = document.querySelector("h1");\n\n// ---- 内容 ----\ntitle.textContent = "新标题";     // 纯文本（安全，推荐）\ntitle.innerHTML = "新<b>标题</b>"; // 会解析 HTML 标签（慎防注入）\n\n// ---- 样式：style 属性（驼峰命名） ----\ntitle.style.color = "red";\ntitle.style.backgroundColor = "#eee";  // CSS 里的 background-color\n\n// ---- 类名：classList（比直接改 className 好用） ----\ntitle.classList.add("active");     // 加类\ntitle.classList.remove("active");  // 删类\ntitle.classList.toggle("dark");    // 有则删无则加（开关）\ntitle.classList.contains("dark");  // 是否有 --> true/false\n\n// ---- 属性 ----\nconst img = document.querySelector("img");\nimg.src = "new.png";\nimg.alt = "新图片";\nimg.setAttribute("data-id", "1001");  // 通用设置\nconsole.log(img.getAttribute("src"));'
            },
            {
              type: 'tip',
              content: '改样式优先用 `classList` 加减类名（样式写在 CSS 里），而不是一行行改 `style`，代码更整洁。'
            }
          ]
        },
        {
          id: 'js-dom-create',
          title: '8.3 创建与删除节点',
          sections: [
            { type: 'text', content: '列表渲染、动态弹窗都靠"**创建元素 --> 设置内容 --> 插入页面**"三步曲。' },
            {
              type: 'code',
              title: '动态创建元素',
              lang: 'js',
              code: '// 1. 创建一个 li\nconst li = document.createElement("li");\nli.textContent = "新任务";\nli.classList.add("todo-item");\n\n// 2. 找到父元素，插入\nconst list = document.querySelector("ul");\nlist.appendChild(li);        // 加到最后\nlist.prepend(li);            // 加到最前（新写法）\n\n// 在某个元素前面插入\nconst first = list.firstElementChild;\nlist.insertBefore(li, first);\n\n// 3. 删除元素（新写法，元素自己删自己）\nli.remove();\n\n// 老写法：父元素.removeChild(子元素)\nlist.removeChild(li);'
            },
            {
              type: 'code',
              title: '实战：渲染一个待办列表',
              lang: 'js',
              code: 'const todos = ["写作业", "看书", "跑步"];\nconst list = document.querySelector("#todo-list");\n\n// 清空旧内容\nlist.innerHTML = "";\n\n// 循环生成 li 并插入\ntodos.forEach(function (text) {\n  const li = document.createElement("li");\n  li.textContent = text;\n  list.appendChild(li);\n});'
            }
          ]
        },
        {
          id: 'js-events',
          title: '8.4 事件处理：addEventListener',
          sections: [
            { type: 'text', content: '事件是 JS 与用户交互的核心：**点击、输入、滚动**都通过监听事件来响应。标准写法是 `addEventListener`。' },
            {
              type: 'code',
              title: '事件监听标准写法',
              lang: 'js',
              code: 'const btn = document.querySelector("#btn");\n\n// addEventListener("事件名", 处理函数)\nbtn.addEventListener("click", function () {\n  console.log("按钮被点击了");\n});\n\n// 箭头函数写法\nbtn.addEventListener("click", (e) => {\n  console.log("事件对象：", e);\n});\n\n// 一个元素可以绑定多个同类事件\nbtn.addEventListener("click", handler1);\nbtn.addEventListener("click", handler2);  // 两个都会执行\n\n// 移除监听（必须传入同一个函数引用）\nfunction handler1() { console.log("hi"); }\nbtn.removeEventListener("click", handler1);'
            },
            {
              type: 'code',
              title: '事件对象 e 的常用信息',
              lang: 'js',
              code: 'document.addEventListener("click", function (e) {\n  console.log(e.target);        // 实际被点击的元素\n  console.log(e.type);          // 事件类型 "click"\n  console.log(e.clientX, e.clientY); // 鼠标坐标\n});\n\n// 阻止默认行为：比如阻止 a 跳转、表单提交刷新\nconst form = document.querySelector("form");\nform.addEventListener("submit", function (e) {\n  e.preventDefault();   // 页面就不会刷新了\n  console.log("自己处理提交逻辑");\n});'
            }
          ]
        },
        {
          id: 'js-event-types',
          title: '8.5 常见事件类型',
          sections: [
            { type: 'table', title: '必须认识的事件', headers: ['分类', '事件名', '触发时机'],
              rows: [
                ['鼠标', '`click`', '点击'],
                ['鼠标', '`dblclick`', '双击'],
                ['鼠标', '`mouseenter` / `mouseleave`', '鼠标移入 / 移出'],
                ['表单', '`input`', '输入内容变化（每敲一个字触发）'],
                ['表单', '`change`', '值改变且失焦后'],
                ['表单', '`focus` / `blur`', '获得焦点 / 失去焦点'],
                ['表单', '`submit`', '表单提交'],
                ['键盘', '`keydown` / `keyup`', '按下 / 松开按键'],
                ['窗口', '`scroll`', '页面滚动'],
                ['窗口', '`resize`', '窗口大小改变'],
                ['文档', '`DOMContentLoaded`', 'HTML 加载解析完成（比 load 早）']
              ]
            },
            {
              type: 'code',
              title: '实战：实时搜索框 + 键盘事件',
              lang: 'js',
              code: 'const input = document.querySelector("#search");\nconst tip = document.querySelector("#tip");\n\n// input 事件：边输入边响应\ninput.addEventListener("input", function () {\n  const val = this.value.trim();   // this 指向当前元素\n  tip.textContent = val ? "正在搜索：" + val : "请输入关键词";\n});\n\n// 回车键触发搜索\ninput.addEventListener("keydown", function (e) {\n  if (e.key === "Enter") {\n    console.log("搜索：", this.value);\n  }\n});'
            }
          ]
        },
        {
          id: 'js-event-delegate',
          title: '8.6 事件冒泡与事件委托',
          sections: [
            { type: 'text', content: '点击子元素时，事件会像水泡一样**逐级向上传播**到父级，这叫冒泡。利用它，可以在父元素上统一监听子元素的事件——这就是**事件委托**，列表场景的省事神器。' },
            {
              type: 'code',
              title: '事件委托：一个监听管所有子项',
              lang: 'js',
              code: '<!-- HTML：一个 ul，li 可以动态增删 -->\n<ul id="list">\n  <li data-id="1">任务一</li>\n  <li data-id="2">任务二</li>\n</ul>'
            },
            {
              type: 'code',
              lang: 'js',
              title: '委托写法与 e.target',
              code: 'const list = document.querySelector("#list");\n\n// 只在父元素上监听一次\nlist.addEventListener("click", function (e) {\n  // e.target 是真正被点的子元素\n  if (e.target.tagName === "LI") {\n    console.log("点击了任务：", e.target.dataset.id);\n    e.target.remove();   // 点击删除该条\n  }\n});\n\n// 之后 JS 动态加进来的 li，\n// 不用再单独绑事件，也自动生效！'
            },
            {
              type: 'list',
              title: '为什么用事件委托',
              items: [
                '给 1000 个 li 各绑一个监听 vs 父级绑一个：**性能差距巨大**',
                '动态新增的子元素**自动生效**，不用重新绑定',
                '判断真正目标用 `e.target`，注意和 `e.currentTarget`（绑定监听的元素）区分'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第九章 异步与浏览器 ============ */
    {
      id: 'js-ch9',
      title: '第九章 异步与浏览器',
      lessons: [
        {
          id: 'js-timer',
          title: '9.1 定时器：setTimeout 与 setInterval',
          sections: [
            { type: 'text', content: '定时器是最简单的**异步**代码：设个闹钟，到点执行函数。轮播图、倒计时、防抖节流都基于它。' },
            {
              type: 'code',
              title: '两种定时器',
              lang: 'js',
              code: '// setTimeout：延迟一次执行\n// 参数：函数, 毫秒\nconst timerId = setTimeout(function () {\n  console.log("3 秒后打印我");\n}, 3000);\n\n// clearTimeout：取消还没执行的定时器\nclearTimeout(timerId);\n\n// setInterval：每隔一段时间重复执行\nlet count = 0;\nconst clock = setInterval(function () {\n  count++;\n  console.log("第 " + count + " 秒");\n  if (count >= 5) {\n    clearInterval(clock);   // 必须手动停止，否则永远跑下去\n  }\n}, 1000);\n\n// 实战：倒计时 10 秒\nlet left = 10;\nconst countdown = setInterval(() => {\n  console.log(left--);\n  if (left < 0) clearInterval(countdown);\n}, 1000);'
            },
            {
              type: 'warn',
              content: '`setInterval` 不会自己停，**一定要在合适时机 `clearInterval`**，否则页面关不掉它，浪费性能。'
            }
          ]
        },
        {
          id: 'js-promise',
          title: '9.2 异步与 Promise 入门',
          sections: [
            { type: 'text', content: 'JS 是**单线程**的，耗时操作（网络请求、读文件）不能卡住页面，于是采用"**异步**"：先去干活，干完再通知我。Promise 就是异步结果的"取货凭证"。' },
            {
              type: 'code',
              title: 'Promise 三种状态与基本用法',
              lang: 'js',
              code: '// 创建一个 Promise（模拟 2 秒后取到数据）\nconst p = new Promise(function (resolve, reject) {\n  setTimeout(function () {\n    const ok = true;\n    if (ok) {\n      resolve("数据来了");    // 成功：兑现\n    } else {\n      reject("出错了");       // 失败：拒绝\n    }\n  }, 2000);\n});\n\n// 使用：then 接收成功，catch 接收失败\np.then(function (data) {\n  console.log(data);      // 2 秒后打印"数据来了"\n}).catch(function (err) {\n  console.log(err);\n});\n\n// 实际开发中最常见的 Promise：fetch 请求\nfetch("https://api.example.com/list")\n  .then(res => res.json())      // 把响应转成 JSON（也是异步）\n  .then(data => console.log(data))\n  .catch(err => console.error(err));'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'Promise 有三种状态：**pending 等待 / fulfilled 成功 / rejected 失败**',
                '状态一旦改变就**不可逆**',
                '`then` 链式调用可以串联多个异步步骤，避免"回调地狱"'
              ]
            }
          ]
        },
        {
          id: 'js-async-await',
          title: '9.3 async / await：异步的最终形态',
          sections: [
            { type: 'text', content: 'async/await 让异步代码**长得像同步代码**，可读性最好，是现代 JS 处理异步的标准姿势。' },
            {
              type: 'code',
              title: 'async/await 写法',
              lang: 'js',
              code: '// 在函数前加 async --> 函数内可以使用 await\nasync function loadData() {\n  try {\n    // await：等这个 Promise 出结果再继续往下走\n    const res = await fetch("https://api.example.com/list");\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    // 对应 Promise 的失败分支\n    console.error("请求失败：", err);\n  }\n}\n\nloadData();\n\n// await 只能用在 async 函数里（或模块顶层）\n// 对比上一课的 .then 写法：逻辑一样，但这里像同步代码一样从上往下读'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`async` 函数**永远返回一个 Promise**',
                '`await` 后面通常跟 Promise，等它出结果（成功拿值，失败抛异常）',
                '用 `try...catch` 捕获 await 的报错',
                '多个无依赖的请求想并行，用 `await Promise.all([p1, p2])`'
              ]
            }
          ]
        },
        {
          id: 'js-storage',
          title: '9.4 浏览器存储：localStorage 与 JSON',
          sections: [
            { type: 'text', content: '网页想在用户浏览器里**长期保存数据**（登录状态、用户偏好），用 localStorage。它只能存字符串，对象要先经 JSON 转换。' },
            {
              type: 'code',
              title: 'localStorage 基本用法',
              lang: 'js',
              code: '// 存：键和值都必须是字符串\nlocalStorage.setItem("theme", "dark");\n\n// 取（不存在时返回 null）\nconst theme = localStorage.getItem("theme");\nconsole.log(theme);   // "dark"\n\n// 删除\nlocalStorage.removeItem("theme");\n\n// 清空本站所有存储\n// localStorage.clear();\n\n// 存对象：JSON 序列化\nconst user = { name: "小明", age: 18 };\nlocalStorage.setItem("user", JSON.stringify(user));\n\n// 取对象：JSON 反序列化\nconst saved = JSON.parse(localStorage.getItem("user"));\nconsole.log(saved.name);   // 小明'
            },
            {
              type: 'table',
              title: 'localStorage vs sessionStorage vs Cookie',
              headers: ['对比项', 'localStorage', 'sessionStorage', 'Cookie'],
              rows: [
                ['生命周期', '永久（手动清）', '关闭标签页就没了', '可设过期时间'],
                ['容量', '约 5MB', '约 5MB', '约 4KB'],
                ['随请求发送给服务器', '否', '否', '是'],
                ['典型用途', '主题、草稿、偏好', '一次性临时数据', '登录凭证（后端主导）']
              ]
            },
            {
              type: 'warn',
              content: '不要把密码等敏感信息存进 localStorage，任何页面脚本都能读到它。'
            }
          ]
        },
        {
          id: 'js-bom-final',
          title: '9.5 BOM 浏览器对象与学习总结',
          sections: [
            { type: 'text', content: 'BOM（浏览器对象模型）提供操作**浏览器窗口本身**的能力：跳转、刷新、历史记录、窗口信息。最后把三大件的知识串成一个综合小项目。' },
            {
              type: 'code',
              title: '常用 BOM 对象',
              lang: 'js',
              code: '// window 是全局对象（平时省略不写）\nwindow.alert("等价于 alert()");\n\n// location：地址栏\nconsole.log(location.href);    // 当前完整网址\nconsole.log(location.search);  // ?id=100 这类查询串\nlocation.href = "https://example.com";  // 跳转\nlocation.reload();             // 刷新页面\n\n// history：前进后退\nhistory.back();    // 后退\nhistory.forward(); // 前进\n\n// navigator：浏览器信息\nconsole.log(navigator.userAgent);  // 设备与浏览器标识\n\n// screen：屏幕信息\nconsole.log(screen.width, screen.height);'
            },
            {
              type: 'code',
              title: '综合练习：记事本草稿自动保存',
              lang: 'js',
              code: '<!-- HTML -->\n<!-- <textarea id="editor"></textarea> -->\n<!-- <p id="status"></p> -->'
            },
            {
              type: 'code',
              lang: 'js',
              title: '三件套知识全部用上：DOM + 事件 + 存储',
              code: 'const editor = document.querySelector("#editor");\nconst status = document.querySelector("#status");\n\n// 1. 打开页面时恢复上次草稿（localStorage）\neditor.value = localStorage.getItem("draft") || "";\n\n// 2. 监听输入（DOM 事件）\neditor.addEventListener("input", function () {\n  // 3. 实时保存\n  localStorage.setItem("draft", this.value);\n  status.textContent = "已自动保存 " + new Date().toLocaleTimeString();\n});\n\n// 就这么几行，一个"关了浏览器也不丢"的草稿箱就完成了。\n// HTML 搭结构、CSS 做外观、JS 给生命 —— 恭喜你走完了前端第一步！'
            },
            {
              type: 'tip',
              content: '建议立刻做综合测试检验成果，然后动手写一个完整小页面（如个人主页、待办清单），把 HTML、CSS、JS 串起来用。后续本站还会添加更多技能模块。'
            }
          ]
        }
      ]
    }
  ]
}
