const url =require('url');

let urlStr ='http://127.0.0.1:8080/sss?name=jack&age=18&gender=boy';

// 1、 （parse）解析地址 str字符串变成对象 ，可以加上第二个参数 
 let { pathname,query} =url.parse(urlStr,true); //有true是对象，否则是name=jack&age=18&gender=boy
 console.log(`解析url的pathname: ${pathname}`); //  显示 /内容？
//  console.log(`解析url的query：${query}`);    //  ?后面的内容
    console.log(query.name);                    //添加true时，query是个对象

//2、 生成地址，将对象obj生成字符串 str
 let obj ={
    protocol:'http',
    host:'127.0.0.1',
    port:'8081',
    search:'job=coder'
}
let  urlFormat=url.format(obj);   //format格式化
console.log('url格式化的结果：',urlFormat);

//3、 url的拼接
let NewUrl =url.resolve('/a/b/c/d/','e/f/g'); //后面内容接到前面/后面  后面内容最前面如果有/ 则直接是根目录，

console.log('拼接的结果：',NewUrl);


