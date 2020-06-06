const express = require('express');
const path =require('path');


const app = express()
//==============================
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

const port = 3000

app.get('/ejs', (req, res) =>{
    let data={
        person:{
            age:18,
            gender:'boy'
        },
        time:[
            'yesterday1','today1','tomorrow1'
        ]
    }
    //render 表示渲染哪一个页面，第二个参数是 传给页面的数据
    res.render('index',data)
})
//==============================
app.listen(port, () => console.log(`Example app listening on port port!`))