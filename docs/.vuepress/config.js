const path = require('path');

module.exports = {
    serviceWorker: true,
    title: 'Vue Interface',
    description: 'A collection of standalone UI components built for Vue.',
    plugins: [
        ['vuepress-plugin-template-constants', {
            pkg: require(path.resolve('package.json'))
        }],
        ['@vuepress/register-components', {
            components: [{
                name: 'alert',
                path: path.resolve('main')
            }]
        }]
    ],
    themeConfig: {
        sidebarDepth: 2,
        sidebar: {
            // fallback
            '/': [
                '',
                'tailwindcss',
                'options',
            ]
        },
        footer: "Ⓒ Active Engagement, LLC"
    },
    postcss: {
        plugins: [
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer')
        ]
    }
};