require("@babel/polyfill");
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const jsLoaders = require('./loaders/js-loaders');
const fileLoaders = require('./loaders/file-loaders');
const cssLoaders = require('./loaders/css-loaders');

module.exports = {
  target: 'web',
  entry: {
    polyfill: "@babel/polyfill",
    client: path.join(__dirname, '../src/client.tsx')
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, '../dist/public')
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '/src': path.join(__dirname, '../src')
    }
  },
  watchOptions: {
    ignored: /assets\/locales/
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: fileLoaders
      },
      {
        test: /\.(js|jsx|tsx|ts)?$/,
        enforce: 'pre',
        use: jsLoaders,
        exclude: [/(node_modules)/, /(i18n-server)/]
      },
      {
        test: /\.scss$/,
        use: cssLoaders,
        exclude: [/(node_modules)/]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.SSR': JSON.stringify(typeof process.env.SSR === 'undefined' || false)
    }),
    new CopyPlugin(['robots.txt', 'sitemap.xml']),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../index.html'),
      filename: '../index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ]
};
