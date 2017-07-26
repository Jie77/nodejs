const http = require('http');
const fs =require('fs');
const url = require('url');
const path = require('path');

http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	if(pathname == '/'){
		pathname = '/index.html';
	}
	var extname = path.extname(pathname);
	fs.readFile('./static'+pathname,function(err,data){
		if(err){
			fs.readFile('./static/404.html',function(err,data){
				res.writeHead(404,{'Content-Type':'text/html;charset=UTF8'});
				res.end(data);
			});
			return;//注意这步很重要！！
		}
	/*	var MIME = getMime(extname);
		console.log(MIME);
		res.writeHead(200,{'Content-Type':MIME});
		res.end(data);*/

		getMime(extname,function(MIME){
			res.writeHead(200,{'Content-Type':MIME});
			res.end(data);
		})
	});

}).listen(3000);

/*function getMime(extname){
	var data = fs.readFileSync('./mime.json');//采用同步读取，如果异步的话，就会在还未读取完文件的情况下就已经返回页面，此时的Content-Type为undefine
	var a = JSON.parse(data);
	return a[extname];
}*/

function getMime(extname,callback){
	fs.readFile('./mime.json',function(err,data){
		if(err) throw err;
		var a = JSON.parse(data);
		callback(a[extname]);
	})
}