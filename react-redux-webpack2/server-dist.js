var express = require('express'),
    proxyMiddleware = require('http-proxy-middleware'),
    open = require('open'),
    config = require("./webpack.config");

var proxy = proxyMiddleware({
    target: `http://${config.devServer.host}:3000`,
    changeOrigin: true,
    logLevel: 'debug'
});

var app = express();

app.use(express.static(__dirname + '/dist'));
app.use('/api', proxy);
app.listen(3600, function () {
    console.log('服务器端口:' + 3600);
    console.log('正在打开默认浏览器...');
    open(`http://${config.devServer.host}:3600`);
});
