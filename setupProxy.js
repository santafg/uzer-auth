const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://uzer-auth.herokuapp.com',
      changeOrigin: true,
    })
  );
};