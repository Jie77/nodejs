var file = require('../model/file.js');
const url = require('url');

exports.getIndex = getIndex;
exports.getAlbum = getAlbum;

function getIndex(req,res){
	file.getAlbumName(function(err,data){
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

function getAlbum(req,res){
	file.getfileName(req.params['albumName'],function(err,data){
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