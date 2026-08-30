// ============================================================
// Python 分类教学数据
// 文件结构说明（与 html.js / css.js / js.js / java.js 完全一致）：
//   id          分类唯一标识（用于路由 /category/python）
//   name        分类显示名称
//   short       分类徽标短文字
//   color       分类主题色（首页卡片、分类页徽标）
//   description 一句话介绍
//   chapters    章节数组，每章包含 lessons，每课包含 sections
//   section.type 支持 text 文本 / list 要点列表 / code 代码示例 / tip 提示
// 注意：所有代码示例字符串内部使用 \n 表示换行，字符串中不能出现真实换行
// ============================================================
export default {
  id: 'python',
  name: 'Python',
  short: 'Python',
  color: '#7c3aed',
  description: '简洁优雅的胶水语言：数据分析、人工智能与自动化的首选',
  chapters: [
    /* ============ 第一章 Python 入门 ============ */
    {
      id: 'python-ch1',
      title: '第一章 Python 入门',
      lessons: [
        {
          id: 'python-what-is',
          title: '1.1 Python 是什么',
          sections: [
            { type: 'text', content: 'Python 是一门以**简洁易读**著称的编程语言：同样的功能，代码量常常只有 Java 的一半甚至更少。它是数据分析、人工智能、自动化办公、网络爬虫领域的第一语言，也常被选为**编程入门的第一门语言**。' },
            {
              type: 'list',
              title: 'Python 能做什么',
              items: [
                '**数据分析**：用 pandas、matplotlib 处理表格、画图表',
                '**人工智能**：机器学习、深度学习框架几乎都以 Python 为主接口',
                '**自动化脚本**：批量重命名文件、自动发邮件、操作 Excel，解放双手',
                '**网站后端**：Django、Flask 框架搭建网站服务',
                '**网络爬虫**：自动抓取网页数据做汇总分析'
              ]
            },
            {
              type: 'tip',
              content: 'Python 的名字来自喜剧团体"蒙提·派森"，跟蟒蛇没关系，但它的图标确实是两条蛇。'
            }
          ]
        },
        {
          id: 'python-install',
          title: '1.2 安装与两种运行方式',
          sections: [
            { type: 'text', content: 'Python 有两种常见运行方式：**交互式环境**（输入一行执行一行，适合做实验）和**脚本文件**（写好 .py 文件整体运行，正式写代码用）。' },
            {
              type: 'list',
              title: '安装步骤',
              items: [
                '到官网 python.org 下载最新稳定版（3.x），安装时**务必勾选 Add Python to PATH**',
                '验证：命令行输入 `python --version` 显示版本号即成功',
                '编辑器：推荐 VS Code（装 Python 插件）或 PyCharm 社区版'
              ]
            },
            {
              type: 'code',
              title: '两种运行方式',
              lang: 'text',
              code: '# 方式一：交互式环境（命令行输入 python 回车进入）\n>>> print("你好")\n你好\n>>> 1 + 1\n2\n>>> exit()   # 退出\n\n# 方式二：把代码写进 hello.py，然后命令行执行\n# > python hello.py\n# 程序从上到下执行一遍后结束'
            },
            {
              type: 'tip',
              content: '交互式环境是学 Python 的"草稿纸"：随输随得，试语法最方便。'
            }
          ]
        },
        {
          id: 'python-hello',
          title: '1.3 第一个程序与注释',
          sections: [
            { type: 'text', content: 'Python 没有"类必须叫什么"的仪式感，一行 `print` 就是完整程序。注释用 `#`，多行注释用三个引号。' },
            {
              type: 'code',
              title: 'hello.py',
              lang: 'python',
              code: '# 这是单行注释，井号后面的内容不执行\n\n"""\n这是多行注释（文档字符串）\n可以写很多行说明\n"""\n\nprint("Hello, World!")     # 打印输出\nprint("人生苦短，我用 Python")\n\n# print 可以一次打印多个值，默认用空格分隔\nprint("姓名：", "小明", "年龄：", 18)'
            },
            {
              type: 'list',
              title: '与 Java 对比（如果你学过）',
              items: [
                'Java 要写类和 main 方法，Python 一行就是程序',
                'Python 用**缩进**代替大括号表示代码块，这是它最大的语法特色',
                '语句结尾**不需要分号**，一行一条语句'
              ]
            }
          ]
        },
        {
          id: 'python-print-input',
          title: '1.4 print 进阶与 input 输入',
          sections: [
            { type: 'text', content: 'print 和 input 是 Python 的"嘴巴和耳朵"，先熟练掌握这两个内置函数，后面一切交互程序都靠它们。' },
            {
              type: 'code',
              title: '输出与输入',
              lang: 'python',
              code: '# print 的常用参数\nprint("A", "B", "C", sep="-")     # A-B-C，sep 指定分隔符\nprint("不换行", end="")            # end 控制结尾，默认是换行\nprint("接着打印")\n\n# input：读取键盘输入，返回的永远是字符串\nname = input("你叫什么名字？")\nprint("你好，" + name)\n\n# 输入的数字要转成 int 才能做算术\nage = input("你几岁？")\nage = int(age)                    # 字符串转整数\nprint("明年你就", age + 1, "岁了")'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`input()` 返回的**一定是字符串**，"5" + 1 会报错，必须先 `int()` 转换',
                '忘记转换是新手最常踩的坑，报错 TypeError 时先检查输入类型',
                '`print()` 变量不用加引号，加了引号打印的就是文字本身'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第二章 基础语法 ============ */
    {
      id: 'python-ch2',
      title: '第二章 变量与基础语法',
      lessons: [
        {
          id: 'python-variables',
          title: '2.1 变量与数据类型',
          sections: [
            { type: 'text', content: 'Python 是**动态类型**语言：变量不用声明类型，赋什么值就是什么类型，还能随时换。常用内置类型：int（整数）、float（小数）、str（字符串）、bool（布尔）、list/dict/tuple/set（组合类型，第四章细讲）。' },
            {
              type: 'code',
              title: '变量与类型',
              lang: 'python',
              code: 'age = 18               # int，不用写类型\name = "小明"           # str，单双引号都可以\nprice = 9.99           # float\nis_vip = True          # bool 注意首字母大写\n\n# type() 查看类型\nprint(type(age))       # <class \'int\'>\nprint(type(name))      # <class \'str\'>\n\n# 变量可以随时改变类型（动态类型的自由与风险）\nx = 100\nx = "hello"            # 合法，但会让代码难读，要克制\n\n# 命名规范：小写加下划线（snake_case）\nstudent_name = "小红"\nMAX_COUNT = 100        # 常量习惯全大写（Python 没有真正的常量）'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '命名：字母/下划线开头，见名知意，小写+下划线是社区主流',
                '`type()` 查类型，`isinstance(x, int)` 判断类型',
                'Python 没有字符和字符串之分，`"a"` 和 `\'a\'` 都是 str'
              ]
            }
          ]
        },
        {
          id: 'python-string',
          title: '2.2 字符串与 f-string',
          sections: [
            { type: 'text', content: 'Python 的字符串功能强大。**f-string**（格式化字符串）是把变量嵌进文字的最好方式：字符串前加 f，变量用大括号包住。' },
            {
              type: 'code',
              title: '字符串常用操作',
              lang: 'python',
              code: 'name = "python"\n\n# f-string：最推荐的拼接方式\nage = 18\nprint(f"我叫小明，今年 {age} 岁")         # 大括号里直接放变量\nprint(f"明年 {age + 1} 岁")               # 大括号里还能算表达式\npi = 3.14159\nprint(f"圆周率保留两位：{pi:.2f}")         # 3.14\n\n# 常用方法\nprint(name.upper())        # PYTHON\nprint(name.capitalize())   # Python 首字母大写\nprint(len(name))           # 6，取长度是内置函数不是方法\nprint(name.replace("py", "PY"))\nprint("  hi  ".strip())    # 去首尾空格\nprint("a,b,c".split(","))  # [\'a\', \'b\', \'c\'] 拆成列表\nprint("py" in name)        # True，in 判断包含\n\n# 长文本用三引号，可以换行\ntext = """第一行\n第二行"""\nprint(text)'
            },
            {
              type: 'list',
              title: '格式化方式对比',
              items: [
                'f-string：`f"{name}今年{age}"` —— 最简洁，Python 3.6+ 首选',
                'format 方法：`"{}今年{}".format(name, age)` —— 兼容老版本',
                '% 格式化：`"%s今年%d" % (name, age)` —— 老代码常见，新代码别用'
              ]
            }
          ]
        },
        {
          id: 'python-cast',
          title: '2.3 类型转换',
          sections: [
            { type: 'text', content: '类型之间用**转换函数**切换：`int()`、`float()`、`str()`、`bool()`。转换失败会抛 ValueError 异常（第七章讲如何捕获）。' },
            {
              type: 'code',
              title: '转换函数',
              lang: 'python',
              code: '# 字符串 <-> 数字\nn = int("123")         # "123" -> 123\nf = float("3.14")      # "3.14" -> 3.14\ns = str(456)           # 456 -> "456"\n\n# int 转换规则：直接砍掉小数（不是四舍五入）\nprint(int(3.99))       # 3\nprint(int(-3.99))      # -3，向零取整\n\n# 四舍五入用 round\nprint(round(3.5))      # 4（银行家舍入，.5 取偶数）\nprint(round(3.14159, 2))   # 3.14\n\n# bool 转换：空值都是 False\nprint(bool(0), bool(""), bool([]))    # False False False\nprint(bool(1), bool("a"), bool([0]))  # True True True\n\n# 转换失败会抛异常\n# int("abc")   # ValueError: invalid literal for int()'
            },
            {
              type: 'tip',
              content: 'eval() 能把字符串当代码执行，很酷但很危险，永远不要对用户输入用 eval。'
            }
          ]
        },
        {
          id: 'python-operators',
          title: '2.4 运算符（含独门绝技）',
          sections: [
            { type: 'text', content: 'Python 运算符和其他语言大同小异，但有几个**独门绝技**：幂运算 `**`、整除 `//`、链式比较、多重赋值。' },
            {
              type: 'code',
              title: '运算符速览',
              lang: 'python',
              code: '# 算术\nprint(7 / 2)     # 3.5，除法永远得小数\nprint(7 // 2)    # 3，整除（向下取整）\nprint(7 % 2)     # 1，取余\nprint(2 ** 10)   # 1024，幂运算\n\n# 链式比较：Python 特有的优雅写法\nscore = 85\nprint(60 <= score < 90)      # True，等价于 60 <= score and score < 90\n\n# 多重赋值：一行交换两个变量\na, b = 1, 2\na, b = b, a                  # 交换完成，不需要临时变量！\nprint(a, b)                  # 2 1\n\n# 逻辑运算符是英文单词\nprint(True and False)   # False\nprint(True or False)    # True\nprint(not True)         # False\n\n# 身份判断：is 比较是否同一个对象，== 比较内容是否相等\nx = [1, 2]\ny = [1, 2]\nprint(x == y)    # True，内容一样\nprint(x is y)    # False，两个不同的列表对象'
            },
            {
              type: 'list',
              title: '易错点',
              items: [
                '`/` 除法结果永远是 float，`10 / 2` 得 5.0',
                '比较内容用 `==`，`is` 只用于 None 判断（`if x is None`）',
                '`and`/`or`/`not` 是单词，不是 `&&`/`||`/`!`'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第三章 流程控制 ============ */
    {
      id: 'python-ch3',
      title: '第三章 流程控制',
      lessons: [
        {
          id: 'python-if',
          title: '3.1 if 条件判断',
          sections: [
            { type: 'text', content: 'Python 用**缩进**代替大括号：冒号后面缩进的代码属于这个分支。缩进通常是 4 个空格，必须保持一致，缩进错误会直接报错——强制你写出整洁代码。' },
            {
              type: 'code',
              title: 'if / elif / else',
              lang: 'python',
              code: 'score = 85\n\n# elif 是 else if 的缩写\nif score >= 90:\n    print("优秀")\nelif score >= 80:\n    print("良好")          # 走这条分支\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")\n\n# 条件组合用 and / or\nage = 20\nif age >= 18 and age < 60:\n    print("成年人")\n\n# Python 独有的多值判断\nfruit = "苹果"\nif fruit in ["苹果", "香蕉", "橘子"]:\n    print("这是常见水果")\n\n# 三目（条件表达式）：值1 if 条件 else 值2\nstatus = "成年" if age >= 18 else "未成年"'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '冒号 + 缩进是 Python 的语法骨架，缩进不一致直接 IndentationError',
                '空列表、空字符串、0、None 都算 False，可以直接 `if items:` 判断非空',
                '判断相等用 `==`，赋值 `=` 不能出现在条件里'
              ]
            }
          ]
        },
        {
          id: 'python-while',
          title: '3.2 while 循环',
          sections: [
            { type: 'text', content: 'while 循环"条件为真就一直转"，适合**次数不确定**的场景，比如让用户反复输入直到正确为止。' },
            {
              type: 'code',
              title: 'while 与无限循环',
              lang: 'python',
              code: '# 倒计时\nn = 5\nwhile n > 0:\n    print(n)\n    n -= 1            # Python 没有 n--，要用 n -= 1\nprint("发射！")\n\n# 猜数字：while True + break 是经典套路\nanswer = 42\nwhile True:               # 永远循环\n    guess = int(input("猜一个数字："))\n    if guess == answer:\n        print("猜对了！")\n        break             # 跳出循环\n    elif guess < answer:\n        print("小了")\n    else:\n        print("大了")'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'Python 没有 `n++`，自增写 `n += 1`',
                '`while True` 配合 `break` 是"直到成功为止"的标准写法',
                '循环条件永远为真又忘了 break，就是死循环，Ctrl+C 可以强制中断'
              ]
            }
          ]
        },
        {
          id: 'python-for-range',
          title: '3.3 for 循环与 range',
          sections: [
            { type: 'text', content: 'Python 的 for 是"**遍历**"：直接拿出序列里的每个元素，不需要下标。要下标时用 `range()` 生成数字序列。' },
            {
              type: 'code',
              title: 'for 与 range',
              lang: 'python',
              code: '# 遍历列表：直接拿元素，不用写 arr[i]\nfruits = ["苹果", "香蕉", "橘子"]\nfor fruit in fruits:\n    print(fruit)\n\n# range 三种用法\nfor i in range(5):          # 0 1 2 3 4，range(5) 是 0 到 4\n    print(i, end=" ")\nprint()\n\nfor i in range(1, 6):       # 1 到 5，含头不含尾\n    print(i, end=" ")\nprint()\n\nfor i in range(10, 0, -2):  # 步长 -2：10 8 6 4 2\n    print(i, end=" ")\nprint()\n\n# 1 到 100 求和\ntotal = 0\nfor i in range(1, 101):\n    total += i\nprint(total)                # 5050\n\n# 九九乘法表\nfor i in range(1, 10):\n    for j in range(1, i + 1):\n        print(f"{j}x{i}={i*j}", end="\\t")\n    print()'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`range(结束)`、`range(开始, 结束)`、`range(开始, 结束, 步长)`，都是**含头不含尾**',
                '遍历字典、字符串、文件都可以直接 for',
                '要同时要下标和元素用 `enumerate(fruits)`'
              ]
            }
          ]
        },
        {
          id: 'python-break-continue',
          title: '3.4 break、continue 与循环配 else',
          sections: [
            { type: 'text', content: 'break 结束整个循环，continue 跳过本轮。Python 还有一个其他语言没有的冷知识：**循环可以配 else**——循环"没被 break 打断、正常跑完"时执行。' },
            {
              type: 'code',
              title: '跳转与循环 else',
              lang: 'python',
              code: 'nums = [3, 7, 11, 18, 25]\n\n# break：找到就停\nfor n in nums:\n    if n == 11:\n        print("找到了 11")\n        break\n\n# continue：跳过偶数\nfor n in range(1, 6):\n    if n % 2 == 0:\n        continue\n    print(n)               # 1 3 5\n\n# 循环配 else：常用于"找遍了都没有"的场景\nfor n in nums:\n    if n == 100:\n        print("找到了")\n        break\nelse:\n    # 只有循环完整跑完（没被 break）才会执行\n    print("没找到 100")'
            },
            {
              type: 'tip',
              content: 'for-else 很冷门但很优雅，判断"是否存在"时可以省掉一个标志变量。'
            }
          ]
        }
      ]
    },

    /* ============ 第四章 组合数据类型 ============ */
    {
      id: 'python-ch4',
      title: '第四章 组合数据类型',
      lessons: [
        {
          id: 'python-list',
          title: '4.1 列表：万能的百宝箱',
          sections: [
            { type: 'text', content: '列表（list）是 Python 最常用的容器：**有序、可变、可混合类型**，相当于其他语言的数组但要灵活得多。' },
            {
              type: 'code',
              title: '列表增删改查',
              lang: 'python',
              code: 'nums = [10, 20, 30]\n\n# 增\nnums.append(40)            # 尾部追加\nnums.insert(0, 5)          # 指定位置插入\nnums.extend([50, 60])      # 合并另一个列表\n\n# 删\nnums.remove(20)            # 按值删（删第一个匹配的）\nlast = nums.pop()          # 弹出末尾并返回\nfirst = nums.pop(0)        # 弹出指定位置\n\n# 改查\nnums[0] = 99               # 下标赋值\nprint(nums[0], len(nums))\nprint(30 in nums)          # True\n\n# 常用操作\nscores = [88, 92, 75, 60, 95]\nprint(max(scores), min(scores), sum(scores))\nprint(sum(scores) / len(scores))   # 平均分\nscores.sort()              # 原地升序排序\nscores.sort(reverse=True)  # 降序\nprint(sorted(scores))      # sorted 返回新列表，不改原列表'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '下标从 0 开始；负数下标从尾部数：`nums[-1]` 是最后一个元素',
                '`append` 一次加一个，`extend` 合并一批',
                '`sort()` 改原列表，`sorted()` 产生新列表，注意区分'
              ]
            }
          ]
        },
        {
          id: 'python-tuple-slice',
          title: '4.2 元组与切片',
          sections: [
            { type: 'text', content: '**元组**（tuple）是"不可变的列表"：创建后不能增删改，适合存放不该被修改的数据。**切片**（slice）则是对序列"取一段"的通用语法，列表、字符串、元组都支持。' },
            {
              type: 'code',
              title: '元组与切片语法',
              lang: 'python',
              code: '# 元组：小括号定义，不可修改\npoint = (3, 5)\nx, y = point              # 解包：一次拆给两个变量\nprint(x, y)               # 3 5\n# point[0] = 9            # 报错！元组不可修改\n\n# 只有 1 个元素的元组要加逗号\nt = (42,)                 # 不加逗号就成了普通括号表达式\n\n# 切片语法：序列[开始:结束:步长]，含头不含尾\nnums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nprint(nums[2:5])     # [2, 3, 4]\nprint(nums[:3])      # [0, 1, 2]，从头取\nprint(nums[7:])      # [7, 8, 9]，取到尾\nprint(nums[::2])     # [0, 2, 4, 6, 8]，步长 2\nprint(nums[::-1])    # 倒序！经典技巧\n\n# 字符串同样支持切片\ns = "Hello Python"\nprint(s[0:5])        # Hello\nprint(s[::-1])       # nohtyP olleH'
            },
            {
              type: 'tip',
              content: '函数返回多个值，其实就是返回了一个元组：`return x, y`，接收时自动解包。'
            }
          ]
        },
        {
          id: 'python-dict',
          title: '4.3 字典：键值对的映射',
          sections: [
            { type: 'text', content: '字典（dict）存"键值对"，通过**键**直接查**值**，查询速度极快，相当于 Java 里的 HashMap，是 Python 里用得第二多的容器。' },
            {
              type: 'code',
              title: '字典增删改查与遍历',
              lang: 'python',
              code: 'student = {"name": "小明", "age": 18}\n\n# 查：用键取值\nprint(student["name"])              # 小明，键不存在会报错 KeyError\nprint(student.get("phone"))         # None，get 不会报错\nprint(student.get("phone", "未填写"))  # 可以给默认值\n\n# 增改：同一个写法，键存在就改、不存在就增\nstudent["age"] = 19\nstudent["city"] = "深圳"\n\n# 删\nstudent.pop("city")\n\n# 遍历\nfor key in student:                 # 默认遍历键\n    print(key, student[key])\n\nfor key, value in student.items():  # 同时拿键和值（推荐）\n    print(f"{key}: {value}")\n\n# 成员判断\nprint("name" in student)            # True，判断的是键\n\n# 字典嵌套：很常见的数据结构\nusers = {\n    "u1": {"name": "小明", "score": 90},\n    "u2": {"name": "小红", "score": 95},\n}\nprint(users["u2"]["score"])         # 95'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '键必须是不可变类型（字符串、数字、元组），值随意',
                '取值首选 `.get()`，避免键不存在时崩溃',
                'Python 3.7+ 字典保持插入顺序'
              ]
            }
          ]
        },
        {
          id: 'python-set',
          title: '4.4 集合与去重',
          sections: [
            { type: 'text', content: '集合（set）是**无序、不重复**的容器，天生就是去重神器，还支持数学上的交并差运算。' },
            {
              type: 'code',
              title: '集合去重与运算',
              lang: 'python',
              code: '# 最常见用法：列表去重\nnums = [1, 2, 2, 3, 3, 3]\nunique = list(set(nums))\nprint(unique)               # [1, 2, 3]（顺序可能变化）\n\n# 增删\ns = {1, 2, 3}\ns.add(4)\ns.discard(2)                # 不存在也不报错（remove 会报错）\n\n# 数学运算\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a & b)    # {3, 4}，交集：都有的\nprint(a | b)    # {1, 2, 3, 4, 5, 6}，并集：合并\nprint(a - b)    # {1, 2}，差集：a 有 b 没有\n\n# 判断关系\nprint({1, 2} <= a)          # True，是子集'
            },
            {
              type: 'tip',
              content: '空集合必须写 set()，写 {} 得到的是空字典——新手常踩的坑。'
            }
          ]
        }
      ]
    },

    /* ============ 第五章 函数 ============ */
    {
      id: 'python-ch5',
      title: '第五章 函数',
      lessons: [
        {
          id: 'python-function',
          title: '5.1 定义、调用与返回值',
          sections: [
            { type: 'text', content: '用 `def` 定义函数。Python 函数可以返回多个值（其实是返回元组自动解包），这是它简洁的另一体现。' },
            {
              type: 'code',
              title: '函数基础',
              lang: 'python',
              code: '# 定义：def 函数名(参数): + 缩进函数体\ndef greet(name):\n    """向某人问好（文档字符串）"""       # 三引号说明文档\n    print(f"你好，{name}！")\n\n# 有返回值\ndef add(a, b):\n    return a + b\n\n# 返回多个值\ndef min_max(nums):\n    return min(nums), max(nums)\n\nlow, high = min_max([3, 1, 9, 4])   # 解包接收\nprint(low, high)                     # 1 9\n\n# 没写 return 或 return 后面为空，返回 None\nresult = greet("小明")               # 打印：你好，小明！\nprint(result)                        # None\n\n# 带默认提示的提前返回\ndef divide(a, b):\n    if b == 0:\n        return None                  # 提前结束\n    return a / b'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '函数定义不会执行，调用才执行；必须**先定义后调用**',
                '`return` 立即结束函数；返回多个值用逗号隔开',
                '函数是好程序的基本单位：一段逻辑起个名字，反复使用'
              ]
            }
          ]
        },
        {
          id: 'python-args',
          title: '5.2 参数详解：默认、可变、关键字',
          sections: [
            { type: 'text', content: 'Python 的参数系统非常灵活：可以给参数默认值、可以一次接收任意多个参数、可以不按顺序用名字传参。' },
            {
              type: 'code',
              title: '四种参数形态',
              lang: 'python',
              code: '# 1. 默认参数：不传就用默认值\ndef greet(name, greeting="你好"):\n    print(f"{greeting}，{name}")\n\ngreet("小明")               # 你好，小明\ngreet("小明", "早安")       # 早安，小明\n\n# 2. 关键字参数：按名字传，不用管顺序\ngreet(greeting="晚安", name="小红")\n\n# 3. 可变参数 *args：收一堆位置参数，打包成元组\ndef total(*args):\n    print(sum(args))\n\ntotal(1, 2, 3)              # 6\ntotal(1, 2, 3, 4, 5)        # 15\n\n# 4. 关键字可变参数 **kwargs：收一堆键值对，打包成字典\ndef info(**kwargs):\n    for k, v in kwargs.items():\n        print(f"{k}={v}")\n\ninfo(name="小明", age=18)   # name=小明 / age=18\n\n# 经典组合签名：def fn(普通, 默认=值, *args, **kwargs)'
            },
            {
              type: 'list',
              title: '大坑警示：可变默认值',
              items: [
                '默认值不要用列表/字典！`def f(x=[])` 的默认列表会被所有调用共享修改',
                '正确做法：默认用 None，函数体内再创建 `x = x or []` 或判空新建'
              ]
            }
          ]
        },
        {
          id: 'python-scope-lambda',
          title: '5.3 作用域与 lambda',
          sections: [
            { type: 'text', content: '函数内创建的变量是**局部变量**，函数外看不见；函数外的是**全局变量**。**lambda** 则是"一次性小函数"的快捷写法，常与排序、map/filter 搭配。' },
            {
              type: 'code',
              title: '作用域与 lambda',
              lang: 'python',
              code: '# 作用域\ncount = 0                  # 全局变量\n\ndef increase():\n    global count           # 声明要修改全局变量\n    count += 1\n\nincrease()\nprint(count)               # 1\n\n# 局部变量只在函数内有效\ndef demo():\n    x = 10                 # 局部变量\n    print(x)\n\n# lambda：参数: 表达式，表达式结果就是返回值\nsquare = lambda x: x ** 2\nprint(square(5))           # 25\n\n# 最常见用法：给 sorted 提供排序规则\nstudents = [("小明", 90), ("小红", 95), ("小刚", 85)]\nby_score = sorted(students, key=lambda s: s[1], reverse=True)\nprint(by_score)            # 按分数从高到低\n\n# 配合 map / filter\nnums = [1, 2, 3, 4, 5]\nprint(list(map(lambda x: x * 2, nums)))       # [2,4,6,8,10]\nprint(list(filter(lambda x: x % 2 == 0, nums)))  # [2,4]'
            },
            {
              type: 'tip',
              content: 'lambda 只能写一行表达式，复杂逻辑还是老实写 def。能赋名字的 lambda（square = lambda...）建议直接改成 def，规范更好。'
            }
          ]
        },
        {
          id: 'python-module',
          title: '5.4 模块与 import',
          sections: [
            { type: 'text', content: '**模块**就是一个 .py 文件，**包**是模块的文件夹。import 的世界让 Python 的"电池全含"标准库和第三方生态为你所用。' },
            {
              type: 'code',
              title: 'import 的各种姿势',
              lang: 'python',
              code: '# 1. 导入整个模块\nimport math\nprint(math.sqrt(16))       # 4.0\n\n# 2. 只导入需要的函数\nfrom math import sqrt, pi\nprint(sqrt(25), pi)        # 5.0 3.14159...\n\n# 3. 起别名\nimport json as j\n\n# 4. 导入自己写的模块\n# 假设有 utils.py，里面有 def hello(): ...\n# from utils import hello\n# hello()\n\n# 标准库几个好用的\nimport random\nprint(random.randint(1, 6))        # 随机整数 1~6\n\nimport time\ntime.sleep(1)                      # 暂停 1 秒\n\nimport os\nprint(os.getcwd())                 # 当前工作目录\n\n# __name__ 技巧：模块既能被运行又能被导入\ndef main():\n    print("程序启动")\n\nif __name__ == "__main__":         # 直接运行本文件时才执行\n    main()                         # 被别人 import 时不执行'
            },
            {
              type: 'tip',
              content: '`if __name__ == "__main__":` 是每个脚本文件的标准结尾写法，含义是"只有直接运行才执行，被导入不执行"。'
            }
          ]
        }
      ]
    },

    /* ============ 第六章 面向对象 ============ */
    {
      id: 'python-ch6',
      title: '第六章 面向对象',
      lessons: [
        {
          id: 'python-class',
          title: '6.1 类与实例',
          sections: [
            { type: 'text', content: 'Python 用 `class` 定义类。**`__init__`** 是构造方法（注意两边各两个下划线），**self** 代表当前实例——相当于 Java 的 this，但必须显式写出来。' },
            {
              type: 'code',
              title: '类的定义与使用',
              lang: 'python',
              code: 'class Student:\n    # 类属性：所有实例共享\n    school = "实验中学"\n\n    # 构造方法：创建实例时自动执行\n    def __init__(self, name, age):\n        # 实例属性：每个对象一份\n        self.name = name\n        self.age = age\n\n    # 实例方法：第一个参数永远是 self\n    def introduce(self):\n        print(f"我是{self.name}，{self.age}岁")\n\n    def birthday(self):\n        self.age += 1\n\n# 创建实例：不需要 new 关键字\ns1 = Student("小明", 18)\ns2 = Student("小红", 17)\n\ns1.introduce()             # 我是小明，18岁\ns1.birthday()\nprint(s1.age)              # 19，只影响 s1 自己\nprint(Student.school)      # 类属性通过类访问\nprint(s2.school)           # 实例也能访问到'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'self 必须是实例方法的第一个参数，调用时不用传，Python 自动传入',
                '`__init__` 里以 self.xxx = 形参 的方式定义实例属性',
                '属性可以随时给实例添加：`s1.phone = "13800"` 合法但要有节制'
              ]
            }
          ]
        },
        {
          id: 'python-inherit',
          title: '6.2 继承与多态',
          sections: [
            { type: 'text', content: 'Python 支持多继承：`class Dog(Animal)` 表示继承 Animal。子类重写父类方法后，用 **super()** 调用父类版本。多态在 Python 里是"鸭子类型"：不看类型看行为。' },
            {
              type: 'code',
              title: '继承与重写',
              lang: 'python',
              code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        print("动物在叫")\n\n\nclass Dog(Animal):                 # 括号里写父类\n    def __init__(self, name, breed):\n        super().__init__(name)     # 调用父类构造方法\n        self.breed = breed         # 补充自己的属性\n\n    def speak(self):               # 重写父类方法\n        print(f"{self.name}：汪汪！")\n\n\nclass Cat(Animal):\n    def speak(self):\n        print(f"{self.name}：喵~")\n\n\n# 多态：同一个调用，不同表现\nanimals = [Dog("旺财", "柴犬"), Cat("咪咪")]\nfor a in animals:\n    a.speak()                      # 各自执行自己重写的版本\n\n# isinstance 判断类型\nprint(isinstance(Dog("A", "B"), Animal))   # True'
            },
            {
              type: 'tip',
              content: '鸭子类型：只要对象有 speak() 方法就能传进循环里用，Python 不检查它是不是 Animal 的子类——"走起来像鸭子，那它就是鸭子"。'
            }
          ]
        },
        {
          id: 'python-magic',
          title: '6.3 魔术方法',
          sections: [
            { type: 'text', content: '**魔术方法**是双下划线包住的特殊方法（如 `__init__`、`__str__`），它们由 Python 在特定时机自动调用。用好魔术方法能让自定义类像内置类型一样好用。' },
            {
              type: 'code',
              title: '常用魔术方法',
              lang: 'python',
              code: 'class Book:\n    def __init__(self, title, price):\n        self.title = title\n        self.price = price\n\n    def __str__(self):\n        # print(对象) 时自动调用，返回面向用户的描述\n        return f"《{self.title}》 ¥{self.price}"\n\n    def __eq__(self, other):\n        # == 比较时自动调用，自定义"相等"的标准\n        return self.title == other.title and self.price == other.price\n\n    def __len__(self):\n        # len(对象) 时自动调用\n        return len(self.title)\n\nb1 = Book("Python入门", 59.0)\nb2 = Book("Python入门", 59.0)\nprint(b1)                  # 《Python入门》 ¥59.0\nprint(len(b1))             # 9\nprint(b1 == b2)            # True，因为自定义了 __eq__\nprint(b1 is b2)            # False，还是两个不同对象'
            },
            {
              type: 'list',
              title: '常见魔术方法一览',
              items: [
                '`__init__` 构造、`__str__` 打印、`__repr__` 调试显示',
                '`__eq__` 相等、`__lt__` 小于（可让对象参与排序）',
                '`__len__` 长度、`__getitem__` 让对象支持 [] 下标访问、`__iter__` 支持遍历'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第七章 文件与异常 ============ */
    {
      id: 'python-ch7',
      title: '第七章 文件、异常与标准库',
      lessons: [
        {
          id: 'python-file',
          title: '7.1 文件读写：with open',
          sections: [
            { type: 'text', content: 'Python 读写文件的标准姿势是 **with open(...)**：with 块结束时文件自动关闭，永远不会忘记释放资源。' },
            {
              type: 'code',
              title: '文件的写与读',
              lang: 'python',
              code: '# 写文件：w 模式覆盖写（不存在则创建）\nwith open("notes.txt", "w", encoding="utf-8") as f:\n    f.write("第一行\\n")\n    f.write("第二行\\n")\n    f.writelines(["第三行\\n", "第四行\\n"])\n\n# 追加写：a 模式\nwith open("notes.txt", "a", encoding="utf-8") as f:\n    f.write("追加的一行\\n")\n\n# 读文件：r 模式\nwith open("notes.txt", "r", encoding="utf-8") as f:\n    content = f.read()          # 一次读全部\n    print(content)\n\n# 逐行读（大文件友好）\nwith open("notes.txt", "r", encoding="utf-8") as f:\n    for line in f:\n        print(line.strip())     # strip 去掉行尾换行符\n\n# 一次性读成行列表\nwith open("notes.txt", "r", encoding="utf-8") as f:\n    lines = f.readlines()'
            },
            {
              type: 'list',
              title: '模式与编码',
              items: [
                '"r" 读、"w" 覆盖写、"a" 追加写；加 b 是二进制模式（图片等）',
                '**encoding="utf-8" 必须写**，否则 Windows 下读中文可能乱码',
                '读不存在的文件抛 FileNotFoundError，可配合下一课的 try 捕获'
              ]
            }
          ]
        },
        {
          id: 'python-json',
          title: '7.2 JSON：数据的通用格式',
          sections: [
            { type: 'text', content: 'JSON 是程序之间交换数据的通用格式，长得和 Python 字典几乎一样。`json` 模块负责字典与 JSON 文本之间的转换，是做配置文件、保存数据、调用接口的必备工具。' },
            {
              type: 'code',
              title: 'JSON 与字典互转',
              lang: 'python',
              code: 'import json\n\nstudent = {"name": "小明", "age": 18, "scores": [90, 85]}\n\n# 字典 -> JSON 字符串（序列化）\ns = json.dumps(student, ensure_ascii=False)   # ensure_ascii=False 让中文正常显示\nprint(s)                    # {"name": "小明", "age": 18, "scores": [90, 85]}\n\n# JSON 字符串 -> 字典（反序列化）\ndata = json.loads(\'{"name": "小红", "age": 17}\')\nprint(data["name"])         # 小红\n\n# 保存到文件 / 从文件读取\nwith open("student.json", "w", encoding="utf-8") as f:\n    json.dump(student, f, ensure_ascii=False, indent=2)   # indent 美化缩进\n\nwith open("student.json", "r", encoding="utf-8") as f:\n    obj = json.load(f)\nprint(obj["scores"])        # [90, 85]'
            },
            {
              type: 'list',
              title: '易混淆的方法名',
              items: [
                '`dumps`/`loads` 处理**字符串**（s 结尾 = string）',
                '`dump`/`load` 直接读写**文件**',
                'JSON 的键必须是字符串，Python 字典的键则随意（元组等不可当 JSON 键）'
              ]
            }
          ]
        },
        {
          id: 'python-exception',
          title: '7.3 异常处理：try-except',
          sections: [
            { type: 'text', content: 'Python 用 **try-except-finally** 处理异常，思想和 Java 一样，关键字不同。捕获异常后程序不会崩溃，可以给出友好提示或重试。' },
            {
              type: 'code',
              title: '异常处理结构',
              lang: 'python',
              code: 'try:\n    age = int(input("请输入年龄："))    # 可能抛 ValueError\n    result = 100 / age                  # 可能抛 ZeroDivisionError\n    print(f"结果：{result}")\nexcept ValueError:\n    print("请输入合法的数字")\nexcept ZeroDivisionError:\n    print("年龄不能为 0")\nexcept Exception as e:                  # 兜底捕获，e 是异常对象\n    print(f"未知错误：{e}")\nelse:\n    print("没有异常时执行这句")          # 可选分支\nfinally:\n    print("无论如何都执行，适合收尾清理")\n\n# 主动抛出异常：raise\n# raise ValueError("年龄不合法")\n\n# 自定义异常\nclass AgeError(Exception):\n    pass\n\n# raise AgeError("年龄超出范围")'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'except 从上到下匹配，具体的异常放前面，Exception 兜底放最后',
                '`as e` 拿到异常对象，`e` 可打印错误信息',
                '抛异常用 `raise`，自定义异常继承 Exception 即可'
              ]
            }
          ]
        },
        {
          id: 'python-stdlib',
          title: '7.4 常用标准库巡礼',
          sections: [
            { type: 'text', content: 'Python 的口号是"电池全含"：标准库覆盖日常开发的大部分需求。认识几个最常用的，遇到需求记得先想标准库。' },
            {
              type: 'code',
              title: '标准库小例子',
              lang: 'python',
              code: 'import os\nimport shutil\n\n# os：操作系统交互\nprint(os.getcwd())                    # 当前目录\nprint(os.listdir("."))                # 列出目录内容\n# os.makedirs("新文件夹", exist_ok=True)\n# shutil.copy("a.txt", "b.txt")       # 复制文件\n\n# pathlib：更现代的路径处理\nfrom pathlib import Path\np = Path("data") / "notes.txt"        # 用 / 拼路径，跨平台\nprint(p.suffix)                       # .txt\n\n# datetime：日期时间\nfrom datetime import datetime, timedelta\nnow = datetime.now()\nprint(now.strftime("%Y-%m-%d %H:%M"))  # 格式化输出\ntomorrow = now + timedelta(days=1)     # 时间加减\n\n# collections：增强容器\nfrom collections import Counter\nwords = ["苹果", "香蕉", "苹果", "苹果", "橘子"]\nprint(Counter(words))                  # 统计次数：{"苹果": 3, ...}\n\n# itertools：迭代工具\nimport itertools\nprint(list(itertools.combinations("ABC", 2)))  # 组合：[(A,B),(A,C),(B,C)]'
            },
            {
              type: 'tip',
              content: '学标准库的诀窍不是背，而是遇到问题时知道"标准库可能已经有了"，先查文档再造轮子。'
            }
          ]
        }
      ]
    },

    /* ============ 第八章 进阶特性 ============ */
    {
      id: 'python-ch8',
      title: '第八章 进阶特性',
      lessons: [
        {
          id: 'python-comprehension',
          title: '8.1 列表推导式',
          sections: [
            { type: 'text', content: '**推导式**（comprehension）是 Python 最有标志性的语法：一行代码完成"遍历 + 加工 + 筛选"，替代大部分简单 for 循环。' },
            {
              type: 'code',
              title: '推导式全家桶',
              lang: 'python',
              code: '# 老写法：把列表每个元素平方\nnums = [1, 2, 3, 4, 5]\nsquares = []\nfor n in nums:\n    squares.append(n ** 2)\n\n# 列表推导式：一行搞定\nsquares = [n ** 2 for n in nums]\nprint(squares)               # [1, 4, 9, 16, 25]\n\n# 带条件筛选：只要偶数的平方\neven_squares = [n ** 2 for n in nums if n % 2 == 0]\nprint(even_squares)          # [4, 16]\n\n# 带转换的字符串处理\nnames = ["alice", "bob", "carl"]\nprint([n.capitalize() for n in names])   # [Alice, Bob, Carl]\n\n# 字典推导式：单词 -> 长度\nwords = ["apple", "banana", "cherry"]\nlength_map = {w: len(w) for w in words}\nprint(length_map)            # {apple: 5, banana: 6, cherry: 6}\n\n# 集合推导式\nprint({n % 3 for n in nums}) # {0, 1, 2}\n\n# 生成器表达式：圆括号，惰性求值省内存\ntotal = sum(n ** 2 for n in range(101))   # 1~100 的平方和\nprint(total)'
            },
            {
              type: 'list',
              title: '何时使用',
              items: [
                '逻辑简单（一两个步骤）用推导式，可读性最好',
                '逻辑复杂就老老实实写 for 循环，别硬塞进一行',
                '数据量巨大且只需遍历一次时，用生成器表达式省内存'
              ]
            }
          ]
        },
        {
          id: 'python-generator',
          title: '8.2 生成器',
          sections: [
            { type: 'text', content: '**生成器**（generator）是"边生成边消费"的序列：不一次性把所有数据放进内存，而是要用一个算一个。写法上就是把 return 换成 **yield**。处理海量数据、无限序列的利器。' },
            {
              type: 'code',
              title: 'yield 与惰性求值',
              lang: 'python',
              code: '# 普通函数：一次性生成整个列表，数据量大时吃内存\ndef make_squares_list(n):\n    result = []\n    for i in range(n):\n        result.append(i ** 2)\n    return result\n\n# 生成器函数：包含 yield，调用时立即返回一个生成器对象\ndef make_squares_gen(n):\n    for i in range(n):\n        yield i ** 2        # 每次在这里"暂停"，交出一个值\n\n# 使用：for 会自动推动它逐个产出\ngen = make_squares_gen(5)\nfor v in gen:\n    print(v)                # 0 1 4 9 16\n\n# next() 手动取下一个值\ng = make_squares_gen(3)\nprint(next(g))              # 0\nprint(next(g))              # 1\nprint(next(g))              # 4\n# 再 next 会抛 StopIteration，for 循环会自动处理它\n\n# 无限序列只有生成器能表达\ndef natural_numbers():\n    n = 1\n    while True:             # 无限循环也没关系，用到才计算\n        yield n\n        n += 1'
            },
            {
              type: 'tip',
              content: '记忆：return 是"把全部结果交出去就结束"，yield 是"交出一个结果然后暂停，下次从这继续"。'
            }
          ]
        },
        {
          id: 'python-decorator',
          title: '8.3 装饰器初步',
          sections: [
            { type: 'text', content: '**装饰器**（decorator）是"给函数套一层外壳"的语法：不修改原函数代码，就能给它增加统一的功能（如计时、日志、权限检查）。它本质是"接收函数、返回新函数"的高阶函数。' },
            {
              type: 'code',
              title: '计时装饰器',
              lang: 'python',
              code: 'import time\nfrom functools import wraps\n\ndef timer(func):\n    @wraps(func)                       # 保留原函数的名字和文档\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs) # 调用原函数\n        cost = time.time() - start\n        print(f"{func.__name__} 耗时 {cost:.3f} 秒")\n        return result\n    return wrapper\n\n# @timer 的含义：slow_task = timer(slow_task)\n@timer\ndef slow_task(n):\n    total = sum(i for i in range(n))\n    return total\n\nslow_task(10_000_000)     # 输出：slow_task 耗时 0.xxx 秒\n\n# 多个装饰器可以叠加（从下往上套）\n# @timer\n# @logger\n# def foo(): ...'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`@装饰器名` 只是 `函数 = 装饰器(函数)` 的语法糖',
                '装饰器不改变原函数的调用方式，"透明地"增加功能',
                'Web 框架里的登录校验、接口缓存，大多由装饰器实现'
              ]
            },
            {
              type: 'tip',
              content: '初学阶段看懂装饰器即可，先会用（比如直接用别人的 @timer），写复杂装饰器的能力随项目经验自然增长。'
            }
          ]
        }
      ]
    },

    /* ============ 第九章 实战与方向 ============ */
    {
      id: 'python-ch9',
      title: '第九章 实战与方向',
      lessons: [
        {
          id: 'python-pip',
          title: '9.1 pip 与虚拟环境',
          sections: [
            { type: 'text', content: '标准库之外，Python 的真正威力来自**第三方库**（pandas、requests、numpy……），用 pip 安装。**虚拟环境**则让每个项目有独立的库版本，互不干扰——工程实践第一步。' },
            {
              type: 'code',
              title: 'pip 与 venv 常用命令',
              lang: 'text',
              code: '# 安装第三方库（终端执行，不是 python 代码）\npip install requests            # 安装\npip install pandas==2.0.0       # 指定版本\npip list                        # 查看已安装\npip install --upgrade pip       # 升级 pip 自己\n\n# 创建虚拟环境（每个项目一份独立环境）\npython -m venv .venv\n\n# 激活（Windows PowerShell）\n.venv\\Scripts\\Activate.ps1\n# 激活后命令行前面出现 (.venv)，此时 pip 装的库只属于本项目\n\n# 导出 / 恢复依赖清单（配合 git 使用）\npip freeze > requirements.txt\npip install -r requirements.txt'
            },
            {
              type: 'list',
              title: '工作流约定',
              items: [
                '每个新项目都先建虚拟环境再装库，别往全局环境乱装',
                'requirements.txt 提交到 git，换电脑/换机器一条命令恢复环境',
                'IDE（PyCharm/VS Code）里把解释器指向项目的 .venv'
              ]
            },
            {
              type: 'tip',
              content: '国内网络慢可以给 pip 换清华镜像：pip install -i https://pypi.tuna.tsinghua.edu.cn/simple 库名。'
            }
          ]
        },
        {
          id: 'python-mini-project',
          title: '9.2 综合小项目：命令行记账本',
          sections: [
            { type: 'text', content: '把学过的知识串起来：这个记账本用到**函数、字典/列表、文件持久化（json）、异常处理、循环交互**，全部代码不到 60 行。' },
            {
              type: 'code',
              title: 'ledger.py 完整代码',
              lang: 'python',
              code: 'import json\nfrom pathlib import Path\n\nDATA_FILE = Path("ledger.json")\n\n\ndef load_records():\n    """从文件加载历史记录，没有就返回空列表"""\n    if DATA_FILE.exists():\n        with open(DATA_FILE, "r", encoding="utf-8") as f:\n            return json.load(f)\n    return []\n\n\ndef save_records(records):\n    """把记录保存到文件"""\n    with open(DATA_FILE, "w", encoding="utf-8") as f:\n        json.dump(records, f, ensure_ascii=False, indent=2)\n\n\ndef add_record(records):\n    """添加一笔支出"""\n    item = input("买了什么：")\n    try:\n        amount = float(input("花了多少钱："))\n    except ValueError:\n        print("金额必须是数字，重新来")\n        return\n    records.append({"item": item, "amount": amount})\n    save_records(records)\n    print(f"已记录：{item} ¥{amount}")\n\n\ndef show_records(records):\n    """展示全部记录与总支出"""\n    if not records:\n        print("还没有记录")\n        return\n    for i, r in enumerate(records, start=1):\n        print(f"{i}. {r[\'item\']} ¥{r[\'amount\']}")\n    total = sum(r["amount"] for r in records)\n    print(f"共 {len(records)} 笔，总计 ¥{total:.2f}")\n\n\ndef main():\n    records = load_records()          # 启动时加载历史数据\n    while True:\n        print("\\n==== 记账本 ====")\n        print("1. 记一笔  2. 查看全部  3. 退出")\n        choice = input("请选择：")\n        if choice == "1":\n            add_record(records)\n        elif choice == "2":\n            show_records(records)\n        elif choice == "3":\n            print("再见！")\n            break\n        else:\n            print("无效选项")\n\n\nif __name__ == "__main__":\n    main()'
            },
            {
              type: 'list',
              title: '这个项目练到了什么',
              items: [
                '函数拆分：每个功能一个小函数，main 负责调度',
                '数据持久化：json + pathlib 让数据关机也不丢',
                '异常处理：float() 转换失败不至于崩溃',
                '循环交互：while True + break 的标准命令行套路'
              ]
            }
          ]
        },
        {
          id: 'python-roadmap',
          title: '9.3 学习路线与方向选择',
          sections: [
            { type: 'text', content: '掌握核心语法后，Python 的方向差异很大，根据兴趣选一条深入即可。' },
            {
              type: 'list',
              title: '四大主流方向',
              items: [
                '**数据分析/科学计算**：numpy → pandas → matplotlib，处理表格数据、画图报告',
                '**人工智能**：在数据分析基础上学 scikit-learn（机器学习）→ PyTorch（深度学习）',
                '**Web 后端**：Flask（轻量）或 Django（全家桶），配合数据库做网站接口',
                '**自动化办公/爬虫**：openpyxl 操作 Excel、requests + BeautifulSoup 抓数据，见效最快'
              ]
            },
            {
              type: 'list',
              title: '实战建议',
              items: [
                '自动化：写脚本批量整理你电脑里的文件、自动导出 Excel 报表',
                '爬虫：抓一个你常逛网站的数据做统计分析',
                '数据分析：找一份公开数据集（如电影评分），完整走一遍"清洗→分析→可视化"',
                '每个项目都回本站对应章节复习，用综合测试自测'
              ]
            },
            {
              type: 'tip',
              content: '学编程的最快路径是"带着问题找答案"：先想做点什么，再学需要的部分，比按部就班啃书高效得多。'
            }
          ]
        }
      ]
    }
  ]
}
