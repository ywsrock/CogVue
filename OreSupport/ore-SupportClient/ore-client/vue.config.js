const path = require('path')

function getpath(dir) {
    return path.join(__dirname, dir)
  }

const port = process.env.port || 8080
const name = "OreSupport"

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
          warnings: false,
          errors: true
        }
    },
    configureWebpack:{
        devtool: 'source-map',
        name: name,
        resolve: {
          alias: {
            '@': getpath('src')
          }
        }
    }
}