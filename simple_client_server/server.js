var qs = require('querystring');

require('http').createServer(function(req,res){
	var body = '';
	req.on('data',function(chunk){
		body += chunk;
	});
	req.on('end',function(){
		res.writeHead(200,{'Content-type':'text/html'});
		res.end('done');
		console.log('got:'+qs.parse(body).name);
	});
	
}).listen(3000);