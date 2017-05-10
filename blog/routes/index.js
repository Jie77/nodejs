
/*
 * GET home page.
 * 路由表
 */

var crypto = require('crypto');
var User = require('../models/user.js');

module.exports = function(app){
	app.get('/',function(req,res){
		res.render('index',{
			title : "主页",
			user : req.session.user,
			success : req.flash('success').toString(),
			error: req.flash('error').toString()
		});
	});
	app.get('/reg',checkNotLogin);
	app.get('/reg',function(req,res){
		res.render('reg',{
			title : "注册",
			user : req.session.user,
			success : req.flash('success').toString(),
			error: req.flash('error').toString()
		});
	});
	app.post('/reg',checkNotLogin);
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
	app.get('/login',checkNotLogin);
	app.get('/login',function(req,res){
		res.render('login',{
			title : "登陆",
			user : req.session.user,
			success : req.flash('success').toString(),
			error : req.flash('error').toString()
		});
	});
	app.post('/login',checkNotLogin);
	app.post('/login',function(req,res){
		var md5 = crypto.createHash('md5');
		var password = md5.update(req.body.password).digest('hex');
		User.get(req.body.name,function(err,user){
			if(!user){
				req.flash('error','用户或密码错误');
				return res.redirect('/login');
			}
			if(user.password != password){
				req.flash('error','用户或密码错误');
				return res.redirect('/login');
			}
			req.session.user = user;
			req.flash('success','登陆成功');
			res.redirect('/');
		});
	});
	app.get('/post',checkLogin);
	app.get('/post',function(req,res){
		res.render('post',{
			title : "发表",
			user : req.session.user,
			error : req.flash('error').toString(),
			success : req.flash('success').toString()
		});
	});
	app.post('/post',checkLogin);
	app.post('/post',function(req,res){

	});
	app.get('/logout',checkLogin);
	app.get('/logout',function(req,res){
		req.session.user = null;
		req.flash('success','登出成功');
		res.redirect('/');
	});

	function checkLogin(req,res,next){
		if(!req.session.user){
			req.flash('error','用户未登录');
			res.redirect('/login');
		}
		next();
	}
	function checkNotLogin(req,res,next){
		if(req.session.user){
			req.flash('error','用户已登陆');
			res.redirect('back');//back表示返回之前的页面，内置
		}
		next();
	}
}