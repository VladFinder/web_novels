const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    },
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  },
  // Prod собирается для корня домена; dev — обычный /
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
