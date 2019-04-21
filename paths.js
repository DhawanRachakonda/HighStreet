const path = require('path');

module.exports = {
  root: path.resolve(__dirname),
  outputPath: path.resolve(__dirname, 'build'),
  entryPath: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.jsx'),
  ],
  templatePath: path.resolve(__dirname, 'src/template.html'),
  cssFolder: 'assets/css',
  jsFolder: 'assets/js',
};
