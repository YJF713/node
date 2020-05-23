const fs=require('fs');

//异步拷贝
// fs.copyFile('fs-read.js','fs-read-副本.js',error=>{
//     if(error){
//         throw error;
//     }else{
//         console.log('复制成功');
//     }
// })
//======================

//同步拷贝
// try{
//     fs.copyFileSync('./fs-read.js','fs-read副本2.js');
//     console.log('拷贝成功');
//     //输出值为undefind
// }catch(error){
//     throw error;
// }



// fs.constants.COPYFILE_EXCL - 如果 dest 已存在，则拷贝操作将失败。
// try{
//     fs.copyFileSync('./fs-read.js','fs-read副本2.js',fs.constants.COPYFILE_EXCL);
//     console.log('拷贝成功');
// }catch(error){
//     throw error;
// }

// fs.constants.COPYFILE_FICLONE - 拷贝操作将尝试创建写时拷贝（copy-on-write）链接。如果平台不支持写时拷贝，则使用后备的拷贝机制。
try{
    fs.copyFileSync('./fs-read.js','fs-read副本2.js',fs.constants.COPYFILE_FICLONE);
    console.log('拷贝成功');
}catch(error){
    throw error;
}


// fs.constants.COPYFILE_FICLONE_FORCE - 拷贝操作将尝试创建写时拷贝链接。如果平台不支持写时拷贝，则拷贝操作将失败。
//未成功！！！！
// try {
//     let res =fs.copyFileSync('./fs-read.js','./fs-read副本3.js',fs.constants.COPYFILE_FICLONE_FORCE);
//     console.log('拷贝成功');
// }catch(error){
//     throw error;
// }