const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.error('process.env.NODE_ENV', process.env.NODE_ENV);

module.exports = {
  entry: {
    server: path.join(__dirname, '../server.tsx')
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.join(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
  },
  target: 'node',
  mode: process.env.NODE_ENV,
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024, // any image below or equal to 10K will be converted to inline base64 instead
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        exclude: [/(node_modules)/],
        use: [
          {
            loader: 'ignore-loader'
          }
        ]
      },
      {
        // Transpiles ES6-8 into ES5
        test: /\.(js|ts|tsx|jsx)?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },

    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: '[name].css',
    //   chunkFilename: '[id].css'
    // })
  ]
};
