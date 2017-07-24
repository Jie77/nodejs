const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer(function(req,res){
	console.log(req.url);
	//var pathName = url.parse(req.url).pathname;
	var pathName = req.url;
	if(pathName === '/index'){
		fs.readFile('./index.html',function(err,data){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write(data);
			res.end();
		})
	}else if(pathName === '/logo.jpg'){
		fs.readFile('./logo.jpg',function(err,data){
			res.writeHead(200,{'Content-Type':'image/jpg'});
			res.write(data);
			res.end();
		})
	}

}).listen(3000);