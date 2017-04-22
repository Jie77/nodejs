
/*
 * GET home page.
 * 路由表
 */

var crypto = require('crypto');
var User = require('../models/user.js');

module.exports = function(app){
	app.get('/',function(req,res){
		res.render('index',{title : "主页"});
	});
	app.get('/reg',function(req,res){
		res.render('reg',{title : "注册"});
	});
	app.post('/reg',function(req,res){
		var name = req.body.name;
		var password = req.body.password;
		var password_re = req.body['password-repeat'];
		if(password_re!=password){
			req.flash('error',"两次输入密码不一样");
			return res.redirect('/reg');//重定向
		}
		//进行加密
		var md5 = crypto.createHash('md5');
		password = md5.update(req.body.password).digest('hex');
		var newUser = new User({
			name:name,
			password:password,
			email:req.body.email
		});
		User.get(newUser.name,function(err,user){
			if(user){
				req.flash('error',"用户已存在");
				return res.redirect('/reg');
			}
			newUser.save(function(err,user){
				if(err){
					req.flash('error',err);
					return res.redirect('/reg');
				}
				req.session.user = user;
				req.flash('success',"注册成功");
				res.redirect('/');
			});
		});
	});
	app.get('/login',function(req,res){
		res.render('login',{title : "登陆"});
	});
	app.post('/login',function(res,req){

	});
	app.get('/post',function(req,res){
		res.render('post',{title : "发表"});
	});
	app.post('/post',function(req,res){

	})
	app.get('/logout',function(req,res){
		
	})
}