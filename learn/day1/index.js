const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer(function(req,res){
	console.log(url.parse(req.url));
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
	}else{
		res.writeHead(404,{'Content-Type':'text/html'});
		res.end('ERROR');
	}

}).listen(3000);