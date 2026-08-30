// ============================================================
// Spring Boot 分类教学数据
// 结构：id / name / short / color / description / chapters
// chapters -> lessons -> sections（text / list / code / tip / warn / table）
// ============================================================

export default {
  id: 'springboot',
  name: 'Spring Boot',
  short: 'Spring',
  color: '#6db33f',
  description: '基于 Spring 的快速开发框架：自动装配、内嵌服务器，Java 后端开发的事实标准',
  chapters: [
    /* ============ 第一章 Spring Boot 入门 ============ */
    {
      id: 'sb-ch1',
      title: '第一章 Spring Boot 入门',
      lessons: [
        {
          id: 'sb-what-is',
          title: '1.1 Spring Boot 是什么',
          sections: [
            { type: 'text', content: '你已经学过 Java 了。用原生 Java 写一个能处理 HTTP 请求的 Web 服务，需要配置 Tomcat、web.xml、一大堆 XML……非常繁琐。**Spring** 框架用 IoC（控制反转）和 AOP（面向切面）简化了开发，但配置还是不少。**Spring Boot** 在 Spring 之上做了彻底简化：**约定优于配置 + 自动装配**，让"写个后端接口"变成几分钟的事。' },
            {
              type: 'list',
              title: 'Spring Boot 的核心特点',
              items: [
                '**自动装配（Auto Configuration）**：引入依赖后，框架自动帮你完成绝大部分配置',
                '**起步依赖（Starter）**：一个 `spring-boot-starter-web` 就打包了 Web 开发需要的全部依赖',
                '**内嵌服务器**：自带 Tomcat，不用单独安装，`java -jar` 一条命令就能跑',
                '**生产级监控**：Actuator 提供健康检查、指标监控等端点',
                '**零 XML**：基本告别 XML 配置，注解 + 少量 yml 即可'
              ]
            },
            {
              type: 'table',
              title: 'Spring 与 Spring Boot 的关系',
              headers: ['对比项', 'Spring', 'Spring Boot'],
              rows: [
                ['定位', '基础框架（IoC / AOP）', '快速开发脚手架'],
                ['配置', 'XML / Java 配置较多', '自动装配，约定优先'],
                ['服务器', '需外置 Tomcat 部署 war', '内嵌 Tomcat，直接跑 jar'],
                ['依赖管理', '自己一个个引', 'starter 起步依赖一站式搞定']
              ]
            },
            { type: 'tip', content: '可以把它理解为：Spring Boot = Spring + 一堆"开箱即用"的默认配置。企业里的 Java 后端项目，如今绝大多数都是 Spring Boot 项目。' }
          ]
        },
        {
          id: 'sb-first-app',
          title: '1.2 创建第一个项目',
          sections: [
            { type: 'text', content: '官方提供了 **Spring Initializr**（start.spring.io）在线生成项目骨架：选好 JDK 版本和依赖，下载解压，用 IDEA 打开就能跑。本站假设你已安装 **JDK 17+** 和 **Maven**（IDEA 自带 Maven 也可）。' },
            {
              type: 'code',
              title: '生成的核心文件 pom.xml（节选）',
              lang: 'xml',
              code: '<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0">\n    <modelVersion>4.0.0</modelVersion>\n\n    <!-- 所有 Spring Boot 项目都继承这个父工程，统一管理依赖版本 -->\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.3.4</version>\n    </parent>\n\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n\n    <dependencies>\n        <!-- Web 起步依赖：内含 Spring MVC + 内嵌 Tomcat + JSON 处理 -->\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n    </dependencies>\n</project>'
            },
            {
              type: 'code',
              title: '启动类：整个应用的入口',
              lang: 'java',
              code: 'package com.example.demo;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n// @SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan\n// 它标记这是启动类，并开启自动装配和组件扫描\n@SpringBootApplication\npublic class DemoApplication {\n    public static void main(String[] args) {\n        // 启动内嵌 Tomcat 并初始化 Spring 容器\n        SpringApplication.run(DemoApplication.class, args);\n    }\n}'
            },
            {
              type: 'code',
              title: '写第一个接口并启动',
              lang: 'java',
              code: 'package com.example.demo;\n\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class HelloController {\n\n    // 浏览器访问 http://localhost:8080/hello 即可看到返回内容\n    @GetMapping("/hello")\n    public String hello() {\n        return "Hello, Spring Boot!";\n    }\n}'
            },
            { type: 'warn', content: 'Spring Boot 3.x 要求 **JDK 17 及以上**。如果用的是 JDK 8，请选择 Spring Boot 2.7.x 或先升级 JDK。默认端口是 **8080**，被占用时启动会报错。' }
          ]
        },
        {
          id: 'sb-structure',
          title: '1.3 项目结构解析',
          sections: [
            { type: 'text', content: 'Spring Boot 项目有固定的目录约定，**按约定放代码，框架才能自动找到它们**。' },
            {
              type: 'code',
              title: '标准目录结构',
              lang: 'text',
              code: 'demo\n├── src/main/java/com/example/demo\n│   ├── DemoApplication.java      # 启动类（必须放在最外层包）\n│   ├── controller/               # 控制层：处理 HTTP 请求\n│   ├── service/                  # 业务层：核心业务逻辑\n│   ├── repository/               # 数据层：数据库读写\n│   └── entity/                   # 实体类：对应数据库表\n├── src/main/resources\n│   ├── application.yml           # 核心配置文件\n│   ├── static/                   # 静态资源（css/js/图片）\n│   └── templates/                # 模板页面（前后端分离时基本不用）\n├── src/test/java                 # 测试代码\n└── pom.xml                       # Maven 依赖配置'
            },
            {
              type: 'list',
              title: '两个关键约定',
              items: [
                '**启动类放在根包**：`@SpringBootApplication` 自带组件扫描，只扫描启动类**所在包及子包**。放错层级，你的 Controller 就不会被识别',
                '**resources 是配置和静态资源家**：application.yml 名字固定，框架自动加载'
              ]
            },
            { type: 'tip', content: 'application.yml 与 application.properties 二选一即可，yml 层级清晰更推荐。两者同时存在时 properties 优先。' }
          ]
        }
      ]
    },

    /* ============ 第二章 Web 开发基础 ============ */
    {
      id: 'sb-ch2',
      title: '第二章 Web 开发基础',
      lessons: [
        {
          id: 'sb-restcontroller',
          title: '2.1 @RestController 与 GET 接口',
          sections: [
            { type: 'text', content: '**@RestController** 是写接口最常用的注解，它等于 **@Controller + @ResponseBody**：类里每个方法的返回值都会自动转成 JSON 写回响应体，而不是跳转页面——这正是前后端分离项目需要的。' },
            {
              type: 'code',
              title: '几种常用的 GET 接口写法',
              lang: 'java',
              code: '@RestController\npublic class UserController {\n\n    // 最简单：返回字符串\n    @GetMapping("/ping")\n    public String ping() {\n        return "pong";\n    }\n\n    // 返回对象：自动转成 JSON，如 {"id":1,"name":"张三"}\n    @GetMapping("/user")\n    public User user() {\n        User u = new User();\n        u.setId(1L);\n        u.setName("张三");\n        return u;\n    }\n\n    // @RequestMapping 也能写，但 method 要单独指定；@GetMapping 更简洁\n    // @PostMapping / @PutMapping / @DeleteMapping 分别对应 POST / PUT / DELETE\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`@RestController` 类中方法返回值 → 自动 JSON 序列化（底层用 Jackson）',
                '`@GetMapping("/xx")` 把 URL 映射到方法，等价于 `@RequestMapping(value="/xx", method=GET)`',
                '方法名随意，URL 才是对外的标识'
              ]
            }
          ]
        },
        {
          id: 'sb-params',
          title: '2.2 接收参数：@RequestParam 与 @PathVariable',
          sections: [
            { type: 'text', content: '客户端传参主要有两种位置：**URL 路径里**（如 `/user/1`）和**查询串里**（如 `/search?keyword=java`）。Spring Boot 提供了对应注解一一接收。' },
            {
              type: 'code',
              title: '两种取参方式',
              lang: 'java',
              code: '@RestController\npublic class SearchController {\n\n    // 1. @PathVariable：取路径里的值，URL 如 /user/42\n    @GetMapping("/user/{id}")\n    public String getUser(@PathVariable Long id) {\n        return "查询用户 id=" + id;\n    }\n\n    // 2. @RequestParam：取问号后的查询参数，URL 如 /search?keyword=java&page=2\n    @GetMapping("/search")\n    public String search(@RequestParam String keyword,\n                         @RequestParam(defaultValue = "1") Integer page) {\n        return "关键词=" + keyword + "，页码=" + page;\n    }\n}'
            },
            {
              type: 'table',
              title: '常用取参注解对照',
              headers: ['注解', '取什么', '示例 URL'],
              rows: [
                ['@PathVariable', '路径占位符 {id}', '/user/42'],
                ['@RequestParam', '查询串参数 ?k=v', '/search?keyword=java'],
                ['@RequestBody', '请求体 JSON（POST/PUT）', '见下一课'],
                ['@RequestHeader', '请求头', 'Authorization 等']
              ]
            },
            { type: 'warn', content: '必填的 `@RequestParam` 缺失时会直接 400 报错。可选参数用 `required = false` 并给默认值，避免接口太脆弱。' }
          ]
        },
        {
          id: 'sb-requestbody',
          title: '2.3 请求体与 DTO：@RequestBody',
          sections: [
            { type: 'text', content: 'POST/PUT 请求的数据通常放在**请求体**里，前端传 JSON，后端用 **@RequestBody** 把它自动转成 Java 对象。这个对象一般叫 **DTO**（Data Transfer Object），专门用来承载数据传输。' },
            {
              type: 'code',
              title: 'DTO 类 + POST 接口',
              lang: 'java',
              code: '// DTO：字段名要和前端 JSON 的 key 一致，Jackson 才能自动对上\npublic class UserCreateDTO {\n    private String name;\n    private Integer age;\n\n    // 必须有 getter/setter（或用 Lombok 的 @Data 自动生成）\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n    public Integer getAge() { return age; }\n    public void setAge(Integer age) { this.age = age; }\n}',
              },
            {
              type: 'code',
              title: '接收 JSON 请求体',
              lang: 'java',
              code: '@RestController\npublic class UserController {\n\n    // 前端 POST /users，请求体：{"name":"张三","age":20}\n    @PostMapping("/users")\n    public String create(@RequestBody UserCreateDTO dto) {\n        return "创建用户：" + dto.getName() + "，年龄 " + dto.getAge();\n    }\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '`@RequestBody` 只能有一个（一个请求只有一个体），而 `@RequestParam` 可以多个',
                '字段对不上时 Jackson 默认忽略未知字段；类型对不上会抛 400',
                '实际项目用 **Lombok** 的 `@Data` 注解替代手写 getter/setter，代码量大幅减少'
              ]
            }
          ]
        },
        {
          id: 'sb-restful',
          title: '2.4 RESTful 风格与增删改查接口',
          sections: [
            { type: 'text', content: '**RESTful** 是一套接口设计风格：用 **URL 表示资源**、用 **HTTP 方法表示操作**。同一资源 `/users`，方法不同就是不同操作，URL 简洁统一。' },
            {
              type: 'table',
              title: '用户模块 RESTful 设计',
              headers: ['操作', '方法 + URL', '说明'],
              rows: [
                ['查询列表', 'GET /users', '返回用户数组'],
                ['查询单个', 'GET /users/{id}', '返回一个用户'],
                ['新增', 'POST /users', '请求体带新用户数据'],
                ['修改', 'PUT /users/{id}', '请求体带修改内容'],
                ['删除', 'DELETE /users/{id}', '删除指定用户']
              ]
            },
            {
              type: 'code',
              title: '完整的增删改查 Controller',
              lang: 'java',
              code: '@RestController\n@RequestMapping("/users")  // 类级别前缀，下面所有接口都带 /users\npublic class UserController {\n\n    @GetMapping\n    public List<User> list() { return userService.findAll(); }\n\n    @GetMapping("/{id}")\n    public User detail(@PathVariable Long id) { return userService.findById(id); }\n\n    @PostMapping\n    public User create(@RequestBody UserCreateDTO dto) { return userService.create(dto); }\n\n    @PutMapping("/{id}")\n    public User update(@PathVariable Long id, @RequestBody UserUpdateDTO dto) {\n        return userService.update(id, dto);\n    }\n\n    @DeleteMapping("/{id}")\n    public void delete(@PathVariable Long id) { userService.delete(id); }\n}'
            },
            { type: 'tip', content: '返回"单个对象"和"列表"用不同类型表达，删除类操作可以返回 void（状态码 200 即可）。前端通过状态码 + 响应体综合判断结果。' }
          ]
        },
        {
          id: 'sb-exception',
          title: '2.5 全局异常处理',
          sections: [
            { type: 'text', content: '接口一旦抛异常，默认会给前端返回一大页错误堆栈，既不友好也不安全。**@RestControllerAdvice** 可以统一捕获所有 Controller 抛出的异常，返回统一格式的 JSON。' },
            {
              type: 'code',
              title: '自定义业务异常 + 全局处理器',
              lang: 'java',
              code: '// 业务异常：携带希望返回给前端的提示信息\npublic class BusinessException extends RuntimeException {\n    public BusinessException(String message) { super(message); }\n}',
            },
            {
              type: 'code',
              title: '统一异常处理器',
              lang: 'java',
              code: '@RestControllerAdvice\npublic class GlobalExceptionHandler {\n\n    // 捕获业务异常：返回 200 或自定义状态码，body 里带提示\n    @ExceptionHandler(BusinessException.class)\n    public Map<String, Object> handleBusiness(BusinessException e) {\n        Map<String, Object> result = new HashMap<>();\n        result.put("code", 400);\n        result.put("message", e.getMessage());\n        return result;\n    }\n\n    // 兜底：捕获所有未知异常，避免把堆栈暴露给前端\n    @ExceptionHandler(Exception.class)\n    public Map<String, Object> handleOther(Exception e) {\n        Map<String, Object> result = new HashMap<>();\n        result.put("code", 500);\n        result.put("message", "服务器开小差了，请稍后再试");\n        return result;\n    }\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '业务代码里直接 `throw new BusinessException("余额不足")`，不用层层 try-catch',
                '参数校验异常（MethodArgumentNotValidException）通常也在这里单独处理',
                '给用户看的 message 要友好；给开发排查的细节记到日志里'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第三章 配置与 IoC ============ */
    {
      id: 'sb-ch3',
      title: '第三章 配置与 IoC 容器',
      lessons: [
        {
          id: 'sb-config',
          title: '3.1 application.yml 与配置读取',
          sections: [
            { type: 'text', content: '端口、数据库地址、自定义参数都写在 **application.yml** 里。读取配置有两种方式：零散配置用 **@Value**，成组配置用 **@ConfigurationProperties**。' },
            {
              type: 'code',
              title: 'application.yml 示例',
              lang: 'yaml',
              code: 'server:\n  port: 8080          # 服务端口\n\napp:\n  name: IT学习中心     # 自定义配置（框架不认识，但可以读）\n  upload-dir: /data/upload'
            },
            {
              type: 'code',
              title: '两种读取方式',
              lang: 'java',
              code: '// 方式一：@Value 适合单个零散配置\n@RestController\npublic class DemoController {\n    @Value("${app.name}")\n    private String appName;\n}\n\n// 方式二：@ConfigurationProperties 适合一组相关配置\n// 前缀 app 会自动匹配 app.name、app.upload-dir\n@Component\n@ConfigurationProperties(prefix = "app")\npublic class AppProperties {\n    private String name;        // <- app.name\n    private String uploadDir;   // <- app.upload-dir（自动驼峰映射）\n    // getter/setter 省略（用 Lombok @Data 即可）\n}'
            },
            { type: 'tip', content: 'yml 里 `key: value` 冒号后**必须有空格**；缩进用空格不能用 Tab。这是新手最常见的两个报错来源。' }
          ]
        },
        {
          id: 'sb-profiles',
          title: '3.2 多环境配置',
          sections: [
            { type: 'text', content: '开发、测试、生产的数据库通常不一样。Spring Boot 用 **Profile** 解决：每个环境一个配置文件，启动时激活对应环境。' },
            {
              type: 'code',
              title: '多环境文件组织',
              lang: 'text',
              code: 'src/main/resources\n├── application.yml            # 公共配置 + 激活哪个环境\n├── application-dev.yml        # 开发环境\n├── application-test.yml       # 测试环境\n└── application-prod.yml       # 生产环境'
            },
            {
              type: 'code',
              title: '公共配置里指定激活环境',
              lang: 'yaml',
              code: '# application.yml\nspring:\n  profiles:\n    active: dev    # 默认激活开发环境\n\n# 启动命令也可以临时覆盖：\n# java -jar demo.jar --spring.profiles.active=prod'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '不同环境的文件只写**有差异的配置**（如数据库地址），公共配置留在主文件',
                '生产环境的密码等敏感信息不要提交到 Git，可用环境变量 `${DB_PASSWORD}` 注入',
                '打包时也可以通过启动参数切换环境，一个 jar 走天下'
              ]
            }
          ]
        },
        {
          id: 'sb-ioc',
          title: '3.3 IoC 容器与 Bean',
          sections: [
            { type: 'text', content: '**IoC（控制反转）**是 Spring 的核心思想：对象的创建和管理不由你自己 `new`，而是交给 Spring 的**容器**统一负责。容器里管理的对象就叫 **Bean**。你在 1.2 里写的 `@RestController` 类，其实就已经是一个 Bean 了。' },
            {
              type: 'code',
              title: '把类交给容器管理：常用注解',
              lang: 'java',
              code: '@Component            // 通用组件（不属于下面任何一层的工具类用它）\npublic class SmsUtil { }\n\n@Service              // 业务层组件（语义化标注，功能同 @Component）\npublic class UserService { }\n\n@Repository           // 数据层组件\npublic class UserRepository { }\n\n@RestController       // 控制层组件\npublic class UserController { }'
            },
            {
              type: 'code',
              title: '配置类：手动注册第三方库的 Bean',
              lang: 'java',
              code: '@Configuration  // 声明这是配置类，启动时会被加载\npublic class AppConfig {\n\n    // 第三方类你改不了源码、加不了注解，就在配置方法里手动 new 后交给容器\n    @Bean\n    public RestTemplate restTemplate() {\n        return new RestTemplate();  // 之后别处注入 RestTemplate 即可使用\n    }\n}'
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '容器默认是**单例**：全程序共用同一个 Bean 实例（可用 @Scope 改原型）',
                '启动时容器创建所有 Bean，所以**启动慢、改代码要重启**是正常的',
                '同一接口有多个实现类时，用 @Primary 标默认，或 @Qualifier("名字") 指定'
              ]
            }
          ]
        },
        {
          id: 'sb-di',
          title: '3.4 依赖注入',
          sections: [
            { type: 'text', content: '容器里有了 Bean，怎么在别的类里用？答案是**依赖注入（DI）**：不要自己 new，让容器把它"塞"进来。这样类的依赖是可替换、可测试的。' },
            {
              type: 'code',
              title: '三种注入方式（推荐第一种）',
              lang: 'java',
              code: '@Service\npublic class UserService {\n\n    private final UserRepository userRepository;\n\n    // 1. 构造器注入（推荐）：字段可加 final，依赖一目了然，且便于单元测试\n    //    如果类里只有一个构造器，@Autowired 可以省略\n    public UserService(UserRepository userRepository) {\n        this.userRepository = userRepository;\n    }\n}\n\n// 2. 字段注入：写法最短，但不利于测试，官方不推荐\n@Service\nclass OrderService {\n    @Autowired\n    private UserService userService;\n}\n\n// 3. Setter 注入：用于可选依赖，少见\n@Service\nclass ReportService {\n    private SmsUtil smsUtil;\n    @Autowired\n    public void setSmsUtil(SmsUtil smsUtil) { this.smsUtil = smsUtil; }\n}'
            },
            {
              type: 'table',
              title: '三种方式对比',
              headers: ['方式', '优点', '缺点'],
              rows: [
                ['构造器注入', 'final 安全、强制依赖明确、易测试', '参数多时构造器略长'],
                ['字段注入', '代码最少', '无法 final、隐藏依赖、难单测'],
                ['Setter 注入', '可选依赖', '依赖可能被中途改掉']
              ]
            },
            { type: 'warn', content: 'IDEA 会在字段注入的 @Autowired 上给黄色警告，就是在提醒你用构造器注入。Spring 官方文档也推荐构造器注入。' }
          ]
        }
      ]
    },

    /* ============ 第四章 数据库操作 ============ */
    {
      id: 'sb-ch4',
      title: '第四章 数据库操作',
      lessons: [
        {
          id: 'sb-datasource',
          title: '4.1 连接数据库',
          sections: [
            { type: 'text', content: '以 PostgreSQL 为例（你已学过），只需引入驱动依赖 + 写好连接配置，Spring Boot 自动装配好数据源，无需手写连接池代码。' },
            {
              type: 'code',
              title: 'pom.xml 引入依赖',
              lang: 'xml',
              code: '<!-- PostgreSQL 驱动（版本由 parent 统一管理） -->\n<dependency>\n    <groupId>org.postgresql</groupId>\n    <artifactId>postgresql</artifactId>\n    <scope>runtime</scope>\n</dependency>',
            },
            {
              type: 'code',
              title: 'application.yml 数据源配置',
              lang: 'yaml',
              code: 'spring:\n  datasource:\n    url: jdbc:postgresql://localhost:5432/itstudy\n    username: postgres\n    password: 你的密码\n    driver-class-name: org.postgresql.Driver'
            },
            {
              type: 'code',
              title: '最直接的操作方式：JdbcTemplate',
              lang: 'java',
              code: '@RestController\npublic class JdbcController {\n\n    private final JdbcTemplate jdbcTemplate;\n\n    public JdbcController(JdbcTemplate jdbcTemplate) {\n        this.jdbcTemplate = jdbcTemplate;\n    }\n\n    @GetMapping("/count")\n    public Long count() {\n        // queryForObject：查单个值\n        return jdbcTemplate.queryForObject("SELECT COUNT(*) FROM users", Long.class);\n    }\n}',
            },
            { type: 'warn', content: 'JdbcTemplate 适合简单场景和临时脚本，字段多时手写映射很痛苦。正式项目推荐下面的 Spring Data JPA 或 MyBatis。' }
          ]
        },
        {
          id: 'sb-jpa',
          title: '4.2 Spring Data JPA 入门',
          sections: [
            { type: 'text', content: '**JPA** 是 Java 的 ORM 规范：**类对应表、字段对应列、对象对应行**，不用手写 SQL 就能完成常规增删改查。Spring Data JPA 是它的最佳实现，核心是**接口即实现**——你只声明接口，框架自动生成实现。' },
            {
              type: 'code',
              title: '实体类：映射 users 表',
              lang: 'java',
              code: 'import jakarta.persistence.*;\n\n@Entity                       // 声明这是 JPA 实体\n@Table(name = "users")        // 对应的表名\npublic class User {\n\n    @Id                       // 主键\n    @GeneratedValue(strategy = GenerationType.IDENTITY)  // 自增\n    private Long id;\n\n    private String name;      // 默认映射到 name 列\n\n    @Column(name = "created_at")\n    private LocalDateTime createdAt;  // 列名不同用 @Column 指定\n\n    // JPA 要求必须有无参构造；getter/setter 省略\n    public User() { }\n}',
            },
            {
              type: 'code',
              title: 'Repository 接口：一行代码获得 CRUD',
              lang: 'java',
              code: 'import org.springframework.data.jpa.repository.JpaRepository;\n\n// 继承 JpaRepository<实体, 主键类型>，自动拥有 save/findById/findAll/delete 等方法\npublic interface UserRepository extends JpaRepository<User, Long> {\n    // 这一行就够了！不写任何实现，框架在运行时自动生成\n}',
            },
            {
              type: 'code',
              title: '在 Service 里直接使用',
              lang: 'java',
              code: '@Service\npublic class UserService {\n\n    private final UserRepository userRepository;\n\n    public UserService(UserRepository userRepository) {\n        this.userRepository = userRepository;\n    }\n\n    public User create(String name) {\n        User user = new User();\n        user.setName(name);\n        // save：有 id 就更新，没 id 就插入，返回带 id 的实体\n        return userRepository.save(user);\n    }\n\n    public List<User> all() { return userRepository.findAll(); }\n\n    public User one(Long id) {\n        // orElseThrow：查不到就抛异常（配合全局异常处理）\n        return userRepository.findById(id)\n            .orElseThrow(() -> new BusinessException("用户不存在"));\n    }\n}',
            },
            { type: 'tip', content: '记得在配置里加 `spring.jpa.hibernate.ddl-auto: update`，JPA 会按实体自动建表/改表。生产环境建议用 `validate` + 手写 SQL 脚本管理表结构。' }
          ]
        },
        {
          id: 'sb-jpa-query',
          title: '4.3 查询方法与 @Query',
          sections: [
            { type: 'text', content: 'Spring Data JPA 最惊艳的能力是**方法名即查询**：按规则命名方法，框架自动解析生成 SQL，一个实现类都不用写。复杂查询再用 @Query 兜底。' },
            {
              type: 'code',
              title: '方法名推导查询',
              lang: 'java',
              code: 'public interface UserRepository extends JpaRepository<User, Long> {\n\n    // 自动生成：SELECT * FROM users WHERE name = ?\n    List<User> findByName(String name);\n\n    // 自动生成：SELECT * FROM users WHERE name LIKE %?%\n    List<User> findByNameContaining(String keyword);\n\n    // 自动生成：SELECT * FROM users WHERE age >= ? ORDER BY id DESC\n    List<User> findByAgeGreaterThanOrderByIdDesc(Integer age);\n\n    // 自动生成：SELECT COUNT(*) ... WHERE age BETWEEN ? AND ?\n    Long countByAgeBetween(Integer min, Integer max);\n}',
            },
            {
              type: 'code',
              title: '复杂查询：@Query 自定义 JPQL / SQL',
              lang: 'java',
              code: 'public interface UserRepository extends JpaRepository<User, Long> {\n\n    // JPQL：面向实体和字段，:name 是命名参数\n    @Query("SELECT u FROM User u WHERE u.age > :age")\n    List<User> findOlderThan(@Param("age") Integer age);\n\n    // 原生 SQL：加 nativeQuery = true，写的是真正的数据库 SQL\n    @Query(value = "SELECT * FROM users WHERE name LIKE %:kw%", nativeQuery = true)\n    List<User> searchNative(@Param("kw") String kw);\n}',
            },
            {
              type: 'table',
              title: '方法名关键字速查',
              headers: ['关键字', '含义', '示例'],
              rows: [
                ['And / Or', '且 / 或', 'findByNameAndAge'],
                ['Containing', 'LIKE %x%', 'findByNameContaining'],
                ['GreaterThan / LessThan', '大于 / 小于', 'findByAgeGreaterThan'],
                ['Between', '区间', 'findByAgeBetween'],
                ['IsNull / IsNotNull', '为空 / 非空', 'findByEmailIsNull'],
                ['OrderBy + 字段 + Desc', '排序', 'OrderByIdDesc']
              ]
            },
            { type: 'warn', content: '方法名推导只适合简单条件。一旦方法名长得离谱（三个 And 以上），就换 @Query，别硬撑。' }
          ]
        },
        {
          id: 'sb-mybatis',
          title: '4.4 MyBatis 与技术选型',
          sections: [
            { type: 'text', content: '国内公司大量使用 **MyBatis / MyBatis-Plus**：SQL 完全由自己掌控，写在 XML 或注解里。它和 JPA 思路不同：**JPA 帮你写 SQL，MyBatis 让你亲写 SQL**。' },
            {
              type: 'code',
              title: 'MyBatis 的 Mapper 写法',
              lang: 'java',
              code: '@Mapper  // 标注后 MyBatis 会为接口生成代理实现\npublic interface UserMapper {\n\n    // 简单 SQL 直接注解写\n    @Select("SELECT * FROM users WHERE id = #{id}")\n    User findById(Long id);\n\n    // 复杂 SQL 放 XML（同包同名 XML 文件里）\n    List<User> search(@Param("kw") String keyword);\n}',
            },
            {
              type: 'code',
              title: '对应的 XML（resources/mapper/UserMapper.xml）',
              lang: 'xml',
              code: '<mapper namespace="com.example.demo.mapper.UserMapper">\n    <select id="search" resultType="com.example.demo.entity.User">\n        SELECT * FROM users\n        WHERE name LIKE CONCAT(\'%\', #{kw}, \'%\')\n        ORDER BY id DESC\n    </select>\n</mapper>',
            },
            {
              type: 'table',
              title: 'JPA vs MyBatis 选型参考',
              headers: ['对比项', 'Spring Data JPA', 'MyBatis / MyBatis-Plus'],
              rows: [
                ['SQL 控制', '自动生成，简单高效', '完全手写，灵活可控'],
                ['开发速度', '常规 CRUD 极快', '需要写 XML/注解'],
                ['复杂查询', '推荐 @Query 或原生 SQL', '擅长，想怎么写怎么写'],
                ['适用场景', '中小项目、外企/海外风格', '国内主流、复杂报表多']
              ]
            },
            { type: 'tip', content: '学习建议：先用 JPA 快速理解 ORM 思想，再学 MyBatis 适应国内主流。两者底层 JDBC 是一样的，切换成本不高。' }
          ]
        }
      ]
    },

    /* ============ 第五章 分层与事务 ============ */
    {
      id: 'sb-ch5',
      title: '第五章 分层架构与事务',
      lessons: [
        {
          id: 'sb-layers',
          title: '5.1 三层架构',
          sections: [
            { type: 'text', content: '企业项目都遵循**三层架构**：Controller 管请求响应，Service 管业务逻辑，Repository 管数据读写。职责单一、层层依赖，代码才好维护、好测试。' },
            {
              type: 'code',
              title: '一次请求的完整流转',
              lang: 'text',
              code: '前端请求 → Controller（收参数、调 Service、返回结果）\n         → Service（校验、业务规则、组合多个 Repository）\n         → Repository（读写数据库）\n         ← 数据原路返回，Controller 转成 JSON 给前端',
            },
            {
              type: 'code',
              title: '标准分层代码示例',
              lang: 'java',
              code: '@RestController\n@RequestMapping("/users")\npublic class UserController {\n    private final UserService userService;\n\n    public UserController(UserService userService) { this.userService = userService; }\n\n    @PostMapping\n    public User create(@RequestBody @Valid UserCreateDTO dto) {\n        // 只做参数接收与结果返回，不写业务\n        return userService.create(dto);\n    }\n}\n\n@Service\npublic class UserService {\n    private final UserRepository userRepository;\n\n    public UserService(UserRepository userRepository) { this.userRepository = userRepository; }\n\n    public User create(UserCreateDTO dto) {\n        // 业务规则写在 Service：如查重\n        if (userRepository.findByName(dto.getName()).isPresent()) {\n            throw new BusinessException("用户名已存在");\n        }\n        User user = new User();\n        user.setName(dto.getName());\n        return userRepository.save(user);\n    }\n}',
            },
            { type: 'warn', content: '常见坏味道：Controller 里直接注入 Repository 写业务，或者 Service 里拼 JSON。层次一旦穿透，后期维护成本指数级上升。' }
          ]
        },
        {
          id: 'sb-transaction',
          title: '5.2 事务管理 @Transactional',
          sections: [
            { type: 'text', content: '一个业务往往涉及多条 SQL，要么全成功、要么全回滚（你已在 PostgreSQL 课程学过事务）。Spring 里只需在方法上加 **@Transactional**，框架自动管理提交与回滚。' },
            {
              type: 'code',
              title: '转账示例：经典的原子操作',
              lang: 'java',
              code: '@Service\npublic class TransferService {\n\n    private final AccountRepository accountRepository;\n\n    public TransferService(AccountRepository accountRepository) {\n        this.accountRepository = accountRepository;\n    }\n\n    @Transactional  // 方法内所有数据库操作包成一个事务\n    public void transfer(Long fromId, Long toId, BigDecimal amount) {\n        Account from = accountRepository.findById(fromId).orElseThrow();\n        Account to = accountRepository.findById(toId).orElseThrow();\n\n        from.setBalance(from.getBalance().subtract(amount));\n        to.setBalance(to.getBalance().add(amount));\n\n        accountRepository.save(from);\n        // 假设这里抛出异常：上面已"保存"的扣款会自动回滚，钱不会凭空消失\n        accountRepository.save(to);\n    }\n}',
            },
            {
              type: 'list',
              title: '重要细节',
              items: [
                '默认只在遇到 **RuntimeException**（含 BusinessException）时回滚；受检异常需 `@Transactional(rollbackFor = Exception.class)`',
                '注解加在类上 = 类里所有 public 方法都开启事务',
                '**自调用失效**：同一个类里 A 方法调 B 方法（B 上有注解），B 的事务不生效——因为事务靠代理对象实现，this 调用绕过了代理'
              ]
            },
            { type: 'warn', content: '@Transactional 方法里别写耗时操作（调外部接口、发邮件），会长时间占用数据库连接，拖垮系统。先提交事务，再做副作用动作。' }
          ]
        },
        {
          id: 'sb-validation',
          title: '5.3 参数校验',
          sections: [
            { type: 'text', content: '前端传来的数据不可信。与其在 Service 里写一串 if 判断，不如用 **Validation 注解**声明式校验：字段上标规则，入口自动检查。' },
            {
              type: 'code',
              title: 'DTO 上标注校验规则',
              lang: 'java',
              code: 'public class UserCreateDTO {\n\n    @NotBlank(message = "用户名不能为空")       // 非空白字符串\n    private String name;\n\n    @Min(value = 1, message = "年龄最小 1 岁")\n    @Max(value = 150, message = "年龄最大 150 岁")\n    private Integer age;\n\n    @Email(message = "邮箱格式不正确")\n    private String email;\n\n    // getter/setter 省略\n}',
            },
            {
              type: 'code',
              title: '入口加 @Valid 生效',
              lang: 'java',
              code: '@PostMapping("/users")\npublic User create(@RequestBody @Valid UserCreateDTO dto) {\n    // 校验不通过会抛 MethodArgumentNotValidException，进不了方法体\n    return userService.create(dto);\n}\n\n// 配合全局异常处理，把校验信息友好地返回给前端\n@ExceptionHandler(MethodArgumentNotValidException.class)\npublic Map<String, Object> handleValid(MethodArgumentNotValidException e) {\n    String msg = e.getBindingResult().getFieldErrors().stream()\n        .map(FieldError::getDefaultMessage)\n        .collect(Collectors.joining("；"));\n    return Map.of("code", 400, "message", msg);\n}',
            },
            {
              type: 'table',
              title: '常用校验注解',
              headers: ['注解', '作用'],
              rows: [
                ['@NotNull / @NotBlank / @NotEmpty', '非 null / 非空白串 / 非空集合'],
                ['@Size(min, max)', '长度或元素个数范围'],
                ['@Min / @Max', '数值范围'],
                ['@Email', '邮箱格式'],
                ['@Pattern(regexp)', '正则表达式']
              ]
            }
          ]
        },
        {
          id: 'sb-result',
          title: '5.4 统一响应封装',
          sections: [
            { type: 'text', content: '接口直接返回裸数据，前端难以统一判断成功失败。业界惯例是所有接口返回**统一结构**：code（业务码）、message（提示）、data（数据本体）。' },
            {
              type: 'code',
              title: '定义统一响应类',
              lang: 'java',
              code: 'public class Result<T> {\n    private Integer code;     // 0 成功，非 0 失败\n    private String message;   // 提示信息\n    private T data;           // 业务数据\n\n    public static <T> Result<T> ok(T data) {\n        Result<T> r = new Result<>();\n        r.code = 0;\n        r.message = "success";\n        r.data = data;\n        return r;\n    }\n\n    public static <T> Result<T> fail(Integer code, String message) {\n        Result<T> r = new Result<>();\n        r.code = code;\n        r.message = message;\n        return r;\n    }\n    // getter/setter 省略\n}',
            },
            {
              type: 'code',
              title: 'Controller 统一返回 Result',
              lang: 'java',
              code: '@GetMapping("/{id}")\npublic Result<User> detail(@PathVariable Long id) {\n    return Result.ok(userService.one(id));\n}\n\n// 前端拿到的 JSON：\n// {"code":0,"message":"success","data":{"id":1,"name":"张三"}}',
            },
            { type: 'tip', content: '进阶做法：全局异常处理器也返回 Result.fail(...)，让**成功与失败共用同一结构**；HTTP 状态码保持 200、用业务码区分，是国内外常见做法之一，团队统一即可。' }
          ]
        }
      ]
    },

    /* ============ 第六章 认证与安全 ============ */
    {
      id: 'sb-ch6',
      title: '第六章 认证与安全',
      lessons: [
        {
          id: 'sb-security',
          title: '6.1 Spring Security 入门',
          sections: [
            { type: 'text', content: '**Spring Security** 是 Spring 官方的安全框架，负责两件事：**认证（你是谁）**和**授权（你能干什么）**。它基于一条**过滤器链**：请求进来先过一串安全过滤器，再到达你的 Controller。' },
            {
              type: 'code',
              title: '引入依赖后的基本配置',
              lang: 'xml',
              code: '<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security</artifactId>\n</dependency>',
            },
            {
              type: 'code',
              title: 'SecurityFilterChain 配置（Spring Security 6 写法）',
              lang: 'java',
              code: '@Configuration\npublic class SecurityConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            // 关闭 CSRF（前后端分离 + JWT 场景通常不需要）\n            .csrf(csrf -> csrf.disable())\n            // 配置哪些 URL 需要什么权限\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers("/auth/login", "/hello").permitAll()  // 放行\n                .anyRequest().authenticated()                          // 其余都要登录\n            )\n            // 前后端分离用无状态会话\n            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS));\n        return http.build();\n    }\n}',
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '引入依赖后**所有接口默认都要登录**，必须写配置放行公开接口',
                '默认会生成一个随机密码打印在启动日志里（用户名 user），开发期可用',
                '前后端分离项目：关 CSRF + 无状态会话 + 自定义登录接口是标准组合'
              ]
            }
          ]
        },
        {
          id: 'sb-jwt',
          title: '6.2 JWT 登录认证',
          sections: [
            { type: 'text', content: '传统 Session 把登录状态存在服务器，集群和跨域都不方便。**JWT（JSON Web Token）**把登录凭证做成一段自包含的加密串发给前端，前端每次请求放在 `Authorization` 头里，服务器**验签即可信任**，无需存会话。' },
            {
              type: 'code',
              title: 'JWT 的三段结构',
              lang: 'text',
              code: 'xxxxx.yyyyy.zzzzz\n  │      │      │\n  │      │      └── 签名：用密钥对前两段签名，防篡改\n  │      └── 载荷 Payload：用户 id、过期时间等（Base64，非加密！）\n  └── 头部 Header：算法说明',
            },
            {
              type: 'code',
              title: '登录接口：签发 token',
              lang: 'java',
              code: '@RestController\npublic class AuthController {\n\n    @PostMapping("/auth/login")\n    public Map<String, String> login(@RequestBody Map<String, String> body) {\n        String username = body.get("username");\n        String password = body.get("password");\n        // 1. 校验账号密码（省略）\n\n        // 2. 用 JJWT 生成 token（引入 io.jsonwebtoken:jjwt 依赖）\n        String token = Jwts.builder()\n            .subject(username)                                   // 放用户标识\n            .expiration(new Date(System.currentTimeMillis() + 7 * 24 * 3600 * 1000))  // 7 天过期\n            .signWith(secretKey)                                 // 用密钥签名\n            .compact();\n\n        return Map.of("token", token);\n    }\n}',
            },
            {
              type: 'code',
              title: '校验 token：过滤器统一拦截',
              lang: 'java',
              code: '@Component\npublic class JwtFilter extends OncePerRequestFilter {\n\n    @Override\n    protected void doFilterInternal(HttpServletRequest request,\n                                    HttpServletResponse response,\n                                    FilterChain chain) throws IOException, ServletException {\n        String token = request.getHeader("Authorization");\n        // 有 token 且格式正确 → 解析验签 → 构造登录身份放入上下文\n        if (token != null && token.startsWith("Bearer ")) {\n            try {\n                Claims claims = Jwts.parser().verifyWith(secretKey).build()\n                    .parseSignedClaims(token.substring(7)).getPayload();\n                // 解析成功即认证通过（简化示例，实际要构造 Authentication 对象）\n            } catch (JwtException e) {\n                response.setStatus(401);\n                return;  // token 无效直接拦截\n            }\n        }\n        chain.doFilter(request, response);  // 放行给下一个过滤器\n    }\n}',
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'token 放在请求头 `Authorization: Bearer <token>`',
                '**Payload 只是 Base64 编码，不是加密**——绝不能放密码、手机号等敏感明文',
                'token 泄露即身份泄露，设置较短过期时间 + Refresh Token 是常见加固方案'
              ]
            }
          ]
        },
        {
          id: 'sb-bcrypt',
          title: '6.3 密码加密与权限控制',
          sections: [
            { type: 'text', content: '密码**绝不能明文存库**（拖库即泄露）。用 **BCrypt** 单向哈希：存哈希值，登录时用 matches 比对。权限控制用注解声明即可。' },
            {
              type: 'code',
              title: '注册：BCrypt 加密入库',
              lang: 'java',
              code: '@Service\npublic class AuthService {\n\n    // BCryptPasswordEncoder 已由 Security 自动装配，直接注入使用\n    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();\n\n    public void register(String username, String rawPassword) {\n        String hash = encoder.encode(rawPassword);\n        // 存入数据库的是 hash，例如：$2a$10$X5wFBtLrL/kHcmrOGGTrGufsBX8CJ0WpQpfn3z8e...\n        // 同一密码每次加密结果都不同（自带随机盐），但都能验证通过\n        userRepository.save(new User(username, hash));\n    }\n\n    public boolean login(String username, String rawPassword) {\n        User user = userRepository.findByName(username).orElseThrow();\n        return encoder.matches(rawPassword, user.getPassword());  // 比对\n    }\n}',
            },
            {
              type: 'code',
              title: '注解式权限控制',
              lang: 'java',
              code: '@Configuration\n@EnableMethodSecurity  // 开启方法级权限注解\npublic class MethodSecurityConfig { }\n\n@RestController\npublic class AdminController {\n\n    @PreAuthorize("hasRole(\'ADMIN\')")   // 只有 ADMIN 角色能调\n    @DeleteMapping("/users/{id}")\n    public void deleteUser(@PathVariable Long id) { /* ... */ }\n\n    @PreAuthorize("isAuthenticated()")  // 登录即可\n    @GetMapping("/me")\n    public User me() { /* ... */ }\n}',
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'BCrypt 自带盐且**故意很慢**（可调强度），能有效抵御彩虹表和暴力破解',
                '角色/权限存在数据库，登录时查出来放进认证上下文，注解按需声明',
                '敏感操作（改密码、删除）建议二次校验权限，别只依赖前端隐藏按钮'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第七章 缓存与任务 ============ */
    {
      id: 'sb-ch7',
      title: '第七章 缓存与任务',
      lessons: [
        {
          id: 'sb-redis',
          title: '7.1 集成 Redis',
          sections: [
            { type: 'text', content: '**Redis** 是内存键值数据库，读写极快（你已了解其数据类型）。Java 里通过 **Spring Data Redis** 操作，先引入依赖再配置连接，然后注入 **RedisTemplate** 或 **StringRedisTemplate** 使用。' },
            {
              type: 'code',
              title: '依赖与配置',
              lang: 'xml',
              code: '<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-redis</artifactId>\n</dependency>',
            },
            {
              type: 'code',
              title: 'application.yml 连接配置',
              lang: 'yaml',
              code: 'spring:\n  data:\n    redis:\n      host: localhost\n      port: 6379\n      # password: 可选',
            },
            {
              type: 'code',
              title: '典型用法：接口防重与计数',
              lang: 'java',
              code: '@RestController\npublic class RankController {\n\n    // StringRedisTemplate：键值都是字符串，最常用\n    private final StringRedisTemplate redis;\n\n    public RankController(StringRedisTemplate redis) { this.redis = redis; }\n\n    // 点赞：自增计数\n    @PostMapping("/like/{id}")\n    public Long like(@PathVariable Long id) {\n        return redis.opsForValue().increment("like:" + id);\n    }\n\n    // 简单防重：同一 IP 一分钟内只能提交一次\n    @PostMapping("/submit")\n    public String submit(HttpServletRequest request) {\n        String ip = request.getRemoteAddr();\n        Boolean first = redis.opsForValue()\n            .setIfAbsent("lock:" + ip, "1", Duration.ofMinutes(1));  // 不存在才设置\n        if (Boolean.FALSE.equals(first)) {\n            throw new BusinessException("操作太频繁，请稍后再试");\n        }\n        return "ok";\n    }\n}',
            },
            { type: 'tip', content: '存对象推荐先转 JSON 字符串再存（Jackson 序列化），读取时反序列化回来，避免 JDK 原生序列化的兼容性坑。' }
          ]
        },
        {
          id: 'sb-cache',
          title: '7.2 Spring Cache 缓存抽象',
          sections: [
            { type: 'text', content: '手动读写缓存代码重复度高。Spring 提供**缓存抽象**：加注解即可让方法的返回值自动进缓存，底层切换（Redis / Caffeine）不改业务代码。' },
            {
              type: 'code',
              title: '开启缓存并使用注解',
              lang: 'java',
              code: '@SpringBootApplication\n@EnableCaching  // 开启缓存能力\npublic class DemoApplication { }\n\n@Service\npublic class ArticleService {\n\n    @Cacheable(value = "article", key = "#id")\n    // 第一次执行方法并把结果缓存；之后同 id 直接命中缓存，方法体不再执行\n    public Article findById(Long id) {\n        return articleRepository.findById(id).orElseThrow();\n    }\n\n    @CacheEvict(value = "article", key = "#id")\n    // 更新/删除时清除对应缓存，防止读到旧数据\n    public void update(Long id, ArticleDTO dto) {\n        /* 更新数据库 */\n    }\n\n    @CachePut(value = "article", key = "#id")\n    // 执行方法并用返回值刷新缓存（适合"更新后返回最新值"）\n    public Article save(Article article) { return articleRepository.save(article); }\n}',
            },
            {
              type: 'table',
              title: '三个核心注解',
              headers: ['注解', '时机', '典型场景'],
              rows: [
                ['@Cacheable', '先查缓存，未命中才执行方法', '查详情、查列表'],
                ['@CachePut', '执行方法并刷新缓存', '更新后返回新值'],
                ['@CacheEvict', '执行方法并清缓存', '删除、修改后失效旧数据']
              ]
            },
            { type: 'warn', content: '缓存最大风险是**数据不一致**：更新数据库时一定要同步失效缓存（先更新库、再删缓存），否则用户会一直看到旧数据。' }
          ]
        },
        {
          id: 'sb-schedule',
          title: '7.3 定时任务与异步',
          sections: [
            { type: 'text', content: '统计报表每天凌晨跑一次、日志每周清理一次——用 **@Scheduled**；发短信、生成大文件等耗时操作不该阻塞用户请求——用 **@Async** 异步执行。' },
            {
              type: 'code',
              title: '定时任务',
              lang: 'java',
              code: '@SpringBootApplication\n@EnableScheduling  // 开启定时任务\npublic class DemoApplication { }\n\n@Component\npublic class ReportJob {\n\n    // cron 表达式：秒 分 时 日 月 周\n    @Scheduled(cron = "0 0 2 * * ?")     // 每天凌晨 2 点执行\n    public void dailyReport() {\n        /* 统计昨日数据、生成报表 */\n    }\n\n    @Scheduled(fixedRate = 5 * 60 * 1000) // 每 5 分钟执行一次\n    public void heartbeat() { /* ... */ }\n}',
            },
            {
              type: 'code',
              title: '异步任务',
              lang: 'java',
              code: '@SpringBootApplication\n@EnableAsync  // 开启异步\npublic class DemoApplication { }\n\n@Service\npublic class NotifyService {\n\n    @Async  // 调用时立即返回，方法体在别的线程执行\n    public void sendSms(String phone, String content) {\n        /* 调短信网关，可能耗时几秒 */\n    }\n}\n\n// 业务里调用：用户请求瞬间返回，短信在后台慢慢发\nnotifyService.sendSms("13800000000", "您的订单已发货");',
            },
            {
              type: 'list',
              title: '易错点',
              items: [
                '@Scheduled 默认**单线程**串行执行，任务耗时长会互相阻塞，可自定义线程池',
                '@Async 方法必须**被代理调用**（注入后调用），同类 this 调用不生效——和事务失效同理',
                '@Async 方法不要声明返回依赖结果；需要结果时返回 Future/CompletableFuture'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第八章 测试与部署 ============ */
    {
      id: 'sb-ch8',
      title: '第八章 测试与部署',
      lessons: [
        {
          id: 'sb-test',
          title: '8.1 单元测试与接口测试',
          sections: [
            { type: 'text', content: 'Spring Boot 自带 **JUnit 5** 测试体系。单元测试用 **Mockito** 模拟依赖隔离测试单个类；接口测试用 **MockMvc** 模拟 HTTP 请求验证整个链路。' },
            {
              type: 'code',
              title: '单元测试：Mock 掉数据库依赖',
              lang: 'java',
              code: '@ExtendWith(MockitoExtension.class)\nclass UserServiceTest {\n\n    @Mock                 // 模拟对象：不连真实数据库\n    UserRepository userRepository;\n\n    @InjectMocks          // 被测对象：自动注入上面的 Mock\n    UserService userService;\n\n    @Test\n    void 创建用户_重名应抛异常() {\n        // given：让 findByName 返回"已存在"\n        when(userRepository.findByName("张三"))\n            .thenReturn(Optional.of(new User()));\n\n        // when + then：断言抛出业务异常\n        assertThrows(BusinessException.class,\n            () -> userService.create(new UserCreateDTO("张三", 20)));\n    }\n}',
            },
            {
              type: 'code',
              title: '接口测试：MockMvc 模拟 HTTP 请求',
              lang: 'java',
              code: '@SpringBootTest\n@AutoConfigureMockMvc\nclass UserControllerTest {\n\n    @Autowired\n    MockMvc mockMvc;\n\n    @Test\n    void 查询用户_应返回200和JSON() throws Exception {\n        mockMvc.perform(get("/users/1"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath("$.code").value(0));\n    }\n}',
            },
            {
              type: 'list',
              title: '测试策略',
              items: [
                '**单元测试**：不启动容器、毫秒级运行，覆盖业务规则（数量最多）',
                '**接口测试**：启动完整上下文，验证参数绑定、校验、序列化（数量适中）',
                '测试类/方法名直接写中文更易读；遵循 given-when-then 结构'
              ]
            }
          ]
        },
        {
          id: 'sb-log',
          title: '8.2 日志',
          sections: [
            { type: 'text', content: 'Spring Boot 默认集成 **SLF4J + Logback**：代码里面向 SLF4J 接口打日志，Logback 负责输出格式与文件管理。生产排查问题全靠日志，别再 System.out.println 了。' },
            {
              type: 'code',
              title: '两种打日志的方式',
              lang: 'java',
              code: '@RestController\npublic class DemoController {\n\n    // 方式一：声明 Logger（传统）\n    private static final Logger log = LoggerFactory.getLogger(DemoController.class);\n\n    // 方式二：Lombok 的 @Slf4j 注解自动生成上面的 log 字段\n\n    @GetMapping("/demo")\n    public String demo() {\n        log.debug("调试信息，生产默认不输出");\n        log.info("用户 {} 请求了接口", "张三");   // {} 占位符，避免字符串拼接\n        log.warn("警告：库存不足");\n        log.error("出错了", new RuntimeException("示例异常"));  // 异常作为第二参数\n        return "ok";\n    }\n}',
            },
            {
              type: 'code',
              title: '日志配置：级别与文件输出',
              lang: 'yaml',
              code: 'logging:\n  level:\n    root: info                    # 全局级别\n    com.example.demo: debug       # 自己的包开 debug 便于开发\n  file:\n    name: logs/app.log            # 输出到文件\n  logback:\n    rollingpolicy:\n      max-file-size: 10MB         # 单文件上限，自动滚动归档\n      max-history: 30             # 保留 30 天',
            },
            {
              type: 'table',
              title: '日志级别从低到高',
              headers: ['级别', '用途'],
              rows: [
                ['DEBUG', '开发调试细节，生产关闭'],
                ['INFO', '关键流程节点（订单创建、登录成功）'],
                ['WARN', '可自动恢复的异常状态'],
                ['ERROR', '错误，需要人工介入排查']
              ]
            }
          ]
        },
        {
          id: 'sb-package',
          title: '8.3 打包部署',
          sections: [
            { type: 'text', content: 'Spring Boot 项目打成**可执行 jar**（内嵌 Tomcat），服务器上有 JDK 就能跑，无需安装任何中间件——这是它部署简单的原因。' },
            {
              type: 'code',
              title: '打包与运行',
              lang: 'bash',
              code: '# 1. Maven 打包（跳过测试可加 -DskipTests）\nmvn clean package\n\n# 2. 产物在 target 目录：demo-0.0.1-SNAPSHOT.jar\n\n# 3. 上传服务器后直接运行（需 JDK 17+）\njava -jar demo-0.0.1-SNAPSHOT.jar\n\n# 4. 常用启动参数：指定端口、环境、后台运行\njava -jar demo.jar --server.port=9090 --spring.profiles.active=prod\nnohup java -jar demo.jar > app.log 2>&1 &',
            },
            {
              type: 'code',
              title: '进阶：Docker 部署（Dockerfile）',
              lang: 'dockerfile',
              code: '# 用 JDK 17 作为基础镜像\nFROM eclipse-temurin:17\n\n# 把 jar 复制进镜像\nCOPY target/demo-0.0.1-SNAPSHOT.jar app.jar\n\n# 容器启动时运行\nENTRYPOINT ["java", "-jar", "/app.jar"]\n\n# 构建并运行：\n# docker build -t demo .\n# docker run -d -p 8080:8080 demo',
            },
            {
              type: 'list',
              title: '部署检查清单',
              items: [
                '生产配置（数据库、密钥）走**环境变量或独立配置**，不打包进 jar',
                '用 `nohup ... &` 或 systemd/Docker 让进程**常驻后台**，SSH 断开不退出',
                '健康检查：引入 actuator，访问 `/actuator/health` 确认服务存活'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第九章 综合实战 ============ */
    {
      id: 'sb-ch9',
      title: '第九章 综合实战',
      lessons: [
        {
          id: 'sb-project-design',
          title: '9.1 项目设计：图书管理 API',
          sections: [
            { type: 'text', content: '把前面学的东西串起来，做一个**图书管理 API**：登录、图书增删改查、列表缓存。动手前先做两件设计：**表结构**和**接口清单**。' },
            {
              type: 'code',
              title: '表结构（PostgreSQL）',
              lang: 'sql',
              code: '-- 用户表：存登录账号\nCREATE TABLE users (\n    id          BIGSERIAL PRIMARY KEY,\n    username    VARCHAR(50)  NOT NULL UNIQUE,\n    password    VARCHAR(100) NOT NULL,   -- BCrypt 哈希\n    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- 图书表\nCREATE TABLE books (\n    id          BIGSERIAL PRIMARY KEY,\n    title       VARCHAR(100) NOT NULL,\n    author      VARCHAR(50),\n    price       NUMERIC(10, 2),\n    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);',
            },
            {
              type: 'table',
              title: '接口清单',
              headers: ['方法 + URL', '说明', '是否需登录'],
              rows: [
                ['POST /auth/register', '注册（密码 BCrypt 加密）', '否'],
                ['POST /auth/login', '登录，返回 JWT', '否'],
                ['GET /books', '图书列表（Redis 缓存）', '否'],
                ['GET /books/{id}', '图书详情', '否'],
                ['POST /books', '新增图书（校验 + 登录）', '是'],
                ['PUT /books/{id}', '修改图书（失效缓存）', '是'],
                ['DELETE /books/{id}', '删除图书（失效缓存）', '是']
              ]
            },
            {
              type: 'list',
              title: '技术点对照',
              items: [
                '分层：Controller → Service → Repository',
                '数据：Spring Data JPA + PostgreSQL',
                '安全：JWT 登录 + BCrypt 密码',
                '缓存：Spring Cache + Redis',
                '规范：统一响应 Result + 全局异常 + 参数校验'
              ]
            }
          ]
        },
        {
          id: 'sb-project-code',
          title: '9.2 核心功能实现',
          sections: [
            { type: 'text', content: '按依赖顺序写代码：**实体 → Repository → Service → Controller → 安全配置**。下面是最核心的片段，完整代码建议亲手敲一遍。' },
            {
              type: 'code',
              title: '实体与 Repository',
              lang: 'java',
              code: '@Entity\n@Table(name = "books")\npublic class Book {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @NotBlank(message = "书名不能为空")\n    private String title;\n\n    private String author;\n\n    @DecimalMin(value = "0.0", message = "价格不能为负")\n    private BigDecimal price;\n\n    public Book() { }\n    // getter/setter 省略\n}\n\npublic interface BookRepository extends JpaRepository<Book, Long> {\n    List<Book> findByTitleContaining(String kw);\n}',
            },
            {
              type: 'code',
              title: 'Service：业务 + 缓存',
              lang: 'java',
              code: '@Service\npublic class BookService {\n\n    private final BookRepository bookRepository;\n\n    public BookService(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    @Cacheable(value = "bookList", key = \'all\')\n    public List<Book> list(String keyword) {\n        // 有关键词走模糊查询，否则查全部\n        return (keyword == null || keyword.isBlank())\n            ? bookRepository.findAll()\n            : bookRepository.findByTitleContaining(keyword);\n    }\n\n    @CacheEvict(value = "bookList", allEntries = true)  // 增删改都清列表缓存\n    public Book create(BookCreateDTO dto) {\n        Book book = new Book();\n        book.setTitle(dto.getTitle());\n        book.setAuthor(dto.getAuthor());\n        book.setPrice(dto.getPrice());\n        return bookRepository.save(book);\n    }\n\n    @CacheEvict(value = "bookList", allEntries = true)\n    public void delete(Long id) {\n        if (!bookRepository.existsById(id)) {\n            throw new BusinessException("图书不存在");\n        }\n        bookRepository.deleteById(id);\n    }\n}',
            },
            {
              type: 'code',
              title: 'Controller：统一响应 + 校验',
              lang: 'java',
              code: '@RestController\n@RequestMapping("/books")\npublic class BookController {\n\n    private final BookService bookService;\n\n    public BookController(BookService bookService) { this.bookService = bookService; }\n\n    @GetMapping\n    public Result<List<Book>> list(@RequestParam(required = false) String keyword) {\n        return Result.ok(bookService.list(keyword));\n    }\n\n    @PostMapping\n    public Result<Book> create(@RequestBody @Valid BookCreateDTO dto) {\n        return Result.ok(bookService.create(dto));\n    }\n\n    @DeleteMapping("/{id}")\n    public Result<Void> delete(@PathVariable Long id) {\n        bookService.delete(id);\n        return Result.ok(null);\n    }\n}',
            },
            { type: 'tip', content: '用 Postman 或 IDEA 的 HTTP Client 从注册、登录开始完整走一遍流程，每个接口都试成功与失败两种情况，收获最大。' }
          ]
        },
        {
          id: 'sb-roadmap',
          title: '9.3 进阶路线',
          sections: [
            { type: 'text', content: '完成图书管理项目后，你已经能独立开发常规后端服务了。接下来按这个顺序进阶，每个方向都建议以"做一个小项目"来巩固。' },
            {
              type: 'table',
              title: '进阶方向一览',
              headers: ['方向', '学什么', '对应课程'],
              rows: [
                ['接口文档', 'Swagger / springdoc 自动生成 API 文档', '本课'],
                ['AOP', '切面编程：接口耗时统计、操作日志', '本课'],
                ['消息队列', 'RabbitMQ / Kafka：削峰、解耦、异步', '进阶'],
                ['微服务', 'Spring Cloud：注册中心、网关、配置中心', '进阶'],
                ['容器化', 'Docker + Docker Compose 一键部署', '运维'],
                ['监控', 'Actuator + Prometheus + Grafana', '运维']
              ]
            },
            {
              type: 'list',
              title: '建议的练手项目（由易到难）',
              items: [
                '**博客系统**：文章 CRUD + 评论 + 标签，练熟关联查询与分页',
                '**在线商城**：商品 + 订单 + 支付流程，练事务与并发（库存扣减）',
                '**短链接服务**：练 Redis 高频读写与设计权衡',
                '每做完一个，把它**部署上线**，比多写十个本地 Demo 更有含金量'
              ]
            },
            { type: 'tip', content: '学后端的终点不是背注解，而是理解**每个技术解决什么问题**：缓存解决慢、队列解决堵、微服务解决大。带着问题学，知识才能串成线。' }
          ]
        }
      ]
    }
  ]
}
