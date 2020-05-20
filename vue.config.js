var ManifestPlugin = require('webpack-manifest-plugin');

// vue.config.js
module.exports = {
    configureWebpack: {
        output: {
            libraryExport: 'default'
        },
        plugins:[
            new ManifestPlugin()
        ]
    },
    publicPath: '/',
    outputDir: './dist'
};
