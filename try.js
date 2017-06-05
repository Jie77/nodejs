process.stdin.resume();
process.stdin.on("data",function(chunk){
	var buf = Array.prototype.slice.call(chunk.toString("utf8"));
	console.log(buf.slice(0,buf.length-2).join(''));
	process.stdout.write(chunk);
});