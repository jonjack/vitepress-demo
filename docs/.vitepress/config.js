
export default {
    lang: 'en-US',
    title: 'VitePress Demo',
    description: 'VitePress Demo Desc',

    lastUpdated: true,

    ignoreDeadLinks: true,

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/guide/': sidebar(),
            '/commands/': sidebar()
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/jonjack/vitepress-demo' }
        ],

        footer: {
            message: 'NA',
            copyright: 'NA'
        },

        search: {
            provider: 'local'
        }
    },
};

function nav() {
    return [
        { text: 'Guide', link: '/guide/what-is-cargo-lambda', activeMatch: '/guide/' },
        { text: 'Commands', link: '/commands/introduction', activeMatch: '/commands/' }
    ]
}

function sidebar() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'What is Cargo Lambda?', link: '/guide/what-is-cargo-lambda' },
                { text: 'Installation', link: '/guide/installation' },
                { text: 'Getting Started', link: '/guide/getting-started' },
                { text: 'Cross Compiling', link: '/guide/cross-compiling' },
                { text: 'Release Optimizations', link: '/guide/release-optimizations' },
                { text: 'Lambda Extensions', link: '/guide/lambda-extensions' },
                { text: 'Automating deployments', link: '/guide/automating-deployments' },
                { text: 'Screencasts', link: '/guide/screencasts' },
            ]
        },
        {
            text: 'Commands',
            collapsible: true,
            items: [
                { text: 'Supported commands', link: '/commands/introduction' },
                { text: 'cargo lambda build', link: '/commands/build' },
                { text: 'cargo lambda deploy', link: '/commands/deploy' },
                { text: 'cargo lambda init', link: '/commands/init' },
                { text: 'cargo lambda invoke', link: '/commands/invoke' },
                { text: 'cargo lambda new', link: '/commands/new' },
                { text: 'cargo lambda system', link: '/commands/system' },
                { text: 'cargo lambda watch', link: '/commands/watch' },
            ]
        }
    ]
}
