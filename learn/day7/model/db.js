var dbClient = require('mongodb').MongoClient;

exports.insertOne = insertOne;
exports.find = find;
exports.del = del;

function _connect(callback){
	var dbpath = "mongodb://127.0.0.1:27017/haha";
	dbClient.connect(dbpath,function(err,db){
		if(err){
			console.log(err);
			callback('数据库连接失败:'+err,null);
			return;
		}
		console.log("success");
		callback(null,db);
	});
}

function insertOne(collectionName,data,callback){
	_connect(function(err,db){
		if(err){
			console.log(err);
			callback(err,null);
			db.close();
			return;
		}
		db.collection(collectionName).insertOne(data,function(err,result){
			if(err){
				console.log(err);
				callback(err,null);
				db.close();
				return;
			}
			//console.log(result);
			callback(null,result);
			db.close();
		});
	});
}

function find(collectionName,json,args,callback){

	_connect(function(err,db){
		if(err){
			callback(err,null);
			console.log(err);
			db.close();
			return;
		}
		var shownum = args.skipnum;
		var skipnum = args.skipnum*args.pagenum;

		db.collection(collectionName).find(json).limit(shownum).skip(skipnum).toArray(function(err,result){
			if(err){
				callback(err,null);
				console.log(err);
				db.close();
				return;
			}
			// console.log(result instanceof Array);
			callback(null,result);
			db.close();
		});
	});
}

function del(collectionName,json,callback){
	_connect(function(err,db){
		if(err){
			console.log(err);
			callback(err,null);
			db.close();
			return;
		}
		db.collection(collectionName).deleteMany(
			json,
			function(err,result){
			if(err){
				console.log(err);
				callback(err,null);
				db.close();
				return;
			}
			callback(null,result);
			db.close();
		});
	});
}

