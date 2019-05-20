const path = require('path');
const nodeExternals = require('webpack-node-externals');

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
        // Transpiles ES6-8 into ES5
        test: /\.(js|ts|tsx|jsx)?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
};
