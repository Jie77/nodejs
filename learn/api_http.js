/*------------------服务端----------------------*/

var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('hello world');
}).listen(3000);

/*
把request对象当作一个数据流来请求体的数据
*/

var http = require('http');

http.createServer(function(req,res){
	var body = [];

	req.on('data',function(chunk){
		body.push(chunk);
	});

	req.on('end',function(){
		body = Buffer.concat(body);
		console.log(body.toString());
	});

	console.log(req.method);
	console.log(req.headers);
}).listen(3000);

/*------------------客户端----------------------*/

/*
POST方式
*/
var http = require('http');

var opts = {
	hostname:"www.example.com",
	post:'80',
	path:'/',
	method:'POST',
	headers:{
		'Content-Type':'application/x-www-form-urlencoded'
	}
};

var req = http.request(opts,function(res){});

req.write("hello world");
req.end();

/*
GET方式
*/

var http = require('http');

http.get('www.example.com',function(res){
	var body = [];
	res.on('data',function(chunk){
		data.push(chunk);
	});
	res.on('end',function(){
		body = Buffer.concat(body);
		console.log(body.toString());
	});
});