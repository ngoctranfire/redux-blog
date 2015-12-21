var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var assetsPath = path.resolve(__dirname, '../dist');

var config = {
  context: path.resolve(__dirname, '..'),
  entry: {
    app: [
          'webpack-hot-middleware/client',
          './src/client/index'
    ],
    vendor: [
      "redux",
      "react",
      "react-router",
      "redux-simple-router",
      "react-dom",
      "history"
    ]

  },

  output: {
    path: assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: ""
  },

  watch: true,
  devtool: "cheap-module-eval-source-map",

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css'}
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/client/index.html',
      inject: 'body'
    })
  ]
}
module.exports = config;
