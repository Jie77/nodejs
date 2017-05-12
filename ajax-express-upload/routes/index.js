
/*
 * GET home page.
 */
var fs = require('fs');
module.exports = function(app){
	app.get('/',(req,res)=>{
		res.render('index',{title:'upload'});
	});
	app.get('/upload',(req,res)=>{
		res.render('upload',{title:'upload vldfvls'});
	});
	app.post('/upload',(req,res)=>{
		for(var i in req.files){
			if(req.files[i].size==0){
				fs.unlinkSync(req.files[i].path);
				console.log('del a empty file');
			}else{
				var tar_path = './public/images/' + req.files[i].name;
				fs.renameSync(req.files[i].path,tar_path);
				console.log("success rename a file");
			}
		}
		res.write("upload success");
		res.end();
	});
}