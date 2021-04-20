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
                link: '/notes/npm'
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
        [
            '@vssue/vuepress-plugin-vssue', {
                platform: 'github', //v3的platform是github，v4的是github-v4
                locale: 'zh', //语言
                // 其他的 Vssue 配置
                owner: 'xykj', //github账户名
                repo: 'xiao_song_note', //github一个项目的名称
                clientId: '361954bcd71295a4340b', //注册的Client ID
                clientSecret: '7ea7704e2c82f6951093443f03318d8ae15952e6', //注册的Client Secret
                autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
            },
        ],
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
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }]
    ]

}