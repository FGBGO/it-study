// ============================================================
// Java 分类教学数据
// 文件结构说明（与 html.js / css.js / js.js 完全一致）：
//   id          分类唯一标识（用于路由 /category/java）
//   name        分类显示名称
//   short       分类徽标短文字
//   color       分类主题色（首页卡片、分类页徽标）
//   description 一句话介绍
//   chapters    章节数组，每章包含 lessons，每课包含 sections
//   section.type 支持 text 文本 / list 要点列表 / code 代码示例 / tip 提示
// 注意：所有代码示例字符串内部使用 \n 表示换行，字符串中不能出现真实换行
// ============================================================
export default {
  id: 'java',
  name: 'Java',
  short: 'Java',
  color: '#0f766e',
  description: '跨平台的面向对象语言：企业级后端与安卓开发的常青树',
  chapters: [
    /* ============ 第一章 Java 入门 ============ */
    {
      id: 'java-ch1',
      title: '第一章 Java 入门',
      lessons: [
        {
          id: 'java-what-is',
          title: '1.1 Java 是什么',
          sections: [
            { type: 'text', content: 'Java 是一门**面向对象**的编程语言，最大的特点是"一次编写，到处运行"（Write Once, Run Anywhere）：同一份代码编译一次，可以在 Windows、Linux、macOS 上直接运行。它长期占据编程语言排行榜前列，是企业级后端、安卓开发、大数据领域的主力语言。' },
            {
              type: 'list',
              title: 'Java 的特点',
              items: [
                '**跨平台**：代码编译成字节码，由 JVM（Java 虚拟机）负责在不同系统上运行',
                '**面向对象**：一切皆对象，代码以"类"为基本单位组织，适合大型项目',
                '**强类型**：每个变量都必须声明类型，编译期就能发现大量错误',
                '**生态庞大**：Spring 全家桶、安卓、Hadoop/Spark 等框架和工具极其丰富',
                '**自动内存管理**：有垃圾回收器（GC）自动回收不用的内存，不用手动释放'
              ]
            },
            {
              type: 'tip',
              content: 'Java 和 JavaScript 名字像但完全是两种语言：Java 是编译型的通用编程语言，JS 最初只是浏览器脚本。'
            }
          ]
        },
        {
          id: 'java-jdk-install',
          title: '1.2 JDK、JRE、JVM 与环境安装',
          sections: [
            { type: 'text', content: '学 Java 常听到三个缩写，它们是三层包含关系：**JDK ⊃ JRE ⊃ JVM**。' },
            {
              type: 'list',
              title: '三者区别',
              items: [
                '**JVM**（Java Virtual Machine）：Java 虚拟机，负责执行字节码，是"跨平台"的关键',
                '**JRE**（Java Runtime Environment）：Java 运行环境 = JVM + 核心类库，只能"运行"程序',
                '**JDK**（Java Development Kit）：开发工具包 = JRE + 编译器 javac + 调试工具，**写代码必须装它**'
              ]
            },
            {
              type: 'list',
              title: '安装步骤',
              items: [
                '下载 JDK：推荐 JDK 17 或 21（长期支持版本 LTS），官网或 Adoptium 均可下载',
                '安装后配置环境变量 `JAVA_HOME` 指向 JDK 目录，并把 `%JAVA_HOME%\\bin` 加入 `Path`',
                '验证：打开命令行输入 `java -version` 和 `javac -version`，都能显示版本号即成功',
                '编辑器：入门可用 IDEA 社区版（免费）或 VS Code + Java 插件'
              ]
            },
            {
              type: 'tip',
              content: '只跑 Java 程序装 JRE 就够，但要写代码、编译程序就必须装 JDK。'
            }
          ]
        },
        {
          id: 'java-hello-world',
          title: '1.3 第一个程序：Hello World',
          sections: [
            { type: 'text', content: '按惯例，学任何语言的第一步都是让程序打印出 "Hello, World!"。Java 的固定套路是：**定义一个类，类里写一个 main 方法**，程序从这里开始执行。' },
            {
              type: 'code',
              title: 'HelloWorld.java',
              lang: 'java',
              code: '// public class 后面的名字必须和文件名一模一样：HelloWorld.java\npublic class HelloWorld {\n    // main 方法是程序入口，这行写法是固定格式\n    public static void main(String[] args) {\n        // 在控制台打印一行文字\n        System.out.println("Hello, World!");\n    }\n}'
            },
            {
              type: 'list',
              title: '编译与运行（命令行版）',
              items: [
                '编译：`javac HelloWorld.java` —— 生成字节码文件 `HelloWorld.class`',
                '运行：`java HelloWorld` —— 注意这里**不加 .class 后缀**',
                '输出：控制台打印 `Hello, World!`'
              ]
            },
            {
              type: 'tip',
              content: '常见的第一个报错：类名与文件名不一致、main 拼错、丢了分号。对照上面的固定写法检查即可。'
            }
          ]
        },
        {
          id: 'java-compile-flow',
          title: '1.4 Java 程序的运行原理',
          sections: [
            { type: 'text', content: 'Java 是"**先编译、再解释执行**"的混合模式：`.java` 源文件经 javac 编译成 `.class` **字节码**，字节码由 JVM 逐条加载执行。JVM 在执行时还会把热点代码即时编译成机器码（JIT），所以运行速度并不慢。' },
            {
              type: 'code',
              title: '从源码到运行',
              lang: 'text',
              code: 'HelloWorld.java  --javac 编译-->  HelloWorld.class（字节码）\n                                      |\n              Windows JVM <-----------+-----------> Linux JVM\n             （在本机运行）                    （同样能运行）'
            },
            {
              type: 'list',
              title: '为什么要设计成这样',
              items: [
                '字节码是中间格式，屏蔽了各操作系统的差异，实现跨平台',
                '编译期做语法检查，很多错误在运行前就能被发现',
                'JIT 即时编译让高频代码越跑越快'
              ]
            },
            {
              type: 'tip',
              content: '记忆口诀：源码给程序员看，字节码给 JVM 看。'
            }
          ]
        }
      ]
    },

    /* ============ 第二章 基础语法 ============ */
    {
      id: 'java-ch2',
      title: '第二章 变量与基础语法',
      lessons: [
        {
          id: 'java-data-types',
          title: '2.1 变量与八大基本数据类型',
          sections: [
            { type: 'text', content: 'Java 是**强类型语言**：声明变量时必须写明类型，且类型确定了就不能随便装别的类型的数据。基本类型有 8 个，分四组记忆。' },
            {
              type: 'code',
              title: '八大基本类型与声明示例',
              lang: 'java',
              code: '// 整数四种：byte(1字节) short(2字节) int(4字节) long(8字节)\nint age = 18;\nlong bigNum = 900000000000L;   // long 结尾要加 L\n\n// 浮点两种：float(4字节) double(8字节)\ndouble price = 9.99;\nfloat f = 3.14F;               // float 结尾要加 F\n\n// 字符：char，用单引号装一个字符\nchar grade = \'A\';\n\n// 布尔：boolean，只有 true / false\nboolean isVip = true;'
            },
            {
              type: 'list',
              title: '使用要点',
              items: [
                '日常整数用 `int`，很大才用 `long`；小数默认用 `double`',
                '变量命名：小驼峰 `studentName`；类名：大驼峰 `HelloWorld`；常量全大写 `MAX_SIZE`',
                '变量必须**先赋值再使用**，否则编译报错',
                '除基本类型外的一切都是**引用类型**，比如 `String`（字符串）'
              ]
            },
            {
              type: 'tip',
              content: 'String 是引用类型不是基本类型，但用起来很像基本类型，别混进"八大基本类型"里。'
            }
          ]
        },
        {
          id: 'java-operators',
          title: '2.2 运算符',
          sections: [
            { type: 'text', content: 'Java 运算符与 C/JS 家族基本一致：算术、比较、逻辑三大家族，外加独有的字符串拼接行为。' },
            {
              type: 'code',
              title: '常用运算符速览',
              lang: 'java',
              code: '// 算术：+ - * / %\nSystem.out.println(10 / 3);    // 3，整数相除只保留整数\nSystem.out.println(10 % 3);    // 1，取余\nSystem.out.println(10.0 / 4);  // 2.5，有一方是小数就是小数除法\n\n// 比较：==  !=  >  <  >=  <=，结果是 boolean\nSystem.out.println(5 >= 5);    // true\n\n// 逻辑：&& 与（都真才真）  || 或（有真就真）  ! 非\nboolean ok = 3 > 2 && 5 > 4;   // true\n\n// 自增自减：i++ 先用后加，++i 先加后用\nint i = 1;\nSystem.out.println(i++);       // 输出 1，之后 i 变 2\n\n// 字符串拼接：+ 两边只要有一个是字符串就是拼接\nSystem.out.println("分数：" + 98);  // 分数：98'
            },
            {
              type: 'list',
              title: '易错点',
              items: [
                '`5 / 2` 结果是 2 不是 2.5，想得到小数至少一方要是浮点数',
                '两个整数 `%` 取余结果符号跟被除数一致',
                '判断两个整数相等用 `==`，但判断**字符串内容**相等必须用 `equals()`，这是 Java 高频考点'
              ]
            }
          ]
        },
        {
          id: 'java-type-cast',
          title: '2.3 类型转换',
          sections: [
            { type: 'text', content: '类型转换分两种方向：**自动转换**（小范围 → 大范围，安全，默默完成）和**强制转换**（大范围 → 小范围，可能丢数据，必须写明）。' },
            {
              type: 'code',
              title: '两种转换写法',
              lang: 'java',
              code: '// 自动类型转换（隐式）：小杯子的水倒进大杯子\nint a = 10;\ndouble d = a;          // int 自动转 double，d = 10.0\nlong l = a;            // int 自动转 long\n\n// 强制类型转换（显式）：大杯子硬塞进小杯子，可能溢出\ndouble pi = 3.99;\nint n = (int) pi;      // 结果 3，直接砍掉小数，不是四舍五入\nint big = 130;\nbyte b = (byte) big;   // 结果 -126，超出 byte 范围发生溢出\n\n// 字符串与数字互转\nint num = Integer.parseInt("123");   // 字符串 -> int\ndouble d2 = Double.parseDouble("3.14");\nString s = String.valueOf(456);      // 数字 -> 字符串'
            },
            {
              type: 'list',
              title: '记忆要点',
              items: [
                '自动转换方向：byte -> short -> int -> long -> float -> double，char 也可转 int',
                '强制转换语法：`(目标类型) 值`，小数转整数是**截断**不是四舍五入',
                '字符串转数字失败会抛出 `NumberFormatException` 异常'
              ]
            },
            {
              type: 'tip',
              content: 'char 本质是数字（字符编码表里的序号），所以 char 能参与算术运算，这是面试常考冷知识。'
            }
          ]
        },
        {
          id: 'java-scanner',
          title: '2.4 键盘输入：Scanner',
          sections: [
            { type: 'text', content: '程序要接收用户输入，最常用 `Scanner` 类。它住在 `java.util` 包里，使用前要先 `import` 导入。' },
            {
              type: 'code',
              title: '读取用户输入的小程序',
              lang: 'java',
              code: 'import java.util.Scanner;\n\npublic class Demo {\n    public static void main(String[] args) {\n        // 创建扫描器对象，System.in 代表标准输入（键盘）\n        Scanner sc = new Scanner(System.in);\n\n        System.out.print("请输入你的年龄：");\n        int age = sc.nextInt();          // 读取一个整数\n\n        System.out.print("请输入你的名字：");\n        String name = sc.next();         // 读取一个单词（遇空格结束）\n\n        System.out.println(name + " 今年 " + age + " 岁");\n    }\n}'
            },
            {
              type: 'list',
              title: '常用输入方法',
              items: [
                '`nextInt()` 读整数、`nextDouble()` 读小数',
                '`next()` 读一个单词；`nextLine()` 读**一整行**（含空格）',
                '混用时注意：`nextInt()` 后紧跟 `nextLine()` 会读到残留的换行，需要先补一个 `nextLine()` 吸收'
              ]
            },
            {
              type: 'tip',
              content: '写完 Scanner 最好调用 `sc.close()` 关闭，养成资源管理好习惯。'
            }
          ]
        }
      ]
    },

    /* ============ 第三章 流程控制 ============ */
    {
      id: 'java-ch3',
      title: '第三章 流程控制',
      lessons: [
        {
          id: 'java-if',
          title: '3.1 if 分支结构',
          sections: [
            { type: 'text', content: 'if 语句按条件决定"走哪条路"。Java 的 if 有三种形态：单分支、双分支、多分支。条件必须是 `boolean` 类型，这点比 JS 严格——不能拿数字当条件。' },
            {
              type: 'code',
              title: '三种 if 形态',
              lang: 'java',
              code: 'int score = 85;\n\n// 多分支：从上往下匹配，命中一个就结束\nif (score >= 90) {\n    System.out.println("优秀");\n} else if (score >= 80) {\n    System.out.println("良好");\n} else if (score >= 60) {\n    System.out.println("及格");\n} else {\n    System.out.println("不及格");\n}\n\n// 单分支：只有满足才执行\nif (score < 60) {\n    System.out.println("需要补考");\n}\n\n// 求两个数中较大的一个（三目运算符写法）\nint a = 10, b = 20;\nint max = a > b ? a : b;'
            },
            {
              type: 'list',
              title: '易错点',
              items: [
                '条件必须是 boolean，不能写 `if (1)` —— 这在 JS 里合法，Java 直接编译错误',
                '写 `==` 比较时把常量放前面（`if (0 == x)`）可避免误写成赋值',
                '大括号即使只有一句也建议写上，避免"悬空 else"陷阱'
              ]
            }
          ]
        },
        {
          id: 'java-switch',
          title: '3.2 switch 分支',
          sections: [
            { type: 'text', content: '当要根据**一个变量的多个具体取值**来分支时，switch 比 if-else 更清晰。Java 12+ 还支持了箭头语法，更简洁。' },
            {
              type: 'code',
              title: '传统写法与箭头写法',
              lang: 'java',
              code: 'int day = 6;\n\n// 传统写法：记得每个 case 都要 break，否则穿透\nswitch (day) {\n    case 1:\n    case 2:\n    case 3:\n    case 4:\n    case 5:\n        System.out.println("工作日");\n        break;\n    case 6:\n    case 7:\n        System.out.println("周末");\n        break;\n    default:\n        System.out.println("非法日期");\n}\n\n// 箭头写法（Java 14+）：不需要 break，不会穿透\nswitch (day) {\n    case 1, 2, 3, 4, 5 -> System.out.println("工作日");\n    case 6, 7 -> System.out.println("周末");\n    default -> System.out.println("非法日期");\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'switch 能匹配的类型：`byte short char int`、枚举、`String`（Java 7 起）',
                '传统写法漏写 `break` 会**穿透**到下一个 case 继续执行',
                '把命中概率高的 case 放前面，可以减少判断次数'
              ]
            },
            {
              type: 'tip',
              content: 'case 的值不能重复，且必须是常量，不能是变量或范围。需要范围判断时用 if。'
            }
          ]
        },
        {
          id: 'java-loops',
          title: '3.3 for 与 while 循环',
          sections: [
            { type: 'text', content: '循环让计算机重复干活。Java 有三种循环：`for`（次数明确）、`while`（次数不确定）、`do-while`（至少执行一次），外加遍历数组/集合专用的**增强 for**。' },
            {
              type: 'code',
              title: '三种循环 + 增强 for',
              lang: 'java',
              code: '// for：打印 1 到 5\nfor (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}\n\n// while：条件为真就一直转，先判断后执行\nint money = 100;\nwhile (money >= 30) {\n    money -= 30;              // 每次花 30 元\n    System.out.println("花完剩 " + money);\n}\n\n// do-while：先执行一次再判断，循环体至少跑一遍\nint x = 0;\ndo {\n    System.out.println("至少执行一次");\n} while (x > 0);\n\n// 增强 for（for-each）：遍历数组和集合最方便\nint[] nums = {10, 20, 30};\nfor (int n : nums) {\n    System.out.println(n);\n}'
            },
            {
              type: 'list',
              title: '选择建议',
              items: [
                '知道循环几次：用 `for`',
                '不知道几次、只看条件：用 `while`（如"用户一直输错就一直重来"）',
                '要"先做一次再说"：用 `do-while`（如菜单至少显示一次）',
                '只是遍历每个元素：用增强 `for`，代码最短'
              ]
            }
          ]
        },
        {
          id: 'java-break-continue',
          title: '3.4 break、continue 与嵌套循环',
          sections: [
            { type: 'text', content: '`break` **终止整个循环**，`continue` **跳过本轮进入下一轮**。循环里套循环叫嵌套循环，经典应用是打印九九乘法表。' },
            {
              type: 'code',
              title: '跳转关键字与乘法表',
              lang: 'java',
              code: '// break：找到就停\nint[] arr = {3, 7, 11, 18, 25};\nfor (int n : arr) {\n    if (n == 11) {\n        System.out.println("找到了 11");\n        break;                 // 结束整个循环，后面的 18、25 不再看\n    }\n}\n\n// continue：只跳过本轮\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 == 0) {\n        continue;              // 跳过偶数，进入下一轮\n    }\n    System.out.println(i);     // 输出 1 3 5\n}\n\n// 嵌套循环：九九乘法表\nfor (int i = 1; i <= 9; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + "x" + i + "=" + (i * j) + "\\t");\n    }\n    System.out.println();      // 每打完一行换行\n}'
            },
            {
              type: 'tip',
              content: '嵌套循环里外层走一步、内层走完一轮。想直接跳出外层可以给循环起标签（outer:）后用 `break outer;`，但日常更推荐把内层条件封装成方法用 return 结束。'
            }
          ]
        }
      ]
    },

    /* ============ 第四章 方法与数组 ============ */
    {
      id: 'java-ch4',
      title: '第四章 方法与数组',
      lessons: [
        {
          id: 'java-method',
          title: '4.1 方法的定义与调用',
          sections: [
            { type: 'text', content: '方法（Method）就是一段**起好名字、可反复调用**的代码块，相当于其他语言里的"函数"。Java 方法必须声明在类里面。' },
            {
              type: 'code',
              title: '方法的五种形态',
              lang: 'java',
              code: 'public class Demo {\n    // 1. 无参数无返回值\n    static void sayHello() {\n        System.out.println("你好！");\n    }\n\n    // 2. 有参数无返回值\n    static void greet(String name) {\n        System.out.println("你好，" + name);\n    }\n\n    // 3. 有参数有返回值：return 把结果交回给调用处\n    static int add(int a, int b) {\n        return a + b;\n    }\n\n    // 4. 判断型：直接返回 boolean 表达式\n    static boolean isAdult(int age) {\n        return age >= 18;\n    }\n\n    public static void main(String[] args) {\n        sayHello();                       // 调用\n        greet("小明");\n        int sum = add(3, 5);              // 用变量接住返回值\n        System.out.println("3+5=" + sum);\n        System.out.println(isAdult(20));\n    }\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '语法：`修饰符 返回值类型 方法名(参数列表) { ... }`，无返回值写 `void`',
                '`return` 会**立即结束**方法并交回结果；void 方法里可单独写 `return;` 提前结束',
                '方法不调用不执行；调用时实参个数、类型、顺序要和形参对应'
              ]
            },
            {
              type: 'tip',
              content: '本例为了能在 main 里直接调用，方法加了 static；学完面向对象后，普通方法写在类里即可不用 static。'
            }
          ]
        },
        {
          id: 'java-overload',
          title: '4.2 方法重载（Overload）',
          sections: [
            { type: 'text', content: '**方法重载**：同一个类里方法名相同，但**参数列表不同**（个数或类型不同）。调用时 JVM 根据你传的参数自动匹配对应版本。`println` 能打印任何类型就是重载的典型。' },
            {
              type: 'code',
              title: '一个名字，多种参数',
              lang: 'java',
              code: 'public class Calculator {\n    // 两个 int 相加\n    static int add(int a, int b) {\n        return a + b;\n    }\n\n    // 三个 int 相加：参数个数不同，构成重载\n    static int add(int a, int b, int c) {\n        return a + b + c;\n    }\n\n    // 两个 double 相加：参数类型不同，构成重载\n    static double add(double a, double b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(add(1, 2));        // 自动调用第一个\n        System.out.println(add(1, 2, 3));     // 自动调用第二个\n        System.out.println(add(1.5, 2.5));    // 自动调用第三个\n    }\n}'
            },
            {
              type: 'list',
              title: '构成重载的条件（两必须一无关）',
              items: [
                '必须在**同一个类**里、方法名相同',
                '参数的**个数**或**类型**必须不同（顺序不同也算）',
                '与返回值类型无关 —— 只改返回值不构成重载，会编译报错'
              ]
            },
            {
              type: 'tip',
              content: '记忆：重载看参数，不看返回值。'
            }
          ]
        },
        {
          id: 'java-array',
          title: '4.3 数组',
          sections: [
            { type: 'text', content: '数组是**长度固定、类型相同**的一批数据的容器。元素从下标 0 开始编号，通过 `数组名[下标]` 读写。' },
            {
              type: 'code',
              title: '数组的声明、遍历与常见操作',
              lang: 'java',
              code: '// 静态初始化：直接给出元素\nint[] arr = {10, 20, 30, 40};\n\n// 动态初始化：指定长度，元素为默认值（int 是 0）\nint[] arr2 = new int[5];\n\n// 访问与修改\nSystem.out.println(arr[0]);    // 10\narr[0] = 99;\n\n// 数组长度用 .length（注意没有小括号）\nSystem.out.println(arr.length);\n\n// 遍历 + 求最大值\nint max = arr[0];\nfor (int i = 1; i < arr.length; i++) {\n    if (arr[i] > max) {\n        max = arr[i];\n    }\n}\nSystem.out.println("最大值：" + max);\n\n// 越界访问会抛出 ArrayIndexOutOfBoundsException\n// System.out.println(arr[100]);  // 运行时报错'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '下标范围：0 到 length-1，越界直接抛异常',
                '数组是引用类型，两个变量指向同一数组时，一边改另一边也"变"',
                '默认值规则：int 为 0、double 为 0.0、boolean 为 false、引用类型为 null'
              ]
            }
          ]
        },
        {
          id: 'java-arrays-util',
          title: '4.4 二维数组与 Arrays 工具类',
          sections: [
            { type: 'text', content: '二维数组是"数组的数组"，常用来表示表格/矩阵。`java.util.Arrays` 则是操作数组的工具箱，排序、查找、打印一行代码搞定。' },
            {
              type: 'code',
              title: '二维数组与 Arrays 常用方法',
              lang: 'java',
              code: 'import java.util.Arrays;\n\n// 二维数组：3 行 2 列\nint[][] table = {\n    {90, 85},\n    {77, 68},\n    {100, 95}\n};\nSystem.out.println(table[1][0]);   // 第 2 行第 1 列：77\n\n// 遍历二维数组\nfor (int[] row : table) {\n    for (int v : row) {\n        System.out.print(v + " ");\n    }\n    System.out.println();\n}\n\n// Arrays 工具类\nint[] nums = {5, 2, 8, 1};\nArrays.sort(nums);                          // 排序（升序）\nSystem.out.println(Arrays.toString(nums));  // [1, 2, 5, 8] 一行打印数组\nint idx = Arrays.binarySearch(nums, 5);     // 二分查找，返回下标\nint[] copy = Arrays.copyOf(nums, 6);        // 扩容式复制，多出的补 0'
            },
            {
              type: 'list',
              title: '易错点',
              items: [
                '直接打印数组名得到的是"[I@地址"之类的乱码，要打印内容用 `Arrays.toString()`',
                '`binarySearch` 前必须先排序，否则结果不可靠'
              ]
            },
            {
              type: 'tip',
              content: '后续学的集合（ArrayList 等）长度可变、功能更强，但数组在性能和底层原理上依然是必修基本功。'
            }
          ]
        }
      ]
    },

    /* ============ 第五章 面向对象基础 ============ */
    {
      id: 'java-ch5',
      title: '第五章 面向对象基础',
      lessons: [
        {
          id: 'java-class-object',
          title: '5.1 类与对象',
          sections: [
            { type: 'text', content: '**类**是"图纸"，**对象**是按图纸造出来的"实物"。类描述一类事物有哪些**属性**（成员变量）和**行为**（方法），对象是这个描述的具体实例。面向对象就是把数据和行为打包在一起编程。' },
            {
              type: 'code',
              title: '定义类并创建对象',
              lang: 'java',
              code: '// 定义一个学生类\npublic class Student {\n    // 成员变量（属性）\n    String name;\n    int age;\n\n    // 成员方法（行为）\n    void study() {\n        System.out.println(name + " 正在学习");\n    }\n}\n\n// 使用：new 出对象，通过 . 访问属性和方法\nStudent stu1 = new Student();   // 创建第一个学生\nstu1.name = "小明";\nstu1.age = 18;\nstu1.study();                   // 小明 正在学习\n\nStudent stu2 = new Student();   // 每个对象的属性互不影响\nstu2.name = "小红";\nstu2.study();                   // 小红 正在学习'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`new 类名()` 就是创建对象，返回的是对象的**引用地址**',
                '成员变量有默认值（int 为 0，String 为 null），局部变量没有默认值',
                '`null` 表示"不指向任何对象"，对 null 调用方法会抛 `NullPointerException`——Java 最常见的异常'
              ]
            }
          ]
        },
        {
          id: 'java-constructor',
          title: '5.2 构造方法与 this',
          sections: [
            { type: 'text', content: '**构造方法**是创建对象时自动执行的特殊方法，方法名与类名完全相同、没有返回值类型，用于给属性赋初值。**this** 代表"当前对象"，用来区分成员变量和同名参数。' },
            {
              type: 'code',
              title: '构造方法 + this',
              lang: 'java',
              code: 'public class Student {\n    String name;\n    int age;\n\n    // 无参构造：new Student() 时执行\n    public Student() {\n    }\n\n    // 有参构造：new Student("小明", 18) 时执行\n    public Student(String name, int age) {\n        // this.name 是成员变量，name 是参数\n        this.name = name;\n        this.age = age;\n    }\n\n    public void show() {\n        System.out.println(name + " " + age);\n    }\n}\n\n// 使用\nStudent s1 = new Student("小明", 18);  // 直接带初值创建\ns1.show();                             // 小明 18'
            },
            {
              type: 'list',
              title: '规则',
              items: [
                '如果一个构造方法都没写，编译器**自动赠送**一个无参构造',
                '一旦自己写了有参构造，赠送的无参构造就**消失**了，需要的话要自己补写',
                '`this(参数)` 可以在一个构造方法里调用另一个构造方法（必须放第一行）'
              ]
            },
            {
              type: 'tip',
              content: 'IDEA 快捷键 Alt+Insert 可一键生成构造方法、getter/setter，工程里非常常用。'
            }
          ]
        },
        {
          id: 'java-encapsulation',
          title: '5.3 封装',
          sections: [
            { type: 'text', content: '**封装**是把属性藏起来（private），只通过公共方法（public）访问的思想。好处：可以在方法里加校验，防止外部塞进非法数据。它是面向对象三大特性（封装、继承、多态）之一。' },
            {
              type: 'code',
              title: 'private + getter/setter 标准套路',
              lang: 'java',
              code: 'public class Student {\n    // 属性全部私有化：外部不能直接访问\n    private String name;\n    private int age;\n\n    // getter：提供读取入口\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    // setter：提供修改入口，顺便做校验\n    public void setAge(int age) {\n        if (age < 0 || age > 150) {\n            System.out.println("年龄非法，已忽略");\n            return;\n        }\n        this.age = age;\n    }\n}\n\n// 使用：只能通过方法访问\nStudent s = new Student();\ns.setAge(300);          // 年龄非法，已忽略\ns.setAge(18);           // 正常设置\nSystem.out.println(s.getAge());'
            },
            {
              type: 'list',
              title: '访问修饰符四种权限（大到小）',
              items: [
                '`public`：任何地方都能访问',
                '`protected`：同包 + 子类可访问',
                '（默认，不写）：同包内可访问',
                '`private`：只有本类可访问'
              ]
            }
          ]
        },
        {
          id: 'java-static',
          title: '5.4 static 关键字',
          sections: [
            { type: 'text', content: '**static** 表示"属于类，而不属于某个对象"。static 变量被所有对象**共享一份**；static 方法通过类名直接调用，不用先 new 对象。工具类（如 Math、Arrays）全靠 static 工作。' },
            {
              type: 'code',
              title: 'static 变量与方法',
              lang: 'java',
              code: 'public class Counter {\n    // 静态变量：所有对象共享同一个计数器\n    static int count = 0;\n    // 实例变量：每个对象一份\n    String name;\n\n    public Counter(String name) {\n        this.name = name;\n        count++;               // 每创建一个对象就 +1\n    }\n\n    // 静态方法：类名直接调用\n    static void printCount() {\n        System.out.println("已创建 " + count + " 个对象");\n    }\n}\n\n// 使用\nnew Counter("a");\nnew Counter("b");\nCounter.printCount();          // 已创建 2 个对象（不用 new 也能调用）'
            },
            {
              type: 'list',
              title: '使用限制',
              items: [
                '静态方法里**不能直接访问**非静态成员（因为非静态成员需要对象才存在）',
                '静态方法里**不能使用** this',
                '常量惯例：`public static final double PI = 3.14;` 全大写，全局共享且不可改'
              ]
            },
            {
              type: 'tip',
              content: '加载顺序：静态成员随类加载而存在，比对象"出生"得早——这就是静态方法摸不到对象成员的根本原因。'
            }
          ]
        }
      ]
    },

    /* ============ 第六章 面向对象进阶 ============ */
    {
      id: 'java-ch6',
      title: '第六章 面向对象进阶',
      lessons: [
        {
          id: 'java-inheritance',
          title: '6.1 继承与 super',
          sections: [
            { type: 'text', content: '**继承**让子类自动拥有父类的属性和方法（`extends` 关键字），实现代码复用。子类可以在父类基础上**新增**成员，或**重写**父类方法。Java 只支持单继承：一个类只能有一个直接父类。' },
            {
              type: 'code',
              title: '继承与 super 用法',
              lang: 'java',
              code: '// 父类\npublic class Animal {\n    String name;\n\n    public Animal(String name) {\n        this.name = name;\n    }\n\n    public void eat() {\n        System.out.println(name + " 在吃东西");\n    }\n}\n\n// 子类：自动拥有 name 和 eat()\npublic class Dog extends Animal {\n    public Dog(String name) {\n        super(name);           // 调用父类构造方法，必须放第一行\n    }\n\n    // 方法重写：覆盖父类的行为\n    @Override\n    public void eat() {\n        super.eat();           // 先执行父类逻辑\n        System.out.println(name + " 啃骨头");  // 再补充自己的\n    }\n\n    // 子类独有方法\n    public void bark() {\n        System.out.println("汪汪！");\n    }\n}\n\n// 使用\nDog d = new Dog("旺财");\nd.eat();     // 旺财 在吃东西 + 旺财 啃骨头\nd.bark();'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`super.` 访问父类成员，`super(参数)` 调用父类构造方法',
                '重写方法签名必须与父类一致，建议加 `@Override` 注解让编译器帮你检查',
                'private 成员虽被继承但子类不能直接访问，要通过父类的 public 方法'
              ]
            }
          ]
        },
        {
          id: 'java-polymorphism',
          title: '6.2 多态',
          sections: [
            { type: 'text', content: '**多态**：同一个方法调用，不同对象有不同的表现。写法上就是"**父类引用指向子类对象**"（`Animal a = new Dog();`）。这是面向对象最灵活的特性，框架设计的基础。' },
            {
              type: 'code',
              title: '多态的用法与 instanceof',
              lang: 'java',
              code: 'public class Test {\n    // 参数写成父类类型，就能接收任何子类对象\n    static void feed(Animal a) {\n        a.eat();               // 实际执行的是子类重写后的版本\n    }\n\n    public static void main(String[] args) {\n        // 父类引用指向子类对象\n        Animal a = new Dog("旺财");\n        a.eat();               // 走的是 Dog 的 eat()\n\n        feed(new Dog("大黄"));\n        feed(new Cat("咪咪"));  // 一个方法通吃所有动物\n\n        // 想调用子类特有方法，需要向下转型\n        if (a instanceof Dog) {\n            Dog d = (Dog) a;\n            d.bark();\n        }\n    }\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '多态三要素：继承/实现、方法重写、父类引用指向子类对象',
                '编译看左边（只能调父类有的方法），运行看右边（实际执行子类重写的代码）',
                '向下转型前必须用 `instanceof` 判断，否则类型不匹配会抛 `ClassCastException`'
              ]
            },
            {
              type: 'tip',
              content: 'Java 16+ 支持 `if (a instanceof Dog d)` 模式匹配，判断和转型一步完成。'
            }
          ]
        },
        {
          id: 'java-abstract',
          title: '6.3 抽象类',
          sections: [
            { type: 'text', content: '**抽象类**（abstract class）是"半成品类"：用 `abstract` 声明，可以包含**没有方法体的抽象方法**，强迫子类去实现。抽象类不能被直接 new 出来，只能被继承。' },
            {
              type: 'code',
              title: '抽象类与抽象方法',
              lang: 'java',
              code: '// 抽象类：图形\npublic abstract class Shape {\n    // 抽象方法：只有声明没有方法体，子类必须实现\n    public abstract double area();\n\n    // 普通方法：抽象类里也可以有正常方法\n    public void describe() {\n        System.out.println("我的面积是 " + area());\n    }\n}\n\n// 子类必须实现所有抽象方法，否则自己也得声明为抽象类\npublic class Circle extends Shape {\n    double r;\n\n    public Circle(double r) {\n        this.r = r;\n    }\n\n    @Override\n    public double area() {\n        return 3.14159 * r * r;\n    }\n}\n\n// 使用：用父类引用接子类对象\nShape s = new Circle(2);\ns.describe();      // 我的面积是 12.56636'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '抽象类不能 `new`，但可以有构造方法（供子类 super 调用）',
                '有抽象方法的类**必须**是抽象类；抽象类可以没有抽象方法',
                '适合"知道要做什么、但不知道具体怎么做"的模板场景'
              ]
            }
          ]
        },
        {
          id: 'java-interface',
          title: '6.4 接口',
          sections: [
            { type: 'text', content: '**接口**（interface）是一份"能力契约"：规定实现者必须提供哪些方法，但不关心怎么实现。类用 `implements` 实现接口，可以**同时实现多个**接口——弥补了 Java 单继承的限制。' },
            {
              type: 'code',
              title: '接口的定义与实现',
              lang: 'java',
              code: '// 定义接口：一组能力声明\npublic interface Flyable {\n    void fly();               // 接口方法默认是 public abstract\n}\n\npublic interface Swimmable {\n    void swim();\n}\n\n// 一个类可以实现多个接口\npublic class Duck extends Animal implements Flyable, Swimmable {\n    public Duck(String name) {\n        super(name);\n    }\n\n    @Override\n    public void fly() {\n        System.out.println(name + " 扑腾着飞");\n    }\n\n    @Override\n    public void swim() {\n        System.out.println(name + " 划水游泳");\n    }\n}\n\n// 使用：接口类型的引用也能实现多态\nFlyable f = new Duck("唐老鸭");\nf.fly();'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '接口成员变量默认 `public static final`（常量），方法默认 `public abstract`',
                'Java 8 后接口允许 `default` 默认方法和 `static` 方法，带方法体',
                '抽象类描述"是什么"（is-a），接口描述"能做什么"（can-do），设计时优先用接口'
              ]
            },
            {
              type: 'tip',
              content: '为什么接口里的方法不需要写 public abstract？接口天生就是给外部实现的，编译器自动帮你补上。'
            }
          ]
        }
      ]
    },

    /* ============ 第七章 常用 API 与集合 ============ */
    {
      id: 'java-ch7',
      title: '第七章 常用 API 与集合',
      lessons: [
        {
          id: 'java-string',
          title: '7.1 String 与 StringBuilder',
          sections: [
            { type: 'text', content: 'String 是使用频率最高的类。关键认知：**String 内容不可变**（immutable），频繁拼接会产生大量垃圾对象，此时应换 **StringBuilder**。' },
            {
              type: 'code',
              title: 'String 常用方法与 StringBuilder',
              lang: 'java',
              code: 'String s = "Hello Java";\n\n// 常用方法\nSystem.out.println(s.length());            // 10，长度\nSystem.out.println(s.charAt(0));           // H，取下标字符\nSystem.out.println(s.substring(6));        // Java，截取\nSystem.out.println(s.indexOf("Java"));     // 6，查找位置，找不到返回 -1\nSystem.out.println(s.toUpperCase());       // HELLO JAVA\nSystem.out.println(s.replace("Java", "World"));  // 替换\nSystem.out.println("  a b  ".trim());      // 去首尾空格\nSystem.out.println(s.equals("hello java"));        // false，比较内容区分大小写\nSystem.out.println(s.equalsIgnoreCase("hello java"));  // true，忽略大小写\n\n// 频繁拼接：用 StringBuilder\nStringBuilder sb = new StringBuilder();\nfor (int i = 1; i <= 5; i++) {\n    sb.append(i).append(",");              // 链式追加\n}\nString result = sb.toString();             // "1,2,3,4,5,"'
            },
            {
              type: 'list',
              title: '高频考点',
              items: [
                '比较字符串内容一律用 `equals()`，`==` 比较的是地址',
                '字符串可以存进 switch 里做分支',
                'split() 按分隔符拆成数组：`"a,b,c".split(",")` 得到 ["a","b","c"]'
              ]
            }
          ]
        },
        {
          id: 'java-collections',
          title: '7.2 集合框架：List、Set、Map',
          sections: [
            { type: 'text', content: '数组长度固定，集合长度**可变**、功能丰富，实际开发中用得远比数组多。三大主力：**List** 有序可重复、**Set** 不重复、**Map** 键值对。' },
            {
              type: 'code',
              title: '三大集合速览',
              lang: 'java',
              code: 'import java.util.*;\n\n// List：有序、可重复，下标访问\nList<String> list = new ArrayList<>();\nlist.add("苹果");\nlist.add("香蕉");\nlist.add("苹果");                  // 可以重复\nSystem.out.println(list.get(0));   // 苹果\nSystem.out.println(list.size());   // 3\n\n// 遍历 List\nfor (String fruit : list) {\n    System.out.println(fruit);\n}\n\n// Set：不允许重复\nSet<Integer> set = new HashSet<>();\nset.add(1);\nset.add(1);                        // 添加失败（重复），集合仍只有 1 个\nSystem.out.println(set.size());    // 1\n\n// Map：键值对，键不能重复\nMap<String, Integer> scores = new HashMap<>();\nscores.put("小明", 90);\nscores.put("小红", 95);\nSystem.out.println(scores.get("小明"));    // 90\nSystem.out.println(scores.containsKey("小李"));  // false\n\n// 遍历 Map\nfor (Map.Entry<String, Integer> e : scores.entrySet()) {\n    System.out.println(e.getKey() + "=" + e.getValue());\n}'
            },
            {
              type: 'list',
              title: '如何选择',
              items: [
                '要按顺序存、可能重复 → `ArrayList`',
                '要去重、不关心顺序 → `HashSet`',
                '要通过"名字"找"值" → `HashMap`',
                '面试常问：ArrayList 底层是数组，查询快增删慢；LinkedList 底层是链表，增删快查询慢'
              ]
            },
            {
              type: 'tip',
              content: '集合只能存对象不能存基本类型，所以泛型写 Integer 而不是 int（装箱机制自动转换）。'
            }
          ]
        },
        {
          id: 'java-generics',
          title: '7.3 泛型',
          sections: [
            { type: 'text', content: '**泛型**（尖括号里的类型参数）让集合在编译期就限定"只能装什么类型"，取出来也不用强制转换，把运行时错误提前到编译期发现。' },
            {
              type: 'code',
              title: '泛型集合与泛型方法',
              lang: 'java',
              code: '// 不用泛型的老写法：什么都能装，取出要强转，容易出错\nList raw = new ArrayList();\nraw.add("hello");\nraw.add(123);\nString s = (String) raw.get(0);   // 手动强转，万一取到 123 就崩\n\n// 用泛型：编译期就锁死类型\nList<String> list = new ArrayList<>();\nlist.add("hello");\n// list.add(123);                 // 编译直接报错，风险提前暴露\nString s2 = list.get(0);          // 无需强转\n\n// 自定义泛型方法：T 是类型占位符，调用时才确定\nstatic <T> T firstOrNull(List<T> list) {\n    return list.isEmpty() ? null : list.get(0);\n}\n\n// 泛型类\nclass Box<T> {\n    private T value;\n    public void set(T v) { value = v; }\n    public T get() { return value; }\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '泛型只在编译期起作用（类型擦除），运行时不存在',
                '泛型字母习惯：T(Type) E(Element) K,V(Key,Value)',
                '泛型不支持基本类型，要用包装类：`List<Integer>` 而不是 `List<int>`'
              ]
            }
          ]
        },
        {
          id: 'java-common-api',
          title: '7.4 常用工具类：Math、包装类、日期',
          sections: [
            { type: 'text', content: 'JDK 自带大量工具类，先掌握最常用的几个，遇到需求先想想"标准库是不是已经有了"。' },
            {
              type: 'code',
              title: '常用 API 示例',
              lang: 'java',
              code: 'import java.time.LocalDate;\nimport java.time.LocalDateTime;\nimport java.time.format.DateTimeFormatter;\n\n// Math：数学工具\nSystem.out.println(Math.abs(-5));      // 5，绝对值\nSystem.out.println(Math.max(3, 9));    // 9\nSystem.out.println(Math.pow(2, 10));   // 1024.0，幂\nSystem.out.println(Math.random());     // [0, 1) 随机小数\nint dice = (int) (Math.random() * 6) + 1;  // 掷骰子 1~6\n\n// 包装类：int 的对象版，提供类型转换等实用方法\nInteger n = Integer.valueOf("123");    // 字符串转 int\nSystem.out.println(Integer.parseInt("456"));  // 常用写法\nSystem.out.println(Integer.MAX_VALUE); // int 的最大值\n\n// 日期时间（Java 8+ 新 API，线程安全，推荐）\nLocalDate today = LocalDate.now();\nSystem.out.println(today.getYear());   // 2026\nLocalDate birthday = LocalDate.of(2000, 1, 1);\nSystem.out.println(today.isAfter(birthday));  // true\n\n// 格式化\nLocalDateTime now = LocalDateTime.now();\nDateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");\nSystem.out.println(now.format(fmt));'
            },
            {
              type: 'tip',
              content: '老代码里的 Date 和 SimpleDateFormat 有线程安全问题，新项目统一用 java.time 包下的新 API。'
            }
          ]
        }
      ]
    },

    /* ============ 第八章 异常与文件 ============ */
    {
      id: 'java-ch8',
      title: '第八章 异常处理与文件',
      lessons: [
        {
          id: 'java-exception',
          title: '8.1 异常处理：try-catch-finally',
          sections: [
            { type: 'text', content: '异常是程序运行期发生的错误（如除零、空指针、文件不存在）。Java 用 **try-catch-finally** 结构优雅地处理异常，保证程序不会直接崩溃。' },
            {
              type: 'code',
              title: '异常处理标准结构',
              lang: 'java',
              code: 'public class Demo {\n    public static void main(String[] args) {\n        try {\n            // 可能出错的代码\n            int[] arr = new int[3];\n            System.out.println(arr[5]);       // 这里会越界\n        } catch (ArrayIndexOutOfBoundsException e) {\n            // 捕获指定异常：给用户友好提示，而不是让程序崩掉\n            System.out.println("数组下标越界：" + e.getMessage());\n        } catch (Exception e) {\n            // 兜底：捕获其他所有异常\n            System.out.println("出错了：" + e.getMessage());\n        } finally {\n            // 无论是否发生异常都会执行，常用于释放资源\n            System.out.println("处理完毕");\n        }\n\n        System.out.println("程序继续运行，没有崩溃");\n    }\n}'
            },
            {
              type: 'list',
              title: '异常体系',
              items: [
                '顶层是 `Throwable`，下面分 `Error`（严重错误，不用管）和 `Exception`',
                '**编译时异常**（如 IOException）：必须 try-catch 或 throws 声明，强制处理',
                '**运行时异常**（RuntimeException 及其子类，如空指针、越界）：可以不处理，属于编程 bug，应当修复代码'
              ]
            }
          ]
        },
        {
          id: 'java-throw',
          title: '8.2 throw、throws 与自定义异常',
          sections: [
            { type: 'text', content: '`try-catch` 是"接住"异常，`throw` 则是"抛出"异常：当业务上遇到非法情况，主动抛出异常比返回错误码更清晰。项目里常自定义异常类表达业务错误。' },
            {
              type: 'code',
              title: '主动抛出与自定义异常',
              lang: 'java',
              code: '// 自定义异常：继承 RuntimeException（运行时异常）\npublic class AgeException extends RuntimeException {\n    public AgeException(String message) {\n        super(message);      // 把错误信息交给父类\n    }\n}\n\npublic class Person {\n    private int age;\n\n    public void setAge(int age) {\n        if (age < 0 || age > 150) {\n            // 业务不合法，直接抛异常，中断流程\n            throw new AgeException("年龄必须在 0~150 之间，收到：" + age);\n        }\n        this.age = age;\n    }\n}\n\n// 调用方选择捕获处理\ntry {\n    new Person().setAge(300);\n} catch (AgeException e) {\n    System.out.println("注册失败：" + e.getMessage());\n}'
            },
            {
              type: 'list',
              title: 'throw 与 throws 的区别',
              items: [
                '`throw`：语句，在方法**内部**抛出一个异常对象',
                '`throws`：声明，写在方法签名上，告诉调用者"本方法可能抛出这些异常，请自行处理"'
              ]
            }
          ]
        },
        {
          id: 'java-io',
          title: '8.3 文件读写',
          sections: [
            { type: 'text', content: 'Java 7 引入的 `java.nio.file.Files` 工具类让文件操作变得非常简单，配合 `Path` 接口几行代码完成读写。掌握它能实现"把数据存到硬盘"的小工具。' },
            {
              type: 'code',
              title: 'Files 工具类读写文件',
              lang: 'java',
              code: 'import java.nio.file.*;\nimport java.util.List;\n\npublic class FileDemo {\n    public static void main(String[] args) throws Exception {\n        Path path = Path.of("notes.txt");\n\n        // 写文件：一行一个元素\n        Files.write(path, List.of("第一行", "第二行", "第三行"));\n\n        // 读文件：一次读进所有行\n        List<String> lines = Files.readAllLines(path);\n        for (String line : lines) {\n            System.out.println(line);\n        }\n\n        // 判断文件是否存在\n        System.out.println(Files.exists(path));   // true\n\n        // 追加写入\n        Files.write(path, List.of("追加的一行"),\n                StandardOpenOption.APPEND);\n    }\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '文件 IO 属于编译时异常，方法签名要 `throws Exception` 或 try-catch',
                '读不存在的文件会抛 `NoSuchFileException`，先 `exists()` 判断',
                '字符编码问题：写中文时可用 `StandardCharsets.UTF_8` 参数指定编码'
              ]
            },
            {
              type: 'tip',
              content: '传统流式写法（FileReader/BufferedReader）在处理大文件时仍不可替代，入门阶段掌握 Files 工具类够用。'
            }
          ]
        }
      ]
    },

    /* ============ 第九章 进阶与实战 ============ */
    {
      id: 'java-ch9',
      title: '第九章 进阶与实战',
      lessons: [
        {
          id: 'java-thread',
          title: '9.1 多线程入门',
          sections: [
            { type: 'text', content: '线程是程序里**同时干多件事**的能力。Java 内置多线程支持：创建线程最简单的两种方式是继承 Thread 和实现 Runnable。' },
            {
              type: 'code',
              title: '两种创建线程的方式',
              lang: 'java',
              code: '// 方式一：继承 Thread，重写 run\npublic class MyThread extends Thread {\n    @Override\n    public void run() {\n        for (int i = 0; i < 3; i++) {\n            System.out.println("子线程：" + i);\n        }\n    }\n}\n\n// 方式二：实现 Runnable（推荐，不影响继承其他类）\nRunnable task = () -> System.out.println("Runnable 线程跑起来了");\n\npublic class Demo {\n    public static void main(String[] args) {\n        new MyThread().start();    // start() 才是新线程，run() 是普通调用\n        new Thread(task).start();\n        System.out.println("主线程继续干活");   // 三者交替输出\n    }\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '调用 `start()` 才会开启新线程；直接调 `run()` 只是普通方法调用',
                '多个线程同时改同一份数据会产生"线程安全问题"，可用 `synchronized` 加锁',
                '实际项目更推荐**线程池**（ExecutorService）管理线程，避免频繁创建销毁的开销'
              ]
            }
          ]
        },
        {
          id: 'java-lambda-stream',
          title: '9.2 Lambda 与 Stream',
          sections: [
            { type: 'text', content: 'Java 8 引入的 Lambda 表达式和 Stream 流是现代 Java 代码的标配：**Lambda** 让"一段代码"可以像数据一样传递，**Stream** 用链式调用完成集合的筛选、映射、汇总，代替大部分 for 循环。' },
            {
              type: 'code',
              title: 'Lambda 与 Stream 实战',
              lang: 'java',
              code: 'import java.util.*;\nimport java.util.stream.Collectors;\n\nList<String> names = List.of("小明", "小红", "张三丰", "李四", "王五");\n\n// Lambda：实现只有一个方法的接口（函数式接口）\n// 老写法：new Thread(() -> { ... })，Lambda 就是匿名方法的简写\nRunnable r = () -> System.out.println("lambda 执行");\n\n// Comparator 用 Lambda 排序\nList<Integer> nums = new ArrayList<>(List.of(5, 2, 8, 1));\nnums.sort((a, b) -> a - b);        // 升序\n\n// Stream：筛选 + 映射 + 收集，一气呵成\nList<String> result = names.stream()\n        .filter(n -> n.length() >= 2)     // 只留长度 >= 2 的\n        .map(n -> "同学：" + n)           // 每个元素加工\n        .sorted()                          // 排序\n        .collect(Collectors.toList());     // 收集成 List\nSystem.out.println(result);\n\n// 汇总操作\nint sum = List.of(1, 2, 3, 4, 5).stream()\n        .mapToInt(Integer::intValue)\n        .sum();                            // 15\nlong count = names.stream().count();       // 5'
            },
            {
              type: 'list',
              title: '常用 Stream 操作',
              items: [
                '`filter` 筛选、`map` 加工、`sorted` 排序、`distinct` 去重',
                '`collect` 收集、`forEach` 遍历、`count/sum` 汇总',
                'Stream 是"懒执行"的：只有遇到终结操作（collect 等）才真正开始计算'
              ]
            },
            {
              type: 'tip',
              content: '方法引用是 Lambda 的再简写：`names.forEach(System.out::println)` 等价于 `n -> System.out.println(n)`。'
            }
          ]
        },
        {
          id: 'java-roadmap',
          title: '9.3 学习路线与实战建议',
          sections: [
            { type: 'text', content: '学完本站内容，你已经具备了 Java 核心语法功底。Java 的世界很大，下面是推荐路线。' },
            {
              type: 'list',
              title: '下一步学什么',
              items: [
                '**巩固期**：用面向对象 + 集合 + IO 写一个控制台项目（如学生管理系统、记账本），把知识串起来',
                '**数据库**：学 SQL 基础和 JDBC，Java 操作数据库是后端的必修课',
                '**Maven**：项目管理与依赖工具，类似前端的 npm',
                '**Spring Boot**：企业开发主流框架，几行注解就能起一个 Web 服务',
                '**深入方向**：JVM 调优、并发编程、设计模式，是进阶高级工程师的必经之路'
              ]
            },
            {
              type: 'list',
              title: '实战小项目建议',
              items: [
                '控制台记账本：练习集合、文件持久化、异常处理',
                '学生成绩管理：练习面向对象设计、排序、Map 统计',
                '简单的命令行小游戏：练习流程控制与随机数'
              ]
            },
            {
              type: 'tip',
              content: '建议每学一章就回本站做一次对应范围的综合测试，查漏补缺效果最好。'
            }
          ]
        }
      ]
    }
  ]
}
