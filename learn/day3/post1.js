const http = require('http');
const url = require('url');
const formidable = require('formidable');
const util = require('util');
const fs = require('fs');
const path = require('path');

http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	if(pathname == '/upload' && req.method.toLowerCase() == 'post'){
		var form = new formidable.IncomingForm();
		form.encoding = 'utf-8';
		form.uploadDir = './images';
		form.parse(req, function(err, fields, files) {
	    res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
	      
		//console.log(util.inspect({fields: fields, files: files}));
		//console.log(__dirname + '/'+ files.file.path);
		var ran = parseInt(Math.random()*89999+10000);
		var extname = path.extname(files.file.name);
		var oldpath = __dirname + '/' + files.file.path;
		var newpath = __dirname + '/images/' + ran + extname;
			fs.rename(oldpath,newpath,function(err){
				if(err){
					throw err;
				}
				res.write('received upload:\n\n');
				res.end();
			})
	     
	    });

	}
	
}).listen(80,'127.0.0.1');