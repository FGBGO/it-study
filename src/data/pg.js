// ============================================================
// PostgreSQL 分类教学数据
// 文件结构说明（与 html.js / css.js / js.js / java.js / python.js 完全一致）：
//   id          分类唯一标识（用于路由 /category/pg）
//   name        分类显示名称
//   short       分类徽标短文字
//   color       分类主题色（首页卡片、分类页徽标）
//   description 一句话介绍
//   chapters    章节数组，每章包含 lessons，每课包含 sections
//   section.type 支持 text 文本 / list 要点列表 / code 代码示例 / tip 提示
// 注意：SQL 代码块的字符串统一使用双引号 JS 字符串书写（SQL 字符串字面量的单引号无需转义）；
//       所有代码示例字符串内部使用 \n 表示换行，字符串中不能出现真实换行
// ============================================================
export default {
  id: 'pg',
  name: 'PostgreSQL',
  short: 'PG',
  color: '#336791',
  description: '功能强大的开源关系型数据库：存数据、查数据是后端开发的必修课',
  chapters: [
    /* ============ 第一章 数据库入门 ============ */
    {
      id: 'pg-ch1',
      title: '第一章 数据库入门',
      lessons: [
        {
          id: 'pg-what-is',
          title: '1.1 什么是数据库与 PostgreSQL',
          sections: [
            { type: 'text', content: '前面学的变量、文件都在内存或文本文件里，程序一关数据就没了。**数据库**是专门用来"长期、安全、高效存取数据"的软件。关系型数据库把数据组织成一张张**表格**（行列结构），并用 **SQL** 语言进行操作。' },
            {
              type: 'list',
              title: '为什么选 PostgreSQL（简称 PG）',
              items: [
                '**完全开源免费**，没有商业授权烦恼，个人和企业都能随便用',
                '**功能最全的开源库**：支持 JSON、数组、全文检索、地理信息等高级特性',
                '**标准 SQL 实现最严格**，学会了 PG 再用 MySQL/Oracle 都容易上手',
                '**生态地位高**：国内外大厂大量使用，近年 popularity 增速第一'
              ]
            },
            {
              type: 'list',
              title: '常见关系型数据库对比',
              items: [
                'PostgreSQL：功能最全、标准严格，本站的选择',
                'MySQL：互联网公司常用，读多写少场景表现好',
                'SQLite：单文件数据库，无需安装，手机 App 内嵌常用',
                'Oracle / SQL Server：商业数据库，银行等传统大企业使用'
              ]
            },
            {
              type: 'tip',
              content: 'NoSQL（如 MongoDB、Redis）是另一大流派，适合特定场景；打牢关系型数据库基础是通用能力。'
            }
          ]
        },
        {
          id: 'pg-install',
          title: '1.2 安装与连接工具',
          sections: [
            { type: 'text', content: 'PG 采用**客户端-服务器**架构：数据库服务（postgres 进程）在后台运行，你用客户端工具连接它执行 SQL。安装一次服务，之后所有客户端都能连。' },
            {
              type: 'list',
              title: '安装步骤（Windows）',
              items: [
                '官网 postgresql.org 下载安装包（推荐 16 或 17 版本），安装时设置超级用户 postgres 的密码',
                '记住端口默认 **5432**，安装完成后 PG 服务会作为 Windows 服务自动启动',
                '命令行验证：`psql -U postgres -h localhost`，输入密码能进入即成功（可能需要把 bin 目录加入 Path）'
              ]
            },
            {
              type: 'list',
              title: '客户端工具怎么选',
              items: [
                '**psql**：官方命令行客户端，最轻量，学它还能顺便掌握运维命令',
                '**pgAdmin**：官方图形界面，可视化建表、看数据，新手友好',
                '**DBeaver**：免费的通用数据库工具，一个软件连多种数据库，强烈推荐',
                '**IDEA / VS Code 插件**：写代码时顺便查库，开发中最顺手'
              ]
            },
            {
              type: 'tip',
              content: '本站示例统一用 psql 风格书写，图形工具里粘贴 SQL 一样能跑。'
            }
          ]
        },
        {
          id: 'pg-concepts',
          title: '1.3 核心概念：库、表、行、列',
          sections: [
            { type: 'text', content: 'PG 的层级结构像"文件系统"：一台数据库服务器（Server）里建多个**数据库**（Database），每个库里有多张**表**（Table），表由**列**（Column，规定了数据类型）和**行**（Row，一条条记录）组成。' },
            {
              type: 'code',
              title: '一张表长什么样',
              lang: 'text',
              code: '表：students（学生表）\n+----+--------+-----+---------+\n| id | name   | age | city    |     <- 列（Column），有类型约束\n+----+--------+-----+---------+\n| 1  | 小明   | 18  | 深圳    |     <- 行（Row），一条记录\n| 2  | 小红   | 17  | 广州    |\n| 3  | 小刚   | 19  | 北京    |\n+----+--------+-----+---------+\n主键 id：每一行的唯一编号，绝不允许重复'
            },
            {
              type: 'list',
              title: '必知术语',
              items: [
                '**主键（Primary Key）**：唯一标识一行的列，不能重复、不能为空',
                '**字段（Field）**：列的别名，"name 字段"就是 name 列',
                '**实例（实例化）无关**：表结构是"型"，一行行数据是"值"',
                '**SQL**：Structed Query Language，和数据库对话的标准语言'
              ]
            },
            {
              type: 'tip',
              content: '设计表时先想清楚"存什么、每列是什么类型、靠哪列区分每一行"，比急着写 SQL 更重要。'
            }
          ]
        },
        {
          id: 'pg-sql-types',
          title: '1.4 SQL 分类与学习地图',
          sections: [
            { type: 'text', content: 'SQL 语句按功能分四大类，整个数据库学习就是围绕它们展开的。' },
            {
              type: 'code',
              title: 'SQL 的四大门派',
              lang: 'text',
              code: 'DQL 数据查询（用得最多，本站重点）\n  SELECT ... FROM ... WHERE ...\n\nDML 数据操纵（增删改数据）\n  INSERT / UPDATE / DELETE\n\nDDL 数据定义（创建修改表结构）\n  CREATE / ALTER / DROP\n\nDCL 数据控制（权限管理）\n  GRANT / REVOKE'
            },
            {
              type: 'list',
              title: '学习顺序建议',
              items: [
                '第一章先建库建表（DDL），往里放数据（DML）',
                '第二~五章集中火力练查询（DQL），这是日常 80% 的工作',
                '第六~八章学函数、视图索引、事务，处理真实项目需求',
                '最后一章动手连接程序语言，数据库才算真正"用起来"'
              ]
            },
            {
              type: 'tip',
              content: 'SQL 关键字大小写不敏感（SELECT 和 select 等价），但习惯上关键字大写、表名列名小写，可读性最好。'
            }
          ]
        }
      ]
    },

    /* ============ 第二章 基础查询 ============ */
    {
      id: 'pg-ch2',
      title: '第二章 基础查询',
      lessons: [
        {
          id: 'pg-select',
          title: '2.1 SELECT：从表里取数据',
          sections: [
            { type: 'text', content: 'SELECT 是 SQL 的灵魂：告诉数据库"**要哪些列、从哪张表**"。本课用一张 students 示例表贯穿学习。' },
            {
              type: 'code',
              title: 'SELECT 基本用法',
              lang: 'sql',
              code: "-- 查所有列：* 代表全部（学习用，生产别用 *）\nSELECT * FROM students;\n\n-- 只查需要的列（列顺序可以自定义）\nSELECT name, age FROM students;\n\n-- 给列起别名（AS 可省略）\nSELECT name AS 姓名, age AS 年龄 FROM students;\n\n-- 查询时做简单计算\nSELECT name, 2026 - birth_year AS age FROM students;\n\n-- 只查前几条\nSELECT * FROM students LIMIT 5;"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'FROM 后面是表名；多条语句用分号分隔',
                '别名用 AS（或空格），含中文/空格时加双引号：`AS \"姓 名\"`',
                'SELECT 后可以写字段、常量、表达式，不一定是纯列名'
              ]
            }
          ]
        },
        {
          id: 'pg-where',
          title: '2.2 WHERE：条件过滤',
          sections: [
            { type: 'text', content: 'WHERE 负责"**只留下满足条件的行**"，是查询精准度的关键。比较、逻辑、模糊三类条件必须熟练。' },
            {
              type: 'code',
              title: 'WHERE 全家福',
              lang: 'sql',
              code: "-- 比较：= <> != > < >= <=（等于是一个等号！）\nSELECT * FROM students WHERE age >= 18;\nSELECT * FROM students WHERE city = '深圳';   -- 文本要加单引号\n\n-- 逻辑组合：AND OR NOT\nSELECT * FROM students WHERE age >= 18 AND city = '深圳';\n\n-- 范围：BETWEEN 含头含尾\nSELECT * FROM students WHERE age BETWEEN 17 AND 19;\n\n-- 集合：IN 列表匹配\nSELECT * FROM students WHERE city IN ('北京', '上海');\n\n-- 空值判断：不能用 = NULL，必须用 IS NULL / IS NOT NULL\nSELECT * FROM students WHERE phone IS NULL;\n\n-- 模糊匹配：% 任意多个字符，_ 单个字符\nSELECT * FROM students WHERE name LIKE '小%';   -- 小明、小红、小刚\nSELECT * FROM students WHERE name LIKE '_明';   -- 小明、大明（两字且第二字是明）"
            },
            {
              type: 'list',
              title: '易错点',
              items: [
                '文本用**单引号**，双引号在 PG 里是给"列名/表名"用的',
                'NULL 判断必须 IS NULL，写 = NULL 永远查不到',
                'AND 优先级高于 OR，混用时加括号最保险'
              ]
            }
          ]
        },
        {
          id: 'pg-order-limit',
          title: '2.3 ORDER BY 排序与 LIMIT 分页',
          sections: [
            { type: 'text', content: '查出来的数据默认"乱序"（物理存储顺序）。ORDER BY 指定排序规则，LIMIT 控制条数——两者组合就是**分页查询**。' },
            {
              type: 'code',
              title: '排序与分页',
              lang: 'sql',
              code: "-- 按年龄从大到小（DESC 降序，ASC 升序默认可省略）\nSELECT * FROM students ORDER BY age DESC;\n\n-- 多字段排序：先按城市升序，同城再按年龄降序\nSELECT * FROM students ORDER BY city ASC, age DESC;\n\n-- 分页：第 1 页每页 10 条\nSELECT * FROM students ORDER BY id LIMIT 10 OFFSET 0;\n-- 第 3 页（每页 10 条）\nSELECT * FROM students ORDER BY id LIMIT 10 OFFSET 20;"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '**没有 ORDER BY 的分页不可靠**，必须先排序再 LIMIT',
                'OFFSET 跳过前 N 条：页码 n、每页 m，公式 `OFFSET (n-1)*m`',
                '排序字段有重复值时结果顺序不稳定，分页排序最好带上主键兜底'
              ]
            },
            {
              type: 'tip',
              content: 'OFFSET 很大时（如第 1000 页）性能会变差，大分页优化可以改用"记住上一页最后一条 id"的方式（游标分页）。'
            }
          ]
        },
        {
          id: 'pg-distinct-null',
          title: '2.4 DISTINCT 去重与 NULL 的脾气',
          sections: [
            { type: 'text', content: 'DISTINCT 用来去掉查询结果里的重复行；NULL 则是 SQL 里最特殊的值——它表示"**不知道、不存在**"，不等于任何值包括它自己。' },
            {
              type: 'code',
              title: '去重与 NULL',
              lang: 'sql',
              code: "-- 看看表里有哪些城市（自动去重）\nSELECT DISTINCT city FROM students;\n\n-- 多列去重：city 和 age 都相同才算重复\nSELECT DISTINCT city, age FROM students;\n\n-- 统计行数时注意 NULL\nSELECT COUNT(*) FROM students;          -- 所有行数\nSELECT COUNT(phone) FROM students;      -- phone 不为 NULL 的行数！\n\n-- NULL 参与运算结果还是 NULL\n-- 有人的 bonus 是 NULL，想算总收入：\nSELECT name, salary + COALESCE(bonus, 0) AS total FROM employees;"
            },
            {
              type: 'list',
              title: 'NULL 三定律',
              items: [
                'NULL = NULL 结果是 NULL（不是 true），所以必须用 IS NULL',
                'NULL 和任何值做算术运算，结果都是 NULL',
                'COUNT(列) 不统计 NULL，COUNT(*) 统计所有行——两者结果可能不同'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第三章 表设计与增删改 ============ */
    {
      id: 'pg-ch3',
      title: '第三章 表设计与增删改',
      lessons: [
        {
          id: 'pg-datatypes',
          title: '3.1 常用数据类型',
          sections: [
            { type: 'text', content: '建表前必须知道每列该用什么类型。PG 的类型系统非常丰富，日常掌握下面这些就够用了。' },
            {
              type: 'code',
              title: '常用类型速查',
              lang: 'sql',
              code: "-- 整数\nSMALLINT          -- 小整数\nINTEGER           -- 常用整数（int）\nBIGINT            -- 大整数（雪花 id、计数）\n\n-- 小数\nNUMERIC(10, 2)    -- 精确小数，总共 10 位、2 位小数，金额必用！\nREAL / DOUBLE PRECISION  -- 浮点（有精度误差，别存钱）\n\n-- 文本\nVARCHAR(50)       -- 限长文本\nTEXT              -- 不限长（PG 里 TEXT 一样高效，推荐）\n\n-- 时间\nDATE              -- 日期 2026-08-30\nTIMESTAMP         -- 日期+时间\nTIMESTAMPTZ       -- 带时区的时间戳（推荐）\n\n-- 其他\nBOOLEAN           -- true / false\nJSONB             -- 二进制 JSON，可索引可查询，PG 招牌特性\nUUID              -- 全局唯一标识"
            },
            {
              type: 'list',
              title: '选型经验',
              items: [
                '**钱必须用 NUMERIC**，浮点类型会有 0.1+0.2≠0.3 的精度问题',
                '文本长度不确定一律 TEXT，PG 对 TEXT 做了优化，不必迷信 VARCHAR(n)',
                '时间用 TIMESTAMPTZ，存储 UTC，显示自动转时区，避免时区灾难',
                '数据里天然有一层"结构不稳定"的信息（如商品扩展属性）可用 JSONB'
              ]
            }
          ]
        },
        {
          id: 'pg-create-table',
          title: '3.2 CREATE TABLE 与约束',
          sections: [
            { type: 'text', content: '约束（Constraint）是表结构的"守门员"：不符合规则的数据直接拒绝写入，从源头保证数据质量。**PRIMARY KEY、NOT NULL、UNIQUE、DEFAULT、CHECK、FOREIGN KEY** 六大约束必须掌握。' },
            {
              type: 'code',
              title: '建表实战',
              lang: 'sql',
              code: "-- 建学生表\nCREATE TABLE students (\n    id          INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,  -- 自增主键\n    name        VARCHAR(20) NOT NULL,            -- 非空\n    email       VARCHAR(100) UNIQUE,             -- 唯一\n    age         SMALLINT CHECK (age BETWEEN 0 AND 150),  -- 检查条件\n    city        VARCHAR(20) DEFAULT '未知',      -- 默认值\n    created_at  TIMESTAMPTZ DEFAULT now()        -- 默认当前时间\n);\n\n-- 删除表（慎重！数据全没）\nDROP TABLE IF EXISTS students;\n\n-- 清空表数据但保留表结构（比 DELETE 快）\nTRUNCATE TABLE students;"
            },
            {
              type: 'list',
              title: '约束小结',
              items: [
                'PRIMARY KEY 主键：唯一 + 非空，一行数据的身份证',
                'NOT NULL：必填；UNIQUE：不许重复（可空）',
                'DEFAULT：不传值时自动填充',
                'CHECK：自定义合法性校验',
                '自增推荐 `GENERATED ALWAYS AS IDENTITY`，这是 SQL 标准写法'
              ]
            }
          ]
        },
        {
          id: 'pg-insert-update-delete',
          title: '3.3 INSERT / UPDATE / DELETE',
          sections: [
            { type: 'text', content: '数据写操作三件套。共同的红线：**UPDATE 和 DELETE 一定要带 WHERE**，否则全表遭殃——这是数据库界的头号事故来源。' },
            {
              type: 'code',
              title: '增删改三件套',
              lang: 'sql',
              code: "-- 增：指定列插入（id 自增不用管）\nINSERT INTO students (name, age, city)\nVALUES ('小明', 18, '深圳');\n\n-- 一次插多行\nINSERT INTO students (name, age, city) VALUES\n    ('小红', 17, '广州'),\n    ('小刚', 19, '北京');\n\n-- 改：务必带 WHERE！\nUPDATE students SET age = 20 WHERE name = '小明';\n\n-- 多列同时改\nUPDATE students SET age = 20, city = '上海' WHERE id = 1;\n\n-- 删：务必带 WHERE！\nDELETE FROM students WHERE id = 3;\n\n-- 插入冲突处理：email 重复时就更新（UPSERT）\nINSERT INTO students (name, email) VALUES ('小明', 'xm@qq.com')\nON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name;"
            },
            {
              type: 'list',
              title: '安全守则',
              items: [
                '写 UPDATE/DELETE 前先用相同 WHERE 跑一遍 SELECT，确认影响范围',
                '返回自增 id：INSERT ... RETURNING id;（PG 特色，很方便）',
                '插入列清单要写全，避免表结构变化后语句悄悄失效'
              ]
            },
            {
              type: 'tip',
              content: '正规公司上线数据变更必须走审核 + 事务保护，个人练习也请养成"先 SELECT 后 UPDATE"的习惯。'
            }
          ]
        },
        {
          id: 'pg-alter',
          title: '3.4 ALTER：修改表结构',
          sections: [
            { type: 'text', content: '需求总在变化：加列、改类型、加约束……ALTER TABLE 负责在**不丢数据**的前提下调整表结构。' },
            {
              type: 'code',
              title: 'ALTER 常用姿势',
              lang: 'sql',
              code: "-- 加列\nALTER TABLE students ADD COLUMN phone VARCHAR(20);\n\n-- 删列\nALTER TABLE students DROP COLUMN phone;\n\n-- 改列类型\nALTER TABLE students ALTER COLUMN name TYPE VARCHAR(50);\n\n-- 改默认值\nALTER TABLE students ALTER COLUMN city SET DEFAULT '深圳';\n\n-- 加 / 删约束\nALTER TABLE students ADD CONSTRAINT chk_age CHECK (age >= 0);\nALTER TABLE students DROP CONSTRAINT chk_age;\n\n-- 列改名 / 表改名\nALTER TABLE students RENAME COLUMN name TO student_name;\nALTER TABLE students RENAME TO pupils;"
            },
            {
              type: 'list',
              title: '注意事项',
              items: [
                '大表改类型、加 UNIQUE 约束可能锁表较久，生产环境要挑低峰期',
                '收窄类型（如 VARCHAR(50) 改 VARCHAR(20)）若已有超长数据会失败',
                '结构变更也应纳入版本管理，团队里用迁移工具（Flyway/Liquibase）管理'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第四章 聚合与分组 ============ */
    {
      id: 'pg-ch4',
      title: '第四章 聚合与分组',
      lessons: [
        {
          id: 'pg-aggregate',
          title: '4.1 聚合函数：一行结果看全表',
          sections: [
            { type: 'text', content: '聚合函数把**多行**算成**一个值**：总数、总和、平均、最大、最小——报表统计的基石。' },
            {
              type: 'code',
              title: '五大聚合函数',
              lang: 'sql',
              code: "SELECT COUNT(*)      AS 人数,\n       SUM(age)      AS 年龄总和,\n       AVG(age)      AS 平均年龄,\n       MAX(age)      AS 最大年龄,\n       MIN(age)      AS 最小年龄\nFROM students;\n\n-- AVG 的坑：AVG(整数) 结果是小数但会截断精度，可以转一下\nSELECT AVG(age::NUMERIC) FROM students;\n\n-- 条件计数：只统计深圳的学生数\nSELECT COUNT(*) FROM students WHERE city = '深圳';\n\n-- 去重计数：有多少个不同的城市\nSELECT COUNT(DISTINCT city) FROM students;"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'COUNT(*) 数行数，COUNT(列) 忽略 NULL，COUNT(DISTINCT 列) 先去重',
                '聚合函数**忽略 NULL**（除了 COUNT(*)），算平均分时缺考者会被排除',
                '没有 GROUP BY 时，聚合函数把全表当一组，结果只有一行'
              ]
            }
          ]
        },
        {
          id: 'pg-group-by',
          title: '4.2 GROUP BY：分组统计',
          sections: [
            { type: 'text', content: 'GROUP BY 按**某个字段把行分成若干组**，每组各算一次聚合——"每个城市多少人、每个班平均分多少"全靠它。' },
            {
              type: 'code',
              title: '分组统计',
              lang: 'sql',
              code: "-- 每个城市的人数\nSELECT city, COUNT(*) AS cnt\nFROM students\nGROUP BY city;\n\n-- 每个城市的平均年龄，并按人数降序\nSELECT city,\n       COUNT(*)    AS cnt,\n       AVG(age)    AS avg_age\nFROM students\nGROUP BY city\nORDER BY cnt DESC;\n\n-- 多字段分组：每个城市每个年龄段的人数\nSELECT city, age, COUNT(*)\nFROM students\nGROUP BY city, age;"
            },
            {
              type: 'list',
              title: '铁律',
              items: [
                'SELECT 里出现的列，**要么在 GROUP BY 里，要么包在聚合函数里**，否则报错',
                '分组前的过滤用 WHERE，分组后的过滤用 HAVING（下一课）',
                'GROUP BY city ORDER BY cnt 混用时注意：ORDER BY 可以用聚合结果'
              ]
            }
          ]
        },
        {
          id: 'pg-having-order',
          title: '4.3 HAVING 与完整执行顺序',
          sections: [
            { type: 'text', content: 'HAVING 专门过滤"**分组之后**的结果"（如只要人数超过 3 的城市）。理解 SQL 的逻辑执行顺序，很多报错和疑惑会瞬间消失。' },
            {
              type: 'code',
              title: 'HAVING 与书写顺序',
              lang: 'sql',
              code: "-- 找出平均年龄超过 18 的城市\nSELECT city, AVG(age) AS avg_age\nFROM students\nWHERE age IS NOT NULL          -- 1. 先过滤行（分组前）\nGROUP BY city                  -- 2. 再分组\nHAVING AVG(age) > 18           -- 3. 再过滤组（分组后）\nORDER BY avg_age DESC          -- 4. 最后排序\nLIMIT 10;                      -- 5. 限量\n\n-- 完整逻辑执行顺序（背下来！）：\n-- FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT"
            },
            {
              type: 'list',
              title: 'WHERE 与 HAVING 的区别',
              items: [
                'WHERE 过滤**原始行**，不能用聚合函数',
                'HAVING 过滤**分组结果**，可以（通常也必须）用聚合函数',
                '能在 WHERE 里做的过滤就别放 HAVING，性能更好'
              ]
            },
            {
              type: 'tip',
              content: '为什么 WHERE 里不能用聚合？因为执行到 WHERE 时还没分组，聚合结果根本不存在——理解执行顺序后这些都顺理成章。'
            }
          ]
        }
      ]
    },

    /* ============ 第五章 多表查询 ============ */
    {
      id: 'pg-ch5',
      title: '第五章 多表查询',
      lessons: [
        {
          id: 'pg-fk-design',
          title: '5.1 关系设计与外键',
          sections: [
            { type: 'text', content: '真实数据总是多张表协作：学生表、班级表、成绩表。**外键**（FOREIGN KEY）声明"这一列的值必须来自另一张表"，是表与表之间的纽带，防止出现孤儿数据。' },
            {
              type: 'code',
              title: '两张关联表',
              lang: 'sql',
              code: "-- 班级表（主表）\nCREATE TABLE classes (\n    id   INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    name VARCHAR(20) NOT NULL\n);\n\n-- 学生表（从表），class_id 关联班级表\nCREATE TABLE students (\n    id       INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    name     VARCHAR(20) NOT NULL,\n    class_id INTEGER REFERENCES classes(id)   -- 外键：必须存在这个班级\n);\n\n-- 设计常见三种关系：\n-- 一对一：人 <-> 身份证（唯一外键）\n-- 一对多：班级 <-> 学生（外键放多方）\n-- 多对多：学生 <-> 课程（中间成绩表，两个外键）"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '外键保证引用完整性：班级不存在的学生插不进去',
                '多对多关系靠**中间表**（如 scores：student_id + course_id + score）实现',
                '项目里也常"逻辑外键"（不加约束只靠代码保证），取舍看团队规范'
              ]
            }
          ]
        },
        {
          id: 'pg-join',
          title: '5.2 JOIN：把表连起来查',
          sections: [
            { type: 'text', content: 'JOIN 按**连接条件**把多张表的行拼在一起。四种连接必须分清：INNER（交集）、LEFT（左表全保留）、RIGHT、FULL。LEFT JOIN 最常用。' },
            {
              type: 'code',
              title: 'JOIN 家族',
              lang: 'sql',
              code: "-- 内连接：只返回两边都匹配的行（学生 + 他的班级名）\nSELECT s.name, c.name AS class_name\nFROM students s\nJOIN classes c ON s.class_id = c.id;\n\n-- 左连接：学生全部保留，没分班的 class_name 为 NULL\nSELECT s.name, c.name AS class_name\nFROM students s\nLEFT JOIN classes c ON s.class_id = c.id;\n\n-- 经典应用：找出还没分班的学生\nSELECT s.name\nFROM students s\nLEFT JOIN classes c ON s.class_id = c.id\nWHERE c.id IS NULL;\n\n-- 三表连接：学生 + 班级 + 成绩\nSELECT s.name, c.name AS class_name, sc.score\nFROM students s\nJOIN classes c  ON s.class_id = c.id\nJOIN scores  sc ON sc.student_id = s.id;"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '表别名（FROM students s）让 SQL 简短清晰，多表查询必用',
                'ON 后写连接条件，WHERE 后写业务过滤，别混在一起',
                'LEFT JOIN 后右表字段为 NULL = "左边有、右边没有"，是排查问题的常用手法'
              ]
            }
          ]
        },
        {
          id: 'pg-subquery',
          title: '5.3 子查询',
          sections: [
            { type: 'text', content: '子查询是"**查询里套查询**"：内层先算出一个结果，外层拿它继续查。按位置分 WHERE 子查询、FROM 子查询（派生表）等。' },
            {
              type: 'code',
              title: '子查询典型用法',
              lang: 'sql',
              code: "-- 1. WHERE 里：比平均年龄大的学生\nSELECT * FROM students\nWHERE age > (SELECT AVG(age) FROM students);\n\n-- 2. 配合 IN：查有成绩记录的学生\nSELECT * FROM students\nWHERE id IN (SELECT DISTINCT student_id FROM scores);\n\n-- 3. EXISTS：同样查有成绩的学生（大表时通常更快）\nSELECT * FROM students s\nWHERE EXISTS (SELECT 1 FROM scores sc WHERE sc.student_id = s.id);\n\n-- 4. FROM 子查询：把分组结果当一张新表再查\nSELECT city, cnt\nFROM (SELECT city, COUNT(*) AS cnt FROM students GROUP BY city) t\nWHERE cnt > 2;"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '标量子查询（只返回一行一列）可以当"一个值"用',
                'IN 与 EXISTS 大多数场景等价，大表+大数据量时 EXISTS 往往更优',
                '子查询能改写成 JOIN 的尽量改写，优化器执行得更轻松'
              ]
            }
          ]
        },
        {
          id: 'pg-union',
          title: '5.4 UNION 与集合操作',
          sections: [
            { type: 'text', content: '两个查询结果的纵向合并用集合操作：**UNION**（并集去重）、**UNION ALL**（不去重，更快）、**INTERSECT**（交集）、**EXCEPT**（差集）。' },
            {
              type: 'code',
              title: '合并查询结果',
              lang: 'sql',
              code: "-- 参加篮球的 + 参加足球的（去重）\nSELECT student_id FROM basketball_team\nUNION\nSELECT student_id FROM football_team;\n\n-- 不去重：一个人两个队都报了会出现两次，但性能更好\nSELECT student_id FROM basketball_team\nUNION ALL\nSELECT student_id FROM football_team;\n\n-- 交集：两个队都参加了的\nSELECT student_id FROM basketball_team\nINTERSECT\nSELECT student_id FROM football_team;\n\n-- 差集：只在篮队的\nSELECT student_id FROM basketball_team\nEXCEPT\nSELECT student_id FROM football_team;"
            },
            {
              type: 'tip',
              content: 'UNION 各分支的列数和类型必须一致；不确定要不要去重时，先用 UNION ALL 看原始结果再决定。'
            }
          ]
        }
      ]
    },

    /* ============ 第六章 常用函数 ============ */
    {
      id: 'pg-ch6',
      title: '第六章 常用函数与表达式',
      lessons: [
        {
          id: 'pg-func-text-date',
          title: '6.1 字符串、数字与日期函数',
          sections: [
            { type: 'text', content: '函数让你在查询中直接加工数据。挑最高频的记住，其余随用随查官方文档。' },
            {
              type: 'code',
              title: '高频函数速览',
              lang: 'sql',
              code: "-- 字符串\nSELECT LENGTH('hello');            -- 5\nSELECT UPPER('abc');               -- ABC\nSELECT TRIM('  hi  ');             -- hi\nSELECT REPLACE('a-b-c', '-', '@'); -- a@b@c\nSELECT SUBSTRING('hello', 1, 3);   -- hel（下标从 1 开始！）\nSELECT 'a' || 'b';                 -- ab，|| 是拼接符\n\n-- 数字\nSELECT ROUND(3.14159, 2);          -- 3.14\nSELECT ABS(-5), CEIL(3.2), FLOOR(3.8);  -- 5 4 3\nSELECT MOD(10, 3);                 -- 1\n\n-- 日期时间\nSELECT now();                      -- 当前时间\nSELECT CURRENT_DATE;               -- 今天\nSELECT EXTRACT(YEAR FROM now());   -- 2026\nSELECT now() - INTERVAL '7 days';  -- 7 天前，interval 用法很重要\nSELECT AGE(TIMESTAMP '2000-01-01');-- 计算年龄间隔"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '字符串下标从 **1** 开始（和编程语言的 0 不同）',
                "时间加减用 INTERVAL，如 now() + INTERVAL '3 hours'",
                '日期格式化用 TO_CHAR(now(), \'YYYY-MM-DD HH24:MI\')'
              ]
            }
          ]
        },
        {
          id: 'pg-case-coalesce',
          title: '6.2 CASE 与 COALESCE：查询里的 if-else',
          sections: [
            { type: 'text', content: 'CASE 表达式是 SQL 里的分支逻辑，COALESCE 负责"取第一个非 NULL 的值"，两者组合能解决大量报表需求。' },
            {
              type: 'code',
              title: '条件逻辑',
              lang: 'sql',
              code: "-- CASE：成绩转等级\nSELECT name, score,\n       CASE\n           WHEN score >= 90 THEN '优秀'\n           WHEN score >= 60 THEN '及格'\n           ELSE '不及格'\n       END AS grade\nFROM scores;\n\n-- CASE 分组统计：一行里同时数出男女各多少人\nSELECT\n    COUNT(*) FILTER (WHERE gender = 'M') AS 男生数,   -- PG 特色 FILTER 语法\n    COUNT(*) FILTER (WHERE gender = 'F') AS 女生数\nFROM students;\n\n-- COALESCE：空值兜底\nSELECT name, COALESCE(nickname, name) AS display_name FROM users;\n\n-- NULLIF：除零保护\nSELECT total / NULLIF(cnt, 0) AS avg_val FROM stats;"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'CASE WHEN 按顺序匹配，命中即停；ELSE 缺省时返回 NULL',
                'COALESCE(a, b, c) 从左到右找第一个非 NULL',
                'NULLIF(a, b)：a=b 时返回 NULL，常用来防除零'
              ]
            }
          ]
        },
        {
          id: 'pg-cast',
          title: '6.3 类型转换',
          sections: [
            { type: 'text', content: '不同类型运算前常需转换。PG 提供三种写法，`::` 是它最有辨识度的语法糖。' },
            {
              type: 'code',
              title: '三种转换写法',
              lang: 'sql',
              code: "-- 1. :: 语法糖（PG 特色，最常用）\nSELECT '123'::INTEGER;\nSELECT age::NUMERIC / 2 FROM students;\nSELECT now()::DATE;\n\n-- 2. CAST 标准函数\nSELECT CAST('123' AS INTEGER);\n\n-- 3. 转换函数\nSELECT TO_NUMBER('1234', '9999');\nSELECT TO_CHAR(1234, '9999');\nSELECT TO_DATE('2026-08-30', 'YYYY-MM-DD');\n\n-- 隐式转换：PG 会在需要时自动转，但依赖它可读性差\nSELECT '5'::INTEGER + 1;   -- 6，显式更清晰"
            },
            {
              type: 'tip',
              content: '转换失败（如 \'abc\'::INTEGER）会直接报错；不确定的输入先用正则校验或包一层异常处理。'
            }
          ]
        }
      ]
    },

    /* ============ 第七章 视图、索引与自增 ============ */
    {
      id: 'pg-ch7',
      title: '第七章 视图、索引与自增',
      lessons: [
        {
          id: 'pg-view',
          title: '7.1 视图：保存常用的查询',
          sections: [
            { type: 'text', content: '**视图**（VIEW）是一条"起了名字、存进库里"的 SELECT。它不存数据，每次查询时实时执行，可以当作"虚拟表"复用复杂 SQL，也能用来做权限隔离。' },
            {
              type: 'code',
              title: '视图的创建与使用',
              lang: 'sql',
              code: "-- 创建视图：高三学生视图\nCREATE VIEW v_senior AS\nSELECT id, name, age, city\nFROM students\nWHERE age >= 17;\n\n-- 像查普通表一样查视图\nSELECT * FROM v_senior WHERE city = '深圳';\n\n-- 表结构变了，视图定义要同步修改\nCREATE OR REPLACE VIEW v_senior AS\nSELECT id, name, age, city, email\nFROM students\nWHERE age >= 17;\n\n-- 删除视图\nDROP VIEW IF EXISTS v_senior;"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '视图适合封装"经常用到、逻辑复杂"的查询，业务代码不用重复写 JOIN',
                '对应用只开放视图、不开放原表，是简单的权限控制手段',
                '物化视图（MATERIALIZED VIEW）会把结果真实存下来，查询飞快但需要刷新'
              ]
            }
          ]
        },
        {
          id: 'pg-index',
          title: '7.2 索引：查询提速的关键',
          sections: [
            { type: 'text', content: '没有索引，查询要**逐行扫描**全表；有了索引，就像书的目录，直接定位。代价是占磁盘空间、拖慢写入——这是数据库调优的第一课。' },
            {
              type: 'code',
              title: '索引的创建与使用',
              lang: 'sql',
              code: "-- 给 name 列建 B-tree 索引（默认类型）\nCREATE INDEX idx_students_name ON students(name);\n\n-- 唯一索引：同时兼做唯一性约束\nCREATE UNIQUE INDEX idx_students_email ON students(email);\n\n-- 多列复合索引（遵守最左前缀）\nCREATE INDEX idx_students_city_age ON students(city, age);\n\n-- 删除索引\nDROP INDEX idx_students_name;\n\n-- 分析查询有没有走索引（EXPLAIN 是调优第一步）\nEXPLAIN ANALYZE SELECT * FROM students WHERE name = '小明';"
            },
            {
              type: 'list',
              title: '用索引的智慧',
              items: [
                '主键、外键、经常出现在 WHERE / JOIN / ORDER BY 的列值得建索引',
                '写了 SELECT * 或者 WHERE 里对列做函数运算（如 UPPER(name)=...），索引可能失效',
                '并非索引越多越好：每个索引都会拖慢 INSERT/UPDATE'
              ]
            },
            {
              type: 'tip',
              content: '调优口诀：先 EXPLAIN 看计划，确认慢在哪一步，再对症建索引，而不是凭感觉乱加。'
            }
          ]
        },
        {
          id: 'pg-sequence',
          title: '7.3 序列与自增主键',
          sections: [
            { type: 'text', content: '自增主键背后是**序列**（Sequence）：一张自动发号的表。理解它能解释 id 跳号、迁移数据等常见现象。' },
            {
              type: 'code',
              title: 'IDENTITY 与序列操作',
              lang: 'sql',
              code: "-- IDENTITY 列（推荐写法）背后自动挂一个序列\nCREATE TABLE t (\n    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY\n);\n\n-- GENERATED ALWAYS：不允许手动插 id（除非用 OVERRIDING）\n-- GENERATED BY DEFAULT：给值就用手动值，不给就自增\n\n-- 手动查看 / 设置序列当前值\nSELECT pg_get_serial_sequence('t', 'id');          -- 找到序列名\nSELECT last_value FROM t_id_seq;                   -- 看当前发到几号\nSELECT setval('t_id_seq', 100);                    -- 把计数器拨到 100\n\n-- UUID：分布式场景下的全局唯一主键\nCREATE TABLE logs (\n    id UUID PRIMARY KEY DEFAULT gen_random_uuid()\n);"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '事务回滚后 id 也会"跳号"，这是正常现象不要恐慌',
                '导入数据后记得对齐序列（setval），否则新插入会主键冲突',
                '单机业务用 IDENTITY；分布式、数据合并场景考虑 UUID 或雪花算法'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第八章 事务与运维 ============ */
    {
      id: 'pg-ch8',
      title: '第八章 事务与运维',
      lessons: [
        {
          id: 'pg-transaction',
          title: '8.1 事务：要么全成，要么全不做',
          sections: [
            { type: 'text', content: '转账 = 扣钱 + 加钱，两步必须**同生共死**。事务（Transaction）把多条语句打包成原子操作：全部成功才提交（COMMIT），任何一步失败整体回滚（ROLLBACK）。数据库可靠性全靠它。' },
            {
              type: 'code',
              title: '事务三件套',
              lang: 'sql',
              code: "BEGIN;                                  -- 开启事务\n\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n\n-- 检查无误后提交\nCOMMIT;\n\n-- 中途发现问题，全部撤销（就像没发生过）\nBEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nROLLBACK;\n\n-- PG 特色：SAVEPOINT 事务里的存档点\nBEGIN;\nUPDATE students SET age = 19 WHERE id = 1;\nSAVEPOINT sp1;\nUPDATE students SET age = 999 WHERE id = 2;   -- 这步错了\nROLLBACK TO sp1;                              -- 只撤销这一步\nCOMMIT;                                       -- 第一步仍然生效"
            },
            {
              type: 'list',
              title: 'ACID 四大特性',
              items: [
                '**原子性**（Atomicity）：全部成功或全部失败',
                '**一致性**（Consistency）：数据始终满足约束规则',
                '**隔离性**（Isolation）：并发事务互不干扰（读未提交/读已提交/可重复读/串行化）',
                '**持久性**（Durability）：提交后宕机也不丢'
              ]
            }
          ]
        },
        {
          id: 'pg-users',
          title: '8.2 用户与权限管理',
          sections: [
            { type: 'text', content: '生产库不能人人用超级用户 postgres。正确的姿势是：按角色建用户，**最小权限原则**只授予必需的库表权限。' },
            {
              type: 'code',
              title: '用户与授权',
              lang: 'sql',
              code: "-- 创建用户（PG 里用户=带登录权限的角色）\nCREATE USER app_user WITH PASSWORD 'StrongPass123';\n\n-- 建只读角色并授权给用户（推荐的角色化管理）\nCREATE ROLE readonly;\nGRANT CONNECT ON DATABASE school TO readonly;\nGRANT USAGE ON SCHEMA public TO readonly;\nGRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;\nGRANT readonly TO app_user;\n\n-- 授予读写\nGRANT SELECT, INSERT, UPDATE ON students TO app_user;\n\n-- 收回权限\nREVOKE INSERT ON students FROM app_user;\n\n-- 查看当前用户\nSELECT current_user;"
            },
            {
              type: 'list',
              title: '安全清单',
              items: [
                '应用连接串里的账号永远不要用 postgres 超级用户',
                '密码强度、IP 白名单（pg_hba.conf）、SSL 三件套配齐',
                '离职/下线及时禁用账号：ALTER USER app_user WITH LOGIN; 改为 NOLOGIN'
              ]
            }
          ]
        },
        {
          id: 'pg-backup',
          title: '8.3 备份与恢复',
          sections: [
            { type: 'text', content: '数据无价，**备份是运维的底线**。PG 自带 pg_dump（逻辑备份）与 pg_basebackup（物理备份），个人和中小项目掌握 pg_dump 即可。' },
            {
              type: 'code',
              title: 'pg_dump 与恢复',
              lang: 'text',
              code: '# 备份整个数据库为 SQL 文件（命令行执行）\npg_dump -U postgres -h localhost school > school_backup.sql\n\n# 只备份某张表\npg_dump -U postgres -t students school > students_backup.sql\n\n# 压缩格式（自定义格式，恢复更灵活）\npg_dump -U postgres -Fc school > school.dump\n\n# 恢复：纯 SQL 文件用 psql 执行\npsql -U postgres -d school_new -f school_backup.sql\n\n# 恢复自定义格式\npg_restore -U postgres -d school_new school.dump'
            },
            {
              type: 'list',
              title: '备份策略建议',
              items: [
                '定期全量备份（如每天一次）+ 归档日志（WAL）可恢复到任意时刻',
                '**备份要异地存放**，并定期做恢复演练——没验证过的备份等于没有',
                '个人项目用 cron/任务计划每天自动 pg_dump 一份即可'
              ]
            }
          ]
        },
        {
          id: 'pg-psql',
          title: '8.4 psql 常用命令速查',
          sections: [
            { type: 'text', content: 'psql 里以反斜杠开头的命令不发给数据库，是客户端自己的"快捷键"。背下这几个，日常操作效率翻倍。' },
            {
              type: 'code',
              title: 'psql 元命令',
              lang: 'text',
              code: '\\l              -- 列出所有数据库\n\\c school       -- 切换/连接数据库\n\\dt             -- 列出当前库的所有表\n\\d students     -- 查看表结构（字段、类型、约束）\n\\dn             -- 列出模式\n\\du             -- 列出用户/角色\n\\x              -- 切换扩展显示（行太宽时很好用）\n\\timing         -- 显示 SQL 执行耗时\n\\i init.sql     -- 执行 SQL 文件\n\\q              -- 退出 psql'
            },
            {
              type: 'tip',
              content: '在 psql 里直接输 SELECT 会一直等分号，语句没写完按回车不会执行——看到没出结果先检查是不是漏了分号。'
            }
          ]
        }
      ]
    },

    /* ============ 第九章 实战与方向 ============ */
    {
      id: 'pg-ch9',
      title: '第九章 实战与方向',
      lessons: [
        {
          id: 'pg-connect-code',
          title: '9.1 用代码连接数据库',
          sections: [
            { type: 'text', content: 'SQL 在客户端里执行，但真正的项目要**程序语言连接数据库**。这里给出 JavaScript（Node.js）和 Python 两种最常见连法，思路完全一致：建立连接 -> 执行 SQL -> 处理结果 -> 释放连接。' },
            {
              type: 'code',
              title: 'Node.js 连接 PG（pg 包）',
              lang: 'javascript',
              code: "// npm install pg\nconst { Pool } = require('pg');\n\n// 连接池：复用连接，性能好，实际项目标配\nconst pool = new Pool({\n    host: 'localhost',\n    port: 5432,\n    user: 'app_user',\n    password: 'StrongPass123',\n    database: 'school'\n});\n\n// 参数化查询：$1 占位符，防 SQL 注入！\nasync function findStudent(name) {\n    const res = await pool.query(\n        'SELECT * FROM students WHERE name = $1',\n        [name]                       // 值走参数，绝不拼接字符串\n    );\n    return res.rows;\n}\n\nfindStudent('小明').then(rows => console.log(rows));"
            },
            {
              type: 'code',
              title: 'Python 连接 PG（psycopg）',
              lang: 'python',
              code: '# pip install \"psycopg[binary]\"\nimport psycopg\n\n# with 自动管理连接和事务\nwith psycopg.connect(\n    \"host=localhost port=5432 dbname=school user=app_user password=StrongPass123\"\n) as conn:\n    with conn.cursor() as cur:\n        # 参数化查询：%s 占位符，同样防注入\n        cur.execute(\"SELECT * FROM students WHERE age > %s\", [17])\n        for row in cur.fetchall():\n            print(row)\n\n        cur.execute(\n            \"INSERT INTO students (name, age) VALUES (%s, %s) RETURNING id\",\n            (\"小新\", 16),\n        )\n        print(\"新学生的 id:\", cur.fetchone()[0])   # RETURNING 拿自增 id'
            },
            {
              type: 'list',
              title: '必须牢记的安全铁律',
              items: [
                '用户输入**永远走参数占位**（$1 / %s），拼字符串=SQL 注入漏洞',
                '连接信息放环境变量/配置文件，**绝不能写死提交到 git**',
                '用连接池而不是每次新建连接'
              ]
            }
          ]
        },
        {
          id: 'pg-design-practice',
          title: '9.2 综合实战：学生成绩管理库表设计',
          sections: [
            { type: 'text', content: '综合运用所学：设计一个小型成绩管理系统的库表，覆盖建库建表、约束、外键、索引与常用查询。' },
            {
              type: 'code',
              title: '建库与建表',
              lang: 'sql',
              code: "-- 1. 建库\nCREATE DATABASE school;\n\n-- 2. 班级、学生、课程、成绩四张表\nCREATE TABLE classes (\n    id   INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    name VARCHAR(20) NOT NULL UNIQUE\n);\n\nCREATE TABLE students (\n    id       INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    name     VARCHAR(20) NOT NULL,\n    class_id INTEGER NOT NULL REFERENCES classes(id),\n    created_at TIMESTAMPTZ NOT NULL DEFAULT now()\n);\nCREATE INDEX idx_students_class ON students(class_id);   -- 外键常查，建索引\n\nCREATE TABLE courses (\n    id   INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    name VARCHAR(30) NOT NULL UNIQUE\n);\n\n-- 成绩表：学生与课程的多对多中间表\nCREATE TABLE scores (\n    student_id INTEGER REFERENCES students(id),\n    course_id  INTEGER REFERENCES courses(id),\n    score      NUMERIC(5,1) CHECK (score BETWEEN 0 AND 100),\n    PRIMARY KEY (student_id, course_id)      -- 联合主键：一人一课一条\n);"
            },
            {
              type: 'code',
              title: '核心业务查询',
              lang: 'sql',
              code: "-- 每个学生的平均分排名\nSELECT s.name, ROUND(AVG(sc.score), 1) AS avg_score\nFROM students s\nJOIN scores sc ON sc.student_id = s.id\nGROUP BY s.id, s.name\nORDER BY avg_score DESC;\n\n-- 每门课的不及格人数\nSELECT c.name, COUNT(*) FILTER (WHERE sc.score < 60) AS failed\nFROM scores sc\nJOIN courses c ON c.id = sc.course_id\nGROUP BY c.id, c.name;\n\n-- 某个学生缺考（没有成绩记录）的课程\nSELECT s.name, c.name AS missing_course\nFROM students s\nCROSS JOIN courses c\nLEFT JOIN scores sc ON sc.student_id = s.id AND sc.course_id = c.id\nWHERE sc.student_id IS NULL;"
            },
            {
              type: 'list',
              title: '设计复盘',
              items: [
                '主键全用 IDENTITY 自增，中间表用联合主键防重复',
                '金额/分数用 NUMERIC，外键约束兜底数据关系',
                '查询频繁的列建索引；统计需求用聚合 + FILTER 一条 SQL 搞定'
              ]
            }
          ]
        },
        {
          id: 'pg-roadmap',
          title: '9.3 学习路线与进阶方向',
          sections: [
            { type: 'text', content: '掌握本站内容后，你已能独立完成中小项目的库表设计与日常 SQL。后续按需深入。' },
            {
              type: 'list',
              title: '进阶路线',
              items: [
                '**SQL 精进**：窗口函数（ROW_NUMBER/RANK）、CTE（WITH 子句）、递归查询',
                '**性能调优**：EXPLAIN 深入、执行计划阅读、统计信息与 VACUUM 机制',
                '**高可用运维**：主从复制、流复制、Patroni 集群、监控（pg_stat_statements）',
                '**结合后端框架**：Node 的 Prisma/Drizzle、Python 的 SQLAlchemy、Java 的 MyBatis/JPA',
                '**扩展玩法**：JSONB 文档化设计、PostGIS 地理信息、全文检索'
              ]
            },
            {
              type: 'list',
              title: '练习建议',
              items: [
                '把前面 Java/Python 章节的实战项目数据改存 PG，练一遍完整链路',
                '用 EXPLAIN ANALYZE 优化一条慢查询，体会索引前后的差距',
                '每周回本站做一次 PG 范围的综合测试，保持手感'
              ]
            },
            {
              type: 'tip',
              content: '数据库能力 = 设计能力 + 查询能力 + 运维意识。三者都过一遍，面试和实战都不慌。'
            }
          ]
        }
      ]
    }
  ]
}
