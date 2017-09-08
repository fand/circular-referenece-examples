const path = require('path');

module.exports = {
  entry: {
    commonjs: './commonjs/index.js',
    esmodule: './esmodule/index.js',
    typescript: './typescript/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public/webpack/'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    loaders: [
      { test: /\.ts?$/, loader: 'ts-loader' },
    ],
  },
};
