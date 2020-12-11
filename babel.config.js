module.exports = {
    presets: [
        ['@vue/app', {
            corejs: 3,
            useBuiltIns: "usage", // or "entry"
            targets: {
                ie: 10,
                ios: 9,
                browsers: "> .25%, not dead",
            }
        }]
    ]
};