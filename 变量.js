require('./hello');
console.log(time);
//全局对象 -global
console.log(global.time);
//全局对象 -process
process.on('exit',(code)=>{
    setTimeout(function(){
        console.log(666);
    },0);
    console.log(`exit,code:${code}`);
});
console.log('finish');
//全局对象 -console

//全局函数 -定时器函数   setTimeout/clearTimeout 、setInterval/clearTnterval

//全局函数 -require         升级版的<script>标签
