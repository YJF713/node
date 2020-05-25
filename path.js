const path =require('path');

// console.log(path);

//path的常用API
//path.parse  解析路径
console.log(__filename);    //C:\Users\ASUS\Desktop\node\path.js
console.log(__dirname);     //C:\Users\ASUS\Desktop\node
console.log('path.parse:',path.parse(__filename));

//path.basename 获取路径名
console.log('path.basename:',path.basename(__filename)); //path.js
console.log('path.basename:',path.basename(__dirname));  //node

//path.dirname 获取路径的后缀名 
console.log('path.dirname:',path.dirname(__dirname)); //C:\Users\ASUS\Desktop

//path.extname 文件路径
console.log('path.extname:',path.extname(__filename)); //.js

//path.join 路径拼接
console.log(path.join(__dirname,'path.js')) //C:\Users\ASUS\Desktop\node\path.js