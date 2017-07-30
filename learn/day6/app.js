var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.get('/',function(req,res){
	var url = 'mongodb://127.0.0.1:27017/haha';
	MongoClient.connect(url,function(err,db){
		if(err){
			console.log("false");
			return;
		}
		console.log("success");
		db.collection('student').insertOne({
			'name':'jiangjie',
			'sex':'man'
		},function(err,result){
			if(err){
				console.log(err);
				return;
			}
			console.log(result);
			res.send(result);
			db.close();
		});
		
	});
});

app.listen(3000);