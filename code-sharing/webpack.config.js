const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    first_index: path.resolve(__dirname, 'src/index1.js'),
    second_index: path.resolve(__dirname, 'src/index2.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
