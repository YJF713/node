const http =require('http');
const fs =require('fs');
const url =require('url');
//引入post请求，
const querystring =require('querystring');

let sever =http.createServer();

sever.on('request',(req,res)=>{
    //通过url模块的parse方法解析路径，记得将第二个参数设置为true
    let {pathname,query}= url.parse(req.url,true);
    switch (pathname) {
        case '/':
            fs.readFile('./from.html','utf-8',(err,data)=>{
                if(err){
                    throw err;
                }else{
                    res.write(data);
                    res.end();
                }
            })
            break;
        case '/from.css':
                fs.readFile('./from.css',(err,data)=>{
                    if(err){
                        throw err;
                    }else{
                        res.end(data);
                    }
                })
            break;
        case '/login':
                //解决页面间的中文
                res.setHeader("Content-Type","text/plain;charset=utf-8");
                res.write(`欢迎你,${query.username}`);
                res.write(`初始密码是：${query.pwd},时间为${new Date()}`);
                res.end();
            break;
            //login2是post请求
        case '/login2':
            //解决页面间的中文
            res.setHeader("Content-Type","text/plain;charset=utf-8");
            if (req.method.toLowerCase()==='post') { //toLowerCase小写
                let reqBody ='';
                req.on('data',data =>{   //判断是否有 data
                    // let data =decodeURIComponent(data);   //对 URI 进行解码。
                    // console.log(data);
                    reqBody += data
                })
            }
            req.on('end',()=>{
                let dataObj =querystring.parse(reqBody.toString());//字符串转换为对象
                res.write(`欢迎您，${dataObj.username} ,
                           初始密码是：${dataObj.pwd} ,
                           登录时间为：${new Date()}`);
                req.end();
            })
          
            break;
        default:
            break;
    }
   
})

sever.listen(8080,'127.0.0.1',()=>{
    console.log('ok');
})