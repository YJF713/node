const express = require('express');
const bodyParser=require('body-parser');
//引入multer，用于解决上传图片。
const multer=require('multer');
const path =require('path');
const app = express();

app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json())
app.use('/static',express.static(path.join(__dirname,'public')));
        //添加前缀（可加可去）
const port = 3000

//----------------------------------

//设置自定义目录和名称
const storage =multer.diskStorage({
    // 设置存储图片的位置，cd =callback。 目的是将数据传递出来
    destination:(req,file,cd)=>{
        cd(null,path.relative("files/image"));
    },
    //指定文件的后缀名
    filename:(req,file,cd)=>{
        cd(null,Date.now()+path.extname(file.originalname))
    }
}) 
//配置图片中上传的保存目录
// let upload=multer({dest:"./files/image"});   //最简单的形式，能用但是文件名是乱码，而且没有后缀名
//进阶版，配置更加丰富，可以有文件名和后缀名
let upload =multer({storage:storage});

app.post('/upload',upload.single('myFile'),(req,res)=>{
    let jsonObj ={
        msg:'存储成功',
        filepath:'/images/'+path.basename(req.file.path)
    }
    res.send(JSON.stringify(jsonObj));
})
//----------------------------------

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))