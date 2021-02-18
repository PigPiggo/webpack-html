const path = require ('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");


module.exports = (env) => {
  const mode = env.NODE_ENV
  return {
    mode, 
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
            'style-loader', 
            {
              loader: 'css-loader', 
              options: {
                sourceMap: true, 
              }
            }
          ]
        }, 
        {
          test: /\.s[ac]ss$/,
          /* loader: 'sass-loader', 
          options: {
            implementation: require("node-sass"), 
            sourceMap: true, 
          } */
          use: mode === 'development' ? [
            {
              loader: 'sass-loader', 
              options: {
                implementation: require("node-sass"), 
                sourceMap: true, 
              }
            }
          ]: [
            MiniCssExtractPlugin.loader, 
            'css-loader', 
            {
              loader: 'sass-loader', 
              options: {
                implementation: require("node-sass"), 
              }
            }
          ]
        },
        {
          test: /.less$/i, 
          use: [
            "style-loader", "css-loader", "less-loader"
          ]
        }
      ]
    }, 
    devServer: {
      hot: true, 
      open: true
    }, 
    plugins: [
      new HtmlWebpackPlugin({
        title: '123123123', 
        template: 'index.html'
      }), 
      new MiniCssExtractPlugin()
    ]
  }
}