var dns = require('dns');
process.stdin.resume();
process.stdin.on("data",function(chunk){
	var buf = Array.prototype.slice.call(chunk.toString("utf8"));
	dns.lookup(buf.slice(0,buf.length-2).join(''),function(err,ip){
		if(err){
			throw(err);
		}else{
			console.log("ip地址为:"+ip);
		}
	});
});
process.stdin.on('end',function(){
	console.log("goodbye");
})

