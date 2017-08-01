var express = require('express');
var db = require('./model/db.js');

var app = express();

app.get('/',function(req,res){
	db.insertOne('student',{'name':'jiangjie','sex':'man'},function(err,result){
		if(err){
			console.log(err);
			res.send('Error');
			return;
		}
		res.send(result);
	});
});


app.get('/find',function(req,res){
	var pagenum = parseInt(req.query.page);
	db.find('student',{},{'pagenum':pagenum,'skipnum':3},function(err,result){
		if(err){
			console.log(err);
			res.send('Error');
			return;
		}
		res.send(result);
	})
});

app.get('/del',function(req,res){
	db.del(function(err,result){
		if(err){
			console.log(err);
			res.send("Error");
		}
		res.send(result);
	});
});


app.listen(3000);


