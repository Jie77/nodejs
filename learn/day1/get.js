var http = require('http');
var url = require('url');

http.createServer(function(req,res){
	var p = url.parse(req.url,true);
	if(p.pathname == '/get'){
		res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
		var name = p.query.name;
		var age = p.query.age;
		var sex = p.query.sex;
		res.write(
			'姓名：'+name+'<br>'
			+'年龄：'+age+'<br>'
			+'性别：'+sex+'<br>'
		);
		res.end();
	}else{
		res.writeHead(404,{'Content-Type':'text/plain'});
		res.end('404:there are something wrong');
	}
}).listen(3000,'127.0.0.1');