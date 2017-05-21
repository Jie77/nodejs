
/*
 * GET home page.
 */
var User = require('../models/user.js');

module.exports = function(app){
	app.get('/',function(req,res){
		console.log(req.flash('success').toString());
		res.render('index',{
			title:'simple-login',
			user:req.session.user,
			success:req.flash('success').toString(),
			error:req.flash('error').toString()
		});
	});
	app.post('/login',(req,res)=>{
		console.log(req.body.name+"----"+req.body.pwd);
		var u_name = req.body.name;
		var u_pwd = req.body.pwd;
		User.get(u_name,(err,user)=>{
			console.log(user);
			if(!user){
				console.log("失败");
				req.flash('error',"用户名或密码错误");
				return res.redirect('/');	
			}
			if(user.pwd!=u_pwd){
				console.log("失败");
				req.flash('error',"用户名或密码错误");
				return res.redirect('/');
				
			}
			req.session.user = user;
			req.flash('success',"登陆成功");
			res.redirect('/');
		});

	});
	app.post('/resgister',(req,res)=>{
		var n_user = new User({
			name:req.body.name,
			pwd:req.body.pwd
		});
		User.get(n_user.name,(err,user)=>{
			if(err){
				req.flash('error',err);
				res.redirect('/');
			}
			if(user){
				req.flash('error',"用户已经存在");
				res.redirect('/');
			}
			
			n_user.save((err,user)=>{
				if(err){
					req.flash('error',err);
					res.redirect('/');
				}
				req.flash('success',"注册成功");
				req.session.user = user;
				res.redirect('/');
			});
		});
	});
}