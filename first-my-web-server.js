/*var ht = require('http');
var serv = ht.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end("<h1>hello world</h1>");
})
serv.listen(3000);*/

require('http').createServer(function (req,res){
	if(req.url=='/'){
		res.writeHead(200,{'Content-type':'text/html'});
		res.end([
			'<h1>My form</h1>',
			'<form method="post" action="/url">',
			'<fieldset>',
			'<label>Personal information</label>',
			'<p>What is your name</p>',
			'<input type="text" name="name">',
			'<input type="submit" value="submit">',
			'</fieldset>',
			'</form>'].join(''));
	}else if(req.url=='/url'){
		res.writeHead(200,{'Content-type':'text/html'});
		res.end('you send a <em>'+req.method+'</em> request');
	}
	
}).listen(3000);