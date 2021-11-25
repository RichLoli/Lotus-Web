//Vue.config.js
const path = require('path')
const resolve = dir => path.join(__dirname, dir)


module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    },

    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null, // string | Object
        before: (app) => {
            // `app` 是一个 express 实例
        },
    },

    runtimeCompiler: true
}