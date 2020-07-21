const path = require('path')
const autoprefixer = require('autoprefixer')

// Extracted PostCSS config. It helps with the readability of code.
const postCssConfig = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      autoprefixer
    ]
  }
}

// Extracted list of loaders for CSS. Used for both *.css and *.scss files.
const cssLoaders = [
  'style-loader',
  'css-loader',
  postCssConfig
]

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
        test: /\.css$/,
        loaders: cssLoaders
      },
      {
        test: /\.scss$/,
        loaders: [
          ...cssLoaders,
          'sass-loader'
        ]
      }
    ]
  }
}
