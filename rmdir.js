const fs =require('fs');

//异步删除文件夹
// fs.rmdir('./newdir1',err=>{
//     if(err) throw err;
//     console.log('异步删除成功！');
// })

//=========================
//同步删除文件夹
try {
    let  res =fs.rmdirSync('./newdir2');
    console.log(res);
} catch (error) {
    throw error
}