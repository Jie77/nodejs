var readline = require('readline'); 
     const rl = readline.createInterface({ 
             input: process.stdin, 
             output: process.stdout 
     }); 
     rl.on('line', function(str){ 
  		console.log("---"+str);
     });