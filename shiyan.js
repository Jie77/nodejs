var fs = require('fs');
fs.readFile('./lin.jpg',function(err,buf){
	console.log(buf);
})