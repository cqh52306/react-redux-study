var express = require('express');
var app = express();
var ip = require('ip').address();
var Mock = require('mockjs');

app.get('/api', function (req, res) {
    setTimeout(function () {
        res.json(Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }]
        }));
    }, 1000)
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://', ip, ":", port);
});