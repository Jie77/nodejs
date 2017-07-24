const http = require('http');
const url = require('url');
const querystring = require('querystring');
const router = require('./router.js');

function start(){
	http.createServer((req,res)=>{
		//console.log(req.url+'\r\n'+url.parse(req.url).query+'\r\n'+url.parse(req.url).pathname);
		//console.log(querystring.parse(url.parse(req.url).query));
		var pathName = url.parse(req.url).pathname;
		console.log("request for "+pathName+" is acceptable");
		router(pathName);
		res.writeHeader(200,{
			'Content-Type' : 'text/html'
		});
		res.write("<h1>you are request for "+pathName+" </h1>");
		res.end();
	}).listen(3000);
}

module.exports = start;