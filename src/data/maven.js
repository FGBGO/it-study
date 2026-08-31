// ============================================================
// Maven 分类教学数据
// 结构：id / name / short / color / description / chapters
// chapters -> lessons -> sections（text / list / code / tip / warn / table）
// ============================================================

export default {
  id: 'maven',
  name: 'Maven 构建工具',
  short: 'Maven',
  color: '#0891b2',
  description: 'Java 世界的标准构建与依赖管理工具：一条命令完成编译、测试、打包，依赖 jar 包自动下载',
  chapters: [
    /* ============ 第一章 Maven 入门 ============ */
    {
      id: 'mvn-ch1',
      title: '第一章 Maven 入门',
      lessons: [
        {
          id: 'mvn-why',
          title: '1.1 为什么需要构建工具',
          sections: [
            { type: 'text', content: '没有构建工具的 Java 项目是什么样？想用个 MySQL 驱动，去官网下 jar；驱动又依赖另一个 jar，接着下；版本不兼容跑起来报错，逐个试……**Maven** 把这一切自动化：你只需要在 pom.xml 里**声明**"我需要什么"，它负责**下载依赖、编译代码、跑测试、打包部署**的全套流程。' },
            {
              type: 'list',
              title: 'Maven 解决的三大问题',
              items: [
                '**依赖管理**：声明式引入 jar 包，传递依赖自动带上，版本集中管理',
                '**标准化构建**：统一的生命周期命令，任何 Maven 项目都是 clean / compile / package 一套走',
                '**标准化结构**：源码放哪、配置放哪、测试放哪，全球约定一致，接手任何项目都不陌生'
              ]
            },
            {
              type: 'table',
              title: '常见构建工具对比',
              headers: ['工具', '配置文件', '特点'],
              rows: [
                ['Maven', 'pom.xml（XML）', '约定优于配置、生态最广、资料最多'],
                ['Gradle', 'build.gradle（脚本）', '更灵活、构建更快，Android 官方采用'],
                ['Ant', 'build.xml（手写流程）', '老一代，一切自己写，已基本被淘汰']
              ]
            },
            { type: 'tip', content: 'Maven 读作"梅文"（意第绪语"知识的积累者"），不是"马文"。学它还有个隐藏收益：Spring Boot 官方脚手架生成的项目默认就是 Maven 结构。' }
          ]
        },
        {
          id: 'mvn-install',
          title: '1.2 安装与配置',
          sections: [
            { type: 'text', content: 'Maven 依赖 JDK，先装好 Java 再装 Maven。国内环境必做的一步是配置**阿里云镜像**——不配置的话，中央仓库（国外）下载依赖会非常慢。' },
            {
              type: 'code',
              title: '安装与验证',
              lang: 'bash',
              code: "# 1. 前置：确认 JDK 已安装\njava -version\n\n# 2. 下载解压 Maven（maven.apache.org），配置环境变量：\n#    MAVEN_HOME = D:\\tools\\apache-maven-3.9.9\n#    Path 中追加 %MAVEN_HOME%\\bin\n\n# 3. 验证\nmvn -v"
            },
            {
              type: 'code',
              title: 'settings.xml：本地仓库与阿里云镜像',
              lang: 'xml',
              code: "<!-- 文件位置：MAVEN_HOME/conf/settings.xml（全局）\n     或 ~/.m2/settings.xml（当前用户，推荐复制一份改这个） -->\n\n<!-- 本地仓库位置：依赖 jar 的缓存目录 -->\n<localRepository>D:\\maven-repo</localRepository>\n\n<!-- 阿里云镜像：所有中央仓库请求走国内 -->\n<mirrors>\n  <mirror>\n    <id>aliyunmaven</id>\n    <mirrorOf>central</mirrorOf>\n    <name>阿里云公共仓库</name>\n    <url>https://maven.aliyun.com/repository/public</url>\n  </mirror>\n</mirrors>"
            },
            { type: 'warn', content: '用 IDEA 内置的 Maven 也没问题，但建议在 Settings 里把「Maven home」指向自己安装的版本、settings.xml 指向同一份配置，保证命令行和 IDE 行为一致。' }
          ]
        },
        {
          id: 'mvn-first-project',
          title: '1.3 第一个 Maven 项目',
          sections: [
            { type: 'text', content: '用 archetype（项目模板）可以生成一个标准骨架；实际开发中更常直接用 IDEA 的 New Project -> Maven Archetype 向导。重点认识 Maven 的**约定目录结构**——不要自作主张改名字。' },
            {
              type: 'code',
              title: '命令行生成项目',
              lang: 'bash',
              code: "mvn archetype:generate ^\n  -DgroupId=com.fgbgo.demo ^\n  -DartifactId=hello-maven ^\n  -DarchetypeArtifactId=maven-archetype-quickstart ^\n  -DinteractiveMode=false\n\ncd hello-maven\nmvn package"
            },
            {
              type: 'code',
              title: '标准目录结构',
              lang: 'text',
              code: "hello-maven/\n├── pom.xml                    # 项目说明书（核心）\n└── src/\n    ├── main/\n    │   ├── java/              # 源代码（包路径 = groupId 相关）\n    │   │   └── com/fgbgo/demo/App.java\n    │   └── resources/         # 配置文件（application.yml 等）\n    └── test/\n        ├── java/              # 测试代码（类名以 Test 结尾）\n        └── resources/         # 测试专用配置\n\ntarget/                        # 构建输出（编译类、jar 包），不需要提交 Git"
            },
            {
              type: 'list',
              title: '第一次构建会发生什么',
              items: [
                'Maven 按生命周期执行：validate -> compile -> test -> package',
                '首次运行会下载大量插件与依赖到本地仓库（配了镜像就很快）',
                '完成后在 target/ 下生成 hello-maven-1.0-SNAPSHOT.jar'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第二章 POM 与坐标 ============ */
    {
      id: 'mvn-ch2',
      title: '第二章 POM 与坐标',
      lessons: [
        {
          id: 'mvn-pom-basics',
          title: '2.1 pom.xml 全貌与坐标',
          sections: [
            { type: 'text', content: 'POM（Project Object Model，项目对象模型）是 Maven 的一切入口。每个项目在"仓库世界"里的唯一身份证叫**坐标**：groupId（组织）、artifactId（项目名）、version（版本）——三者合起来能唯一定位一个 jar 包，就像 (经度, 纬度, 海拔) 定位一个点。' },
            {
              type: 'code',
              title: '最小可用的 pom.xml',
              lang: 'xml',
              code: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0\n         http://maven.apache.org/xsd/maven-4.0.0.xsd\">\n  <modelVersion>4.0.0</modelVersion>\n\n  <!-- 坐标三要素：世界里的唯一地址 -->\n  <groupId>com.fgbgo</groupId>       <!-- 组织/公司倒写域名 -->\n  <artifactId>it-study-api</artifactId> <!-- 项目/模块名 -->\n  <version>1.0.0</version>           <!-- 版本号 -->\n  <packaging>jar</packaging>         <!-- 打包方式：jar / war / pom -->\n\n  <properties>\n    <maven.compiler.source>17</maven.compiler.source>\n    <maven.compiler.target>17</maven.compiler.target>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n  </properties>\n</project>"
            },
            {
              type: 'list',
              title: '版本号里的 SNAPSHOT 是什么',
              items: [
                '**1.0.0**：正式版（release），发布后内容永不改变',
                '**1.0.0-SNAPSHOT**：开发中的快照版，内容随时在变，Maven 会定期检查更新',
                '团队协作时，公共模块常用 SNAPSHOT 供大家实时联调；对外发布必须用正式版'
              ]
            },
            { type: 'tip', content: '去 mvnrepository.com 搜索任何第三方库，都能直接复制它的坐标三要素粘贴到 pom 里——这是日常最常用的"查坐标"姿势。' }
          ]
        },
        {
          id: 'mvn-properties',
          title: '2.2 properties 与统一版本管理',
          sections: [
            { type: 'text', content: '`<properties>` 里定义的是**变量**，用 `${变量名}` 引用。最重要的实践：把所有依赖版本号集中定义成属性，改版本只改一处，杜绝"改了 30 处漏了 2 处"的事故。' },
            {
              type: 'code',
              title: '集中管理版本',
              lang: 'xml',
              code: "<properties>\n  <mysql.version>8.4.0</mysql.version>\n  <junit.version>5.10.2</junit.version>\n  <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n</properties>\n\n<dependencies>\n  <dependency>\n    <groupId>com.mysql</groupId>\n    <artifactId>mysql-connector-j</artifactId>\n    <version>${mysql.version}</version>   <!-- 引用变量 -->\n  </dependency>\n</dependencies>"
            },
            {
              type: 'list',
              title: '常用内置属性',
              items: [
                '**${project.version}**：本项目版本',
                '**${project.build.directory}**：target 目录',
                '**${basedir}**：项目根目录（插件配置里定位文件用）',
                '**${project.build.sourceEncoding}**：源码编码，务必设为 UTF-8'
              ]
            },
            { type: 'warn', content: 'Windows 下不设置 UTF-8 编码属性，编译含中文注释的代码经常报"编码 GBK 的不可映射字符"，这是新手最高频报错之一。' }
          ]
        },
        {
          id: 'mvn-build-config',
          title: '2.3 build 构建配置',
          sections: [
            { type: 'text', content: '`<build>` 节点控制"怎么打包"：产物叫什么名字、哪些文件算资源、打包时做什么额外处理。最常见的两个需求：改 jar 包名、让 resources 里的占位符被替换（资源过滤）。' },
            {
              type: 'code',
              title: '常用 build 配置',
              lang: 'xml',
              code: "<build>\n  <!-- 打包出来的文件名，避免带上一长串版本号 -->\n  <finalName>it-study-api</finalName>\n\n  <plugins>\n    <!-- 指定编译的 Java 版本（也可用 properties 实现） -->\n    <plugin>\n      <groupId>org.apache.maven.plugins</groupId>\n      <artifactId>maven-compiler-plugin</artifactId>\n      <configuration>\n        <release>17</release>\n      </configuration>\n    </plugin>\n  </plugins>\n</build>"
            },
            { type: 'tip', content: 'Spring Boot 项目的 build 里会多一个 spring-boot-maven-plugin，它负责把依赖一起打进可执行 jar（java -jar 能跑的那种）——普通 mvn package 不会打依赖进去。' }
          ]
        }
      ]
    },

    /* ============ 第三章 依赖管理 ============ */
    {
      id: 'mvn-ch3',
      title: '第三章 依赖管理（核心）',
      lessons: [
        {
          id: 'mvn-add-dep',
          title: '3.1 添加依赖',
          sections: [
            { type: 'text', content: '依赖管理是 Maven 的灵魂。添加依赖三步：去 mvnrepository.com 搜库名 -> 选版本复制 XML -> 粘贴到 pom 的 `<dependencies>` 里，保存后 IDEA 自动下载。本地仓库里没有的包，Maven 会按"本地仓库 -> 远程仓库"的顺序查找并下载缓存。' },
            {
              type: 'code',
              title: '添加一个依赖',
              lang: 'xml',
              code: "<dependencies>\n  <!-- Jackson：JSON 处理 -->\n  <dependency>\n    <groupId>com.fasterxml.jackson.core</groupId>\n    <artifactId>jackson-databind</artifactId>\n    <version>2.17.2</version>\n  </dependency>\n\n  <!-- JUnit 5：单元测试（只在测试时需要） -->\n  <dependency>\n    <groupId>org.junit.jupiter</groupId>\n    <artifactId>junit-jupiter</artifactId>\n    <version>5.10.2</version>\n    <scope>test</scope>\n  </dependency>\n</dependencies>"
            },
            {
              type: 'list',
              title: '依赖下载到哪了',
              items: [
                '默认在 **~/.m2/repository**（settings.xml 里 localRepository 可改）',
                '同一个 jar 全电脑只存一份，所有项目共享，不会重复下载',
                'jar 在本地仓库的路径 = groupId 转路径 + artifactId + version'
              ]
            },
            { type: 'warn', content: 'jar 包坏了/下载了一半（表现为 .lastUpdated 文件）时，删掉本地仓库里对应的目录重新下载即可，不要直接改仓库里的文件。' }
          ]
        },
        {
          id: 'mvn-scope',
          title: '3.2 依赖范围 scope',
          sections: [
            { type: 'text', content: '不是所有依赖在所有阶段都需要：JUnit 只要测试时在，Servlet API 只要在编译时在（运行时由 Tomcat 提供）。`<scope>` 就是声明"这个依赖在哪些阶段参与 classpath"。' },
            {
              type: 'table',
              title: '五种 scope',
              headers: ['scope', '编译', '测试', '运行', '典型例子'],
              rows: [
                ['compile（默认）', '参与', '参与', '参与', 'Spring、Jackson'],
                ['provided', '参与', '参与', '不参与（容器提供）', 'servlet-api、lombok'],
                ['runtime', '不参与', '参与', '参与', 'JDBC 驱动'],
                ['test', '不参与', '参与', '不参与', 'JUnit、Mockito'],
                ['system', '参与', '参与', '不参与', '本地 jar（几乎不用，已过时）']
              ]
            },
            {
              type: 'code',
              title: 'provided 的经典场景',
              lang: 'xml',
              code: "<!-- 打 war 包部署到外置 Tomcat 时：\n     编译时要它（写代码用到），运行时不要它（Tomcat 自带） -->\n<dependency>\n  <groupId>jakarta.servlet</groupId>\n  <artifactId>jakarta.servlet-api</artifactId>\n  <version>6.0.0</version>\n  <scope>provided</scope>\n</dependency>"
            },
            { type: 'tip', content: '记不住就先记三个：普通依赖不写 scope（默认 compile）、测试类库写 test、外置容器提供的写 provided。' }
          ]
        },
        {
          id: 'mvn-transitive',
          title: '3.3 传递依赖与冲突调解',
          sections: [
            { type: 'text', content: '你引入 A，A 又需要 B——B 就被**传递依赖**自动带进来了，省心但也埋雷：两条路径带来不同版本的 B 时就产生**依赖冲突**。Maven 的调解规则只有两条：**路径最短优先**；路径一样长时，**先声明者优先**（pom 里写在前面的 dependency 赢）。' },
            {
              type: 'code',
              title: '查看依赖树：排查冲突的头号工具',
              lang: 'bash',
              code: "# 打印完整的依赖树（含传递依赖）\nmvn dependency:tree\n\n# 只关心冲突或被忽略的版本\nmvn dependency:tree -Dverbose\n\n# 过滤某个库相关路径\nmvn dependency:tree -Dincludes=com.google.guava:guava"
            },
            {
              type: 'code',
              title: '用 exclusions 排除不想要的传递依赖',
              lang: 'xml',
              code: "<dependency>\n  <groupId>com.example</groupId>\n  <artifactId>legacy-sdk</artifactId>\n  <version>2.0.0</version>\n  <exclusions>\n    <!-- 不要它带来的旧版日志绑定，我自己引新的 -->\n    <exclusion>\n      <groupId>ch.qos.logback</groupId>\n      <artifactId>logback-classic</artifactId>\n    </exclusion>\n  </exclusions>\n</dependency>"
            },
            { type: 'tip', content: '日志框架冲突（多个 SLF4J 绑定并存）是 Java 项目最常见的冲突，报错会提示 Multiple bindings。套路固定：dependency:tree 找出多余绑定 -> exclusions 排除。' }
          ]
        },
        {
          id: 'mvn-dep-mgmt',
          title: '3.4 dependencyManagement 与 BOM',
          sections: [
            { type: 'text', content: '`<dependencyManagement>` 声明"版本标准"但**不真正引入依赖**；真正的引入仍在 `<dependencies>` 里完成、且可以不写 version。它解决的是"多模块/多项目版本统一"的问题，是 Maven 进阶的分水岭概念。' },
            {
              type: 'code',
              title: '两段式写法',
              lang: 'xml',
              code: "<!-- 在 parent 或本 pom 中：只定版本，不引入 -->\n<dependencyManagement>\n  <dependencies>\n    <dependency>\n      <groupId>com.mysql</groupId>\n      <artifactId>mysql-connector-j</artifactId>\n      <version>8.4.0</version>\n    </dependency>\n  </dependencies>\n</dependencyManagement>\n\n<!-- 子模块里：干净地引入，不写版本 -->\n<dependencies>\n  <dependency>\n    <groupId>com.mysql</groupId>\n    <artifactId>mysql-connector-j</artifactId>\n  </dependency>\n</dependencies>"
            },
            {
              type: 'list',
              title: 'BOM（Bill of Materials）',
              items: [
                '**是什么**：只含 dependencyManagement 的一类特殊 jar，一次性锁定一族库的版本',
                '**怎么用**：import 进 dependencyManagement，之后这族库全部不用写版本号',
                '**最熟悉的例子**：Spring Boot 的 parent 就是一个巨大的 BOM——你在 dependencies 里从不写 spring-web 的版本，就是它的功劳'
              ]
            },
            { type: 'tip', content: '对比记忆：dependencies = 引入并给版本；dependencyManagement = 只定版本不引入。一个是"点菜"，一个是"定价表"。' }
          ]
        }
      ]
    },

    /* ============ 第四章 生命周期与插件 ============ */
    {
      id: 'mvn-ch4',
      title: '第四章 生命周期与插件',
      lessons: [
        {
          id: 'mvn-lifecycle',
          title: '4.1 三套生命周期',
          sections: [
            { type: 'text', content: 'Maven 把构建抽象为三套独立的**生命周期**：clean（清理）、default（核心，从校验到部署）、site（生成站点）。每套生命周期由一串有序的 **phase（阶段）** 组成，执行某个 phase 时，**前面的 phase 会依次执行**——这就是"mvn package 连编译都帮你做了"的原因。' },
            {
              type: 'table',
              title: 'default 生命周期常用阶段',
              headers: ['phase', '作用'],
              rows: [
                ['validate', '校验项目结构正确'],
                ['compile', '编译主代码到 target/classes'],
                ['test', '运行单元测试'],
                ['package', '打成 jar / war'],
                ['verify', '运行集成测试等检查'],
                ['install', '安装到本地仓库（供本机其他项目引用）'],
                ['deploy', '发布到远程仓库（团队共享）']
              ]
            },
            {
              type: 'code',
              title: '命令即阶段名',
              lang: 'bash',
              code: "mvn clean          # 清空 target\nmvn compile        # 只编译\nmvn test           # 编译 + 跑测试\nmvn package        # 编译 + 测试 + 打包\nmvn install        # 上一条 + 装进本地仓库\nmvn clean package  # 先清再打包（最常用组合）\n\n# 跳过测试打包（赶时间时）\nmvn package -DskipTests"
            },
            { type: 'tip', content: '注意：mvn install 和 install 插件是两回事——前者是生命周期阶段，后者是完成"复制 jar 到本地仓库"这个动作的插件。日常敲的命令都是阶段名。' }
          ]
        },
        {
          id: 'mvn-plugins',
          title: '4.2 插件：真正干活的人',
          sections: [
            { type: 'text', content: '生命周期只是"流程表"，每个阶段的具体工作由**插件**的 **goal（目标）** 完成：compile 阶段绑定了 maven-compiler-plugin 的 compile goal。理解这一点，你就能看懂任何插件配置——无非是"把某个 goal 绑到某个 phase 上，并传参数"。' },
            {
              type: 'code',
              title: '常见插件配置示例',
              lang: 'xml',
              code: "<build>\n  <plugins>\n    <!-- 编译插件：指定 Java 版本 -->\n    <plugin>\n      <groupId>org.apache.maven.plugins</groupId>\n      <artifactId>maven-compiler-plugin</artifactId>\n      <version>3.13.0</version>\n      <configuration>\n        <release>17</release>\n      </configuration>\n    </plugin>\n\n    <!-- 单测插件：失败不立刻中断，跑完一起报告 -->\n    <plugin>\n      <groupId>org.apache.maven.plugins</groupId>\n      <artifactId>maven-surefire-plugin</artifactId>\n      <configuration>\n        <testFailureIgnore>false</testFailureIgnore>\n      </configuration>\n    </plugin>\n  </plugins>\n</build>"
            },
            {
              type: 'list',
              title: '值得认识的高频插件',
              items: [
                '**maven-compiler-plugin**：编译与 JDK 版本',
                '**maven-surefire-plugin**：执行单元测试',
                '**spring-boot-maven-plugin**：打可执行 fat jar、本地 run',
                '**maven-shade-plugin / assembly-plugin**：打含依赖的自定义包',
                '**versions-maven-plugin**：批量检查/升级依赖版本'
              ]
            },
            { type: 'tip', content: '命令行也能直接调插件 goal：如 mvn dependency:tree、mvn versions:display-dependency-updates。冒号前的就是插件名。' }
          ]
        },
        {
          id: 'mvn-commands',
          title: '4.3 常用命令速查与辨析',
          sections: [
            { type: 'text', content: 'package、install、deploy 长得很像，级别却完全不同：package 产出 jar 在 target 里；install 额外放进**本地**仓库；deploy 是发布到**远程**仓库给整个团队用。清晰地区分它们，是多模块协作的基础。' },
            {
              type: 'table',
              title: '高频命令速查',
              headers: ['命令', '做什么', '产物在哪'],
              rows: [
                ['mvn clean', '删除 target 目录', '-'],
                ['mvn compile', '编译主代码', 'target/classes'],
                ['mvn test', '编译并执行单元测试', 'target/surefire-reports'],
                ['mvn package', '编译 + 测试 + 打包', 'target/xxx.jar'],
                ['mvn install', 'package + 装入本地仓库', '~/.m2/repository'],
                ['mvn deploy', 'install + 发布到远程仓库', 'Nexus/中央仓库'],
                ['mvn dependency:tree', '打印依赖树', '-']
              ]
            },
            {
              type: 'list',
              title: '多模块项目下的规律',
              items: [
                '在**父工程目录**执行命令，默认对所有子模块依次执行',
                '改了公共模块后其他模块报"找不到新方法"，通常是忘了先 install 公共模块',
                '-pl 模块名 可只构建指定模块：mvn install -pl common'
              ]
            },
            { type: 'warn', content: '-DskipTests 只是不跑测试，测试类仍会编译；-Dmaven.test.skip=true 连编译都跳过。赶时间用前者即可，发布前请完整跑一遍测试。' }
          ]
        }
      ]
    },

    /* ============ 第五章 仓库 ============ */
    {
      id: 'mvn-ch5',
      title: '第五章 仓库体系',
      lessons: [
        {
          id: 'mvn-repo-types',
          title: '5.1 本地仓库与远程仓库',
          sections: [
            { type: 'text', content: 'Maven 的仓库分两层：**本地仓库**（你电脑上的缓存目录）和**远程仓库**（网络上的仓库群，包括中央仓库、公司私服等）。查找顺序永远从本地开始——这也是第二次构建快得多的原因。' },
            {
              type: 'code',
              title: '依赖查找顺序',
              lang: 'text',
              code: "项目声明依赖\n    │\n    ├─ 1. 本地仓库（~/.m2 或自定义 localRepository）命中 -> 直接用\n    │\n    ├─ 2. 未命中 -> 按配置的镜像/远程仓库下载 -> 缓存到本地 -> 使用\n    │\n    └─ 都没有 -> 报错 Could not find artifact ...\n\n远程仓库的常见角色：\n  central（中央仓库，全球公共库）\n  私服 Nexus（公司内部仓库：代理公共库 + 存放内部包）\n  其他公共仓库（如 Spring milestones）"
            },
            {
              type: 'list',
              title: '本地仓库的日常维护',
              items: [
                '**占空间了**：可以整体删除，下次构建会重新下载（记得配置了镜像）',
                '**个别包坏了**：只删该包的目录（或 .lastUpdated 文件）再重新构建',
                '**换电脑**：直接拷贝整个本地仓库目录，秒级迁移依赖缓存'
              ]
            }
          ]
        },
        {
          id: 'mvn-mirror',
          title: '5.2 镜像与私服',
          sections: [
            { type: 'text', content: '**镜像**是某个仓库的"替身"：mirrorOf=central 表示"凡是要去中央仓库的请求，都改道访问我"。国内配阿里云镜像能把依赖下载从几分钟降到几秒。**私服**（Nexus/Artifactory）则是公司自建的仓库：对外代理中央仓库，对内存放内部组件。' },
            {
              type: 'code',
              title: 'settings.xml 里的镜像配置',
              lang: 'xml',
              code: "<mirrors>\n  <!-- 所有 central 请求走阿里云 -->\n  <mirror>\n    <id>aliyunmaven</id>\n    <mirrorOf>central</mirrorOf>\n    <url>https://maven.aliyun.com/repository/public</url>\n  </mirror>\n\n  <!-- 更彻底：拦截一切仓库请求（公司内网常用）\n  <mirror>\n    <id>nexus</id>\n    <mirrorOf>*</mirrorOf>\n    <url>http://nexus.company.com/repository/maven-public/</url>\n  </mirror>\n  -->\n</mirrors>"
            },
            {
              type: 'list',
              title: 'mirrorOf 的匹配写法',
              items: [
                '**central**：只镜像中央仓库',
                '**\\***：镜像所有仓库请求',
                '**external:\\***：镜像所有非本机仓库',
                '**repo1,repo2**：只镜像列出的这几个仓库'
              ]
            },
            { type: 'tip', content: 'settings.xml 放两份：Maven 安装目录下的 conf/settings.xml 是全局的；复制到 ~/.m2/settings.xml 是用户级的，后者优先。升级 Maven 版本时用户级的不会被覆盖。' }
          ]
        }
      ]
    },

    /* ============ 第六章 多模块项目 ============ */
    {
      id: 'mvn-ch6',
      title: '第六章 多模块项目',
      lessons: [
        {
          id: 'mvn-aggregate',
          title: '6.1 聚合与继承',
          sections: [
            { type: 'text', content: '项目变大后要拆成多个模块（common、dao、service、web...）。Maven 用两个机制组织它们：**聚合（modules）**——父工程一条命令构建所有子模块；**继承（parent）**——子模块共享父 pom 的依赖与配置。两者通常配合使用，但概念上是独立的。' },
            {
              type: 'code',
              title: '父 pom：聚合 + 依赖版本管理',
              lang: 'xml',
              code: "<!-- 根目录 pom.xml -->\n<project>\n  <groupId>com.fgbgo</groupId>\n  <artifactId>shop-parent</artifactId>\n  <version>1.0.0</version>\n  <packaging>pom</packaging>   <!-- 关键：聚合工程必须是 pom -->\n\n  <!-- 聚合：声明有哪些子模块 -->\n  <modules>\n    <module>shop-common</module>\n    <module>shop-dao</module>\n    <module>shop-service</module>\n    <module>shop-web</module>\n  </modules>\n\n  <!-- 继承：子模块版本都听这里的 -->\n  <dependencyManagement> ... </dependencyManagement>\n</project>"
            },
            {
              type: 'code',
              title: '子 pom：指向父亲',
              lang: 'xml',
              code: "<!-- shop-web/pom.xml -->\n<project>\n  <!-- 继承：版本、依赖管理、插件配置都从父工程来 -->\n  <parent>\n    <groupId>com.fgbgo</groupId>\n    <artifactId>shop-parent</artifactId>\n    <version>1.0.0</version>\n  </parent>\n\n  <!-- 自己的 artifactId 不写 groupId/version，默认继承父的 -->\n  <artifactId>shop-web</artifactId>\n\n  <dependencies>\n    <!-- 依赖同项目的 shop-service 模块 -->\n    <dependency>\n      <groupId>com.fgbgo</groupId>\n      <artifactId>shop-service</artifactId>\n      <version>${project.version}</version>\n    </dependency>\n  </dependencies>\n</project>"
            },
            { type: 'tip', content: '子模块之间也靠"坐标"互相依赖：web 依赖 service，service 依赖 dao，依赖关系顺着模块链自然传递——这正是分层架构在构建层的体现。' }
          ]
        },
        {
          id: 'mvn-module-split',
          title: '6.2 多模块实战与分层',
          sections: [
            { type: 'text', content: '一个典型后端项目的模块划分，和你在 Spring Boot 课程里学的三层架构是一一对应的：每一层一个模块，依赖只能从上往下（web -> service -> dao -> common），禁止反向依赖和跨层依赖，架构就稳了。' },
            {
              type: 'code',
              title: '推荐的项目结构',
              lang: 'text',
              code: "shop-parent/\n├── pom.xml                 # packaging=pom，只管聚合和版本\n├── shop-common/            # 工具类、统一返回、异常定义（谁都能依赖它）\n├── shop-dao/               # 实体 + Repository，依赖 common\n├── shop-service/           # 业务逻辑，依赖 dao\n└── shop-web/               # Controller + 启动类 + 配置，依赖 service\n\n依赖链：web -> service -> dao -> common（单向，不可逆）"
            },
            {
              type: 'list',
              title: '多模块的好处',
              items: [
                '**边界清晰**：想用 dao 里的东西？必须显式声明依赖，防止随手乱引',
                '**构建快**：改了 common 只需重受影响的模块，配合 -pl 增量构建',
                '**复用容易**：common / dao 可以被另一个项目直接当 jar 复用',
                '**职责单一**：web 模块只放接口层，想换成 RPC 暴露只动这一个模块'
              ]
            },
            { type: 'warn', content: '构建顺序 Maven 会根据依赖关系自动计算，不用手写顺序。但本地联调时，改了下游模块（如 common）要记得先 install，上游才能看到新代码。' }
          ]
        },
        {
          id: 'mvn-springboot-parent',
          title: '6.3 Spring Boot 项目里的 Maven',
          sections: [
            { type: 'text', content: '现在把视角拉回你的 Spring Boot 项目：它的 pom 本质上就是"继承 + BOM + 插件"三件套的组合应用。看懂这段 pom，Maven 的核心就全部串起来了。' },
            {
              type: 'code',
              title: 'Spring Boot 项目的标准 pom（注解版）',
              lang: 'xml',
              code: "<parent>\n  <!-- 关键 1：继承 Spring Boot 官方 parent\n       它是一个 BOM，锁定了 200+ 依赖的兼容版本\n       所以下面引 spring-boot-starter-* 全都不用写版本号 -->\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-parent</artifactId>\n  <version>3.3.4</version>\n</parent>\n\n<dependencies>\n  <!-- 关键 2：starter 起步依赖，一个顶一串 -->\n  <dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>  <!-- 无版本号 -->\n  </dependency>\n  <dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-jpa</artifactId>\n  </dependency>\n</dependencies>\n\n<build>\n  <plugins>\n    <!-- 关键 3：打包插件，产出可执行 fat jar -->\n    <plugin>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-maven-plugin</artifactId>\n    </plugin>\n  </plugins>\n</build>"
            },
            {
              type: 'list',
              title: 'starter 的本质',
              items: [
                '一个 starter = 一组精心挑选、版本互相兼容的依赖集合',
                'spring-boot-starter-web = spring-web + spring-mvc + jackson + tomcat + 日志……',
                '没有 starter 的年代，搭个 Web 项目要引十几个包还要对版本——现在一行搞定'
              ]
            },
            { type: 'tip', content: '想看 parent 到底帮你锁了哪些版本？在项目里执行 mvn dependency:tree 或打开 IDEA 的 Maven 面板，所有版本号一目了然。' }
          ]
        }
      ]
    },

    /* ============ 第七章 实战技巧 ============ */
    {
      id: 'mvn-ch7',
      title: '第七章 实战技巧',
      lessons: [
        {
          id: 'mvn-profiles',
          title: '7.1 profiles 多环境配置',
          sections: [
            { type: 'text', content: '开发、测试、生产三套环境，数据库地址各不相同，怎么打包时自动切换？`<profiles>` 给项目提供了多套可切换的配置。Spring Boot 项目更常用的做法是 yml 多环境（application-dev.yml），两者思路相通：**把差异声明出来，按需激活**。' },
            {
              type: 'code',
              title: 'Maven profiles 示例',
              lang: 'xml',
              code: "<profiles>\n  <profile>\n    <id>dev</id>\n    <activation>\n      <activeByDefault>true</activeByDefault>  <!-- 默认激活 -->\n    </activation>\n    <properties>\n      <db.url>jdbc:postgresql://localhost:5432/dev</db.url>\n    </properties>\n  </profile>\n\n  <profile>\n    <id>prod</id>\n    <properties>\n      <db.url>jdbc:postgresql://10.0.0.8:5432/prod</db.url>\n    </properties>\n  </profile>\n</profiles>\n\n<!-- 打包时切换：mvn package -Pprod -->"
            },
            { type: 'tip', content: 'Spring Boot 项目建议以 yml 多环境为主（spring.profiles.active），Maven profiles 只用来切"构建期差异"（如跳过某些资源的打包），分工更清晰。' }
          ]
        },
        {
          id: 'mvn-filtering',
          title: '7.2 资源过滤与占位符',
          sections: [
            { type: 'text', content: '开启**资源过滤（filtering）**后，Maven 打包时会把 resources 里的 `${...}` 占位符替换成真实值——比如把配置文件里的 `@project.version@` 替换成实际版本号，接口里就能展示当前版本了。' },
            {
              type: 'code',
              title: '开启过滤并在配置中占位',
              lang: 'xml',
              code: "<build>\n  <resources>\n    <resource>\n      <directory>src/main/resources</directory>\n      <filtering>true</filtering>   <!-- 开启替换 -->\n    </resource>\n  </resources>\n</build>"
            },
            {
              type: 'code',
              title: 'application.yml 里使用占位符',
              lang: 'yaml',
              code: "# 打包后 @project.version@ 会被替换成 pom 里的版本\napp:\n  name: IT 学习中心\n  version: @project.version@"
            },
            { type: 'warn', content: 'filtering 对二进制文件（图片、字体）会做文本替换导致文件损坏。开启过滤时记得把二进制类型用 <nonFilteredFileExtensions> 排除，或把二进制文件放到不过滤的目录。' }
          ]
        },
        {
          id: 'mvn-idea',
          title: '7.3 IDEA 中的 Maven 实操',
          sections: [
            { type: 'text', content: '日常开发 90% 的 Maven 操作都在 IDEA 里完成：右侧 Maven 面板可视化执行生命周期、查看依赖树，改完 pom 记得点刷新（Reload All Maven Projects）。' },
            {
              type: 'list',
              title: '高频操作清单',
              items: [
                '**Maven 面板**：双击 clean / package 等阶段即可执行，不用敲命令',
                '**刷新图标**：pom 变更后点「Reload All Maven Projects」，否则依赖不生效',
                '**依赖分析**：右键模块 -> Maven -> Show Dependencies，可视化看冲突（红线标冲突）',
                '**跳过测试**：面板上的「Toggle Skip Tests」图标，打包临时不用测试',
                '**统一设置**：Settings -> Build Tools -> Maven，把 Maven home 和 settings.xml 指向你的安装'
              ]
            },
            { type: 'warn', content: 'IDEA 报"程序包 xxx 不存在"但命令行能构建通过时，九成是 pom 改了没刷新。先点 Reload，再考虑 File -> Invalidate Caches。' }
          ]
        },
        {
          id: 'mvn-troubleshoot',
          title: '7.4 常见报错排查手册',
          sections: [
            { type: 'text', content: 'Maven 报错虽然吓人，但模式非常固定。把最高频的几类集中在这里，遇到时对号入座。' },
            {
              type: 'table',
              title: '高频报错与解法',
              headers: ['报错关键信息', '原因', '解法'],
              rows: [
                ['Could not resolve dependencies / 下载超时', '没配镜像或网络问题', '配阿里云镜像；删 .lastUpdated 后重试'],
                ['程序包 xxx 不存在', '依赖没引入 / 没刷新 / install 缺失', '检查 pom；IDEA 点 Reload；先 install 被依赖模块'],
                ['编码 GBK 的不可映射字符', '未设置 UTF-8', 'properties 里设 project.build.sourceEncoding=UTF-8'],
                ['invalid target release: 17', '编译版本高于当前 JDK', '升级 JDK 或把 release 改低'],
                ['NoSuchMethodError / NoClassDefFoundError', '运行时依赖版本冲突', 'mvn dependency:tree -Dverbose 定位，exclusions 排除'],
                ['Multiple SLF4J bindings', '多个日志绑定共存', '依赖树找出多余绑定并排除']
              ]
            },
            {
              type: 'code',
              title: '排查三板斧',
              lang: 'bash',
              code: "# 1. 看依赖到底从哪来（verbose 会标注 omitted for conflict）\nmvn dependency:tree -Dverbose\n\n# 2. 强制重新下载依赖\nmvn clean install -U\n\n# 3. 输出详细日志定位卡点\nmvn clean package -X | more"
            },
            { type: 'tip', content: '-U（--update-snapshots）强制刷新 SNAPSHOT 与失败的下载，是处理"改了依赖却不生效"的万能第一招。' }
          ]
        }
      ]
    },

    /* ============ 第八章 综合实战 ============ */
    {
      id: 'mvn-ch8',
      title: '第八章 综合实战',
      lessons: [
        {
          id: 'mvn-real-pom',
          title: '8.1 实战：完整的项目 pom',
          sections: [
            { type: 'text', content: '把所学组合起来，看一个贴近真实后端项目的 pom.xml（Web + 数据库 + 测试 + 打包配置齐全）。对照注释逐段理解，以后自己写 pom 就有底稿了。' },
            {
              type: 'code',
              title: '完整示例（可直接当模板）',
              lang: 'xml',
              code: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\">\n  <modelVersion>4.0.0</modelVersion>\n\n  <parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    <version>3.3.4</version>\n  </parent>\n\n  <groupId>com.fgbgo</groupId>\n  <artifactId>library-api</artifactId>\n  <version>1.0.0</version>\n\n  <properties>\n    <java.version>17</java.version>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n  </properties>\n\n  <dependencies>\n    <!-- Web 层 -->\n    <dependency>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    <!-- 数据层 -->\n    <dependency>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-starter-data-jpa</artifactId>\n    </dependency>\n    <dependency>\n      <groupId>org.postgresql</groupId>\n      <artifactId>postgresql</artifactId>\n      <scope>runtime</scope>   <!-- 运行期才需要驱动 -->\n    </dependency>\n    <!-- 测试 -->\n    <dependency>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-starter-test</artifactId>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n\n  <build>\n    <finalName>library-api</finalName>\n    <plugins>\n      <plugin>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-maven-plugin</artifactId>\n      </plugin>\n    </plugins>\n  </build>\n</project>"
            },
            {
              type: 'list',
              title: '这段 pom 里你学过的知识点',
              items: [
                '**parent 继承**：版本号全由 Spring Boot BOM 托管',
                '**scope 实战**：postgresql 用 runtime、test 用 test',
                '**build 配置**：finalName 改产物名，插件打可执行 jar',
                '**properties**：JDK 版本与编码统一声明'
              ]
            }
          ]
        },
        {
          id: 'mvn-wrapper',
          title: '8.2 Maven Wrapper 与命令行构建',
          sections: [
            { type: 'text', content: '新人 clone 项目报"Maven 版本不对"？**Maven Wrapper（mvnw）** 解决它：项目里自带一个小脚本 + 指定版本的 Maven 分发包，任何人 clone 后无需预装 Maven，直接 `./mvnw` 即可用**统一版本**构建。CI/CD 环境也靠它保证版本一致。' },
            {
              type: 'code',
              title: 'Wrapper 的使用',
              lang: 'bash',
              code: "# 项目初始化 Wrapper（只需做一次，会生成 mvnw / mvnw.cmd / .mvn/）\nmvn wrapper:wrapper -Dmaven=3.9.9\n\n# 之后所有协作者（含 CI）都用它构建，Windows 用 mvnw.cmd\n./mvnw clean package        # macOS / Linux\nmvnw.cmd clean package      # Windows\n\n# 这几个文件要提交进 Git：\n#   mvnw  mvnw.cmd  .mvn/wrapper/maven-wrapper.properties"
            },
            {
              type: 'list',
              title: '一套命令行构建流程（CI 常用）',
              items: [
                '**./mvnw clean verify**：清理 + 全量编译 + 测试 + 打包 + 检查',
                '**java -jar target/xxx.jar**：验证可执行包能正常启动',
                '**docker build .**：把 jar 打进镜像（Spring Boot 课程里做过）',
                '三个命令连起来，就是最简单的持续交付流水线'
              ]
            },
            { type: 'tip', content: '至此你已经打通了 Java 后端的全链路：Java 语法 -> Spring Boot 开发 -> PostgreSQL 存数据 -> Maven 管构建。下一步可以了解 Git 分支管理课程，把代码协作也标准化。' }
          ]
        }
      ]
    }
  ]
}
