/*
读取小文件
argv[0]固定等于NodeJS执行程序的绝对路径，
argv[1]固定等于主模块的绝对路径，
因此第一个命令行参数从argv[2]这个位置开始。
*/
var fs = require('fs');

function copy(src,dst){
	fs.writeFileSync(dst,fs.readFileSync(src));
}

function main(argv){
	copy(argv[0],argv[1]);
}

main(process.argv.slice[2]);

/*
大文件拷贝
pipe连接两个数据流
*/

var fs = require('fs');

function copy(src,dst){
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv){
	copy(argv[0],argv[1]);
}

main(process.argv.slice(2));