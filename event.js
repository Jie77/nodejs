var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('hehe',function(){
	console.log('some event on');
});
var date = new Date();
setTimeout(function(){
	var date1 = new Date();
	console.log(date1.getTime()-date.getTime());
	event.emit('hehe');
},1000);
