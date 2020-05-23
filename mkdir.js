const fs =require('fs');
//创建文件夹

//异步创建目录（文件夹）
// fs.mkdir('./newdir1',error=>{
//     if (error) {
//         throw error
//     } else {
//         console.log('异步创建成功！')
//     }
// });

//=====================
//同步创建文件
try {
    fs.mkdirSync('./newdir2');
    console.log('同步创建成功');
} catch (error) {
    throw error;
}