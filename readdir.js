const fs =require('fs');

//异步读取目录  floders dir
fs.readdir('./module-two',(error,floders)=>{
    if(error) throw error
    console.log(floders);  //数据
});

//同步读取目录
try {
    let dir =fs.readdirSync('./module-two');
    console.log(dir);
} catch (error) {
    throw error
}