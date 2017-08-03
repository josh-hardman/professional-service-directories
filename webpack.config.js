const path = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRootPlugin = require('html-webpack-react-root-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'babel-polyfill',
      // 'react-hot-loader/patch',
      // 'webpack/hot/only-dev-server',
      './src/index.js'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'styled-components'
    ]},
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/'
  },
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
    // hot: true,
    // contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    disableHostCheck: true,
    compress: true,
    port: 9000
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   title: 'Dentto',
    //   filename: 'index.html'
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'vendor',
        'manifest'
      ]
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new BundleAnalyzerPlugin(),
    new ReactRootPlugin('root')
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    },
    // modules: [
    //   path.resolve('./src'),
    //   'node_modules'
    // ]
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      'node_modules'
    ]
  }
}
