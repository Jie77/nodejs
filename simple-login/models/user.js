var mongodb = require('./db');

function User(user){
	this.name = user.name;
	this.pwd = user.pwd;
}

module.exports = User;

User.prototype.save = function(callback){
	var user = {
		name:this.name,
		pwd:this.pwd
	};
	mongodb.open((err,db)=>{
		if(err){
			return callback(err);
		}
		db.collection('user',(err,collect)=>{
			if(err){
				mongodb.close();
				return callback(err);
			}
			collect.insert(user,{safe:true},(err,user)=>{
				mongodb.close();
				if(err){
					return callback(err);
				}
				return callback(null,user[0]);
			});
		});
	});
}

User.get = function(name,callback){
	mongodb.open((err,db)=>{
		if(err){
			return callback(err);
		}
		db.collection('user',(err,collect)=>{
			if(err){
				mongodb.close();
				return callback(err);
			}
			collect.findOne({name:name},(err,user)=>{
				mongodb.close();
				if(err){
					return callback(err);
				}
				return callback(null,user);
			});
		});
	});
}