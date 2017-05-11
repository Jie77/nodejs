var mongodb = require('./db');
var markdown = require('markdown').markdown;

function Post(name,title,post){
	this.name = name;
	this.title = title;
	this.post = post;
}

module.exports = Post;

Post.prototype.save = function(callback){
	var date = new Date();
	var time = {
		date : date,
		minute : date.getFullYear()+'-'+(date.getMonth()+1) +'-'+date.getDay()+'-'+date.getHours()+'-'+date.getMinutes()
	};
	//要存入的数据
	var post = {
		name:this.name,
		time:time,
		title:this.title,
		post:this.post
	};

	mongodb.open(function(err,db){
		if(err){
			return callback(err);
		}
		db.collection('posts',function(err,collect){
			if(err){
				mongodb.close();
				return callback(err);
			}
			collect.insert(post,{
				safe:true
			},function(err){
				mongodb.close();
				if(err){
					return callback(err);
				}
				return callback(null);
			});
		});
	});
};

Post.get = function(name,callback){
	mongodb.open(function(err,db){
		if(err){
			return callback(err);
		}
		db.collection('posts',function(err,collect){
			if(err){
				mongodb.close();
				return callback(err);
			}
			var query = {};
			if(name){
				query.name = name;
			}
			collect.find(query).sort({
				time : -1
			}).toArray(function(err,docs){
				mongodb.close();
				if(err){
					return callback(err);
				}
				docs.forEach(function(doc){
					doc.post = markdown.toHTML(doc.post); 
				});
				callback(null,docs);
			});
		});
	});
};