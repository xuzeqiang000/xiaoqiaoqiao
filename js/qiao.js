/**
 * Created by qiao on 2016/8/20.
 */
(function () {
 //   var qiao ='qiao'
 //    console.dir(qiao);
 //    //ffcdasfcdc
 //    console.dir(global);
 //    console.error('error');
 //    console.warn('warn');
 //    console.time('cost');
 //    for(var i =0;i<1000;i++){
 //
 //    }
 //    console.timeEnd('cost');//计时器
 //    console.log(__filename);//当前模块的文件绝对路径
 //    console.log(__dirname);//当前模块的所在的目录的绝对路径
 // //{ rss: 16310272,常驻内存 heapTotal: 9342976,堆得总内存 heapUsed: 3556092堆已经使用的内存量 }
 //    console.log(process.cwd());//当前工作目录
 // console.log(process.memoryUsage());//占用内存

 var util = require('util');
 function  parent() {
    this.name ='parent';
 }
 parent.prototype.say =function () {
    console.dir(this.name);
 }
function children() {
 this.name ='children';
}
util.inherits(children,parent);
 var child = new children();
 child.say();
 console.log(util.isArray(""));
 console.log(util.isRegExp(/\w+/));
 console.log(util.isDate(new Date));
 console.log(util.isError(new Error));
alert("桥桥")
})()