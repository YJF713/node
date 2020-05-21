const fs=require('fs');
//写入文件内容
let obj={
    name:'yjf',
    age:22
}
// 内容必须转换成字符串
let content =JSON.stringify(obj);
console.log('异步写文件开始');
fs.writeFile('./data.txt',content,(error)=>{
    if(error){
        throw error  //抛出错误
    }else{
        //输出写入内容。
        let content =fs.readFileSync('./data.txt','utf-8');
        console.log(content);
        if(content){
            console.log('异步写文件结束');
        }
    }
})