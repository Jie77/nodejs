var ht = require('http');
var serv = ht.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end("<h1>hello world</h1>");
})
serv.listen(3000);