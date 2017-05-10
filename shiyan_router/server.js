var http = require('http');
var url = require('url');

function start(router){
	function onRequest(req,res){
		var pathName = url.parse(req.url).pathname;
		console.log("request for "+pathName+" receive");

		router(pathName);

		res.writeHead(200,{'Content-type':'text/html'});
		res.write('hello world');
		res.end();
	}

	http.createServer(onRequest).listen(3000);
	console.log('Server has started');
}

exports.start = start;