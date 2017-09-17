var express = require('express')
var app = express()
var session = require('express-session')

app.use(session({
	secret:'csdcsdc',
	resave:false,
	saveUninitialized:true
}))

app.get('/',function(req,res){
	if(req.session.login == '1'){
		res.send("登陆成功")
	}else{
		res.send("未登录")
	}
})

app.get('/login',function(req,res){
	req.session.login = '1'
	res.send("dengluchenggong")
})

app.listen(3000)