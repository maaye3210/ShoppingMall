const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 不要map文件
  productionSourceMap: false,
  transpileDependencies: true,
  // 配置跨域代理
  devServer: {
    proxy: {
      '/api': { target: 'http://39.98.123.211' }
    },
  },

})
