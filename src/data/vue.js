// ============================================================
// Vue 分类教学数据
// 文件结构说明（与其他分类文件完全一致）：
//   id          分类唯一标识（用于路由 /category/vue）
//   name        分类显示名称
//   short       分类徽标短文字
//   color       分类主题色（首页卡片、分类页徽标）
//   description 一句话介绍
//   chapters    章节数组，每章包含 lessons，每课包含 sections
//   section.type 支持 text 文本 / list 要点列表 / code 代码示例 / tip 提示
// 注意：Vue 模板里属性用双引号，脚本里字符串也统一用双引号，
//       因此代码块一律用双引号 JS 字符串书写，内部双引号转义为 \"；
//       所有代码示例字符串内部使用 \n 表示换行，字符串中不能出现真实换行
// ============================================================
export default {
  id: 'vue',
  name: 'Vue.js',
  short: 'Vue',
  color: '#16a34a',
  description: '渐进式前端框架：声明式、组件化，把 HTML/CSS/JS 组装成现代网页（本站就是用它写的）',
  chapters: [
    /* ============ 第一章 Vue 入门 ============ */
    {
      id: 'vue-ch1',
      title: '第一章 Vue 入门',
      lessons: [
        {
          id: 'vue-what-is',
          title: '1.1 Vue 是什么',
          sections: [
            { type: 'text', content: '学完了 HTML/CSS/JS，你已经会用 JS 手动操作 DOM（getElementById、改 innerHTML）了。但页面一复杂，"改数据还得顺手改 DOM"的代码就会混乱不堪。**Vue** 的核心思想是：**你只管改数据，DOM 它帮你更新**——这叫**声明式渲染**与**响应式**。' },
            {
              type: 'list',
              title: 'Vue 帮你解决了什么',
              items: [
                '**不用手动操作 DOM**：数据一变，页面自动更新（响应式）',
                '**组件化**：页面拆成一个个组件（导航栏、卡片、弹窗），像积木一样拼装复用',
                '**渐进式**：可以只用一小部分功能，也可以全家桶（路由+状态管理）全上',
                '**生态完整**：官方路由 Vue Router、状态库 Pinia、脚手架 Vite 全有官方支持'
              ]
            },
            {
              type: 'code',
              title: '感受一下：手动 DOM vs Vue',
              lang: 'javascript',
              code: "// 原生 JS：改数据后还要自己找元素、更新文本\nlet count = 0;\nfunction add() {\n    count++;\n    document.getElementById(\"num\").innerText = count;  // 别忘了更新 DOM\n}\n\n// Vue：只改数据，页面自动变\nconst count = ref(0);\nfunction add() {\n    count.value++;      // 页面上绑定了 count 的地方自动更新\n}"
            },
            {
              type: 'tip',
              content: '本站（IT 学习中心）就是用 Vue 3 + Vite + Vue Router 写的：首页、课时页、测试页全是组件。学完这章你可以回头看看自己天天在用的网站。'
            }
          ]
        },
        {
          id: 'vue-create-project',
          title: '1.2 创建第一个 Vue 项目',
          sections: [
            { type: 'text', content: '现代 Vue 开发都用 **Vite**（官方推荐的前端构建工具）创建工程化项目，开发时秒级热更新，打包时高效优化。' },
            {
              type: 'code',
              title: '命令行创建并运行',
              lang: 'text',
              code: '# 创建项目（选 Vue -> JavaScript）\nnpm create vue@latest\n\n# 进入项目并安装依赖\ncd my-project\nnpm install\n\n# 启动开发服务器\nnpm run dev\n\n# 打包发布（生成 dist 目录）\nnpm run build'
            },
            {
              type: 'code',
              title: '默认的项目结构',
              lang: 'text',
              code: 'my-project/\n├── index.html          # 页面入口（只有一个 div#app）\n├── vite.config.js      # Vite 配置\n└── src/\n    ├── main.js         # JS 入口：创建 Vue 应用并挂载\n    ├── App.vue         # 根组件\n    ├── components/     # 组件目录\n    ├── views/          # 页面级组件\n    ├── router/         # 路由配置\n    └── assets/         # 静态资源（样式、图片）'
            },
            {
              type: 'list',
              title: 'main.js 做了什么',
              items: [
                'import App：引入根组件',
                'createApp(App)：创建应用实例',
                '.use(router)：安装插件（路由等）',
                '.mount("#app")：把应用渲染到 index.html 的 div#app 里'
              ]
            },
            {
              type: 'tip',
              content: '不装任何依赖也能尝鲜：HTML 里加一行 <script src=\"vue 全局构建 CDN\">，即可在页面里直接写 Vue，适合快速体验。'
            }
          ]
        },
        {
          id: 'vue-sfc',
          title: '1.3 单文件组件（.vue 文件）',
          sections: [
            { type: 'text', content: 'Vue 项目里最常见的就是 **.vue 文件（单文件组件 SFC）**：一个组件的**结构（template）、逻辑（script）、样式（style）** 写在同一个文件里，内聚又清晰。' },
            {
              type: 'code',
              title: '一个标准的 .vue 组件',
              lang: 'html',
              code: "<!-- 1. 结构：模板区，写 HTML -->\n<template>\n  <div class=\"counter\">\n    <p>当前计数：{{ count }}</p>\n    <button @click=\"add\">+1</button>\n  </div>\n</template>\n\n<!-- 2. 逻辑：脚本区，setup 写法（Vue 3 推荐） -->\n<script setup>\nimport { ref } from \"vue\"\n\nconst count = ref(0)          // ref 创建响应式数据\nfunction add() {\n  count.value++               // 脚本里读写要用 .value\n}\n</script>\n\n<!-- 3. 样式：scoped 表示只作用于本组件 -->\n<style scoped>\n.counter { color: #333; }\n</style>"
            },
            {
              type: 'list',
              title: '三个区块职责',
              items: [
                'template：只有**一个根元素**包裹即可（Vue 3 支持多个根）',
                'script setup：语法糖，里面声明的变量和函数**模板里直接用**，不用 return',
                'style scoped：样式只影响本组件，不会污染全局（原理是给元素加 data 属性）'
              ]
            },
            {
              type: 'tip',
              content: '推荐 VS Code 装 Vue - Official（原 Volar）插件，.vue 文件高亮、提示、跳转一步到位。'
            }
          ]
        }
      ]
    },

    /* ============ 第二章 模板语法 ============ */
    {
      id: 'vue-ch2',
      title: '第二章 模板语法',
      lessons: [
        {
          id: 'vue-interpolation',
          title: '2.1 插值与常用指令',
          sections: [
            { type: 'text', content: '模板里用**双大括号 {{ }}** 输出数据（插值），用 **v- 开头的指令**给 HTML 元素附加行为。指令是 Vue 模板的灵魂。' },
            {
              type: 'code',
              title: '插值与四大常用指令',
              lang: 'html',
              code: "<template>\n  <!-- 插值：可以放变量、表达式，不能放语句 -->\n  <p>{{ message }}</p>\n  <p>{{ age >= 18 ? \"成年\" : \"未成年\" }}</p>\n\n  <!-- v-bind: 绑定属性（缩写为冒号:） -->\n  <img v-bind:src=\"imgUrl\">\n  <a :href=\"link\">点我</a>\n  <button :disabled=\"loading\">加载中</button>\n\n  <!-- v-on: 绑定事件（缩写为 @） -->\n  <button v-on:click=\"say\">点我说话</button>\n  <button @click=\"count++\">内联表达式也行</button>\n\n  <!-- v-html：输出真正的 HTML（慎用，有注入风险） -->\n  <div v-html=\"richContent\"></div>\n</template>\n\n<script setup>\nimport { ref } from \"vue\"\nconst message = ref(\"你好 Vue\")\nconst age = ref(18)\nconst imgUrl = ref(\"/logo.png\")\nconst link = ref(\"https://cn.vuejs.org\")\nconst loading = ref(false)\nconst richContent = ref(\"<b>加粗内容</b>\")\nfunction say() { alert(message.value) }\nconst count = ref(0)\n</script>"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '{{ }} 里可以写 JS 表达式（三元、算术、方法调用），不能写 if/for 语句',
                'v-bind 缩写 `:`、v-on 缩写 `@`，实际项目都用缩写',
                '模板里的变量不用 .value，脚本里才需要（setup 自动解包）'
              ]
            }
          ]
        },
        {
          id: 'vue-class-style',
          title: '2.2 class 与 style 绑定',
          sections: [
            { type: 'text', content: '操作 class 和 style 是前端高频需求，Vue 把它做成了**对象语法**和**数组语法**，比手动拼字符串优雅太多。' },
            {
              type: 'code',
              title: '动态 class 与 style',
              lang: 'html',
              code: "<template>\n  <!-- 对象语法：key 是类名，value 是布尔值（true 就加上） -->\n  <div :class=\"{ active: isActive, error: hasError }\">对象写法</div>\n\n  <!-- 数组语法：多个类自由组合 -->\n  <div :class=\"[baseClass, sizeClass]\">数组写法</div>\n\n  <!-- 同时写静态 class 和动态 :class，会自动合并 -->\n  <div class=\"box\" :class=\"{ highlight: isVip }\">合并写法</div>\n\n  <!-- style 对象写法（属性用驼峰） -->\n  <div :style=\"{ color: textColor, fontSize: size + 'px' }\">内联样式</div>\n</template>\n\n<script setup>\nimport { ref } from \"vue\"\nconst isActive = ref(true)\nconst hasError = ref(false)\nconst baseClass = ref(\"btn\")\nconst sizeClass = ref(\"btn-large\")\nconst isVip = ref(true)\nconst textColor = ref(\"red\")\nconst size = ref(16)\n</script>"
            },
            {
              type: 'tip',
              content: '对象语法最常用：根据状态切换类名（如选中高亮、禁用置灰），一行搞定。'
            }
          ]
        },
        {
          id: 'vue-if-show',
          title: '2.3 条件渲染：v-if 与 v-show',
          sections: [
            { type: 'text', content: '两个指令都能控制"显示/隐藏"，但原理完全不同：**v-if 是真的创建/销毁元素**，**v-show 只是切换 display 样式**。' },
            {
              type: 'code',
              title: '条件渲染全家',
              lang: 'html',
              code: "<template>\n  <!-- v-if / v-else-if / v-else 必须紧挨着写 -->\n  <p v-if=\"score >= 90\">优秀</p>\n  <p v-else-if=\"score >= 60\">及格</p>\n  <p v-else>不及格</p>\n\n  <!-- v-show：只是 display:none，组件始终存在 -->\n  <p v-show=\"loading\">加载中...</p>\n\n  <!-- v-if 加在 template 上可以包裹多个元素且不产生多余节点 -->\n  <template v-if=\"login\">\n    <h3>欢迎回来</h3>\n    <button>退出</button>\n  </template>\n</template>"
            },
            {
              type: 'list',
              title: '怎么选',
              items: [
                '切换**不频繁**、条件分支少：用 v-if（省内存）',
                '频繁**来回切换**（如 tab 页、下拉菜单）：用 v-show（不反复创建销毁，切换快）',
                'v-if 有更高的切换开销，v-show 有更高的初始渲染开销'
              ]
            },
            {
              type: 'tip',
              content: 'v-if 和 v-for 不要同时用在一个元素上（Vue 3 中 v-if 优先级更高，容易出 bug），需要时先用 computed 过滤数据。'
            }
          ]
        },
        {
          id: 'vue-v-for',
          title: '2.4 列表渲染：v-for',
          sections: [
            { type: 'text', content: 'v-for 遍历数组/对象生成列表，是最常用的指令之一。配套的 **:key** 决定更新的性能和正确性，必须理解。' },
            {
              type: 'code',
              title: 'v-for 各种姿势',
              lang: 'html',
              code: "<template>\n  <!-- 数组：(元素, 下标) in 数组 -->\n  <ul>\n    <li v-for=\"(fruit, index) in fruits\" :key=\"fruit.id\">\n      {{ index + 1 }}. {{ fruit.name }} - ￥{{ fruit.price }}\n    </li>\n  </ul>\n\n  <!-- 对象：(值, 键) in 对象 -->\n  <p v-for=\"(value, key) in user\" :key=\"key\">{{ key }}: {{ value }}</p>\n\n  <!-- 数字循环：1 到 10 -->\n  <span v-for=\"n in 10\" :key=\"n\">{{ n }} </span>\n</template>\n\n<script setup>\nimport { ref } from \"vue\"\nconst fruits = ref([\n  { id: 1, name: \"苹果\", price: 5 },\n  { id: 2, name: \"香蕉\", price: 3 },\n  { id: 3, name: \"橘子\", price: 4 }\n])\nconst user = ref({ name: \"小明\", age: 18 })\n</script>"
            },
            {
              type: 'list',
              title: ':key 为什么重要',
              items: [
                'key 是每个节点的"身份证"，Vue 靠它识别哪些项增删改了',
                '用**唯一且稳定的 id** 做 key，别用数组下标（排序/删除时会错位）',
                'key 没写或写错，列表更新可能出现内容串位、输入框内容残留等诡异 bug'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第三章 响应式与交互 ============ */
    {
      id: 'vue-ch3',
      title: '第三章 响应式与交互',
      lessons: [
        {
          id: 'vue-ref-reactive',
          title: '3.1 响应式数据：ref 与 reactive',
          sections: [
            { type: 'text', content: '响应式是 Vue 的招牌：数据变化时**依赖它的视图自动更新**。Vue 3 用 `ref` 和 `reactive` 两个 API 创建响应式数据。' },
            {
              type: 'code',
              title: 'ref 与 reactive',
              lang: 'javascript',
              code: "import { ref, reactive } from \"vue\"\n\n// ref：包装任何类型（基础类型必须用它）\nconst count = ref(0)\nconst title = ref(\"hello\")\nconsole.log(count.value)        // 脚本里访问要 .value\n\n// reactive：只用于对象/数组，直接访问属性\nconst user = reactive({ name: \"小明\", age: 18 })\nuser.age = 19                   // 不需要 .value\n\n// 数组也常用 ref（整体替换时更方便）\nconst list = ref([1, 2, 3])\nlist.value.push(4)\nlist.value = [10, 20]           // 整体替换，依然响应式\n\n// reactive 的坑：解构后失去响应式！\nconst { name } = user           // name 变成普通字符串，改它页面不更新\n// 要解构请用 toRefs：const { name } = toRefs(user)"
            },
            {
              type: 'list',
              title: '选择建议',
              items: [
                '基础类型（数字、字符串、布尔）→ 只能 `ref`',
                '对象、数组 → `ref` 或 `reactive` 都行，**团队统一即可**',
                '新人建议：全用 ref，规则简单不易踩坑（脚本里记得 .value）'
              ]
            },
            {
              type: 'tip',
              content: '为什么 ref 要 .value？因为 JS 无法拦截基础类型的属性访问，Vue 只能包一层对象（Proxy）来监听变化。'
            }
          ]
        },
        {
          id: 'vue-events',
          title: '3.2 事件处理：v-on',
          sections: [
            { type: 'text', content: '@ 指令绑定事件，可以指向方法、写内联表达式，还能用**事件修饰符**优雅处理 preventDefault、stopPropagation 这类样板逻辑。' },
            {
              type: 'code',
              title: '事件绑定与修饰符',
              lang: 'html',
              code: "<template>\n  <!-- 指向方法 / 内联写法 / 传参 -->\n  <button @click=\"handleClick\">无参</button>\n  <button @click=\"greet('小明')\">传参</button>\n  <button @click=\"count = count + 1\">内联</button>\n  <button @click=\"greet($event)\">要事件对象用 $event</button>\n\n  <!-- 事件修饰符（超好用） -->\n  <form @submit.prevent=\"onSubmit\">      <!-- 阻止默认提交刷新 -->\n    <input @keyup.enter=\"search\">        <!-- 回车才触发 -->\n    <div @click.stop=\"inner\">            <!-- 阻止冒泡 -->\n      <button @click.once=\"init\">只触发一次</button>\n    </div>\n  </form>\n</template>\n\n<script setup>\nconst count = ref(0)\nfunction handleClick() { console.log(\"点击了\") }\nfunction greet(name, e) { console.log(\"你好\", name) }\nfunction onSubmit() { console.log(\"表单提交\") }\nfunction search() { console.log(\"回车搜索\") }\nfunction init() { console.log(\"只会执行一次\") }\n</script>"
            },
            {
              type: 'list',
              title: '常用修饰符',
              items: [
                '`.prevent`：阻止默认行为（等价 event.preventDefault()）',
                '`.stop`：阻止冒泡；`.once`：只触发一次',
                '`.enter` / `.esc` / `.tab`：键盘按键；`.self`：只有点自己才触发'
              ]
            }
          ]
        },
        {
          id: 'vue-v-model',
          title: '3.3 表单绑定：v-model',
          sections: [
            { type: 'text', content: 'v-model 是表单的"双向绑定"语法糖：**数据变了输入框跟着变，用户输入了数据也自动变**。它的本质是 `:value` + `@input` 的合体。' },
            {
              type: 'code',
              title: 'v-model 全家桶',
              lang: 'html',
              code: "<template>\n  <!-- 文本框 -->\n  <input v-model=\"name\" placeholder=\"输入姓名\">\n  <p>你好，{{ name }}</p>\n\n  <!-- 多行文本 / 复选框 / 单选 / 下拉 -->\n  <textarea v-model=\"bio\"></textarea>\n  <input type=\"checkbox\" v-model=\"agree\"> 我同意协议\n  <input type=\"radio\" value=\"M\" v-model=\"gender\"> 男\n  <input type=\"radio\" value=\"F\" v-model=\"gender\"> 女\n  <select v-model=\"city\">\n    <option value=\"\">请选择</option>\n    <option value=\"sz\">深圳</option>\n    <option value=\"gz\">广州</option>\n  </select>\n\n  <!-- 修饰符：.number 转数字，.trim 去空格，.lazy 失焦才更新 -->\n  <input v-model.number=\"age\" type=\"number\">\n  <input v-model.trim=\"name\">\n</template>\n\n<script setup>\nimport { ref } from \"vue\"\nconst name = ref(\"\"), bio = ref(\"\"), agree = ref(false)\nconst gender = ref(\"M\"), city = ref(\"\"), age = ref(0)\n</script>"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '复选框单个绑定布尔值；多个复选框绑同一个数组收集选中项',
                '.number 很重要：不转换的话 input 拿到的永远是字符串',
                '自定义组件上也能用 v-model（defineModel / update:modelValue 事件）'
              ]
            }
          ]
        },
        {
          id: 'vue-computed-watch',
          title: '3.4 计算属性 computed 与侦听器 watch',
          sections: [
            { type: 'text', content: '**computed**：由其他数据"算出来"的值，自带缓存——依赖没变就不重算。**watch**：监听某个数据变化后执行副作用（请求接口、写 localStorage）。两者各司其职。' },
            {
              type: 'code',
              title: 'computed 与 watch',
              lang: 'javascript',
              code: "import { ref, computed, watch } from \"vue\"\n\nconst cart = ref([\n  { name: \"苹果\", price: 5, count: 2 },\n  { name: \"香蕉\", price: 3, count: 5 }\n])\n\n// computed：购物车总价（依赖变了自动重算，没变走缓存）\nconst total = computed(() =>\n  cart.value.reduce((sum, item) => sum + item.price * item.count, 0)\n)\n\n// 可写的 computed：get 取值 / set 赋值\nconst fullName = computed({\n  get: () => firstName.value + \" \" + lastName.value,\n  set: (val) => { [firstName.value, lastName.value] = val.split(\" \") }\n})\n\n// watch：监听 count，变化时执行回调（能拿到新旧值）\nconst keyword = ref(\"\")\nwatch(keyword, (newVal, oldVal) => {\n  console.log(\"搜索词变化\", oldVal, \"->\", newVal)\n  // 在这里发请求搜索...\n})\n\n// 立即执行一次 + 深度监听\nwatch(cart, () => saveToLocal(), { immediate: true, deep: true })\n\n// watchEffect：自动收集依赖，用到谁就监听谁\nwatchEffect(() => console.log(\"keyword 是\", keyword.value))"
            },
            {
              type: 'list',
              title: '怎么选',
              items: [
                '**由已有数据算出新数据**（总价、过滤列表、格式化）→ computed',
                '**数据变化后做副作用**（请求、定时器、localStorage、操作 DOM）→ watch',
                'computed 必须有返回值且**别在里面改数据**；watch 里才适合做异步'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第四章 组件基础 ============ */
    {
      id: 'vue-ch4',
      title: '第四章 组件基础',
      lessons: [
        {
          id: 'vue-component-use',
          title: '4.1 组件的定义与使用',
          sections: [
            { type: 'text', content: '组件是**可复用的页面积木**：把一段界面+逻辑封装起来，哪里需要哪里引入。Vue 项目本质就是一棵组件树，App.vue 是树根。' },
            {
              type: 'code',
              title: '定义并使用组件',
              lang: 'javascript',
              code: "// src/components/MyButton.vue —— 子组件（一个普通的 .vue 文件）\n<template>\n  <button class=\"my-btn\">{{ text }}</button>\n</template>\n\n<script setup>\ndefineProps({ text: String })   // 接收外部数据（下一课细讲）\n</script>"
            },
            {
              type: 'code',
              title: '父组件里使用',
              lang: 'html',
              code: "<!-- 父组件：引入 -> 注册（setup 里导入即注册） -> 使用 -->\n<template>\n  <MyButton text=\"确定\" />\n  <my-button text=\"取消\" />      <!-- 大驼峰和短横线写法等价 -->\n</template>\n\n<script setup>\nimport MyButton from \"./components/MyButton.vue\"   // 导入即注册\n</script>"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'script setup 里 import 的组件**直接就能用**，不需要 components 选项',
                '组件名用大驼峰（MyButton），模板里也可写成短横线（my-button）',
                '每个 .vue 文件就是一个组件，文件名即组件名（尽量大驼峰命名）'
              ]
            }
          ]
        },
        {
          id: 'vue-props',
          title: '4.2 props：父传子',
          sections: [
            { type: 'text', content: '**props** 是组件的入参：父组件通过属性把数据传给子组件。核心纪律是**单向数据流**——子组件只能读 props，不能改它。' },
            {
              type: 'code',
              title: 'props 的声明与传递',
              lang: 'javascript',
              code: "// 子组件 StudentCard.vue\n<template>\n  <div class=\"card\">\n    <h3>{{ name }}</h3>\n    <p>年龄：{{ age }}，城市：{{ city }}</p>\n  </div>\n</template>\n\n<script setup>\n// 对象写法：可声明类型、必填、默认值\nconst props = defineProps({\n  name: { type: String, required: true },\n  age:  { type: Number, default: 18 },\n  city: { type: String, default: \"未知\" }\n})\n// 脚本里用 props.name 访问；模板里直接 {{ name }}\nconsole.log(props.name)\n</script>"
            },
            {
              type: 'code',
              title: '父组件传值',
              lang: 'html',
              code: "<template>\n  <!-- 静态值 / 动态值 / 简写 -->\n  <StudentCard name=\"小明\" :age=\"18\" city=\"深圳\" />\n  <StudentCard v-for=\"s in list\" :key=\"s.id\" v-bind=\"s\" />  <!-- v-bind 一次性传对象 -->\n</template>"
            },
            {
              type: 'list',
              title: '单向数据流',
              items: [
                '数据从父组件流向子组件，**子组件不许直接修改 props**（控制台会警告）',
                '需要"改"，把意图通过事件告诉父组件（下一课），由父组件改源头数据',
                'props 变化时子组件自动重新渲染——响应式依然生效'
              ]
            },
            {
              type: 'tip',
              content: '为什么单向？数据只有一个人管（父），才知道是谁改的，出问题好排查。双向改来改去，大型项目就是灾难。'
            }
          ]
        },
        {
          id: 'vue-emit',
          title: '4.3 自定义事件 emit：子传父',
          sections: [
            { type: 'text', content: '子组件想影响父组件？通过 **emit 抛出自定义事件**，父组件用 @ 监听处理——"孩子提需求，家长做决定"。' },
            {
              type: 'code',
              title: '子组件抛事件',
              lang: 'javascript',
              code: "// 子组件 DeleteButton.vue\n<template>\n  <button @click=\"onDelete\">删除</button>\n</template>\n\n<script setup>\n// 声明会抛出的事件（建议写上，可被校验）\nconst emit = defineEmits([\"delete\"])\n\nfunction onDelete() {\n  emit(\"delete\", 42)     // 第二个参数开始是携带的数据\n}\n</script>"
            },
            {
              type: 'code',
              title: '父组件监听处理',
              lang: 'html',
              code: "<template>\n  <!-- @事件名 = 处理函数，$event 是 emit 传来的数据 -->\n  <DeleteButton @delete=\"handleDelete\" />\n  <DeleteButton @delete=\"id => removeStudent(id)\" />\n</template>\n\n<script setup>\nfunction handleDelete(id) {\n  console.log(\"父组件收到删除请求，id =\", id)\n  // 由父组件真正修改数据（改的是数据源头）\n}\n</script>"
            },
            {
              type: 'list',
              title: '父子通信闭环',
              items: [
                '父传子：props（数据下行）',
                '子传父：emit 事件（意图上行），父组件改自己的数据，props 再流回来',
                '这套"数据下行 + 事件上行"就是 Vue 组件通信的标准范式'
              ]
            }
          ]
        },
        {
          id: 'vue-slot',
          title: '4.4 插槽 slot：把内容传进去',
          sections: [
            { type: 'text', content: 'props 传的是**数据**，插槽传的是**HTML 结构/组件**。弹窗、卡片、布局这类"外壳固定、内容多变"的组件全靠插槽。' },
            {
              type: 'code',
              title: '默认插槽与具名插槽',
              lang: 'javascript',
              code: "// 子组件 MyCard.vue：预留插槽\n<template>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <slot name=\"header\">默认标题</slot>   <!-- 具名插槽 -->\n    </div>\n    <div class=\"card-body\">\n      <slot></slot>                          <!-- 默认插槽 -->\n    </div>\n  </div>\n</template>"
            },
            {
              type: 'code',
              title: '父组件填充插槽',
              lang: 'html',
              code: "<template>\n  <MyCard>\n    <template #header>\n      <h2>学生信息</h2>            <!-- #header 是 v-slot:header 缩写 -->\n    </template>\n\n    <p>这里是默认插槽的内容</p>\n    <StudentCard name=\"小明\" />\n  </MyCard>\n</template>"
            },
            {
              type: 'list',
              title: '插槽家族',
              items: [
                '默认插槽：`<slot>` 接收任意内容',
                '具名插槽：`<slot name=\"x\">` + `<template #x>`，一个组件多个坑位',
                '作用域插槽：`<slot :row=\"item\">` 子组件把内部数据传给插槽内容（表格列渲染常用）'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第五章 组件进阶 ============ */
    {
      id: 'vue-ch5',
      title: '第五章 组件进阶',
      lessons: [
        {
          id: 'vue-lifecycle',
          title: '5.1 生命周期',
          sections: [
            { type: 'text', content: '组件从**创建 -> 挂载 -> 更新 -> 卸载**的一生中，每个节点都会触发钩子函数。最常用的是 onMounted（挂载后）和 onUnmounted（卸载前）。' },
            {
              type: 'code',
              title: '常用生命周期钩子',
              lang: 'javascript',
              code: "import { ref, onMounted, onUnmounted, onUpdated } from \"vue\"\n\nconst data = ref(null)\nconst timer = ref(null)\n\n// 组件挂载完成：DOM 已经在页面上了，可以放心发请求、操作 DOM\nonMounted(async () => {\n  data.value = await fetch(\"/api/list\").then(r => r.json())\n  timer.value = setInterval(() => console.log(\"tick\"), 1000)\n})\n\n// 响应式数据变化导致 DOM 更新后\nonUpdated(() => { console.log(\"页面更新了\") })\n\n// 组件卸载前：清理定时器、解绑监听，防内存泄漏\nonUnmounted(() => {\n  clearInterval(timer.value)\n})"
            },
            {
              type: 'list',
              title: '钩子速记',
              items: [
                'onBeforeMount / onMounted：挂载前后（发请求放 onMounted）',
                'onBeforeUpdate / onUpdated：更新前后',
                'onBeforeUnmount / onUnmounted：卸载前后（清理资源）'
              ]
            },
            {
              type: 'tip',
              content: '记住配对原则：谁创建的（定时器/监听器/订阅），就在 onUnmounted 里销毁谁。'
            }
          ]
        },
        {
          id: 'vue-communication',
          title: '5.2 组件通信方式总结',
          sections: [
            { type: 'text', content: 'props/emit 解决父子通信，但组件层级一深，逐层传递（prop drilling）就很痛苦。Vue 提供了跨层级方案 **provide / inject**，全局状态则交给 Pinia（第六章）。' },
            {
              type: 'code',
              title: 'provide / inject 跨层级传值',
              lang: 'javascript',
              code: "// 祖先组件 provide（提供）\nimport { provide, ref } from \"vue\"\nconst theme = ref(\"dark\")\nprovide(\"theme\", theme)          // key + 响应式数据\n\n// 任意深层子孙组件 inject（注入）\nimport { inject } from \"vue\"\nconst theme = inject(\"theme\", \"light\")   // 第二个参数是默认值\ntemplate 里直接用 theme，改 theme.value 全家同步"
            },
            {
              type: 'list',
              title: '通信方式选型表',
              items: [
                '父子：**props 下行 + emit 上行**（90% 的场景）',
                '祖孙/跨层级：**provide / inject**',
                '任意组件共享的**全局状态**：Pinia（用户信息、购物车、主题）',
                '模板引用：`ref()` 拿到子组件实例直接调用其方法（兜底手段，别滥用）'
              ]
            },
            {
              type: 'tip',
              content: '通信越多组件耦合越重。设计组件时先想想"能不能靠 props + emit 解决"，实在不行再升级手段。'
            }
          ]
        },
        {
          id: 'vue-composables',
          title: '5.3 组合式函数（Composables）',
          sections: [
            { type: 'text', content: '**组合式函数**是"use 开头的可复用逻辑函数"：把一段带响应式数据的逻辑（如鼠标位置、倒计时、请求封装）抽出来，多个组件共享。这是组合式 API 最大的威力。' },
            {
              type: 'code',
              title: '自己写一个 useMouse',
              lang: 'javascript',
              code: "// src/composables/useMouse.js\nimport { ref, onMounted, onUnmounted } from \"vue\"\n\nexport function useMouse() {\n  const x = ref(0)\n  const y = ref(0)\n\n  function update(e) {\n    x.value = e.pageX\n    y.value = e.pageY\n  }\n\n  onMounted(() => window.addEventListener(\"mousemove\", update))\n  onUnmounted(() => window.removeEventListener(\"mousemove\", update))\n\n  return { x, y }        // 把响应式状态暴露出去\n}"
            },
            {
              type: 'code',
              title: '组件里一行接入',
              lang: 'javascript',
              code: "<script setup>\nimport { useMouse } from \"../composables/useMouse\"\nconst { x, y } = useMouse()   // 鼠标位置实时响应式更新\n</script>\n\n<template>\n  <p>鼠标位置：{{ x }}, {{ y }}</p>\n</template>"
            },
            {
              type: 'list',
              title: '约定与生态',
              items: [
                '命名必须 use 开头：useMouse、useFetch、useStorage',
                '官方维护的 VueUse 库有 200+ 现成组合式函数，先查再造',
                '和"工具函数"的区别：组合式函数内部**包含响应式状态和生命周期**'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第六章 路由与状态 ============ */
    {
      id: 'vue-ch6',
      title: '第六章 路由与状态管理',
      lessons: [
        {
          id: 'vue-router-basic',
          title: '6.1 Vue Router：单页应用的导航',
          sections: [
            { type: 'text', content: '单页应用（SPA）只有一个 HTML，"换页"其实是**切换组件**——这件事由 Vue Router 负责。配置路径与组件的映射，router-link 跳转，router-view 渲染。' },
            {
              type: 'code',
              title: '路由配置（本站同款结构）',
              lang: 'javascript',
              code: "// src/router/index.js\nimport { createRouter, createWebHashHistory } from \"vue-router\"\nimport Home from \"../views/Home.vue\"\n\nconst router = createRouter({\n  history: createWebHashHistory(),       // hash 模式（URL 带 #），部署最省心\n  routes: [\n    { path: \"/\", component: Home },\n    { path: \"/category/:id\", component: () => import(\"../views/Category.vue\") },  // 动态路由+懒加载\n    { path: \"/quiz\", component: () => import(\"../views/Quiz.vue\") }\n  ]\n})\n\nexport default router"
            },
            {
              type: 'code',
              title: '页面里使用',
              lang: 'html',
              code: "<template>\n  <!-- router-link：导航（渲染成 a 标签，但不刷新页面） -->\n  <router-link to=\"/\">首页</router-link>\n  <router-link :to=\"'/category/' + cat.id\">{{ cat.name }}</router-link>\n\n  <!-- 路由出口：匹配到的组件渲染在这里 -->\n  <router-view />\n</template>\n\n<script setup>\nimport { useRoute, useRouter } from \"vue-router\"\nconst route = useRoute()    // 当前路由信息（取参数）\nconsole.log(route.params.id)\nconst router = useRouter()  // 编程式导航\nfunction goHome() { router.push(\"/\") }\n</script>"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'hash 模式（#/path）部署无需服务器配置；history 模式 URL 更干净但要服务器兜底',
                '`component: () => import(...)` 是**路由懒加载**：用到才加载，首屏更快',
                'route.params 取路径参数，route.query 取 ?a=1 查询参数'
              ]
            }
          ]
        },
        {
          id: 'vue-router-guard',
          title: '6.2 导航守卫与动态路由',
          sections: [
            { type: 'text', content: '**导航守卫**是路由跳转的"安检员"：登录校验、权限控制都写在这里。`:id` 动态参数让一条路由规则服务一类页面（本站的课时页就是这样）。' },
            {
              type: 'code',
              title: '守卫与参数',
              lang: 'javascript',
              code: "// 全局前置守卫：每次跳转前都会经过\nrouter.beforeEach((to, from) => {\n  // to：要去哪；from：从哪来\n  const needLogin = to.meta.requireLogin       // 路由元信息\n  if (needLogin && !localStorage.getItem(\"token\")) {\n    return \"/login\"            // 返回路径 = 重定向拦截\n  }\n  // 不返回或返回 true = 放行\n})\n\n// 路由表里标记谁需要登录\n// { path: \"/admin\", component: Admin, meta: { requireLogin: true } }\n\n// 动态路由 /lesson/:id，同一路由参数变化时组件会复用，要监听参数：\nwatch(() => route.params.id, (newId) => {\n  loadLesson(newId)            // 参数变了重新加载数据\n})"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '守卫返回 false 取消导航，返回路由路径则重定向',
                '组件被复用时（仅参数变）生命周期不会重跑，记得 watch 路由参数',
                '404 路由：`{ path: \"/:pathMatch(.*)*\", component: NotFound }` 放最后'
              ]
            }
          ]
        },
        {
          id: 'vue-pinia',
          title: '6.3 Pinia：全局状态管理',
          sections: [
            { type: 'text', content: '当很多组件都要读写**同一份全局数据**（登录用户、购物车、主题设置），靠 props 层层传就疯了。**Pinia**（Vue 官方状态库）把这些数据放在"全局仓库"，谁要用谁取。' },
            {
              type: 'code',
              title: '定义一个 store',
              lang: 'javascript',
              code: "// src/stores/user.js\nimport { defineStore } from \"pinia\"\nimport { ref, computed } from \"vue\"\n\nexport const useUserStore = defineStore(\"user\", () => {\n  // state：数据\n  const name = ref(\"\")\n  const isLogin = computed(() => name.value !== \"\")   // getter\n\n  // action：修改数据的方法\n  function login(userName) { name.value = userName }\n  function logout() { name.value = \"\" }\n\n  return { name, isLogin, login, logout }\n})"
            },
            {
              type: 'code',
              title: '任意组件使用',
              lang: 'javascript',
              code: "<script setup>\nimport { useUserStore } from \"../stores/user\"\nconst user = useUserStore()\n\nuser.login(\"小明\")            // 调用 action\nconsole.log(user.name)        // 读状态\nconsole.log(user.isLogin)     // 用 getter\n</script>\n\n<template>\n  <p v-if=\"user.isLogin\">欢迎，{{ user.name }}</p>\n</template>"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                '一个业务域一个 store（user/cart/theme），不要把所有数据塞一个 store',
                '状态放 store 后，组件里的 props/emit 链条大幅缩短',
                '配合持久化插件 pinia-plugin-persistedstate，刷新页面状态不丢'
              ]
            }
          ]
        },
        {
          id: 'vue-axios',
          title: '6.4 请求接口：axios 与加载状态',
          sections: [
            { type: 'text', content: '页面数据通常来自后端接口。用 **axios**（或原生 fetch）请求，配合 ref 管理 loading / data / error 三态，这是列表页的标准写法。' },
            {
              type: 'code',
              title: '接口请求标准三态',
              lang: 'javascript',
              code: "// npm install axios\nimport axios from \"axios\"\nimport { ref, onMounted } from \"vue\"\n\nconst list = ref([])\nconst loading = ref(false)\nconst error = ref(\"\")\n\nasync function fetchList() {\n  loading.value = true\n  error.value = \"\"\n  try {\n    const res = await axios.get(\"/api/students\", { params: { page: 1 } })\n    list.value = res.data\n  } catch (e) {\n    error.value = \"加载失败，请稍后重试\"\n  } finally {\n    loading.value = false          // 无论成败都关 loading\n  }\n}\n\nonMounted(fetchList)"
            },
            {
              type: 'code',
              title: '模板三态渲染',
              lang: 'html',
              code: "<template>\n  <p v-if=\"loading\">加载中...</p>\n  <p v-else-if=\"error\">{{ error }}</p>\n  <ul v-else>\n    <li v-for=\"s in list\" :key=\"s.id\">{{ s.name }}</li>\n  </ul>\n</template>"
            },
            {
              type: 'list',
              title: '要点',
              items: [
                'axios.create({ baseURL, timeout }) 封装公共配置；拦截器统一加 token、统一处理错误',
                'fetch 是原生方案，轻量但要手动抛错、手动转 JSON',
                '接口地址别写死：开发用 Vite 代理，生产用环境变量（第八章）'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第七章 实战技巧 ============ */
    {
      id: 'vue-ch7',
      title: '第七章 实战技巧',
      lessons: [
        {
          id: 'vue-key-detail',
          title: '7.1 v-for 之 key 深入与列表更新',
          sections: [
            { type: 'text', content: '数组更新触发列表重新渲染时，Vue 用 **diff 算法**对比新旧虚拟 DOM，key 就是 diff 的比对依据。理解它，才算真懂列表更新。' },
            {
              type: 'code',
              title: 'key 的正确与错误用法',
              lang: 'javascript',
              code: "// ✅ 正确：用数据里唯一稳定的 id\n<li v-for=\"item in list\" :key=\"item.id\">{{ item.name }}</li>\n\n// ❌ 错误：用下标做 key\n// 在头部插入/排序/删除时，下标全部位移，diff 大量误判\n// 轻则性能差，重则带输入框的列表出现内容错乱\n<li v-for=\"(item, i) in list\" :key=\"i\">{{ item.name }}</li>\n\n// 常用更新操作（Vue 会自动响应）\nlist.value.push(newItem)              // 增\nlist.value.splice(index, 1)           // 删\nlist.value[index].name = \"新名字\"      // 改\nlist.value = list.value.filter(...)   // 过滤替换（触发 diff）\nlist.value.sort((a, b) => a.age - b.age)  // 排序（key 保住状态不乱）"
            },
            {
              type: 'list',
              title: '经验法则',
              items: [
                'id 都没有的数据（纯字符串列表）可以用字符串本身做 key',
                '列表项里带 input/组件内部状态时，key 错了 bug 会非常明显',
                '大量数据渲染卡顿：上分页，或用虚拟滚动（vueuse 的 useVirtualList）'
              ]
            }
          ]
        },
        {
          id: 'vue-transition',
          title: '7.2 过渡动画与组件懒加载',
          sections: [
            { type: 'text', content: 'Vue 内置 **<Transition>** 组件，在元素插入/移除时自动帮你加动画 class；**defineAsyncComponent** 则让组件按需加载，首屏更快。' },
            {
              type: 'code',
              title: '过渡动画',
              lang: 'html',
              code: "<template>\n  <button @click=\"show = !show\">切换</button>\n  <Transition name=\"fade\">\n    <p v-if=\"show\">我会淡入淡出</p>\n  </Transition>\n</template>\n\n<style scoped>\n/* 进入过程 / 离开过程，Vue 自动切这三个类 */\n.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }\n.fade-enter-from, .fade-leave-to { opacity: 0; }\n</style>"
            },
            {
              type: 'code',
              title: '异步组件（懒加载）',
              lang: 'javascript',
              code: "import { defineAsyncComponent } from \"vue\"\n\n// 大组件（图表、编辑器）用到时才下载\nconst HeavyChart = defineAsyncComponent(() =>\n  import(\"./components/HeavyChart.vue\")\n)\n// 路由懒加载（第六章）本质上也是这个思路\n// component: () => import(\"../views/Quiz.vue\")"
            },
            {
              type: 'tip',
              content: '动画类名规律：name=\"fade\" 则是 fade-enter-from（起点）、fade-enter-active（过程）、fade-enter-to（终点），leave 同理。'
            }
          ]
        },
        {
          id: 'vue-debug',
          title: '7.3 常见坑与调试',
          sections: [
            { type: 'text', content: '列一组新手高频 bug 和排查方法，遇到问题先对号入座。' },
            {
              type: 'list',
              title: '高频坑位表',
              items: [
                '改了数据页面没更新 → 忘了 .value（脚本里）或数据被解构丢了响应式',
                'props 报警告 \"Set operation on key... failed\" → 子组件直接改 props，改成 emit 让父组件改',
                'v-for 页面内容串位 → key 用了下标，换成唯一 id',
                'onMounted 里拿不到某个 DOM → 元素在 v-if 里还没渲染，改用 watch + nextTick',
                '刷新后登录态丢失 → store 没持久化，接 pinia-plugin-persistedstate 或 localStorage'
              ]
            },
            {
              type: 'code',
              title: '两个调试利器',
              lang: 'javascript',
              code: "// 1. nextTick：等 DOM 更新完成后再操作\nimport { nextTick } from \"vue\"\nasync function addItem() {\n  list.value.push(newItem)\n  await nextTick()\n  document.querySelector(\".list\").scrollTop = 99999   // 这时 DOM 才是新的\n}\n\n// 2. Vue Devtools 浏览器插件：\n// 可视化查看组件树、每个组件的 props/状态，Pinia 数据也能直接改"
            },
            {
              type: 'tip',
              content: '控制台出现 Vue 警告不要无视，它们几乎都指向真实的隐患；开发版 Vue 的警告在生产构建里不会出现。'
            }
          ]
        }
      ]
    },

    /* ============ 第八章 工程化 ============ */
    {
      id: 'vue-ch8',
      title: '第八章 工程化',
      lessons: [
        {
          id: 'vue-env-build',
          title: '8.1 环境变量与打包部署',
          sections: [
            { type: 'text', content: '开发环境和生产环境的接口地址通常不同。Vite 用 **.env 文件**管理环境变量（必须以 VITE_ 开头才会暴露给前端），`npm run build` 打包出纯静态文件。' },
            {
              type: 'code',
              title: '环境变量与使用',
              lang: 'text',
              code: '# .env.development（开发环境）\nVITE_API_BASE=http://localhost:3000/api\n\n# .env.production（生产环境，build 时生效）\nVITE_API_BASE=https://api.mysite.com'
            },
            {
              type: 'code',
              title: '代码中读取',
              lang: 'javascript',
              code: "const BASE = import.meta.env.VITE_API_BASE\naxios.defaults.baseURL = BASE"
            },
            {
              type: 'list',
              title: '部署三部曲',
              items: [
                '`npm run build` 生成 dist 目录（纯静态：html/css/js）',
                '把 dist 扔给任意静态服务器：Nginx、Vercel、Netlify 都行',
                'history 模式路由需要服务器把所有路径回退到 index.html（Nginx try_files 配置）；hash 模式无需此步'
              ]
            },
            {
              type: 'tip',
              content: '前端环境变量会打进打包产物里，用户可见——所以后端密钥绝对不能放这里，敏感逻辑必须放在服务端。'
            }
          ]
        },
        {
          id: 'vue-lint',
          title: '8.2 代码规范：ESLint 与 Prettier',
          sections: [
            { type: 'text', content: '**ESLint** 检查代码质量问题（未使用变量、可能的 bug），**Prettier** 统一格式（缩进、引号、分号）。两者配合 + 保存自动格式化，团队代码风格立刻一致。' },
            {
              type: 'code',
              title: '创建项目时勾选，或手动安装',
              lang: 'text',
              code: '# npm create vue@latest 时勾选 ESLint + Prettier 即可\n\n# 常用命令\nnpm run lint          # 检查并尝试修复\nnpm run format        # 全项目格式化'
            },
            {
              type: 'list',
              title: 'VS Code 推荐配置',
              items: [
                '安装 ESLint + Prettier 插件',
                '设置里开启 Format On Save（保存即格式化）',
                '设 Prettier 为默认格式化工具，冲突时以 Prettier 为准'
              ]
            },
            {
              type: 'tip',
              content: '规范的价值在协作：三个月后的你也是"协作者"。个人项目也建议开着，养成肌肉记忆。'
            }
          ]
        },
        {
          id: 'vue-structure',
          title: '8.3 项目组织最佳实践',
          sections: [
            { type: 'text', content: '项目变大后，目录结构决定可维护性。参考下面这套通用组织（本站就是这个结构）。' },
            {
              type: 'code',
              title: '推荐的目录结构',
              lang: 'text',
              code: 'src/\n├── main.js            # 入口\n├── App.vue            # 根组件（只负责骨架）\n├── router/index.js    # 路由\n├── stores/            # Pinia 状态\n├── views/             # 页面级组件（对应路由）\n├── components/        # 通用组件（按钮、卡片、代码块...）\n├── composables/       # 组合式函数\n├── data/              # 静态数据/配置\n└── assets/            # 全局样式、图片'
            },
            {
              type: 'list',
              title: '组织原则',
              items: [
                'views 只放"路由对应的页面"，可复用的 UI 一律沉到 components',
                '组件超过 300 行就该考虑拆分：按功能块拆子组件，逻辑抽 composable',
                '命名：views 用页面名（Home/Quiz），components 用大驼峰（CodeBlock/MyCard）'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第九章 综合实战 ============ */
    {
      id: 'vue-ch9',
      title: '第九章 综合实战',
      lessons: [
        {
          id: 'vue-todo',
          title: '9.1 实战一：待办事项（Todo List）',
          sections: [
            { type: 'text', content: '前端界的"Hello World 进阶版"：一个文件用上 ref、v-model、v-for、computed、watch 持久化，把第二三章的知识全部串起来。' },
            {
              type: 'code',
              title: 'TodoApp.vue 完整代码',
              lang: 'javascript',
              code: "<template>\n  <div>\n    <input v-model.trim=\"newTodo\" @keyup.enter=\"add\" placeholder=\"输入待办，回车添加\">\n    <ul>\n      <li v-for=\"todo in filteredTodos\" :key=\"todo.id\">\n        <input type=\"checkbox\" v-model=\"todo.done\">\n        <span :class=\"{ done: todo.done }\">{{ todo.text }}</span>\n        <button @click=\"remove(todo.id)\">删</button>\n      </li>\n    </ul>\n    <p>\n      <button @click=\"filter = 'all'\">全部</button>\n      <button @click=\"filter = 'doing'\">未完成</button>\n      <button @click=\"filter = 'done'\">已完成</button>\n      共 {{ todos.length }} 项，剩 {{ remaining }} 项未完成\n    </p>\n  </div>\n</template>\n\n<script setup>\nimport { ref, computed, watch } from \"vue\"\n\n// 数据 + 持久化\nconst todos = ref(JSON.parse(localStorage.getItem(\"todos\") || \"[]\"))\nwatch(todos, (val) => localStorage.setItem(\"todos\", JSON.stringify(val)), { deep: true })\n\nconst newTodo = ref(\"\")\nconst filter = ref(\"all\")\n\nfunction add() {\n  if (!newTodo.value) return\n  todos.value.push({ id: Date.now(), text: newTodo.value, done: false })\n  newTodo.value = \"\"\n}\nfunction remove(id) {\n  todos.value = todos.value.filter(t => t.id !== id)\n}\n\n// computed：过滤列表 + 剩余数（数据变自动重算）\nconst filteredTodos = computed(() => {\n  if (filter.value === \"doing\") return todos.value.filter(t => !t.done)\n  if (filter.value === \"done\") return todos.value.filter(t => t.done)\n  return todos.value\n})\nconst remaining = computed(() => todos.value.filter(t => !t.done).length)\n</script>\n\n<style scoped>\n.done { text-decoration: line-through; color: #999; }\n</style>"
            },
            {
              type: 'list',
              title: '复盘：这个组件用到了什么',
              items: [
                'v-model 双向绑定 + @keyup.enter 修饰符',
                'v-for 列表渲染 + 唯一 id 做 key',
                'computed 派生数据（过滤、计数）',
                'watch + localStorage 持久化，刷新不丢数据'
              ]
            }
          ]
        },
        {
          id: 'vue-list-page',
          title: '9.2 实战二：带搜索的接口列表页',
          sections: [
            { type: 'text', content: '真实业务最常见的页面形态：**请求接口 + 搜索过滤 + 加载状态**。把第三、六章的三态请求和 computed 结合起来。' },
            {
              type: 'code',
              title: 'StudentList.vue 核心逻辑',
              lang: 'javascript',
              code: "<template>\n  <input v-model.trim=\"keyword\" placeholder=\"搜索姓名\">\n\n  <p v-if=\"loading\">加载中...</p>\n  <p v-else-if=\"error\">{{ error }} <button @click=\"fetchList\">重试</button></p>\n  <p v-else-if=\"filteredList.length === 0\">没有匹配的学生</p>\n  <ul v-else>\n    <li v-for=\"s in filteredList\" :key=\"s.id\">{{ s.name }} - {{ s.city }}</li>\n  </ul>\n  <p>共 {{ filteredList.length }} 人</p>\n</template>\n\n<script setup>\nimport { ref, computed, onMounted } from \"vue\"\nimport axios from \"axios\"\n\nconst list = ref([]), keyword = ref(\"\")\nconst loading = ref(false), error = ref(\"\")\n\nasync function fetchList() {\n  loading.value = true; error.value = \"\"\n  try {\n    const res = await axios.get(\"/api/students\")\n    list.value = res.data\n  } catch { error.value = \"加载失败\" } finally { loading.value = false }\n}\n\n// 搜索：纯前端过滤用 computed（数据源不变时零请求）\nconst filteredList = computed(() =>\n  list.value.filter(s => s.name.includes(keyword.value))\n)\n\nonMounted(fetchList)\n</script>"
            },
            {
              type: 'list',
              title: '进阶方向',
              items: [
                '搜索请求防抖：watch keyword + debounce，避免每敲一个字发一次请求',
                '分页：page/pageSize 状态 + watch 联动重新请求',
                '抽成 useList() 组合式函数，所有列表页复用（第五章）'
              ]
            },
            {
              type: 'tip',
              content: '写完这两个项目，你已经具备独立开发 Vue 页面的能力——本站每个页面（首页/分类/课时/测试）用的都是同样的套路。'
            }
          ]
        },
        {
          id: 'vue-roadmap',
          title: '9.3 学习路线与方向',
          sections: [
            { type: 'text', content: '掌握本站内容后，Vue 的日常开发你已经能上手。下面是进阶地图。' },
            {
              type: 'list',
              title: '进阶路线',
              items: [
                '**UI 组件库**：Element Plus / Ant Design Vue / Naive UI，表单表格秒搭',
                '**TS 化**：TypeScript + Vue（defineProps 泛型、类型安全 store），中大型项目标配',
                '**服务端渲染**：Nuxt 3（SSR/SSG），做 SEO 友好的官网和内容站',
                '**原理深入**：虚拟 DOM 与 diff、Proxy 响应式、编译优化（patch flags）',
                '**周边生态**：VueUse、 UnoCSS/Tailwind、Vitest 单元测试、Vite 插件开发'
              ]
            },
            {
              type: 'list',
              title: '实战建议',
              items: [
                '给本站加功能就是最好的练习：学习进度保存（localStorage/Pinia）、笔记功能、题目收藏',
                '做一个完整的个人小站（博客/工具集），走完开发-打包-部署全流程',
                '每学一章回综合测试自测 Vue 范围，查漏补缺'
              ]
            },
            {
              type: 'tip',
              content: '官方文档 cn.vuejs.org 的深度指南和示例 playground 质量极高，遇到疑问先查官方文档再搜博客。'
            }
          ]
        }
      ]
    }
  ]
}
