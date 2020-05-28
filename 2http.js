 const http = require('http');

//创建http应用服务的实列对象
 let sever =http.createServer(); 
//给创建好的服务实例sever 绑定接收request事件。
 sever.on("request",(req,res)=>{ //（request，response）
       // console.log(`请求的地址：${req}`);
        console.log(`请求的地址：${req.url}`);
      //处理响应
        res.setHeader("Content-Type","text/plain;charset=utf-8");  //设置编码类型 有汉语添加
        res.write('this is my first node.js API');
        res.write('你好！');
        res.end();
 })
 
//绑定监听的端口，开启服务
 sever.listen(8080,'127.0.0.1',()=>{
    console.log(`服务器已启动，正在监听${8080}端口`);
 })