const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

const server = {
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new NodemonPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = [server];
