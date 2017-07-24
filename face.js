var https = require('https');
var util = require('util');
var url = require('url');
var querystring = require('querystring');

var urlGetTicket = "https://api-cn.faceplusplus.com/facepp/v3/detect";

var post_option = url.parse(urlGetTicket);
post_option.method = "POST";
var fs = require('fs');
var imgdata = fs.readFileSync('./lin.jpg').toString();
console.log(imgdata);
var post_data = querystring.stringify({
    api_key: 'n303kG3cdv43J8RuJ5nt5H7hU3IAZWhU',
    api_secret: 'grl4t7FC9R6-JsTIFZ-rps9xjN_VKT3_',
    image_file: imgdata,
    return_landmark: 1
});
post_option.headers = {
    'Content-Type' : 'multipart/form-data'
};
var post_req = https.request(post_option,function(res){
    res.setEncoding('utf8');
    res.on('data',function(chunk){
        console.log(chunk);
    });
});
//console.log(post_data);
post_req.write(post_data);
post_req.end();

//var server = https.createServer(function(){}).listen('8080');