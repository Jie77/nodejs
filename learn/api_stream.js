/*
只读数据流
*/

var rs = fs.createReadStream(src);

rs.on('data',function(chunk){//为了避免函数处理不过来数据，增加一个回调函数
	rs.pause();				
	doSomething(chunk,function(){
		rs.resume();
	});
});

rs.on('end',function(){
	clearUp();
});

/*
只写数据流
*/

var rs = require('fs');
var ws = require('ws');

rs.on('data',function(chunk){
	if(ws.write(chunk)==false){//如果还没写完
		rs.pause();//读取操作暂停
	}
});

ws.on('drain',function(){//写入操作已经完成
	rs.resume();//读取操作继续
});

rs.on('end',function(){
	ws.end();
});