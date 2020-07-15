const path = require('path');
const fs = require('fs');

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
        https: true,
        key: fs.readFileSync(getpath("privateCA/key.pem")),
        cert: fs.readFileSync(getpath("privateCA/cert.pem")),
        ca: fs.readFileSync(getpath('privateCA/csr.pem')),
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