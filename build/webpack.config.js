const path = require ('path')

module.exports = {
  mode: "development", 
  entry: path.join (__dirname, '../src/index.js'), 
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  }, 
  module: {
    rules: [
      {
        test: /.css$/i, 
        use: [
          'style-loader', 'css-loader'
        ]
      }, 
      {
        test: /\.s[ac]ss$/,
        use: [

          // 将 JS 字符串生成为 style 节点
          // "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          // 'css-loader', 
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
      {
        test: /.less$/i, 
        use: [
          "style-loader", "css-loader", "less-loader"
        ]
      }
    ]
  }
}