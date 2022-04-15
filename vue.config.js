'use strict'
const path = require('path')
 
function resolve(dir) {
    return path.join(__dirname, dir)
}
 
const name = '安博客' // page title
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
            alias: {
                // 设置@/的意义
                '@': resolve('src')
            }
        }
    }
}