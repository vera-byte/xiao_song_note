/*
 * @Author: your name
 * @Date: 2021-05-21 13:43:21
 * @LastEditTime: 2021-06-11 21:16:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /note/docs/.vuepress/config/plugins.js
 */

module.exports = [
    // docs https://antdocs.vercel.app/plugin/
    ['homebadge', {
        // selector: '.hero',
        // repoLink: 'https://github.com/metoyun/xiao_song_note',
        // badgeLink: 'https://img.shields.io/github/stars/metoyun/xiao_song_note',
        // badgeGroup: [
        //     'https://img.shields.io/github/forks/metoyun/xiao_song_note',
        //     'https://img.shields.io/github/issues/metoyun/xiao_song_note',
        //     'https://img.shields.io/github/stars/metoyun/xiao_song_note',
        // ]
    }],
    // [
    //     'vuepress-plugin-mygitalk', {
    //         // 是否启用(关闭请设置为false)(default: true)
    //         enable: true,
    //         // 是否开启首页评论(default: true)
    //         home: false,
    //         // Gitalk配置
    //         gitalk: {
    //             // GitHub Application Client ID.
    //             clientID: '361954bcd71295a4340b',
    //             // GitHub Application Client Secret.
    //             clientSecret: '7ea7704e2c82f6951093443f03318d8ae15952e6',
    //             // GitHub repository. 存储评论的 repo
    //             repo: 'xiao_song_note',
    //             // GitHub repository 所有者，可以是个人或者组织。
    //             owner: 'metoyun',
    //             // GitHub repository 的所有者和合作者 (对这个 repository 有写权限的用户)。(不配置默认是owner配置)
    //             admin: ['xykj', 'metoyun'],
    //             // 设置语言(default: zh-CN)
    //             language: 'zh-CN',
    //         }
    //     }
    // ],
    // 图片类功能
    ['@vuepress/medium-zoom', {
        selector: 'img.zoom-custom-imgs',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
            margin: 16
        }
    }],
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
    // 代码块多语言切换
    ['code-switcher'],
    [
        '@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "有新的内容更新",
                buttonText: "刷新"
            }
        }
    ],

]