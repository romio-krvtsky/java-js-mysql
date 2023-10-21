const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/student/getAll',
        createProxyMiddleware({
            target: 'http://backend:8080',
            changeOrigin: true,
        })
    );

    app.use(
        '/student/add',
        createProxyMiddleware({
            target: 'http://backend:8080',
            changeOrigin: true,
        })
    );
};
