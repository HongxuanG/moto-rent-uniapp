module.exports = {
  lintOnSave: false, //关闭eslint
  configureWebpack: (config) => {
    // 生产环境下
    // if (process.env.NODE_ENV === "production") {
    //   config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
    //   config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    //   config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
    //   config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
    //     "console.log"
    //   ];
    // }
    config['externals'] = {
      BMap: 'BMap',
    }
  },
  productionSourceMap: true, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  // css: {
  //   extract: true,
  //   requireModuleExtension: false
  // }
  // devServer: {
  //   proxy: {
  //     "/": {
  //       // target: "https://test.basegps.com",
  //       // target: "http://task.domilink.cn:8088",
  //       target: "http://192.168.1.238:8080",
  //       // target: "http://web1-server",
  //       changeOrigin: true,
  //     }
  //   }
  // }
}
