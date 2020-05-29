const http =require('http');

let sever =http.createServer();

sever.on('request',(req,res)=>{
    res.setHeader("Content-Type","application/json")
    switch (req.url) {
        case '/':
            res.end(JSON.stringify({
                msg:'hello',
                code:'001'
            }))
            break;
        case '/getInfo':
                res.end(JSON.stringify({
                    name:'Jack',
                    code:'001',
                    niceName:'风清扬',
                    age:18
                }))
                break;
        default:
            break;
    }
    res.end();
})

sever.listen(8081,'127.0.0.1',()=>{
    console.log('ok');
})