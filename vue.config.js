module.exports = {
  publicPath: '/test/',
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'dist-test'
}
