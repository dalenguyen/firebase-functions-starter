'use strict'

const nodeExternals = require('webpack-node-externals')
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  mode: 'production',
  output: {
    filename: 'index.js',
    libraryTarget: 'this',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, './tsconfig.json'),
      }),
    ],

    extensions: ['.ts', '.js'],
  },
  externals: [nodeExternals()],
}
