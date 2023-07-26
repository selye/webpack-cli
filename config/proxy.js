const proxySettings = {
  '/api': {
    target: 'http://10.1.12.139:8881/',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  },
};

module.exports = proxySettings;
