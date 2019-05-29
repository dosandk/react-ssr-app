const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    port: 9001,
    hot: true,
    compress: true,
    publicPath: '/',
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: true
  }
});
