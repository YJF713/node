//引入express模块，并且初始化
const express =require('express');
const path =require('path');

const app =express();

//通过use使用中间件，使中间件代替我们处理一些事情。
app.use(express.static(path.join(__dirname,'public')));
// 图片在public下  地址栏中输入  http://127.0.0.1:3000/logo.jpg 则显示图片


app.get('/',(req,res)=>{
    console.log('前端正在请求后端资源');
    //req下的参数：
    // console.log(1,req.app); //
    // console.log(2,req.baseUrl);
    // console.log(3,req.body);
    // console.log(4,req.cookies);
    // console.log(5,req.hostname);
    // console.log(6,req.path);
    // console.log(7,req.protocol);
    // console.log(8,req.params);
    // console.log(9,req.route);
    // console.log(10,req.query);
    res.send('hello');
})

let sever =app.listen(3000,'127.0.0.1',()=>{
    let host = sever.address().address;
    let port =sever.address().port;
    console.log('ok');
})