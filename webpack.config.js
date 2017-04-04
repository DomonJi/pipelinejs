/**
 * Created by Domon on 17/4/3.
 */

const {resolve} = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        include: resolve(__dirname,'src')
      }
    ]
  }
}
