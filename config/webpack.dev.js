const { merge } = require('webpack-merge');
const { SERVER_HOST, SERVER_PORT } = require('./constants');
const { HotModuleReplacementPlugin } = require('webpack');
const proxySettings = require('./proxy');

const common = require('./webpack.common');
const { webpack } = require('webpack');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: './dist',
    host: SERVER_HOST,
    port: SERVER_PORT,
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
    proxy: { ...proxySettings },
  },
  plugins: [new HotModuleReplacementPlugin()],
});
