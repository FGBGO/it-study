// ============================================================
// 小程序开发（uni-app）分类教学数据
// 结构：id / name / short / color / description / chapters
// chapters -> lessons -> sections（text / list / code / tip / warn / table）
// ============================================================

export default {
  id: 'uniapp',
  name: '小程序开发（uni-app）',
  short: 'uni-app',
  color: '#07c160',
  description: '一套 Vue 语法的代码同时发布微信小程序、H5、App：移动端开发的跨端利器',
  chapters: [
    /* ============ 第一章 认识小程序与 uni-app ============ */
    {
      id: 'ua-ch1',
      title: '第一章 认识小程序与 uni-app',
      lessons: [
        {
          id: 'ua-what-is-mp',
          title: '1.1 什么是微信小程序',
          sections: [
            { type: 'text', content: '**小程序**是一种"不用下载安装、在微信里扫码或搜索就能用"的轻应用。它介于网页和原生 App 之间：比网页更流畅、能调用微信能力（登录、支付、扫码），又比 App 轻量——用完即走，不占桌面。你在微信里用的点餐、共享单车、健康码，大多是小程序。' },
            {
              type: 'table',
              title: '小程序 vs H5 网页 vs 原生 App',
              headers: ['对比项', 'H5 网页', '微信小程序', '原生 App'],
              rows: [
                ['获取方式', '浏览器输入网址', '微信内搜索/扫码', '应用商店下载安装'],
                ['开发语言', 'HTML/CSS/JS', '类前端语法（wxml/wxss 或 Vue）', 'Java/Kotlin、Swift'],
                ['能力', '受浏览器限制', '可调用微信登录/支付/相机等', '能力最全'],
                ['审核', '无', '需微信审核', '需应用商店审核'],
                ['体验', '一般', '接近原生', '最好']
              ]
            },
            {
              type: 'list',
              title: '小程序的技术特点',
              items: [
                '**双线程模型**：视图层（渲染界面）和逻辑层（JS）分开运行，通过通信桥交换数据',
                '**没有 DOM/BOM**：不能用 document.getElementById，也没有 window 对象',
                '**组件化标签**：用 view、text、image 等小程序组件代替 div、span、img',
                '**rpx 单位**：自带响应式尺寸，750rpx 恒等于屏幕宽度'
              ]
            },
            { type: 'tip', content: '这就是为什么学完本站的 Vue 课再来学小程序会非常顺：uni-app 让你继续写 Vue，底层帮你翻译成小程序能懂的代码。' }
          ]
        },
        {
          id: 'ua-why-uniapp',
          title: '1.2 原生小程序 vs uni-app',
          sections: [
            { type: 'text', content: '开发微信小程序有两条路：**原生开发**（微信自己的 wxml/wxss/js 语法）和 **uni-app**（用 Vue 语法写，编译成小程序）。uni-app 是 DCloud 推出的跨端框架：**一套代码，可发布到微信小程序、支付宝小程序、H5、App 等十几个平台**。' },
            {
              type: 'table',
              title: '两种开发方式对比',
              headers: ['对比项', '微信原生', 'uni-app'],
              rows: [
                ['语法', 'wxml + wxss + js（自研）', 'Vue 单文件组件（你已学过）'],
                ['跨端能力', '只能微信小程序', '小程序/H5/App 一套代码'],
                ['生态', '微信官方组件', '插件市场 + uni-ui 组件库'],
                ['学习成本', '需重新学一套模板语法', '会 Vue 就会一大半'],
                ['调试工具', '微信开发者工具', 'HBuilderX + 微信开发者工具']
              ]
            },
            {
              type: 'list',
              title: '为什么本课程选 uni-app',
              items: [
                '**知识复用**：Vue 的数据绑定、组件、props/emit、Pinia 全部直接用',
                '**一套多端**：写一次，微信小程序、H5 网页、手机 App 都能出',
                '**生态成熟**：uni-ui 组件库、uView 等开箱即用',
                '**就业面广**：国内大量公司用 uni-app 做小程序和混合 App'
              ]
            },
            { type: 'warn', content: 'uni-app 不是"银弹"：需要极致性能或深度原生能力（复杂动画、蓝牙底层）的场景，原生更合适。但 90% 的业务类小程序，uni-app 完全够用。' }
          ]
        },
        {
          id: 'ua-env-setup',
          title: '1.3 开发环境搭建',
          sections: [
            { type: 'text', content: '开发 uni-app 小程序需要两个工具配合：**HBuilderX**（写代码、编译，uni-app 官方 IDE）和**微信开发者工具**（预览、调试、上传小程序）。另外需要一个小程序的 AppID（身份证）。' },
            {
              type: 'list',
              title: '三步搭好环境',
              items: [
                '**1. 注册小程序账号**：mp.weixin.qq.com 注册"小程序"类型账号（个人可免费注册），在「开发管理 → 开发设置」里拿到 AppID',
                '**2. 下载 HBuilderX**：dcloud.io 下载"正式版"（内置 uni-app 编译器，开箱即用）',
                '**3. 下载微信开发者工具**：developers.weixin.qq.com 下载稳定版；在工具「设置 → 安全设置」里打开「服务端口」（HBuilderX 要靠它唤起工具）'
              ]
            },
            {
              type: 'code',
              title: '创建并运行第一个项目',
              lang: 'text',
              code: "1. HBuilderX：文件 -> 新建 -> 项目 -> 选 uni-app\n   模板选「默认模板」，Vue 版本选 Vue 3\n2. 菜单「运行 -> 运行到小程序模拟器 -> 微信开发者工具」\n3. 首次运行提示填写 AppID：\n   打开 manifest.json -> 微信小程序配置 -> 填入你的 AppID\n   （没有 AppID 可先选「测试号」，部分能力受限）\n4. HBuilderX 自动编译并唤起微信开发者工具，看到页面即成功"
            },
            { type: 'tip', content: '也可以用 CLI 方式（vue-cli / vite 创建）配合 VS Code 开发，但新手强烈建议先用 HBuilderX，零配置、运行按钮一点就通。' }
          ]
        }
      ]
    },

    /* ============ 第二章 项目结构与配置 ============ */
    {
      id: 'ua-ch2',
      title: '第二章 项目结构与配置',
      lessons: [
        {
          id: 'ua-structure',
          title: '2.1 项目目录结构',
          sections: [
            { type: 'text', content: 'uni-app 项目遵循"约定优于配置"：页面放哪、静态资源放哪、全局样式放哪都有固定位置，和你学过的 Vite 项目思路一致。' },
            {
              type: 'code',
              title: '标准目录结构',
              lang: 'text',
              code: "my-uniapp/\n├── pages/                 # ★ 所有页面（每个页面一个文件夹）\n│   ├── index/index.vue    # 首页\n│   └── mine/mine.vue      # 我的页\n├── static/                # 静态资源（图片、图标，注意：不编译，原样拷贝）\n├── components/            # 自定义组件\n├── App.vue                # 应用根组件（全局生命周期、全局样式）\n├── main.js                # 应用入口（创建 app、注册插件）\n├── pages.json             # ★ 页面路由、导航栏、tabBar 配置\n├── manifest.json          # ★ 应用配置（AppID、名称、各端设置）\n└── uni.scss               # 全局样式变量（可选）"
            },
            {
              type: 'list',
              title: '和纯 Vue 项目的关键区别',
              items: [
                '**pages.json 是核心**：页面必须在这里注册，不注册打不开（相当于路由表 + 全局样式配置）',
                '**static 目录特殊**：放这里的图片不会被编译处理，引用时写绝对路径 /static/logo.png',
                '**没有 vue-router**：路由由 pages.json + uni.navigateTo 系列 API 管理',
                '**App.vue 不放界面**：它只写全局生命周期（onLaunch 等）和全局样式'
              ]
            }
          ]
        },
        {
          id: 'ua-pages-json',
          title: '2.2 pages.json：路由与窗口配置',
          sections: [
            { type: 'text', content: 'pages.json 是 uni-app 最重要的配置文件，干三件事：**注册页面路径**、**配置导航栏样式**、**配置底部 tabBar**。数组第一项就是小程序启动后的首页。' },
            {
              type: 'code',
              title: 'pages.json 典型配置',
              lang: 'json',
              code: "{\n  \"pages\": [\n    {\n      \"path\": \"pages/index/index\",\n      \"style\": {\n        \"navigationBarTitleText\": \"首页\",\n        \"navigationBarBackgroundColor\": \"#07c160\",\n        \"navigationBarTextStyle\": \"white\"\n      }\n    },\n    {\n      \"path\": \"pages/mine/mine\",\n      \"style\": { \"navigationBarTitleText\": \"我的\" }\n    }\n  ],\n  \"globalStyle\": {\n    \"navigationBarTitleText\": \"我的小程序\",\n    \"navigationBarBackgroundColor\": \"#ffffff\",\n    \"navigationBarTextStyle\": \"black\",\n    \"backgroundColor\": \"#f5f5f5\"\n  },\n  \"tabBar\": {\n    \"color\": \"#999999\",\n    \"selectedColor\": \"#07c160\",\n    \"list\": [\n      { \"pagePath\": \"pages/index/index\", \"text\": \"首页\",\n        \"iconPath\": \"static/home.png\",\n        \"selectedIconPath\": \"static/home-on.png\" },\n      { \"pagePath\": \"pages/mine/mine\", \"text\": \"我的\",\n        \"iconPath\": \"static/mine.png\",\n        \"selectedIconPath\": \"static/mine-on.png\" }\n    ]\n  }\n}"
            },
            {
              type: 'list',
              title: '配置要点',
              items: [
                '**pages 数组**：每项 path 对应 pages 目录下的 .vue 文件（不用写后缀）',
                '**style**：单页样式，优先级高于 globalStyle；可配导航栏文字、颜色、是否下拉刷新',
                '**tabBar**：底部导航，list 至少 2 项、最多 5 项；图标放 static 目录，建议 81×81px',
                '**HBuilderX 可视化编辑**：双击 pages.json 可切到表单界面填，不用手写 JSON'
              ]
            },
            { type: 'warn', content: '新加页面忘了在 pages.json 注册，跳转时会报 "page is not found"。这是新手第一高频错误。' }
          ]
        },
        {
          id: 'ua-manifest',
          title: '2.3 manifest.json 与 App.vue',
          sections: [
            { type: 'text', content: 'manifest.json 是"应用身份证"：应用名称、AppID、各平台的专属设置都在这里。App.vue 则是应用根组件，管理**应用级生命周期**——注意它和页面生命周期是两回事。' },
            {
              type: 'code',
              title: 'manifest.json 关键字段',
              lang: 'json',
              code: "{\n  \"name\": \"我的学习小程序\",\n  \"appid\": \"\",\n  \"mp-weixin\": {\n    \"appid\": \"wx1234567890abcdef\",\n    \"setting\": { \"urlCheck\": false },\n    \"usingComponents\": true\n  },\n  \"h5\": { \"title\": \"我的学习小程序\" }\n}"
            },
            {
              type: 'code',
              title: 'App.vue：应用生命周期',
              lang: 'vue',
              code: "<script setup>\n// 应用级生命周期（整个小程序只触发一次）\nimport { onLaunch, onShow, onHide } from '@dcloudio/uni-app'\n\nonLaunch(() => {\n  console.log('小程序启动时触发一次：适合读本地缓存、自动登录')\n})\nonShow(() => {\n  console.log('小程序从后台进入前台时触发')\n})\nonHide(() => {\n  console.log('小程序切到后台（按 Home 键）时触发')\n})\n</script>\n\n<style>\n/* App.vue 里的样式是全局样式，所有页面生效 */\npage { background-color: #f5f5f5; }\n</style>"
            },
            { type: 'tip', content: '记忆层级：onLaunch/onShow/onHide 管"整个应用"；页面里的 onLoad/onShow 管"单个页面"。App 级 onShow 在每次回到小程序时触发，页面级 onShow 在每次进入该页面时触发。' }
          ]
        }
      ]
    },

    /* ============ 第三章 页面与路由 ============ */
    {
      id: 'ua-ch3',
      title: '第三章 页面与路由',
      lessons: [
        {
          id: 'ua-first-page',
          title: '3.1 第一个页面：单文件结构',
          sections: [
            { type: 'text', content: 'uni-app 的页面就是 Vue 单文件组件：template 写结构、script 写逻辑、style 写样式。但标签换成了小程序组件：**view 相当于 div，text 相当于 span，image 相当于 img**。' },
            {
              type: 'code',
              title: 'pages/index/index.vue',
              lang: 'vue',
              code: "<template>\n  <view class=\"container\">\n    <text class=\"title\">{{ title }}</text>\n    <image class=\"logo\" src=\"/static/logo.png\" mode=\"aspectFit\" />\n    <button type=\"primary\" @tap=\"goDetail\">进入详情</button>\n  </view>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\n\n// 响应式数据：和 Vue 完全一样\nconst title = ref('你好，uni-app')\n\nfunction goDetail() {\n  uni.navigateTo({ url: '/pages/detail/detail?id=1' })\n}\n</script>\n\n<style scoped>\n.container { padding: 30rpx; }\n.title { font-size: 40rpx; font-weight: bold; }\n.logo { width: 200rpx; height: 200rpx; }\n</style>"
            },
            {
              type: 'table',
              title: 'HTML 标签 → 小程序组件对照',
              headers: ['HTML/Vue 网页', 'uni-app 小程序', '说明'],
              rows: [
                ['div', 'view', '容器（最常用）'],
                ['span / 文本', 'text', '行内文本，长按可复制'],
                ['img', 'image', '必须设 mode，默认 320×240 不缩放'],
                ['a 链接', 'navigator', '声明式跳转组件'],
                ['button', 'button', '按钮（有 open-type 微信能力）'],
                ['scroll 容器', 'scroll-view', '局部滚动区域']
              ]
            },
            { type: 'warn', content: '小程序里文字最好都包在 <text> 里，直接写在 view 里虽能显示，但无法设置部分文本样式；image 不写 mode 图片会变形。' }
          ]
        },
        {
          id: 'ua-navigation',
          title: '3.2 页面跳转四兄弟',
          sections: [
            { type: 'text', content: '小程序没有路由链接标签（navigator 组件除外），跳转靠 uni 的四个 API。它们的区别在于"是否保留当前页"和"能否跳 tabBar 页"，选错会导致页面栈混乱或跳转失败。' },
            {
              type: 'table',
              title: '四个跳转 API',
              headers: ['API', '行为', '页面栈', '能否跳 tabBar'],
              rows: [
                ['uni.navigateTo', '打开新页（可返回）', '入栈（最多 10 层）', '不能'],
                ['uni.redirectTo', '关闭当前页再打开', '替换栈顶', '不能'],
                ['uni.switchTab', '跳底部 tabBar 页', '清空非 tab 页', '只能跳 tabBar 页'],
                ['uni.reLaunch', '关闭所有页再打开', '栈清空只剩目标页', '都可以']
              ]
            },
            {
              type: 'code',
              title: '跳转与返回',
              lang: 'javascript',
              code: "// 普通跳转（详情页），左上角有返回箭头\nuni.navigateTo({ url: '/pages/detail/detail?id=1' })\n\n// 替换：登录页跳首页，不想让用户返回到登录页\nuni.redirectTo({ url: '/pages/index/index' })\n\n// 切 tabBar 页（首页/我的这种底部导航页）\nuni.switchTab({ url: '/pages/mine/mine' })\n\n// 重启应用到某页（如退出登录后）\nuni.reLaunch({ url: '/pages/login/login' })\n\n// 返回上一页 / 返回多级\nuni.navigateBack()\nuni.navigateBack({ delta: 2 })"
            },
            { type: 'tip', content: '高频坑：用 navigateTo 跳 tabBar 页面会静默失败。记住规律——去 tabBar 页用 switchTab，普通页用 navigateTo，"回不去"的场景用 redirectTo/reLaunch。' }
          ]
        },
        {
          id: 'ua-params',
          title: '3.3 页面传参与接收',
          sections: [
            { type: 'text', content: '跳转传参和网页 query string 一样拼在 URL 后面；接收方在**页面生命周期 onLoad** 里通过参数 options 拿到。复杂对象建议先存 Storage 或用全局状态，URL 有长度限制。' },
            {
              type: 'code',
              title: '传参 → 接收',
              lang: 'vue',
              code: "// A 页面：跳转时拼参数\nuni.navigateTo({\n  url: '/pages/detail/detail?id=100&name=' + encodeURIComponent('苹果')\n})\n\n// B 页面 detail.vue：onLoad 接收\n<script setup>\nimport { ref } from 'vue'\nimport { onLoad } from '@dcloudio/uni-app'\n\nconst id = ref('')\nconst name = ref('')\n\nonLoad((options) => {\n  console.log('收到的参数：', options)  // { id: '100', name: '苹果' }\n  id.value = options.id\n  name.value = decodeURIComponent(options.name || '')\n})\n</script>"
            },
            {
              type: 'list',
              title: '传参注意事项',
              items: [
                '**参数都是字符串**：数字、布尔值接收到后要自己转型',
                '**中文要编码**：参数含中文/特殊字符时用 encodeURIComponent，接收时 decodeURIComponent',
                '**对象别硬塞**：数据大用 uni.setStorage 存，传一个 id 过去再取',
                '**事件通道 EventChannel**：navigateTo 支持 events 回调，可实现页面间双向通信（进阶）'
              ]
            }
          ]
        },
        {
          id: 'ua-page-lifecycle',
          title: '3.4 页面生命周期',
          sections: [
            { type: 'text', content: '页面除了 Vue 组件本身的生命周期（onMounted 等），还有一套**小程序页面生命周期**，需要从 @dcloudio/uni-app 导入。数据加载通常写在 onLoad，需要"每次返回页面都刷新"的数据写在 onShow。' },
            {
              type: 'table',
              title: '页面生命周期触发时机',
              headers: ['钩子', '触发时机', '典型用途'],
              rows: [
                ['onLoad', '页面加载时（一次）', '接收上一页参数、首次加载数据'],
                ['onShow', '页面显示时（每次）', '刷新数据（如从详情页返回后更新列表）'],
                ['onReady', '页面首次渲染完成（一次）', '依赖界面渲染完成的操作'],
                ['onHide', '页面隐藏时', '暂停定时器、保存草稿'],
                ['onUnload', '页面卸载时（返回/redirect）', '清理定时器、解绑事件'],
                ['onPullDownRefresh', '下拉刷新', '重新拉取列表数据'],
                ['onReachBottom', '滚动到底部', '加载下一页（分页）']
              ]
            },
            {
              type: 'code',
              title: '组合使用示例',
              lang: 'vue',
              code: "<script setup>\nimport { ref } from 'vue'\nimport { onLoad, onShow, onReachBottom, onPullDownRefresh } from '@dcloudio/uni-app'\n\nconst list = ref([])\nconst page = ref(1)\n\nonLoad((options) => {\n  loadCategory(options.type)   // 只在进入页面时读一次参数\n})\nonShow(() => {\n  // 每次显示都刷新未读数等\n})\nonReachBottom(() => {\n  page.value++\n  loadList(page.value)          // 上拉加载更多\n})\nonPullDownRefresh(() => {\n  list.value = []\n  page.value = 1\n  loadList(1)\n  uni.stopPullDownRefresh()     // 手动停止刷新动画\n})\n</script>"
            },
            { type: 'tip', content: '下拉刷新需要先在 pages.json 的 style 里开启 \"enablePullDownRefresh\": true，否则 onPullDownRefresh 不会触发。' }
          ]
        }
      ]
    },

    /* ============ 第四章 视图层 ============ */
    {
      id: 'ua-ch4',
      title: '第四章 视图层：组件与样式',
      lessons: [
        {
          id: 'ua-binding',
          title: '4.1 数据绑定与列表渲染',
          sections: [
            { type: 'text', content: '好消息：模板里的数据绑定、v-for、v-if、computed、class/style 绑定——和 Vue 课学的**完全一致**。唯一要记住的是 key 绑定在小程序里编译为 wx:key，写法不变。' },
            {
              type: 'code',
              title: '列表渲染与条件渲染',
              lang: 'vue',
              code: "<template>\n  <view class=\"goods\">\n    <!-- v-if 条件渲染 -->\n    <text v-if=\"list.length === 0\">暂无数据</text>\n\n    <!-- v-for 列表渲染：:key 必写 -->\n    <view\n      v-for=\"item in list\"\n      :key=\"item.id\"\n      class=\"goods-item\"\n      @tap=\"tapItem(item)\"\n    >\n      <image :src=\"item.cover\" mode=\"aspectFill\" class=\"cover\" />\n      <text class=\"name\">{{ item.name }}</text>\n      <text class=\"price\">¥{{ item.price.toFixed(2) }}</text>\n    </view>\n  </view>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst list = ref([\n  { id: 1, name: '苹果', price: 5.5, cover: '/static/apple.png' },\n  { id: 2, name: '香蕉', price: 3.2, cover: '/static/banana.png' }\n])\nfunction tapItem(item) {\n  uni.navigateTo({ url: '/pages/detail/detail?id=' + item.id })\n}\n</script>"
            },
            {
              type: 'list',
              title: '小程序端的注意点',
              items: [
                '**:key 必须写且唯一**：长列表不写 key 会导致渲染错乱和性能问题',
                '**插值里能写表达式**：{{ price.toFixed(2) }} 可以，但别写复杂逻辑，用 computed',
                '**不支持 DOM 操作**：没有 ref 拿元素、没有 getElementById，想操作界面靠数据驱动',
                '**双向绑定**：表单用 v-model（uni-app 已封装好，底层对应小程序的 input 事件）'
              ]
            }
          ]
        },
        {
          id: 'ua-rpx',
          title: '4.2 rpx 响应式单位',
          sections: [
            { type: 'text', content: '**rpx（responsive pixel）** 是小程序专为多屏适配设计的尺寸单位：规定**屏幕宽度恒为 750rpx**。在 375px 宽的手机上 1rpx = 0.5px，在 414px 宽的手机上 1rpx ≈ 0.552px——同一套代码自动等比缩放。' },
            {
              type: 'table',
              title: '单位选择建议',
              headers: ['单位', '特点', '使用场景'],
              rows: [
                ['rpx', '随屏幕宽度等比缩放', '布局尺寸：宽高、间距、字号（主力单位）'],
                ['px', '固定物理像素', '1px 边框等不希望缩放的细节'],
                ['%', '相对父容器', '宽度比例布局'],
                ['vh/vw', '视口比例', '全屏容器']
              ]
            },
            {
              type: 'code',
              title: 'rpx 实战',
              lang: 'css',
              code: "/* 设计稿按 750px 宽出图时：量出多少 px 就写多少 rpx */\n.card {\n  width: 690rpx;          /* 左右各留 30rpx 边距 */\n  margin: 20rpx 30rpx;\n  padding: 30rpx;\n  border-radius: 16rpx;\n  font-size: 28rpx;        /* 正文常用 26~30rpx */\n}\n.title { font-size: 36rpx; font-weight: 600; }\n\n/* 细边框用 px，避免被缩放成模糊的 0.5rpx */\n.card { border-bottom: 1px solid #eee; }"
            },
            { type: 'tip', content: '设计师通常按 iPhone 6（375pt 宽）出 2 倍稿，即 750px 宽的设计图——图上量得 100px，样式直接写 100rpx，零换算。' }
          ]
        },
        {
          id: 'ua-form',
          title: '4.3 表单组件',
          sections: [
            { type: 'text', content: '小程序表单用 input、textarea、switch、picker 等组件，配合 v-model 收集数据。注意小程序的 input 是**自闭合组件**，没有 select 标签——下拉选择用 picker。' },
            {
              type: 'code',
              title: '常见表单写法',
              lang: 'vue',
              code: "<template>\n  <view class=\"form\">\n    <view class=\"row\">\n      <text>昵称</text>\n      <input v-model=\"form.nickname\" placeholder=\"请输入昵称\" />\n    </view>\n\n    <view class=\"row\">\n      <text>性别</text>\n      <!-- picker：底部滚轮选择器 -->\n      <picker :range=\"genders\" @change=\"onGenderChange\">\n        <text>{{ form.gender || '请选择' }}</text>\n      </picker>\n    </view>\n\n    <view class=\"row\">\n      <text>接收通知</text>\n      <switch :checked=\"form.notify\" @change=\"form.notify = $event.detail.value\" />\n    </view>\n\n    <button type=\"primary\" @tap=\"submit\">提交</button>\n  </view>\n</template>\n\n<script setup>\nimport { reactive } from 'vue'\nconst form = reactive({ nickname: '', gender: '', notify: true })\nconst genders = ['男', '女', '保密']\nfunction onGenderChange(e) {\n  form.gender = genders[e.detail.value]   // e.detail.value 是选中的下标\n}\nfunction submit() {\n  if (!form.nickname) return uni.showToast({ title: '请填昵称', icon: 'none' })\n  console.log('提交：', form)\n}\n</script>"
            },
            { type: 'warn', content: '小程序事件取值靠 e.detail：input 内容是 e.detail.value，switch 状态也是 e.detail.value——和网页的 e.target.value 不同。' }
          ]
        },
        {
          id: 'ua-layout-components',
          title: '4.4 常用布局组件',
          sections: [
            { type: 'text', content: '除了基础组件，三个布局类组件出场率极高：**scroll-view**（局部滚动区）、**swiper**（轮播图）、**navigator**（声明式跳转）。' },
            {
              type: 'code',
              title: '轮播图 swiper',
              lang: 'vue',
              code: "<template>\n  <!-- 轮播图：indicator-dots 显示小圆点 -->\n  <swiper class=\"banner\" indicator-dots autoplay interval=\"3000\" circular\n          indicator-active-color=\"#07c160\">\n    <swiper-item v-for=\"(img, i) in banners\" :key=\"i\">\n      <image :src=\"img\" mode=\"aspectFill\" class=\"banner-img\" />\n    </swiper-item>\n  </swiper>\n\n  <!-- 声明式跳转（等价于 navigateTo） -->\n  <navigator url=\"/pages/about/about\" hover-class=\"nav-hover\">\n    <view class=\"link\">关于我们</view>\n  </navigator>\n</template>\n\n<script setup>\nconst banners = ['/static/b1.png', '/static/b2.png', '/static/b3.png']\n</script>\n\n<style>\n.banner { width: 750rpx; height: 300rpx; }\n.banner-img { width: 100%; height: 100%; }\n</style>"
            },
            {
              type: 'list',
              title: '组件记忆要点',
              items: [
                '**swiper** 必须给固定高度，swiper-item 内放内容；circular 表示首尾衔接循环',
                '**scroll-view** 局部滚动：scroll-x 横向、scroll-y 纵向，同样需要固定高度',
                '**navigator** 跳 tabBar 页要加 open-type="switchTab"',
                '**hover-class**：手指按下时的样式类，做点击反馈用'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第五章 事件与常用 API ============ */
    {
      id: 'ua-ch5',
      title: '第五章 事件与常用 API',
      lessons: [
        {
          id: 'ua-events',
          title: '5.1 事件处理',
          sections: [
            { type: 'text', content: '小程序里点击事件推荐用 **@tap**（编译为 bindtap），@click 也兼容但 tap 响应更快（300ms 延迟优化）。传参不能写 @tap="fn(item)" 之外的方式吗？其实可以——但要理解小程序事件绑定的两种写法。' },
            {
              type: 'code',
              title: '事件绑定与传参',
              lang: 'vue',
              code: "<template>\n  <!-- 写法一（推荐）：Vue 风格直接传参，uni-app 自动处理 -->\n  <button @tap=\"handle(1, 'ok')\">点我</button>\n\n  <!-- 写法二：小程序原生风格，data-* 传参 -->\n  <view data-id=\"99\" data-name=\"商品\" @tap=\"handleNative\">\n    原生风格\n  </view>\n</template>\n\n<script setup>\nfunction handle(num, str) {\n  console.log(num, str)   // 1 'ok'\n}\nfunction handleNative(e) {\n  console.log(e.currentTarget.dataset)  // { id: 99, name: '商品' }\n}\n</script>"
            },
            {
              type: 'table',
              title: '常用事件',
              headers: ['事件', '触发时机'],
              rows: [
                ['@tap', '点击（推荐，无延迟）'],
                ['@longpress', '长按'],
                ['@input', '输入框内容变化'],
                ['@change', '选择器/开关状态变化'],
                ['@scroll / @scrolltolower', 'scroll-view 滚动 / 滚到底']
              ]
            },
            { type: 'tip', content: '事件对象里：e.detail 存组件产生的数据（输入值等）；e.currentTarget.dataset 存 data-* 自定义参数；touches 里有触摸坐标，做滑动手势时用。' }
          ]
        },
        {
          id: 'ua-request',
          title: '5.2 网络请求 uni.request',
          sections: [
            { type: 'text', content: '小程序里没有 axios，发请求用 **uni.request**。它默认是回调风格，实际开发中通常包一层 Promise，并统一处理 baseURL、请求头 token、错误提示。' },
            {
              type: 'code',
              title: '基础用法与 Promise 封装',
              lang: 'javascript',
              code: "// 基础用法\nuni.request({\n  url: 'https://api.example.com/goods',\n  method: 'GET',\n  data: { page: 1 },\n  header: { Authorization: 'Bearer ' + uni.getStorageSync('token') },\n  success: (res) => console.log(res.data),\n  fail: (err) => uni.showToast({ title: '网络错误', icon: 'none' })\n})\n\n// ---- 推荐：封装成 utils/request.js ----\nconst BASE_URL = 'https://api.example.com'\n\nexport function request(options) {\n  return new Promise((resolve, reject) => {\n    uni.request({\n      url: BASE_URL + options.url,\n      method: options.method || 'GET',\n      data: options.data || {},\n      header: {\n        'Content-Type': 'application/json',\n        Authorization: 'Bearer ' + uni.getStorageSync('token')\n      },\n      success: (res) => {\n        if (res.statusCode === 200 && res.data.code === 0) {\n          resolve(res.data.data)\n        } else if (res.statusCode === 401) {\n          uni.reLaunch({ url: '/pages/login/login' })\n          reject(res)\n        } else {\n          uni.showToast({ title: res.data.msg || '请求失败', icon: 'none' })\n          reject(res)\n        }\n      },\n      fail: (err) => {\n        uni.showToast({ title: '网络连接失败', icon: 'none' })\n        reject(err)\n      }\n    })\n  })\n}"
            },
            { type: 'warn', content: '小程序正式版要求请求地址必须是 **HTTPS** 且在微信公众平台「开发设置 → 服务器域名」里配置 request 合法域名。开发阶段可在开发者工具勾选「不校验合法域名」临时调试。' }
          ]
        },
        {
          id: 'ua-storage',
          title: '5.3 本地存储 Storage',
          sections: [
            { type: 'text', content: '小程序的本地存储类似 localStorage，但 API 是 uni.setStorage/getStorage，分同步（带 Sync 后缀）和异步两种。单个 key 上限 1MB，总上限 10MB，适合存 token、用户信息、草稿。' },
            {
              type: 'code',
              title: '同步 API（简单场景推荐）',
              lang: 'javascript',
              code: "// 存（对象会自动序列化）\nuni.setStorageSync('token', 'eyJhbGci...')\nuni.setStorageSync('userInfo', { id: 1, name: '小明' })\n\n// 取\nconst token = uni.getStorageSync('token')\nconst user = uni.getStorageSync('userInfo')  // 直接拿到对象\n\n// 删一个 / 清空全部\nuni.removeStorageSync('token')\nuni.clearStorageSync()\n\n// 安全读取：key 不存在时同步 API 返回空字符串 ''\nconst t = uni.getStorageSync('token')\nif (t) { /* 已登录 */ }"
            },
            {
              type: 'list',
              title: '使用建议',
              items: [
                '**token 必存 Storage**：小程序关闭后再打开仍保持登录，在 onLaunch 里读取',
                '**别存大数据**：图片、长列表不要塞 Storage，会拖慢启动',
                '**敏感信息权衡**：Storage 可被微信开发者工具查看，不要存密码明文',
                '**同步 API 够用**：数据量小直接用 Sync 版本，代码简单；批量写入再考虑异步'
              ]
            }
          ]
        },
        {
          id: 'ua-feedback',
          title: '5.4 交互反馈与媒体 API',
          sections: [
            { type: 'text', content: '小程序提供一套原生交互组件，调用即可弹出，样式统一且体验好，不用自己写弹窗。媒体类 API 则能调起微信的选图、拍照、扫码能力。' },
            {
              type: 'code',
              title: '反馈四件套',
              lang: 'javascript',
              code: "// 轻提示（1.5 秒自动消失）\nuni.showToast({ title: '保存成功', icon: 'success' })\nuni.showToast({ title: '手机号格式错误', icon: 'none' })  // 纯文字\n\n// 加载中（手动关闭）\nuni.showLoading({ title: '加载中...', mask: true })\nuni.hideLoading()\n\n// 确认对话框（有确定/取消回调）\nuni.showModal({\n  title: '提示',\n  content: '确定删除这条记录吗？',\n  success: (res) => {\n    if (res.confirm) console.log('用户点了确定')\n    else if (res.cancel) console.log('用户点了取消')\n  }\n})\n\n// 底部操作菜单\nuni.showActionSheet({\n  itemList: ['拍照', '从相册选择'],\n  success: (res) => console.log('选择了第', res.tapIndex, '项')\n})"
            },
            {
              type: 'code',
              title: '选图与扫码',
              lang: 'javascript',
              code: "// 选择图片（头像上传场景）\nuni.chooseImage({\n  count: 1,\n  success: (res) => {\n    const tempPath = res.tempFilePaths[0]  // 临时路径，可直接预览\n    // 正式上传：uni.uploadFile 传给服务器\n  }\n})\n\n// 扫码（微信扫一扫）\nuni.scanCode({\n  success: (res) => console.log('扫码结果：', res.result)\n})"
            },
            { type: 'tip', content: '网络请求时配合 showLoading（mask: true 防止重复点击），请求结束一定记得 hideLoading——通常封装在 request 函数里自动处理。' }
          ]
        }
      ]
    },

    /* ============ 第六章 组件化开发 ============ */
    {
      id: 'ua-ch6',
      title: '第六章 组件化开发',
      lessons: [
        {
          id: 'ua-easycom',
          title: '6.1 组件与 easycom 自动引入',
          sections: [
            { type: 'text', content: '组件化思想和 Vue 课完全一致：把可复用的 UI（商品卡片、空状态、导航条）抽成组件。uni-app 还有个贴心机制 **easycom**：只要组件放在 components/组件名/组件名.vue 目录下，**不用 import、不用注册，直接在页面里用标签**。' },
            {
              type: 'code',
              title: '目录约定与使用',
              lang: 'text',
              code: "components/\n└── goods-card/\n    └── goods-card.vue      ← 文件名和文件夹名一致\n\n页面里直接写：\n<goods-card :info=\"item\" @tap=\"goDetail\" />\n\n<!-- 不需要 import，不需要 components 注册，easycom 自动识别 -->"
            },
            {
              type: 'code',
              title: 'goods-card.vue 组件示例',
              lang: 'vue',
              code: "<template>\n  <view class=\"card\" @tap=\"$emit('tap')\">\n    <image :src=\"info.cover\" mode=\"aspectFill\" class=\"cover\" />\n    <view class=\"info\">\n      <text class=\"name\">{{ info.name }}</text>\n      <text class=\"price\">¥{{ info.price }}</text>\n    </view>\n  </view>\n</template>\n\n<script setup>\ndefineProps({\n  info: { type: Object, required: true }\n})\ndefineEmits(['tap'])\n</script>"
            },
            { type: 'tip', content: 'easycom 规则：components/组件名/组件名.vue 自动生效。uni-ui 等第三方组件库也遵循此规则，安装后直接用 <uni-badge> 等标签。' }
          ]
        },
        {
          id: 'ua-props-emit',
          title: '6.2 父子组件通信',
          sections: [
            { type: 'text', content: '通信方式和 Vue 一模一样：**props 下行、emit 上行**。这里复习巩固，并强调小程序端的两个注意点：样式隔离和事件命名。' },
            {
              type: 'code',
              title: '父传子 props、子传父 emit',
              lang: 'vue',
              code: "// 父页面\n<template>\n  <view>\n    <stepper :count=\"num\" @change=\"onChange\" />\n  </view>\n</template>\n<script setup>\nimport { ref } from 'vue'\nconst num = ref(1)\nfunction onChange(newVal) { num.value = newVal }\n</script>\n\n// 子组件 stepper.vue\n<template>\n  <view class=\"stepper\">\n    <button @tap=\"dec\">-</button>\n    <text>{{ count }}</text>\n    <button @tap=\"inc\">+</button>\n  </view>\n</template>\n<script setup>\nconst props = defineProps({ count: { type: Number, default: 1 } })\nconst emit = defineEmits(['change'])\nfunction inc() { emit('change', props.count + 1) }\nfunction dec() { if (props.count > 1) emit('change', props.count - 1) }\n</script>"
            },
            {
              type: 'list',
              title: '小程序端注意点',
              items: [
                '**样式默认隔离**：组件里的 class 不会影响页面，但组件根节点外的样式也穿不进来；需要外部控制样式用 props 传 class 或用 :deep()',
                '**事件名建议用 kebab-case**：@change 这类短名没问题；复杂场景如 @item-click 对应 emit(\'item-click\')',
                '**没有事件总线 $on/$off**（Vue3 已移除）：跨页面/跨组件通信用 Pinia'
              ]
            }
          ]
        },
        {
          id: 'ua-uniui',
          title: '6.3 uni-ui 组件库',
          sections: [
            { type: 'text', content: '官方组件库 **uni-ui** 提供了一批高质量跨端组件：图标、徽章、卡片、弹出层、日历、分页器等。它遵循 easycom 规范，安装后直接用标签，不用自己造轮子。' },
            {
              type: 'list',
              title: '常用组件举例',
              items: [
                '**uni-icons**：内置几百个图标，免去切图',
                '**uni-badge / uni-tag**：数字角标、标签',
                '**uni-popup**：底部/居中弹出层（做筛选、分享菜单）',
                '**uni-list / uni-card**：标准列表项、卡片，后台管理类页面神器',
                '**uni-datetime-picker**：日期时间选择',
                '**uni-notice-bar**：滚动公告条'
              ]
            },
            {
              type: 'code',
              title: '安装与使用',
              lang: 'text',
              code: "安装（HBuilderX）：\n  插件市场 ext.dcloud.net.cn 搜索 uni-ui -> 使用 HBuilderX 导入插件\n\n页面中直接使用（easycom 自动生效）：\n<uni-icons type=\"heart\" size=\"24\" color=\"#e11d48\" />\n<uni-badge text=\"99+\" type=\"error\" />\n<uni-tag text=\"新品\" type=\"success\" />\n\n文档：uniapp.dcloud.net.cn/component/uniui/uni-ui.html"
            },
            { type: 'tip', content: '社区还有 uView UI、wot-design-uni 等更丰富的组件库，项目复杂时可按需选择；新手先用 uni-ui 打基础。' }
          ]
        }
      ]
    },

    /* ============ 第七章 跨端机制 ============ */
    {
      id: 'ua-ch7',
      title: '第七章 跨端机制',
      lessons: [
        {
          id: 'ua-conditional-compile',
          title: '7.1 条件编译',
          sections: [
            { type: 'text', content: '一套代码发多端，难免有"只有微信端要做"的逻辑（如微信支付）。**条件编译**用特殊注释实现：被标记的代码只在特定平台编译时保留，其他平台直接剔除。' },
            {
              type: 'table',
              title: '平台标识',
              headers: ['标识', '平台'],
              rows: [
                ['MP-WEIXIN', '微信小程序'],
                ['MP-ALIPAY', '支付宝小程序'],
                ['H5', 'H5 网页'],
                ['APP-PLUS', 'App（含 nvue）'],
                ['MP', '所有小程序端']
              ]
            },
            {
              type: 'code',
              title: '三种位置的写法',
              lang: 'vue',
              code: "// 1. JS / script 中\n// #ifdef MP-WEIXIN\nuni.login({ provider: 'weixin' })\n// #endif\n\n// #ifdef H5\nconsole.log('这段只在 H5 端编译')\n// #endif\n\n<!-- 2. template 中 -->\n<view>\n  <!-- #ifdef MP-WEIXIN -->\n  <button open-type=\"getUserInfo\">微信登录</button>\n  <!-- #endif -->\n  <!-- #ifdef H5 -->\n  <button>账号密码登录</button>\n  <!-- #endif -->\n</view>\n\n/* 3. style 中 */\n/* #ifdef H5 */\n.box { cursor: pointer; }\n/* #endif */"
            },
            { type: 'tip', content: '条件编译是注释不是代码：注意必须是 // 或 <!-- --> 形式，endif 不能漏，否则后续代码全被吞掉。' }
          ]
        },
        {
          id: 'ua-platform-diff',
          title: '7.2 多端差异与适配',
          sections: [
            { type: 'text', content: '跨端不是"完全一样"，而是"能力求同存异"。大部分业务代码天然跨端，少数平台特有用条件编译处理。开发策略上，建议**先跑通一个端（微信小程序），再逐步验证其他端**。' },
            {
              type: 'list',
              title: '常见差异点',
              items: [
                '**页面路由**：小程序是 pages.json + navigateTo；H5 端自动变成 URL 路径',
                '**支付/登录**：微信端用 wx.login + 微信支付；H5 用网页授权；App 用各渠道 SDK',
                '**DOM 相关库不能用**：jQuery、ECharts 操作 DOM 的部分在小程序端失效（图表用 renderjs 或 ucharts）',
                '**样式差异**：小程序不支持 * 通配符、部分 CSS3 选择器；H5 端全部支持',
                '**安全区域**：全面屏底部横条用 safe-area-inset-bottom 适配'
              ]
            },
            {
              type: 'code',
              title: '底部安全区适配',
              lang: 'css',
              code: "/* 底部固定按钮栏避开 iPhone 横条 */\n.tabbar {\n  padding-bottom: constant(safe-area-inset-bottom);  /* 老 iOS */\n  padding-bottom: env(safe-area-inset-bottom);      /* 标准写法 */\n}"
            }
          ]
        },
        {
          id: 'ua-wx-login-pay',
          title: '7.3 微信登录与支付（流程）',
          sections: [
            { type: 'text', content: '小程序最核心的两个商业能力是**登录**和**支付**。它们都遵循"小程序端拿凭证 → 发给你的后端 → 后端调微信服务器换结果"的模式，小程序端本身只负责发起。理解流程比背 API 更重要。' },
            {
              type: 'list',
              title: '微信登录流程',
              items: [
                '**1.** 小程序调用 uni.login() 拿到临时登录凭证 code（5 分钟有效）',
                '**2.** 把 code 发给自己的后端',
                '**3.** 后端用 code + AppID + AppSecret 请求微信服务器，换 openid（用户唯一标识）和 session_key',
                '**4.** 后端判断该 openid 是否已注册，生成自己的 token 返回给小程序',
                '**5.** 小程序存 token（Storage），之后请求都带上——完成登录',
                '头像昵称通过 button open-type="chooseAvatar" + input 昵称填写获取（微信已收紧 getUserInfo）'
              ]
            },
            {
              type: 'list',
              title: '微信支付流程',
              items: [
                '**1.** 小程序提交订单给后端',
                '**2.** 后端统一下单，调微信 API 生成预支付参数（prepay_id 等）返回',
                '**3.** 小程序拿到参数调用 uni.requestPayment 唤起微信支付弹窗',
                '**4.** 用户输密码支付；结果以微信后端回调通知你的服务器为准（前端成功不可全信）'
              ]
            },
            { type: 'warn', content: 'AppSecret（小程序密钥）绝不能出现在前端代码里——它只保存在后端。前端只接触 code 和后端返回的 token/支付参数。' }
          ]
        }
      ]
    },

    /* ============ 第八章 工程化与性能 ============ */
    {
      id: 'ua-ch8',
      title: '第八章 工程化与性能',
      lessons: [
        {
          id: 'ua-pinia',
          title: '8.1 状态管理 Pinia',
          sections: [
            { type: 'text', content: '跨页面共享数据（用户信息、购物车、定位城市）用 **Pinia**——和 Vue 课学的完全一样，uni-app 原生支持。页面间传参复杂、多个页面读写同一份数据时就该上状态管理。' },
            {
              type: 'code',
              title: 'stores/user.js',
              lang: 'javascript',
              code: "import { defineStore } from 'pinia'\n\nexport const useUserStore = defineStore('user', {\n  state: () => ({\n    token: uni.getStorageSync('token') || '',\n    userInfo: null\n  }),\n  getters: {\n    isLogin: (state) => !!state.token\n  },\n  actions: {\n    setLogin(token, userInfo) {\n      this.token = token\n      this.userInfo = userInfo\n      uni.setStorageSync('token', token)   // 同步持久化\n    },\n    logout() {\n      this.token = ''\n      this.userInfo = null\n      uni.removeStorageSync('token')\n    }\n  }\n})\n\n// 页面中使用：\n// const userStore = useUserStore()\n// if (userStore.isLogin) { ... }"
            },
            { type: 'tip', content: '经典用法：Pinia 存状态 + Storage 做持久化（actions 里同步读写），onLaunch 时从 Storage 恢复。购物车同理存一个 store。' }
          ]
        },
        {
          id: 'ua-subpackage',
          title: '8.2 分包加载',
          sections: [
            { type: 'text', content: '微信小程序对代码包有大小限制：**主包不超过 2MB，整个小程序所有包不超过 20MB**（超了无法上传）。解决方案是**分包**：把不常用的页面（如个人中心、活动页）放进分包，用到时才下载，启动更快。' },
            {
              type: 'code',
              title: 'pages.json 配置分包',
              lang: 'json',
              code: "{\n  \"pages\": [\n    { \"path\": \"pages/index/index\", \"style\": { \"navigationBarTitleText\": \"首页\" } }\n  ],\n  \"subPackages\": [\n    {\n      \"root\": \"pagesMine\",\n      \"pages\": [\n        { \"path\": \"setting/setting\", \"style\": { \"navigationBarTitleText\": \"设置\" } },\n        { \"path\": \"about/about\", \"style\": { \"navigationBarTitleText\": \"关于\" } }\n      ]\n    },\n    {\n      \"root\": \"pagesActivity\",\n      \"pages\": [\n        { \"path\": \"lottery/lottery\", \"style\": { \"navigationBarTitleText\": \"抽奖\" } }\n      ]\n    }\n  ],\n  \"preloadRule\": {\n    \"pages/index/index\": { \"network\": \"wifi\", \"packages\": [\"pagesMine\"] }\n  }\n}"
            },
            {
              type: 'list',
              title: '分包原则',
              items: [
                '**主包放高频页**：首页、tabBar 页面必须在主包（tabBar 页不能分包）',
                '**分包放低频页**：设置、关于、活动、订单详情等',
                '**preloadRule 预下载**：WiFi 下用户进入首页时后台预拉分包，点开时无感知',
                '**跳转方式不变**：分包页面同样用 navigateTo，路径写 root + page 完整路径'
              ]
            }
          ]
        },
        {
          id: 'ua-performance',
          title: '8.3 性能优化清单',
          sections: [
            { type: 'text', content: '小程序性能的核心指标是**启动速度**和**渲染流畅度**。优化手段大多围绕"减少首屏加载量"和"减少通信次数"展开（双线程模型下，setData/数据变化越频繁、数据量越大，通信开销越高）。' },
            {
              type: 'list',
              title: '实用优化手段',
              items: [
                '**图片**：用 CDN + WebP/压缩，别把大图放 static 打进包内；image 设 lazy-load',
                '**列表**：长列表用 key，配合分页加载；超长列表考虑官方 recycle-list 组件',
                '**数据**：接口分页、按需返回；别把整个大对象塞进响应式数据',
                '**分包**：上一课讲的 subPackages 直接减小主包体积',
                '**防抖节流**：搜索输入、滚动监听加防抖/节流',
                '**定时器清理**：onHide/onUnload 里清掉 setInterval，避免后台空转'
              ]
            },
            {
              type: 'code',
              title: '搜索输入防抖示例',
              lang: 'javascript',
              code: "let timer = null\nfunction onInput(e) {\n  clearTimeout(timer)\n  const kw = e.detail.value\n  timer = setTimeout(() => {\n    if (kw.trim()) search(kw)   // 停顿 300ms 才发请求\n  }, 300)\n}"
            },
            { type: 'tip', content: '微信开发者工具的「Audits 面板」可以自动评分体检（启动性能、UI 规范），优化前先跑一遍看建议。' }
          ]
        }
      ]
    },

    /* ============ 第九章 调试与发布 ============ */
    {
      id: 'ua-ch9',
      title: '第九章 调试、发布与实战',
      lessons: [
        {
          id: 'ua-debug',
          title: '9.1 调试技巧',
          sections: [
            { type: 'text', content: '调试主要在微信开发者工具里完成：它提供模拟器、Console 日志、Network 请求、Storage 查看、断点调试。真机和模拟器表现不一致时，用**真机调试**看真实环境。' },
            {
              type: 'list',
              title: '常用调试手段',
              items: [
                '**Console**：console.log 打印数据，HBuilderX 保存后自动编译刷新',
                '**Network**：查看 uni.request 的请求参数、响应、状态码',
                '**Storage 面板**：直接查看/清除本地存储，调试登录状态很方便',
                '**真机预览**：点「预览」扫码在手机上跑；「真机调试」可以连手机看日志',
                '**清缓存**：工具菜单「清缓存 → 全部清除」，遇到诡异问题先清缓存'
              ]
            },
            { type: 'warn', content: '模拟器和真机差异：定位、扫码、支付等能力模拟器无法完整模拟；样式问题（尤其安全区、滚动）以真机为准。' }
          ]
        },
        {
          id: 'ua-publish',
          title: '9.2 上传审核与发布',
          sections: [
            { type: 'text', content: '开发完成后的上线流程：HBuilderX 编译发行 → 微信开发者工具上传 → 公众平台提交审核 → 审核通过后发布。个人主体也能发布小程序，但部分类目（支付、社交）需要企业资质。' },
            {
              type: 'list',
              title: '发布四步',
              items: [
                '**1. 发行编译**：HBuilderX 菜单「发行 → 小程序-微信」，生成产物并打开开发者工具',
                '**2. 上传**：开发者工具点「上传」，填版本号（如 1.0.0）和备注',
                '**3. 提交审核**：登录 mp.weixin.qq.com → 管理 → 版本管理 → 把刚上传的版本「提交审核」，填写功能页面路径、测试账号（如有）',
                '**4. 发布**：审核通过（通常几小时~1 天）后点「发布」，用户即可搜索使用'
              ]
            },
            {
              type: 'list',
              title: '上线前检查清单',
              items: [
                '服务器域名已在公众平台配置（request、uploadFile 等都要 HTTPS）',
                '关闭开发者工具的「不校验合法域名」调试选项后仍正常',
                '小程序名称、图标、简介合规；测试账号可用',
                '首页无 console 报错、无空白页、无死链按钮',
                '版本号按规范递增（1.0.0 → 1.1.0）'
              ]
            }
          ]
        },
        {
          id: 'ua-real-project',
          title: '9.3 实战串联：小应用开发流程',
          sections: [
            { type: 'text', content: '把全课程串成一个真实项目的开发顺序。以"课程表/待办清单"这类小工具为例，体会从建项目到上线的完整节奏——每个环节你都已经学过。' },
            {
              type: 'list',
              title: '推荐开发顺序',
              items: [
                '**1. 需求与页面清单**：列出有哪些页面（首页列表、编辑页、关于页）、哪些是 tabBar',
                '**2. 建项目配路由**：HBuilderX 新建项目，pages.json 注册页面、配 tabBar',
                '**3. 静态页面**：先用假数据把每个页面的 UI 搭出来（view/text/rpx 布局）',
                '**4. 抽组件**：列表项、空状态、弹窗抽成 components 组件（easycom）',
                '**5. 接数据**：封装 request；纯本地应用就用 Storage 做增删改查',
                '**6. 交互完善**：toast/modal 反馈、下拉刷新、上拉加载、表单校验',
                '**7. 状态管理**：用户信息/全局数据用 Pinia + Storage 持久化',
                '**8. 适配与优化**：真机预览、安全区、图片压缩、必要时分包',
                '**9. 上传审核**：按 9.2 的清单检查后发布'
              ]
            },
            { type: 'tip', content: '学习建议：照这个顺序做一个自己的小工具（记账、打卡、书单都行），做完这一个，小程序开发就真正入门了。遇到知识点回本站对应章节查即可。' }
          ]
        }
      ]
    }
  ]
}
