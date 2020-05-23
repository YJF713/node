const fs = require('fs');

//异步删除
// fs.unlink('./fs-read副本2.js',error=>{
//     if(error){
//         throw error;
//     }else{
//         console('异步删除成功！');
//     }
// })

//同步删除
try {
    let res=fs.unlinkSync('./fs-read-副本.js');
    console.log('同步删除成功！');
} catch (error) {
    throw error;
}
