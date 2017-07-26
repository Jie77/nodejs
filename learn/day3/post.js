const http = require('http');
const url = require('url');
const querystring = require('querystring');

http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	if(pathname == '/upload' && req.method.toLowerCase() == 'post'){
		var alldata = '';

		req.addListener('data',function(chunk){
			alldata += chunk;
		})
		req.addListener('end',function(){
			console.log(alldata.toString());
			var data = querystring.parse(alldata.toString());
			console.log(data);
			res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
			var str = '姓名：'+data.name+'<br>'+
				'年龄：'+data.age+'<br>'+
				'爱好：';
			data.hobby.forEach(function(ele){
				str += ele+',';
			})
			str = str.slice(0,-1);
			res.write(str);
			res.end();
		})
	}
	
}).listen(80,'127.0.0.1');