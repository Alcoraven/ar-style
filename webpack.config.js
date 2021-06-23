var path = require('path')
var webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  // mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './lib'),
    // publicPath: '/dist/',
    filename: 'index.js',
    // libraryTarget: 'commonjs2'
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'index.css'
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader', // 将 Sass 编译成 CSS
          },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader', // 将 Less 编译成 CSS
          },
        ],
      },
    ]
  },
}
