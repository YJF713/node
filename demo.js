//使用fs模块，实现小型数据库操作功能
const fs =require('fs');

 let stu={
     name:'候薇薇',
     no:001
 }
 //判断文件是否存在 
let isExis= fs.existsSync('./class2.json');
if(!isExis){
     //文件不存在，
     let initInfo=[];
     let finalStr=JSON.stringify(initInfo);
     try {
         fs.writeFileSync('./class2.json',finalStr); //写入需转换成字符串，写入成功是数组形式。
         console.log('初始化文件成功！')
     } catch (error) {
        throw error;
     }
}

    //至此 ，文件已经存在，先读取文件内容
    fs.readFile('./class2.json','utf-8',(err,data)=>{
        if(err) throw err;
        // console.log(data);
        //写入对象
        let infoArr =JSON.parse(data); //方法用于将一个 JSON 字符串转换为对象
        infoArr.push(stu);
        let finalStr =JSON.stringify(infoArr);
        fs.writeFile('./class2.json',finalStr,(err)=>{
        if(err) throw err;
        console.log('跟新成功');
        })
    })

