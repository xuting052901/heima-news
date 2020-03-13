module.exports = {
  devServer: {
    open: true
  },
  // 配置px自动转rem的
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 36
          })
        ]
      }
    }
  }
}
