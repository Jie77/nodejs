const express = require('express');

var app = express();

app.set("view engine","ejs");

app.get('/',function(req,res){
	res.render('index',{
		'news':[
			'afcaf',
			'ascfasdcf',
			'vafsdv'
		]
	});
});

app.listen(3000);  