module.exports = {
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            {
                rel: 'icon',
                href: '/assets/img/logo.gif'
            }
        ],
    ],
    title: '全栈攻城狮',
    description: '是全栈攻城狮呀',
    themeConfig: {
        // logo: '/assets/img/logo.gif',
        nav: [{
                text: '首页',
                link: '/',

            },
            {
                text: '日常笔记',
                link: '/notes/npm',
                ariaLabel: '日常笔记',
            },
            {
                text: '专题笔记',
                items: [{
                        text: '网址收藏',
                        link: '/website/webclient'
                    },
                    {
                        text: 'Uniapp',
                        link: '/uniapp/'
                    },
                    {
                        text: 'Electron',
                        link: '/electron/'
                    },
                    {
                        text: 'Egg',
                        link: '/egg/'
                    }
                ],
            },
            {
                text: '代码仓库',
                ariaLabel: 'Code Warehouse',
                items: [{
                        text: 'Coding',
                        link: 'https://runvera.coding.net/user/projects'
                    },
                    {
                        text: 'gitee',
                        link: 'https://gitee.com/metoyun_admin'
                    },
                    {
                        text: 'github',
                        link: 'https://github.com/metoyun'
                    }
                ]
            },
        ]
    },
    plugins: [
        // 评论插件
        // [
        //     'gitalk-maker',
        //     {
        //         gitalkConfig: {
        //             clientID: '361954bcd71295a4340b',
        //             clientSecret: '7ea7704e2c82f6951093443f03318d8ae15952e6',
        //             repo: 'vuepress-plugin-gitalk-maker',
        //             owner: 'metoyun',
        //             admin: ['xykj', 'metoyun'],
        //             // id: location.pathname, // 无法配置默认用 location.pathname
        //             distractionFreeMode: true, // Facebook-like distraction free mode
        //         },
        //     },
        // ],
        [
            'vuepress-plugin-mygitalk', {
                // 是否启用(关闭请设置为false)(default: true)
                enable: true,
                // 是否开启首页评论(default: true)
                home: false,
                // Gitalk配置
                gitalk: {
                    // GitHub Application Client ID.
                    clientID: '361954bcd71295a4340b',
                    // GitHub Application Client Secret.
                    clientSecret: '7ea7704e2c82f6951093443f03318d8ae15952e6',
                    // GitHub repository. 存储评论的 repo
                    repo: 'xiao_song_note',
                    // GitHub repository 所有者，可以是个人或者组织。
                    owner: 'metoyun',
                    // GitHub repository 的所有者和合作者 (对这个 repository 有写权限的用户)。(不配置默认是owner配置)
                    admin: ['xykj', 'metoyun'],
                    // 设置语言(default: zh-CN)
                    language: 'zh-CN',
                }
            }
        ],
        // [
        //     '@vssue/vuepress-plugin-vssue', {
        //         platform: 'github', //v3的platform是github，v4的是github-v4
        //         locale: 'zh', //语言
        //         // 其他的 Vssue 配置
        //         owner: 'metoyun', //github账户名
        //         repo: 'xiao_song_note', //github一个项目的名称
        //         clientId: '361954bcd71295a4340b', //注册的Client ID
        //         clientSecret: '7ea7704e2c82f6951093443f03318d8ae15952e6', //注册的Client Secret
        //         autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
        //     },
        // ],
        // 自动生成侧边栏插件
        ["vuepress-plugin-auto-sidebar", {
            // options
        }],
        '@vuepress/active-header-links',
        {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        },
        // 返回顶部
        '@vuepress/back-to-top',
        // 博客
        '@vuepress/blog',
        // 图片类功能
        ['@vuepress/medium-zoom', {
            selector: 'img.zoom-custom-imgs',
            // medium-zoom options here
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16
            }
        }],
        // 进度条
        '@vuepress/nprogress',
        // 搜索
        // ['@vuepress/search', {
        //     searchMaxSuggestions: 10
        // }],
        [
            "vuepress-plugin-meilisearch",
            {
                "hostUrl": "http://127.0.0.1:7700", // Mandatory
                "apiKey": "song598853", // Mandatory
                "indexUid": "docs-test", // Mandatory
                "placeholder": "Search as you type...", // Default: ""
                "maxSuggestions": 10, // Default: 5
                "hotKeys": ['Vscode', 'uniapp', 'git'], // Default: ['s', '/']
                "cropLength": 50 // Default: 30
            }
        ],
        // 最后更新时间
        ['@vuepress/last-updated'],
        // SEO
        ['seo', {
            siteTitle: (_, $site) => $site.title,
            title: $page => $page.title,
            description: $page => $page.frontmatter.description,
            author: (_, $site) => $site.themeConfig.author,
            tags: $page => $page.frontmatter.tags,
            twitterCard: _ => 'summary_large_image',
            type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
            url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
            image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
            publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
            modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
        }],
        // multidir-一个VuePress博客插件，支持多个文件夹
        'blog-multidir',
        // 阅读进度条
        'reading-progress',
        // 代码块多语言切换
        ['code-switcher'],
        // 给代码块自动添加复制按钮
        ["vuepress-plugin-code-copy", true],
        // 扫码查看
        ['qrcode', {
            labelText: '扫码阅读', // displayed text
            size: 'small' // QR code size
        }]
    ]

}