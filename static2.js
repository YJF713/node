const http =require('http');
const fs =require('fs');

let  sever =http.createServer();
let port=8081;

sever.on('request',(req,res)=>{
    //res.setHeader("Content-Type","text/html;charset=utf-8")
    switch (req.url) {
        case '/':
                res.write('<h1>首页</h1>');
                res.end();
             break;
        case '/login.html':
                // res.write('<h1>登录</h1>')
                fs.readFile('./login.html','utf-8',(err,data)=>{
                    if (err) {
                        throw err
                    } else {
                        res.write(data);
                        res.end();
                    }
                })
             break;
        case '/node.jpg':
                fs.readFile('./node.jpg',(err,data)=>{
                    if (err) {
                        throw err
                    } else {
                        res.end(data);
                    }
                })
            break;
        case '/login.css':
                fs.readFile('./login.css',(err,data)=>{
                    if (err) {
                        throw err
                    } else {
                        res.end(data);
                    }
                })
            break;
            case '/login.js':
                fs.readFile('./login.js',(err,data)=>{
                    if (err) {
                        throw err
                    } else {
                        res.end(data);
                    }
                })
            break;
        default:
            break;
    } 
   
})

sever.listen(port,'127.0.0.1',()=>{
    console.log(`服务器已启动，正在监听${port}端口！`)
})