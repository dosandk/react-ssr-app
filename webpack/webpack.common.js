require("@babel/polyfill");
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const jsLoaders = require('./loaders/js-loaders');
const fileLoaders = require('./loaders/file-loaders');
const cssLoaders = require('./loaders/css-loaders');

const favicon = path.resolve(__dirname, '../src/assets/react-icon.png');

module.exports = {
  target: 'web',
  entry: ["@babel/polyfill", path.join(__dirname, '../src/client.tsx')],
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
        exclude: [/(node_modules)/]
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
    new CopyPlugin([
      'robots.txt',
      'sitemap.xml',
      { from: 'src/assets/locales', to: 'locales'},
    ]),
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
    }),
    new GenerateSW({
      runtimeCaching: [
        {
          urlPattern: /images/,
          handler: 'cacheFirst'
        },
        {
          urlPattern: new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
          handler: 'cacheFirst'
        },
        {
          urlPattern: /.*/,
          handler: 'networkFirst'
        }
      ]
    }),
    new WebpackPwaManifest({
      name: 'React SSR App',
      short_name: 'ssr app',
      description: 'This is boilerplate for React SSR + i18-next',
      background_color: '#3c0278',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      theme_color: '#78006c',
      icons: [
        {
          src: favicon,
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    })
  ]
};
