const express = require('express'); // 引入express模块
const Mock = require('mockjs'); // 引入mock模块
const mockApi = require('./mockApi'); // 引入 mock api 
const app = express(); // 实例化

/* post方法 */
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // 添加json解析
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

/* 为app添加中间件处理跨域请求 */
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// 挂载 mock 数据
Object.entries(mockApi).forEach(mockApiItem => {
    const { api, data } = mockApiItem[1];
    app.get(api, function (req, res) {
        res.json({
            status: 200,
            errno: 0,
            data: data
        })
    })
})


app.listen('5173', function () {
    console.log('app listening at http://localhost:5173');
});