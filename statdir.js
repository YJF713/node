const fs =require('fs');

//查看文件信息
fs.stat('./data.js',(error,stats)=>{
    if(error) throw error;
    if(stats.isDirectory()){
        console.log('当前目录的内容有',stats);
    }
    if(stats.isFile()){
        console.log('当前文件内容：',stats);
    }
    
})