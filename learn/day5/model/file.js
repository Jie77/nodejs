const fs = require('fs');

exports.getAlbumName = getAlbumName;
exports.getfileName = getfileName;

function getAlbumName(callback){
	fs.readdir('./uploads',function(err,files){
		if(err){
			console.log(err);
			callback("err",null);
			return;
		}
		var allAlbums = [];
		(function iterator(i){
			if(i==files.length){
				callback(null,allAlbums);
				return;
			}
			fs.stat('./uploads/'+files[i],function(err,stats){
				if(err){
					console.log(err);
					return;
				}
				if(stats.isDirectory()){
					allAlbums.push(files[i]);
				}
				iterator(i+1);	
			})
		})(0);
	})
}


function getfileName(name,callback){
	fs.readdir('./uploads/'+name,function(err,files){
		if(err){
			callback("err",null);
			return;
		}
		callback(null,files);
	})
}
