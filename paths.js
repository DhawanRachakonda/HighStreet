const path = require('path');

module.exports = {
  root: path.resolve(__dirname),
  outputPath: path.resolve(__dirname, 'build'),
  entryPath: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.jsx'),
    path.resolve(__dirname, 'assets/css/app.css'),
  ],
  templatePath: path.resolve(__dirname, 'src/template.html'),
  cssFolder: path.resolve(__dirname, 'assets/css'),
  jsFolder: path.resolve(__dirname, 'assets/js'),
};
