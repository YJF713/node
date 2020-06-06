const express = require('express')
const cookieParser=require('cookie-parser');
const session=require('express-session');
const app = express()
app.use(cookieParser());
app.use(session({
    secret:'abc123',
    cookie:{
        maxAge:30*1000
    }
}))
const port = 3000

app.get('/count', (req, res) => {
    if(!req.session.count){
        req.session.count=1
    }
    req.session.count ++;
    res.send(`你请求的次数是${req.session.count}`);
});
// 判断session中的count是否有效
app.get('/checkcount',(req,res)=>{
    console.log(req.session);
    res.send(`你请求的次数是${req.session.count}`);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))