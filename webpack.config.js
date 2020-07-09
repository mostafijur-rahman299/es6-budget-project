const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "/assets/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 1234,
    contentBase: path.join(__dirname, "dist")
  }
}