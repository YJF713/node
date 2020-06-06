const express = require('express');
const path =require('path');
// 跨域到vue项目中 helloWorld.vue
//引入第三方包，解决跨域问题  
const cors =require('cors');
//引入body-parser ，用来解析post请求中的数据。
const bodyParser =require('body-parser');


const app = express();
// 通过使用中间件的方法，解决跨域问题
// app.use(cors());
app.use('/static',express.static(path.join(__dirname,'public')));
const port = 3000

//用户数据
let userInfo=[
    {username:'马云',gender:'男',phone:'187111',pwd:'000'},
    {username:'赵云',gender:'男',phone:'187222',pwd:'000'},
    {username:'马超',gender:'男',phone:'187333',pwd:'000'},
];

//使用app的use()语法，引入中间件来获取post的数据
//bodyParser 解析的数据类型是：'Content-TYPE：application/x-www-form-urlencode' (可以在浏览器中找到)
//extended 属性值为flase时，使用系统模块处理，为ture时，使用第三方模块处理
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

//获取POST请求中的数据，用到了
app.post('/regiseter', (req, res) =>{
    console.log(req.body);
    //获取用户数据
    let user ={
        username:req.body.username,
        gender:req.body.gender,
        phone:req.body.phone,
        pwd:req.body.pwd,
    }
    //新增用户
    userInfo.push(user);
    res.send('注册成功')
    }) 
//获取GET请求中的数据，express做了封装。比node简单
app.get('/user/info',cors(),(req,res)=>{
    //get请求中的参数在url上，直接通过req.query来获取。
    console.log(req.query);
    userInfo.forEach(item =>{
        if(item.name==req.query.username){
            phone=item.phone
            console.log(phone)
        }
    })
    res.send(JSON.stringify(userInfo))
})

app.listen(port, () => console.log(`Example app listening on port port!`));

