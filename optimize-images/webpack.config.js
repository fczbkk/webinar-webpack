const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loaders: [
          'file-loader',
          'svgo-loader'
        ]
      }
    ]
  }
}
