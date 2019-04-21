const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonPaths = require('./paths');

const PUBLIC_DOMAIN = 'localhost';
const THIS_SERVER_NAME = 'localhost';

module.exports = {
  mode: 'development',
  entry: commonPaths.entryPath,
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
    }),
    new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]),
  ],
  devServer: {
    hot: true,
    inline: true,
    port: 3003,
    public: PUBLIC_DOMAIN,
    proxy: [
      {
        context: ['/api/*'],
        target: {
          host: THIS_SERVER_NAME,
          protocol: 'http:',
          port: 8089,
        },
        secure: false,
        changeOrigin: false,
      },
    ],
  },
};
