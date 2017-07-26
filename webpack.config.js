const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRootPlugin = require('html-webpack-react-root-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Dentto',
      filename: 'index.html'
    }),
    new ReactRootPlugin('root')
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules']
  }
}
