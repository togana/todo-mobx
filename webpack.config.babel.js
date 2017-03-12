import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const outputPath = path.join(__dirname, 'dist');

const common = {
  entry: {
    bundle: ['./src/index.jsx'],
  },
  output: {
    path: outputPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, enforce: 'pre', exclude: /node_modules/, loader: 'eslint-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './src/index.template.ejs',
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
module.exports = common;
