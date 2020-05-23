const fs=require('fs');
//写入文件内容
let obj={
    name:'yjf2',
    age:21
}
// 内容必须转换成字符串
let content =JSON.stringify(obj);
console.log('异步写文件开始');
// fs.writeFile('./data.txt',content,(error)=>{
//     if(error){
//         throw error  //抛出错误
//     }else{
//         //输出写入内容。
//         let content =fs.readFileSync('./data.txt','utf-8');
//         console.log(content);
//         if(content){
//             console.log('异步写文件结束');
//         }
//     }
// })

// ==================================
console.log('以追加的方式写入文件 -开始');
fs.writeFile('./data.txt',content,{flag:'a'},error=>{
    if(error){
        throw error;
    }else{
        console.log('追加写入文件成功！');
    }
})