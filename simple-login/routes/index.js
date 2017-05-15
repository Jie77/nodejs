
/*
 * GET home page.
 */

module.exports = (app)=>{
	app.get('/',(req,res)=>{
		res.render('index',{'title':'simple-login'});
	});
	app.post('/login',(req,res)=>{
		console.log(req.body.name+"----"+req.body.pwd);
		res.write("nvjsknkjjjjjjjjjj");
		res.end();
	});
}