const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
      filename: 'build.js',
      path: path.join(__dirname, '/build')},
  module: {
      rules:[{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins:[
      new HWP(
        {template: path.join(__dirname,'/public/index.html')}
      )
  ]
}