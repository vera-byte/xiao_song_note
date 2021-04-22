const moment = require('moment');
const extendsNetworks = {
    pinterest: {
        sharer: 'https://note.metoyun.com/pin/create/button/?url=@url&media=@media&description=@title',
        type: 'popup',
        icon: '/pinterest.png',
    },
    linkedin: {
        sharer: 'https://note.metoyun.com/shareArticle?mini=true&url=@url&title=@title&summary=@description',
        type: 'popup',
        color: '#1786b1',
        icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.336 0H113.664A114.005333 114.005333 0 0 0 0 113.664v796.672A114.005333 114.005333 0 0 0 113.664 1024h796.672A114.005333 114.005333 0 0 0 1024 910.336V113.664A114.005333 114.005333 0 0 0 910.336 0zM352.256 796.330667H207.189333V375.466667h145.066667z m-72.021333-477.866667a77.824 77.824 0 0 1-81.237334-74.069333A77.824 77.824 0 0 1 280.234667 170.666667a77.824 77.824 0 0 1 81.237333 73.728 77.824 77.824 0 0 1-81.237333 73.386666z m582.314666 477.866667H716.8v-227.669334c0-46.762667-18.432-93.525333-73.045333-93.525333a84.992 84.992 0 0 0-81.237334 94.549333v226.304h-140.629333V375.466667h141.653333v60.757333a155.989333 155.989333 0 0 1 136.533334-71.338667c60.416 0 163.498667 30.378667 163.498666 194.901334z" /></svg>',
    },
}

module.exports = {
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            {
                rel: 'icon',
                href: '/assets/img/logo.gif'
            }
        ],
        [
            'meta',
            {
                name: 'keywords',
                content: '全栈笔记,vuepress,git,electron,vue,uniapp,coding,全栈工程师,小宋,'
            }
        ],
        [
            'meta',
            {
                name: 'author',
                content: '全栈工程师小宋'
            }
        ],
    ],
    title: '全栈攻城狮',
    description: '是全栈攻城狮呀',
    themeConfig: {
        // logo: '/assets/img/logo.gif',
        lastUpdated: "更新时间",
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
        [
            '@vuepress/pwa', {
                serviceWorker: true,
                updatePopup: {
                    message: "有新的内容更新",
                    buttonText: "刷新"
                }
            }
        ],

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
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        // [
        //     "vuepress-plugin-meilisearch",
        //     {
        //         "hostUrl": "https://meilisearch.metoyun.com", // Mandatory
        //         "apiKey": "song598853", // Mandatory
        //         "indexUid": "docs", // Mandatory
        //         "placeholder": "请输入你的问题", // Default: ""

        //     }
        // ],
        // 最后更新时间
        ['@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale('zh-CN')
                    return moment(timestamp).format("LLL")
                }
            }
        ],
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
        }],
        // 分享
        ['social-share',
            {
                networks: ['qq', 'facebook', 'reddit', 'telegram', 'email', 'douban'],
                email: 'xykj@email.metoyun.com',
                fallbackImage: '/assets/img/logo.gif',
                autoQuote: true,
                isPlain: true,
                extendsNetworks,
            },
        ],
    ]

}