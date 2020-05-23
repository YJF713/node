const fs =require('fs');
//异步修改文件名
// fs.rename('./fs-read.js','fs.js',error=>{
//     if(error){
//         throw error;
//     }else{
//         console.log('重命名成功！');
//     }
// })
//====================================

//同步修改文件名
try{
    fs.renameSync('./fs-read.js','fs.js');
    console.log('修改成功！');
}catch(error){
    throw error; 
}
