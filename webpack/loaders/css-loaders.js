const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const styleLoader = {
  loader: 'style-loader', // creates style nodes from JS strings
  options: {
    sourceMap: true
  }
};

const miniCssExtractPlugin = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    // you can specify a publicPath here
    // by default it use publicPath in webpackOptions.output
  }
};

module.exports = [
  devMode ? styleLoader : miniCssExtractPlugin,
  {
    loader: 'css-loader', // translates CSS into CommonJS
    options: {
      modules: true,
      camelCase: false,
      importLoaders: 2,
      localIdentName: '[local]___[hash:base64:5]',
      sourceMap: true
    }
  },
  {
    loader: 'sass-loader', // compiles Sass to CSS
    options: {
      sourceMap: true
    }
  },
  {
    loader: 'sass-resources-loader',
    options: {
      resources: [path.resolve(__dirname, '../../src/assets/styles/main.scss')],
      sourceMap: true
    }
  }
];
