const express = require('express'); // 引入express模块
const Mock = require('mockjs'); // 引入mock模块
const app = express(); // 实例化

app.listen('5173', function () {
    console.log('app listening at http://localhost:5173');
});