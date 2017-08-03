var express = require("express");
var formidable = require('formidable');
var db = require('./model/db.js');
var fs = require('fs');
var https = require('https');

var privateKey  = fs.readFileSync('/path/to/private.pem', 'utf8'),
var certificate = fs.readFileSync('/path/to/file.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var app = express();
var httpsServer = https.createServer(credentials, app);

var SSLPORT = 80;

httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

app.use(express.static("./public"));


app.post('/reg',function(req,res){
	
})
