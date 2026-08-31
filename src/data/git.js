// ============================================================
// Git 分类教学数据
// 结构：id / name / short / color / description / chapters
// chapters -> lessons -> sections（text / list / code / tip / warn / table）
// ============================================================

export default {
  id: 'git',
  name: 'Git 版本控制',
  short: 'Git',
  color: '#e11d48',
  description: '分布式版本控制系统：记录每次改动、随时回退、多人协作不冲突，程序员的"时光机"',
  chapters: [
    /* ============ 第一章 Git 入门 ============ */
    {
      id: 'git-ch1',
      title: '第一章 Git 入门',
      lessons: [
        {
          id: 'git-what-is',
          title: '1.1 什么是版本控制',
          sections: [
            { type: 'text', content: '写代码时你一定遇到过这些场景：改崩了想退回昨天的版本，只能靠"最终版"、"最终版2"、"真最终版"文件夹；或者想把同事改的部分合并进来，只能开两个窗口肉眼比对。**版本控制**就是解决这些问题的工具：它像一台**时光机**，记录文件的每一次改动，让你随时回到任意历史时刻，也能安全地合并多人的修改。' },
            {
              type: 'list',
              title: '为什么一定要用 Git',
              items: [
                '**历史可追溯**：每一次保存（提交）都有快照，谁改的、什么时候改的、为什么改，一查便知',
                '**后悔药**：改崩了随时回退到任意版本，不怕丢代码',
                '**并行开发**：分支让"开发新功能"和"修复线上 Bug"互不干扰',
                '**团队协作**：多人同时改同一个项目，Git 帮你合并、提示冲突',
                '**事实上的标准**：全球几乎所有的开源与商业项目都用 Git 管理代码'
              ]
            },
            {
              type: 'table',
              title: '集中式 vs 分布式',
              headers: ['对比项', '集中式（SVN）', '分布式（Git）'],
              rows: [
                ['仓库位置', '只有中央服务器有完整历史', '每个人电脑上都有完整历史'],
                ['离线工作', '基本不能提交历史', '完全可以离线提交，联网再同步'],
                ['速度', '多数操作要走网络', '本地操作，速度极快'],
                ['安全性', '服务器坏了历史就丢了', '任何一台电脑都是完整备份']
              ]
            },
            { type: 'tip', content: 'Git（工具）和 GitHub（网站）不是一回事：Git 是你电脑上的版本控制软件；GitHub 是托管 Git 仓库的平台，类似的还有 Gitee（码云）、GitLab。' }
          ]
        },
        {
          id: 'git-install',
          title: '1.2 安装与初始配置',
          sections: [
            { type: 'text', content: 'Git 是免费开源软件，支持 Windows / macOS / Linux。安装完成后必须先配置**用户名和邮箱**——每一次提交都会记录"作者是谁"，Git 就是从这个配置里读取的。' },
            {
              type: 'code',
              title: '安装后必做的全局配置',
              lang: 'bash',
              code: "# 告诉 Git 你是谁（提交记录会显示）\ngit config --global user.name \"你的名字\"\ngit config --global user.email \"你的邮箱@example.com\"\n\n# 常用别名：敲短命令等于敲长命令\ngit config --global alias.st status\ngit config --global alias.ci commit\ngit config --global alias.lg \"log --oneline --graph --all\"\n\n# 查看所有配置\ngit config --global --list"
            },
            {
              type: 'list',
              title: '配置的三个层级',
              items: [
                '**system**：整台电脑所有用户生效，很少用',
                '**global**：当前用户生效（--global），最常用',
                '**local**：只对某一个仓库生效（在仓库目录里去掉 --global 执行），可以给不同项目配不同身份'
              ]
            },
            { type: 'tip', content: '邮箱建议用 GitHub 提供的 noreply 邮箱（如 12345678+username@users.noreply.github.com），公开仓库的提交历史里就不会暴露真实邮箱。' }
          ]
        },
        {
          id: 'git-areas',
          title: '1.3 三个工作区与文件状态',
          sections: [
            { type: 'text', content: '理解 Git 的关键，是理解文件在**三个区域**之间流转：**工作区**（你正在编辑的目录）→ `git add` → **暂存区**（下次要提交的清单）→ `git commit` → **版本库**（永久历史）。很多"Git 怎么不听话"的困惑，都源于没分清文件此刻在哪个区。' },
            {
              type: 'code',
              title: '文件状态流转',
              lang: 'bash',
              code: "# 新建的文件：Untracked（未跟踪）\necho hello > a.txt\n\n# add 后进入暂存区：Staged\ngit add a.txt\n\n# commit 后进入版本库：Committed，工作区干净\ngit commit -m \"add a.txt\"\n\n# 再次修改已跟踪文件：Modified\necho world >> a.txt\n\n# 再 add、再 commit，如此循环\ngit add a.txt && git commit -m \"update a.txt\""
            },
            {
              type: 'table',
              title: '用 git status 看到的状态',
              headers: ['提示', '含义', '下一步'],
              rows: [
                ['Untracked files', '新文件，Git 还没管它', 'git add 纳入跟踪'],
                ['Changes not staged', '已跟踪文件被修改', 'git add 加入暂存'],
                ['Changes to be committed', '已在暂存区，等待提交', 'git commit 提交'],
                ['nothing to commit, working tree clean', '工作区干净，与最新提交一致', '可以放心切换分支']
              ]
            },
            { type: 'tip', content: '暂存区的意义：它让你能把多个改动"分组提交"——比如这次只提交修 Bug 的两个文件，另一个没写完的功能先不放进来。' }
          ]
        }
      ]
    },

    /* ============ 第二章 基础操作 ============ */
    {
      id: 'git-ch2',
      title: '第二章 基础操作',
      lessons: [
        {
          id: 'git-init-clone',
          title: '2.1 创建仓库：init 与 clone',
          sections: [
            { type: 'text', content: '让 Git 管理一个目录，有两种起点：**本地新建**（git init）适合自己的新项目；**克隆已有**（git clone）适合参与现成的项目。执行后目录里会多出一个隐藏的 `.git` 文件夹——它就是版本库本体，所有历史都存在里面，**千万不要手动删除或修改它**。' },
            {
              type: 'code',
              title: '两种创建方式',
              lang: 'bash',
              code: "# 方式一：把当前目录变成 Git 仓库\ncd my-project\ngit init\n\n# 方式二：克隆远程仓库（自动包含全部历史和分支）\ngit clone https://github.com/用户名/仓库名.git\ncd 仓库名"
            },
            {
              type: 'list',
              title: 'init 之后建议马上做的事',
              items: [
                '创建 `.gitignore`，排除不需要跟踪的文件',
                '创建 `README.md` 写清项目说明',
                '首次 `git add . && git commit -m \"init\"` 建立起点'
              ]
            },
            { type: 'warn', content: 'git init 只需要在项目根目录执行一次。在子目录里重复执行虽然不会报错，但可能造出嵌套仓库，让状态变得混乱。' }
          ]
        },
        {
          id: 'git-add-commit',
          title: '2.2 记录变更：add 与 commit',
          sections: [
            { type: 'text', content: '日常写代码的节奏就是两步循环：`git add` 把改动放进暂存区，`git commit` 把暂存区内容打包成一个**提交**。每个提交都是项目在那一刻的完整快照，并有一个唯一的 ID（SHA-1 哈希，如 a1b2c3d）。' },
            {
              type: 'code',
              title: 'add 与 commit 常用姿势',
              lang: 'bash',
              code: "# 添加单个文件\ngit add index.html\n\n# 添加整个目录\ngit add src/\n\n# 添加全部改动（最常用）\ngit add .\n\n# 提交，-m 后面写说明（必写！）\ngit commit -m \"修复登录按钮在手机上错位的问题\"\n\n# add + commit 二合一（只对已跟踪文件有效）\ngit commit -am \"update readme\""
            },
            {
              type: 'list',
              title: '好提交 vs 坏提交',
              items: [
                '**一个提交做一件事**：修 Bug 一个提交、新功能一个提交，方便回退和排查',
                '**说明写清楚**：写"修复登录报空指针"，不要写"改了点东西"、"111"',
                '**提交要小而频繁**：攒一周的改动一次提交，回退粒度就太粗了'
              ]
            },
            { type: 'tip', content: '提交信息有个流行规范叫 Conventional Commits：feat 新功能、fix 修 Bug、docs 文档、style 格式、refactor 重构、test 测试。例如：feat: 支持暗色模式切换。' }
          ]
        },
        {
          id: 'git-log-diff',
          title: '2.3 查看历史：log、diff、show',
          sections: [
            { type: 'text', content: '版本库的价值在于"可回溯"。三个命令帮你回答：发生过什么（log）、某次改动具体改了什么（show / diff）、当前还有哪些没提交的修改（diff）。' },
            {
              type: 'code',
              title: '历史与差异',
              lang: 'bash',
              code: "# 查看完整历史（空格翻页，q 退出）\ngit log\n\n# 单行简洁模式\ngit log --oneline\n\n# 图形化显示分支合并\ngit log --oneline --graph --all\n\n# 看某个文件的历史\ngit log --oneline -- src/main.js\n\n# 看当前未暂存的修改（工作区 vs 暂存区）\ngit diff\n\n# 看已暂存的修改（暂存区 vs 最新提交）\ngit diff --staged\n\n# 看某次提交改了什么\ngit show a1b2c3d"
            },
            {
              type: 'table',
              title: 'diff 的读法',
              headers: ['符号', '含义'],
              rows: [
                ['--- a/file +++ b/file', '对比的两个版本'],
                ['@@ -1,4 +1,5 @@', '旧文件第 1 行起 4 行，对应新文件第 1 行起 5 行'],
                ['- 开头的行', '被删除 / 修改前的内容'],
                ['+ 开头的行', '新增 / 修改后的内容']
              ]
            },
            { type: 'tip', content: '给 log 配上 --graph --all 后能看到分支的"地铁图"，是理解项目历史走向最直观的方式。' }
          ]
        },
        {
          id: 'git-ignore',
          title: '2.4 .gitignore 忽略规则',
          sections: [
            { type: 'text', content: '不是所有文件都该进版本库：依赖包（node_modules）、编译产物（dist、target）、本地配置（.env）、编辑器缓存（.idea）等，体积大、可再生成、或含敏感信息。`.gitignore` 文件就是用来声明"这些别管"。' },
            {
              type: 'code',
              title: '常用写法（本站项目的真实例子）',
              lang: 'bash',
              code: "# 依赖目录\nnode_modules/\n\n# 构建产物\ndist/\n\n# 环境变量与敏感信息\n.env\n.env.local\n\n# 日志与临时文件\n*.log\n*.tmp\n\n# 编辑器/IDE\n.idea/\n.vscode/\n\n# 忽略所有 .a 文件但保留 lib.a\n*.a\n!lib.a"
            },
            {
              type: 'list',
              title: '规则语法速记',
              items: [
                '**node_modules/**：匹配目录（斜杠结尾）',
                '**\\*.log**：通配符匹配所有 .log 文件',
                '**!important.log**：感叹号表示"例外，不要忽略"',
                '**build/**：只忽略根目录或任意层级的 build 目录',
                '**/dist**：只忽略仓库根目录下的 dist（前面加斜杠限定层级）'
              ]
            },
            { type: 'warn', content: '.gitignore 只对"未跟踪"的文件生效。如果文件已经被提交过，后来才加进 ignore，它仍会被继续跟踪——需要先执行 git rm --cached 文件名 把它移出跟踪，再提交。' }
          ]
        }
      ]
    },

    /* ============ 第三章 撤销与回退 ============ */
    {
      id: 'git-ch3',
      title: '第三章 撤销与回退',
      lessons: [
        {
          id: 'git-restore-work',
          title: '3.1 撤销工作区修改',
          sections: [
            { type: 'text', content: '文件改乱了、还没 add，想回到上次提交的样子——用 `git restore`（老版本用 `git checkout -- 文件`，效果相同）。注意这是**危险操作**：未提交的修改会被直接丢弃，找不回来。' },
            {
              type: 'code',
              title: '丢弃工作区修改',
              lang: 'bash',
              code: "# 丢弃单个文件的修改\ngit restore index.html\n\n# 丢弃当前目录下所有修改\ngit restore .\n\n# 旧写法（等价）\ngit checkout -- index.html"
            },
            { type: 'warn', content: '执行前想清楚：这些修改从未提交过，丢弃后 Git 也无法恢复。拿不准时可以先 git stash 存起来（下一节讲）。' }
          ]
        },
        {
          id: 'git-unstage',
          title: '3.2 取消暂存',
          sections: [
            { type: 'text', content: '`git add` 手滑把不该提交的文件加进了暂存区？用 `git restore --staged` 把它**退回工作区**——注意文件内容不会被改动，只是从"待提交清单"里拿掉。' },
            {
              type: 'code',
              title: '把文件移出暂存区',
              lang: 'bash',
              code: "# 取消暂存单个文件\ngit restore --staged secret.txt\n\n# 取消暂存全部\ngit restore --staged .\n\n# 旧写法（等价）\ngit reset HEAD secret.txt\n\n# 情景：文件已暂存且被修改，想连同修改一起撤销\ngit restore --staged --worktree secret.txt"
            },
            { type: 'tip', content: '记忆口诀：restore 默认管工作区，加 --staged 管暂存区，两个都加就是"全部恢复到上次提交"。' }
          ]
        },
        {
          id: 'git-reset',
          title: '3.3 回退提交：reset 三种模式',
          sections: [
            { type: 'text', content: '提交错了想撤回，用 `git reset`。它把**当前分支的指针**挪到指定提交，三种模式决定了"那些被撤下的改动去哪"：`--soft` 留在暂存区、`--mixed`（默认）留在工作区、`--hard` 直接销毁。' },
            {
              type: 'code',
              title: '回退到上一次提交',
              lang: 'bash',
              code: "# 回退提交，改动保留在暂存区（想改改提交说明重来）\ngit reset --soft HEAD~1\n\n# 回退提交，改动保留在工作区（想重新挑着 add）\ngit reset HEAD~1\n\n# 彻底回退，改动全丢（危险！）\ngit reset --hard HEAD~1\n\n# 回退到指定提交（ID 用 git log 查看）\ngit reset --hard a1b2c3d"
            },
            {
              type: 'table',
              title: '三种模式对比',
              headers: ['模式', '版本库', '暂存区', '工作区', '典型场景'],
              rows: [
                ['--soft', '回退', '保留', '保留', '只是想重新组织提交'],
                ['--mixed', '回退', '清空', '保留', '想重新选择要 add 的内容'],
                ['--hard', '回退', '清空', '清空', '确定不要这些改动了']
              ]
            },
            { type: 'warn', content: '--hard 会销毁未提交的修改。已推送到远程的提交不要用 reset 抹掉（会让协作者历史错乱），改用下一节的 revert。' }
          ]
        },
        {
          id: 'git-revert-stash',
          title: '3.4 安全回退 revert 与暂存 stash',
          sections: [
            { type: 'text', content: '`revert` 是 reset 的安全替代：它不抹掉历史，而是**生成一个反向提交**把指定提交的效果抵消掉。历史完整保留，可以放心用在已推送的公共分支上。`stash` 则是"临时收纳架"：活干到一半要切分支救火，把改动先存起来，回来再取。' },
            {
              type: 'code',
              title: 'revert 与 stash',
              lang: 'bash',
              code: "# 撤销某次提交（生成一条新提交，历史可追溯）\ngit revert a1b2c3d\n# 撤销最近一次提交\ngit revert HEAD\n\n# ---- stash ----\n# 把工作区和暂存区的改动收起来\ngit stash\n\n# 带说明地存\ngit stash push -m \"做一半的搜索功能\"\n\n# 查看存了哪些\ngit stash list\n\n# 取出最近存的（并从列表删除）\ngit stash pop\n\n# 取出但不删除（想用在多个分支）\ngit stash apply"
            },
            {
              type: 'list',
              title: '何时用哪个',
              items: [
                '**私有分支、刚提交还没推送**：reset 方便直接',
                '**已推送的公共分支**：一律 revert，别动公共历史',
                '**临时切换任务**：stash 收起，回来 pop 续上'
              ]
            },
            { type: 'tip', content: 'stash 默认不包含未跟踪的新文件，需要时用 git stash -u 把新文件也一起收进去。' }
          ]
        }
      ]
    },

    /* ============ 第四章 分支 ============ */
    {
      id: 'git-ch4',
      title: '第四章 分支',
      lessons: [
        {
          id: 'git-branch-concept',
          title: '4.1 分支是什么',
          sections: [
            { type: 'text', content: '分支是 Git 最强大的功能。本质很简单：**分支只是一个指向某次提交的 movable 指针**（40 位哈希写在一个小文件里），创建分支几乎零成本。主分支通常叫 `main`（旧项目叫 master），`HEAD` 则指向"你当前站在哪个分支上"。' },
            {
              type: 'code',
              title: '直观感受分支的轻量',
              lang: 'bash',
              code: "# 查看所有分支，* 标记当前所在\ngit branch\n\n# 创建 + 切换一步到位\ngit switch -c feature-search\n\n# 查看分支指向关系（图形化）\ngit log --oneline --graph --all"
            },
            {
              type: 'list',
              title: '为什么要用分支',
              items: [
                '**隔离**：新功能在 feature 分支上开发，写坏了不影响 main',
                '**并行**：同时开多个分支处理不同任务',
                '**协作**：每个人的改动在自己的分支上，合并时才汇合',
                '**试错**：实验性想法开个分支随便折腾，不满意整个删掉'
              ]
            },
            { type: 'tip', content: '一个常见约定：main 永远保持可发布状态；开发中的东西都放在 feature/xxx 分支，完成并验证后再合并回 main。' }
          ]
        },
        {
          id: 'git-branch-switch',
          title: '4.2 创建与切换分支',
          sections: [
            { type: 'text', content: '新版本 Git 推荐用 `switch` 来切换/创建分支（职责单一不易误操作），`branch` 专职管理。老命令 `checkout` 两者都能干，网上教程里依然常见，两个都要认识。' },
            {
              type: 'code',
              title: '分支操作全家桶',
              lang: 'bash',
              code: "# 创建分支（不切换）\ngit branch feature-login\n\n# 切换分支\ngit switch feature-login\n\n# 创建并切换（最常用）\ngit switch -c feature-login\n\n# 旧写法（等价于上一条）\ngit checkout -b feature-login\n\n# 重命名分支\ngit branch -m feature-login feature/auth\n\n# 删除已合并的分支\ngit branch -d feature-login\n\n# 强制删除（不管合并没合并）\ngit branch -D feature-login"
            },
            { type: 'warn', content: '切换分支前最好保持工作区干净（先 commit 或 stash）。带着未提交修改切分支，Git 会尝试带着改动过去，容易造成意外的混合。' }
          ]
        },
        {
          id: 'git-merge',
          title: '4.3 合并分支：merge',
          sections: [
            { type: 'text', content: '功能写完，把 feature 分支合并回 main。Git 会找两个分支的公共祖先做合并：如果 main 在分叉后没有新提交，直接把指针快进（**fast-forward**）；如果两边都有新提交，就做一次**三方合并**并生成一个合并提交。' },
            {
              type: 'code',
              title: '合并流程',
              lang: 'bash',
              code: "# 1. 先切到要接收合并的分支（通常是 main）\ngit switch main\n\n# 2. 把 feature 分支合并进来\ngit merge feature-search\n\n# 3. 合完删掉功能分支\ngit branch -d feature-search\n\n# 强制生成合并提交（保留分叉痕迹）\ngit merge --no-ff feature-search"
            },
            {
              type: 'list',
              title: 'fast-forward 与三方合并',
              items: [
                '**fast-forward**：main 分叉后没动过，直接把指针挪到 feature 的最新提交，历史是一条直线',
                '**三方合并**：两边都有新提交，Git 自动把两边的改动融合，产生一个有两个父提交的 merge commit',
                '**--no-ff**：即使能快进也强制造合并提交，让"这一段是一个功能"在历史上一目了然'
              ]
            }
          ]
        },
        {
          id: 'git-conflict',
          title: '4.4 解决冲突',
          sections: [
            { type: 'text', content: '两个分支改了**同一个文件的同一处**，Git 无法替你决定用谁的，就会报告冲突（CONFLICT）。冲突不可怕，它只是提醒："这里需要人来裁决"。解决三步：打开文件改到满意 → add 标记已解决 → commit 收尾。' },
            {
              type: 'code',
              title: '冲突文件长这样',
              lang: 'javascript',
              code: "function greet() {\n<<<<<<< HEAD\n    console.log(\"main 分支上的版本\");\n=======\n    console.log(\"feature 分支上的版本\");\n>>>>>>> feature-greet\n}"
            },
            {
              type: 'list',
              title: '解决步骤',
              items: [
                '**git status** 找到所有冲突文件（both modified 标记）',
                '**打开文件**：<<<<<<< 与 >>>>>>> 之间是冲突块，======= 分隔双方；决定保留谁、或融合两者，删掉全部标记行',
                '**git add 文件** 告诉 Git 已解决',
                '**git commit** 完成合并（合并中的冲突不需要再写 -m 也有默认信息）'
              ]
            },
            { type: 'tip', content: 'VS Code 会在冲突处显示「Accept Current / Incoming / Both」按钮，点一下就能自动清理标记，新手强烈推荐。' }
          ]
        }
      ]
    },

    /* ============ 第五章 远程协作 ============ */
    {
      id: 'git-ch5',
      title: '第五章 远程协作',
      lessons: [
        {
          id: 'git-remote',
          title: '5.1 远程仓库：remote',
          sections: [
            { type: 'text', content: '仓库放在 GitHub / Gitee 上，就成了**远程仓库**——它既是团队同步的中转站，也是异地备份。`origin` 是克隆时自动起的默认名字，指代远程仓库的地址，仅仅是个别名，叫什么都可以。' },
            {
              type: 'code',
              title: 'remote 管理',
              lang: 'bash',
              code: "# 查看已配置的远程仓库\ngit remote -v\n\n# 添加远程仓库（本地已有项目时）\ngit remote add origin https://github.com/FGBGO/it-study.git\n\n# 改名 / 换地址\ngit remote rename origin upstream\ngit remote set-url origin git@github.com:FGBGO/it-study.git\n\n# 删除\ngit remote remove origin"
            },
            {
              type: 'table',
              title: 'HTTPS 与 SSH 地址',
              headers: ['方式', '地址形态', '认证'],
              rows: [
                ['HTTPS', 'https://github.com/... ', '用户名 + Personal Access Token'],
                ['SSH', 'git@github.com:... ', '配置好的密钥对，免输密码']
              ]
            },
            { type: 'tip', content: 'fork 别人项目后，常把 origin 指向自己的 fork、upstream 指向原仓库，方便同步上游更新。' }
          ]
        },
        {
          id: 'git-push-pull',
          title: '5.2 push 与 pull',
          sections: [
            { type: 'text', content: '`push` 把本地提交上传到远程；`pull` 把远程更新下载并合并到本地。首次推送用 `-u`（--set-upstream）建立**跟踪关系**，之后本地分支就知道自己对应远程哪条分支，git status / pull 都会变得智能。' },
            {
              type: 'code',
              title: '推送与拉取',
              lang: 'bash',
              code: "# 首次推送：-u 建立跟踪关系\ngit push -u origin main\n\n# 之后推送只需\ngit push\n\n# 推送并创建远程同名分支\ngit push -u origin feature-search\n\n# 拉取远程更新并合并到当前分支\ngit pull\n\n# 删除远程分支\ngit push origin --delete feature-search"
            },
            { type: 'warn', content: 'push 被拒绝（non-fast-forward）说明远程有你没有的新提交——先 git pull 合并完再推。永远不要对公共分支使用 git push --force。' }
          ]
        },
        {
          id: 'git-fetch',
          title: '5.3 fetch 与远程分支',
          sections: [
            { type: 'text', content: '`git pull` 其实是两个动作的合体：`fetch`（下载远程更新）+ `merge`（合并进当前分支）。只 `fetch` 不合并，可以先**观察**远程发生了什么，再决定怎么处理——这是更稳妥的习惯。远程分支在本地以 `origin/分支名` 的形式只读存在。' },
            {
              type: 'code',
              title: '先看再合',
              lang: 'bash',
              code: "# 下载远程所有更新（不影响本地分支）\ngit fetch\n\n# 看看 main 落后远程多少\ngit log main..origin/main --oneline\n\n# 确认没问题再合并\ngit merge origin/main\n\n# 基于远程分支创建本地分支\ngit switch -c feature-x origin/feature-x\n\n# 查看所有分支（含远程）\ngit branch -a"
            },
            { type: 'tip', content: 'git pull --rebase 会把本地未推送的提交"搬"到远程更新之后，让历史保持直线，避免频繁的合并提交，团队常用。' }
          ]
        },
        {
          id: 'git-workflow',
          title: '5.4 团队协作流程与 Pull Request',
          sections: [
            { type: 'text', content: '团队协作的典型模式叫 **GitHub Flow**：main 保持可用 → 每个任务开 feature 分支 → 推送到远程 → 发起 **Pull Request（PR）** → 队友 review 提意见 → 通过后合并 → 删分支。PR 不只是合并按钮，更是**代码评审和讨论**的载体。' },
            {
              type: 'list',
              title: '一次完整的协作循环',
              items: [
                '**1. 同步**：git switch main && git pull 更新主线',
                '**2. 开分支**：git switch -c feat/user-avatar，命名写清用途',
                '**3. 开发提交**：小步多次 commit，说明写清楚',
                '**4. 推送**：git push -u origin feat/user-avatar',
                '**5. 发 PR**：在 GitHub 上写清做了什么、怎么验证，请队友 review',
                '**6. 评审**：按意见继续提交，PR 会自动包含新提交',
                '**7. 合并**：Squash merge 把零碎提交压成一个干净的提交进 main',
                '**8. 清理**：删除本地和远程的功能分支'
              ]
            },
            { type: 'tip', content: '个人项目也建议走这套流程：分支隔离 + 自我 review，能显著降低"改着改着把主线改坏"的概率。' }
          ]
        }
      ]
    },

    /* ============ 第六章 进阶技巧 ============ */
    {
      id: 'git-ch6',
      title: '第六章 进阶技巧',
      lessons: [
        {
          id: 'git-tag',
          title: '6.1 tag 标签与版本发布',
          sections: [
            { type: 'text', content: '项目发布重要版本时，给某次提交打上**标签**（如 v1.0.0），以后就能一步回到这个发布点。标签分两种：轻量标签（只是个名字）和**附注标签**（带说明、作者、日期，发布用这种）。' },
            {
              type: 'code',
              title: '标签操作',
              lang: 'bash',
              code: "# 给当前提交打附注标签\ngit tag -a v1.0.0 -m \"第一个正式版本\"\n\n# 列出所有标签\ngit tag\n\n# 查看标签详情\ngit show v1.0.0\n\n# 推送标签到远程（push 默认不带标签！）\ngit push origin v1.0.0\n\n# 一次推送全部标签\ngit push origin --tags\n\n# 删除标签\ngit tag -d v1.0.0\ngit push origin --delete v1.0.0"
            },
            { type: 'tip', content: '语义化版本（SemVer）：主版本.次版本.修订号。大改动不兼容升主版本，加功能升次版本，修 Bug 升修订号——v2.1.3 就传达了兼容性信息。' }
          ]
        },
        {
          id: 'git-rebase',
          title: '6.2 rebase 变基',
          sections: [
            { type: 'text', content: '`rebase` 把自己分支上的提交"摘下来"，**逐个重放**到另一条分支的最新提交之后，效果是历史变成一条直线。与 merge 的区别：merge 保留分叉事实（多一个合并提交），rebase 重写历史（更整洁但"说谎"）。' },
            {
              type: 'code',
              title: '变基的两种用法',
              lang: 'bash',
              code: "# 在 feature 分支上：把我的提交搬到 main 最新之后\ngit switch feature-search\ngit rebase main\n\n# 遇到冲突时：解决后继续（不是 commit）\ngit add .\ngit rebase --continue\n\n# 想放弃变基，回到之前状态\ngit rebase --abort\n\n# 交互式变基：整理最近 3 个提交\ngit rebase -i HEAD~3"
            },
            {
              type: 'table',
              title: 'merge vs rebase',
              headers: ['对比项', 'merge', 'rebase'],
              rows: [
                ['历史形态', '真实保留分叉', '变成一条直线'],
                ['新增提交', '产生合并提交', '不产生（重写原提交）'],
                ['安全性', '不改历史，绝对安全', '改历史，公共分支禁用'],
                ['适用', '合并功能分支', '个人分支同步主线 / 提交前整理']
              ]
            },
            { type: 'warn', content: '黄金法则：**绝不要对已推送给他人（公共分支）的提交做 rebase**。只 rebase 自己独占的分支。' }
          ]
        },
        {
          id: 'git-cherry-reflog',
          title: '6.3 cherry-pick 与 reflog 找回',
          sections: [
            { type: 'text', content: '`cherry-pick` 像"摘樱桃"：从别的分支**只挑某个提交**应用到当前分支，不合并整个分支。`reflog` 则是"后悔药中的后悔药"：它记录 HEAD 的每一次移动，即使提交被 reset 丢弃、分支被误删，都能从这里找回。' },
            {
              type: 'code',
              title: '摘提交与找历史',
              lang: 'bash',
              code: "# 把 feature 上的 a1b2c3d 单独摘到当前分支\ngit cherry-pick a1b2c3d\n\n# ---- reflog：救命用 ----\n# 查看 HEAD 的移动记录\ngit reflog\n\n# 输出示例：\n# a1b2c3d HEAD@{0}: commit: 更新首页\n# 9f8e7d6 HEAD@{1}: reset: moving to HEAD~1\n\n# 回到 reset 之前的状态\ngit reset --hard 9f8e7d6"
            },
            {
              type: 'list',
              title: 'reflog 的典型救命场景',
              items: [
                '**reset --hard 后想反悔**：reflog 找到 reset 前的提交，reset 回去',
                '**误删分支**：git branch 分支名 被删提交的哈希 重建',
                '**rebase 搞砸了**：rebase --abort 或 reflog 回到 rebase 前'
              ]
            },
            { type: 'tip', content: '只要提交过的东西，在 Git 里几乎不会真正丢失——reflog 默认保留 90 天。但从未 add/commit 的工作区修改除外。' }
          ]
        },
        {
          id: 'git-bisect',
          title: '6.4 二分排查 bisect 与效率技巧',
          sections: [
            { type: 'text', content: '"这个 Bug 是哪次提交引入的？"如果历史有一百个提交，挨个检查太慢。`git bisect` 用**二分法**自动帮你缩小范围：你只需告诉它"这个提交是好的、那个是坏的"，它几次就能定位到引入 Bug 的那一次。' },
            {
              type: 'code',
              title: '二分定位 Bug',
              lang: 'bash',
              code: "# 开始：标记当前是坏的、v1.0 是好的\ngit bisect start\ngit bisect bad\ngit bisect good v1.0\n\n# Git 自动切到中间提交，你测试后告诉它：\ngit bisect good   # 或 git bisect bad\n\n# 重复几次后输出：a1b2c3d is the first bad commit\n\n# 结束，回到原来的分支\ngit bisect reset"
            },
            {
              type: 'list',
              title: '提效小技巧合集',
              items: [
                '**git status -s**：短格式状态，一行一个文件',
                '**git commit --amend**：补充修改最近一次提交（说明或内容）',
                '**git log -p 文件**：看文件每处代码是谁哪次改的',
                '**git blame 文件**：逐行标注作者与提交',
                '**alias.lg 图形日志**：log --oneline --graph --all 起个别名天天用'
              ]
            }
          ]
        }
      ]
    },

    /* ============ 第七章 实战场景 ============ */
    {
      id: 'git-ch7',
      title: '第七章 实战场景急救手册',
      lessons: [
        {
          id: 'git-rescue',
          title: '7.1 常见误操作急救',
          sections: [
            { type: 'text', content: '这一课把新手最怕的几个"翻车现场"的解法集中列出。核心武器就三个：reflog（找回历史）、reset（移动指针）、cherry-pick（捞提交）。' },
            {
              type: 'code',
              title: '场景与解法',
              lang: 'bash',
              code: "# 场景 1：reset --hard 后悔了\ngit reflog                     # 找到出事前的哈希\ngit reset --hard 出事前的哈希\n\n# 场景 2：误删了还没合并的分支\ngit reflog                     # 找到分支最后的提交\ngit branch feature-search 哈希\n\n# 场景 3：提交到了错误的分支\n# （在错误分支上）\ngit branch 正确分支名           # 先在原地把分支建出来\ngit reset --hard HEAD~1        # 再把当前分支退回去\n\n# 场景 4：提交说明写错了（还没推送）\ngit commit --amend -m \"正确的说明\"\n\n# 场景 5：commit 漏了文件（还没推送）\ngit add 漏掉的文件\ngit commit --amend --no-edit"
            },
            { type: 'tip', content: '处理误操作前先 git reflog + git status 看清现状，比慌乱中乱敲命令安全得多。' }
          ]
        },
        {
          id: 'git-rewrite-history',
          title: '7.2 整理提交历史',
          sections: [
            { type: 'text', content: '开发时commit 写得很碎（"改错字"、"真改好了"），合并进 main 前值得整理。交互式变基 `rebase -i` 可以**合并多个提交（squash）**、**重排顺序**、**改写说明**，让功能分支的历史清爽可读。' },
            {
              type: 'code',
              title: '压缩最近三个提交',
              lang: 'bash',
              code: "git rebase -i HEAD~3\n\n# 打开的编辑器里，每行开头是动作（pick 默认保留）：\n# pick a1b2c3 feat: 搜索框基本功能\n# pick e4f5g6 fix: 搜索框样式\n# pick h7i8j9 fix: 搜索防抖\n\n# 把后两行的 pick 改成 squash（并入上一行）：\n# pick a1b2c3 feat: 搜索框基本功能\n# squash e4f5g6\n# squash h7i8j9\n\n# 保存后 Git 让你编辑合并后的提交说明，再保存即可"
            },
            { type: 'warn', content: '只对**没有推送给别人**的提交做整理。已推送的公共历史被改写，队友 pull 时会天下大乱。' }
          ]
        },
        {
          id: 'git-binary-lfs',
          title: '7.3 大文件与二进制文件',
          sections: [
            { type: 'text', content: 'Git 对文本文件做了极致优化（按行存差异），但对图片、视频、压缩包这类**二进制文件**：每次改动都存一份完整副本，仓库会迅速膨胀。原则：**源代码进 Git，构建产物和大文件不进**（实在需要则用 Git LFS）。' },
            {
              type: 'list',
              title: '实践建议',
              items: [
                '**不提交**：node_modules、dist、target、日志、数据库 dump —— 全部写进 .gitignore',
                '**设计稿/图片**：小图可以进仓库；频繁改动的大图用 LFS 或放对象存储',
                '**Git LFS**：git lfs install 后 git lfs track \"*.psd\"，大文件存指针，实体走专用存储',
                '**数据库**：不要提交数据文件，提交建表脚本（SQL）'
              ]
            },
            { type: 'warn', content: '大文件一旦进了历史，事后 .gitignore 也删不掉历史里的它，需要 rewrite history（filter-repo）才能瘦身——代价很大。预防远胜于治疗。' }
          ]
        }
      ]
    },

    /* ============ 第八章 GitHub 与远程平台 ============ */
    {
      id: 'git-ch8',
      title: '第八章 GitHub 实用指南',
      lessons: [
        {
          id: 'git-github-ssh',
          title: '8.1 SSH 免密配置',
          sections: [
            { type: 'text', content: 'HTTPS 方式每次推送都可能要输 Token，配好 **SSH 密钥**后 git@github.com: 开头的地址就能免密收发。原理：本地生成一对密钥，私钥留在电脑，公钥贴到 GitHub，配对成功即认证。' },
            {
              type: 'code',
              title: '三步配好 SSH',
              lang: 'bash',
              code: "# 1. 生成密钥对（邮箱换成你的，一路回车即可）\nssh-keygen -t ed25519 -C \"your_email@example.com\"\n\n# 2. 查看公钥内容并复制\ncat ~/.ssh/id_ed25519.pub\n\n# 3. GitHub 右上角头像 -> Settings -> SSH and GPG keys\n#    -> New SSH key，粘贴公钥保存\n\n# 测试连通性\nssh -T git@github.com"
            },
            { type: 'tip', content: '本站部署 GitHub Pages 时用的 publish-gh.bat 若遇到 HTTPS 认证麻烦，把远程地址换成 SSH 形式（git remote set-url origin git@github.com:FGBGO/it-study.git）即可免密推送。' }
          ]
        },
        {
          id: 'git-github-features',
          title: '8.2 README、Pages 与开源协作',
          sections: [
            { type: 'text', content: 'GitHub 不只是"存代码的网盘"：README 是项目门面，**GitHub Pages** 能免费托管静态网站（本站就是这么部署的），Issue 管理待办，Fork + PR 是参与开源的标准路径。' },
            {
              type: 'list',
              title: '平台功能速览',
              items: [
                '**README.md**：仓库首页自动展示，写清是什么、怎么跑起来',
                '**GitHub Pages**：仓库 Settings -> Pages 选 gh-pages 分支，静态站即刻上线',
                '**Issues**：记录 Bug 与功能需求，可关联提交（提交信息写 fix #1）',
                '**Fork**：把别人的仓库复制到自己账号下，改好后发 PR 贡献回去',
                '**Actions**：CI/CD 自动化，推送时自动测试、构建、部署'
              ]
            },
            { type: 'tip', content: '给开源项目贡献代码的完整路径：fork 仓库 -> clone 自己的 fork -> 开分支修改 -> push 到自己的 fork -> 在 GitHub 上向原仓库发 PR。' }
          ]
        }
      ]
    },

    /* ============ 第九章 综合实战 ============ */
    {
      id: 'git-ch9',
      title: '第九章 综合实战',
      lessons: [
        {
          id: 'git-personal-flow',
          title: '9.1 个人项目标准工作流',
          sections: [
            { type: 'text', content: '把前面所学串成每天重复的肌肉记忆。个人开发也建议走"分支 + 合并"的完整流程——习惯养成了，团队协作无缝衔接。' },
            {
              type: 'code',
              title: '每日开发循环',
              lang: 'bash',
              code: "# 1. 更新主线\ngit switch main && git pull\n\n# 2. 为新任务开分支\ngit switch -c feat/quiz-timer\n\n# 3. 写代码，小步提交（重复多次）\ngit add .\ngit commit -m \"feat: 测试页增加倒计时\"\n\n# 4. 推送备份\ngit push -u origin feat/quiz-timer\n\n# 5. 功能完成：合并回主线（本地直接合）\ngit switch main\ngit merge --no-ff feat/quiz-timer\ngit push\n\n# 6. 清理\ngit branch -d feat/quiz-timer\ngit push origin --delete feat/quiz-timer"
            },
            {
              type: 'list',
              title: '坚持这套流程的收益',
              items: [
                'main 始终是"能跑的最新稳定版"，随时可以演示',
                '每个功能一段独立历史，出问题能整体回退',
                '每天 push，代码永远有异地备份'
              ]
            }
          ]
        },
        {
          id: 'git-commit-style',
          title: '9.2 提交信息与分支命名规范',
          sections: [
            { type: 'text', content: '规范不是形式主义：三个月后翻历史时，"feat: 测试页增加倒计时"和"修改"的区别，就是能不能快速定位的区别。推荐业界通用的 **Conventional Commits** 规范。' },
            {
              type: 'table',
              title: '提交类型前缀',
              headers: ['前缀', '用途', '示例'],
              rows: [
                ['feat', '新功能', 'feat: 支持暗色模式'],
                ['fix', '修 Bug', 'fix: 修复答题记录互相覆盖'],
                ['docs', '文档', 'docs: 补充部署说明'],
                ['style', '格式调整（不影响逻辑）', 'style: 统一缩进'],
                ['refactor', '重构（不加功能不修 Bug）', 'refactor: 抽取公共请求方法'],
                ['test', '测试', 'test: 增加工具函数单测'],
                ['chore', '构建/工具/杂务', 'chore: 升级 vite 版本']
              ]
            },
            {
              type: 'list',
              title: '分支命名建议',
              items: [
                '**feature/xxx 或 feat/xxx**：新功能',
                '**fix/xxx**：修 Bug',
                '**hotfix/xxx**：紧急修复线上问题',
                '**用英文小写 + 连字符**：feat/user-avatar，不要用中文和空格'
              ]
            },
            { type: 'tip', content: '本站的提交历史就是这个规范的实际样例：可以打开 GitHub 仓库的 Commits 页面对照感受。' }
          ]
        }
      ]
    }
  ]
}
