const express = require('express')
const app = express()
const port = 3000

//express路由的总体形式
app.Method(path,cd)

//字符串路径
app.get('/user', (req, res) => res.send('Hello World!'))

//字符串模式
app.get("ab+cd",(req,res)=>res.send('匹配的路径是acd和abcd'))

//正则表达式模式
app.get(/^a/,(req,res)=>res.send('匹配的路径是a开头'))

//==========================================
//动态路由
app.get('/artcle/:page',(req,res)=>res.send('匹配的路径是/artcle/6、/artcle/7 ·····'))

app.listen(port, () => console.log(`Example app listening on port port!`))