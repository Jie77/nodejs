var http = require('http');
var querystring = require('querystring');


var post_data = querystring.stringify({
         product : 'club',
         sign : 'ddddddddddddddd',
         sender: '发送者的名字:超级管理员',
         uids : ['ffwq@qq.com', 'ffqwf@www.com'],
         msg : 'wwww'
});

var options = {
    host: '119.29.249.88',
    port: 3000,
    method: 'POST'
};


var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

// write data to request body
req.write(post_data + "\n");
req.end();