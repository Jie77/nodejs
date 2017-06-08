function cul(n){
	var p = n/20;
	var u = 0.775*Math.pow(10,p);
	console.log("u="+u);
	console.log("An="+1.414*u);
}
process.stdin.resume(0);
process.stdin.on('data',function(chunk){
	var p = Array.prototype.slice.call(chunk);
	var c = p.map(function(ele){
		return String.fromCharCode(ele);
	})
	var n = c.slice(0,c.length-2).join('');
	console.log(n);
	console.log(cul(parseFloat(n)));
});