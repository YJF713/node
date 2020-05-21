//读文件
const fs =require('fs');    //内置fs模块
// console.log(fs); 

console.log('开始执行异步读取文件！');
fs.readFile('./data.txt','utf-8',(error,data)=>{
    //异步报错处理
    if(error){
        throw error
    }else{
        console.log(`异步content:${data}`);
    }
})
console.log('结束异步读取文件！');

//===================================

console.log('开始执行同步读取文件');
try{
    let content =fs.readFileSync('./data.txt','utf-8');
    console.log(`同步content:${content}`);
}catch(error){
    // 同步报错处理
    console.log(error)
}
console.log('结束同步读取文件！')

