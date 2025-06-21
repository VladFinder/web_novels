const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://37.140.192.181:3001',
        changeOrigin: true,
        secure: false
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'dist-test',
  filenameHashing: true,
  configureWebpack: {
    output: {
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js'
    }
  }
})
