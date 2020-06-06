const express = require('express')
//引入cookieParser
const cookieParser=require('cookie-parser');
const path=require('path');
const app = express()
//通过中间间的发式使用cookieParser
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
const port = 3000

app.get('/index1', (req, res) => {
    //获取前端请求发过来的cookie
    let cookies=req.cookies;
    //res.clearCookie('uage');//删除cookie
    res.send(cookies);
})
app.get('/add/cookie',(req,res)=>{
    let uname =req.query.uname;
    let uage=req.query.uage;
    // 统一设置cookie选项
    let option={
        domain:'baidu.comm',
        path:'/admin',
        secure:true
    }
    // ===================设置cookie==================
    // 设置的规则：res.cookie(key,val);
     res.cookie('uname',uname);
     res.cookie('uage',uage,{
         maxAge:1000*30
     });
    //设置超时时间
    //  res.cookie('uname','jack',{
    //      expires:10*60*1000  //超时时间
    //  });
    //===================================================
    //  res.clearCookie(uname); //清除
     res.send('设置成功！uage的过期时间是30s');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))