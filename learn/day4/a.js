var express = require('express');

var app = express();

app.get("/",function(req,res){
	res.send("hello worldnnnnnnnnnnnn");
});

app.get(/^\/student\/([\d]{5})$/,function(req,res){
	res.send("学号："+req.params[0]);
	console.log(req.params);
});

app.get('/teacher/:number',function(req,res){
	console.log(req.params);
	res.send("工号："+req.params.number);
})

app.listen(3000);


