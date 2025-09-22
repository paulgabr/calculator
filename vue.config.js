module.exports = {
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/calculator/' : '/',
  outputDir: 'dist'
}