module.exports = {
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/calcutalor-vue/'
    : '/',
  outputDir: 'dist',
  assetsDir: 'static'
}