const fs=require('fs');
//追加数据
let arr =[
    {
        name:'mi 10 ',
        price:'2999'
    }
];
let content =JSON.stringify(arr);

// 异步追加数据   追加的为数组。
// fs.appendFile('./data.js',content,error =>{
//     if(error){
//         throw error;
//     }else{
//         try {
//             let txt =fs.readFileSync('./data.js','utf-8');
//             console.log('追加内容成功，最新内容是：',txt);
//         } catch (error) {
//             throw error;
//         }
//     }
// });

//=========================
//同步追加数据

try {
    fs.appendFileSync('./data.js',content);
    try {
        let res=fs.readFileSync('./data.js','utf-8');
        console.log('同步追加数据，最新内容是：',res);
    } catch (error) {
        throw error;
    }
} catch (error) {
    throw error;
}