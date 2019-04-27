const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config)=>{
    config.resolve.alias
        .set('styles',resolve('src/assets/styles'))
  },
  baseUrl: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.easy-mock.com/mock/5cc3bca798cb03063c036070/travel/',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
