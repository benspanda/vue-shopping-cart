module.exports = {
  siteName: 'Movie Store',
  chainWebpack: config => {
    // add svg loader to webpack
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
