var file = require('../model/file.js');
const url = require('url');

exports.getIndex = getIndex;
exports.getAlbum = getAlbum;
exports.geterr = geterr;

function getIndex(req,res,next){
	file.getAlbumName(function(err,data){
		if(err){
			next();
			return;
		}
		var pathname = decodeURI(url.parse(req.url).pathname).split('/');
		pathname = pathname.slice(1,-1);
		pathname.unshift('index');
		console.log(pathname);
		res.render('index',{
			'album' : data,
			'pathname' : pathname
		})
	})
}

function getAlbum(req,res,next){
	file.getfileName(req.params['albumName'],function(err,data){
		if(err){
			next();
			return;
		}
		var pathname = decodeURI(url.parse(req.url).pathname).split('/');
		pathname = pathname.slice(1,-1);
		pathname.unshift('index');
		console.log(pathname);
		res.render('file',{
			'files' : data,
			'albumName' : req.params['albumName'],
			'pathname' : pathname
		})
	})
}

function geterr(req,res){
	res.render('404');
}

