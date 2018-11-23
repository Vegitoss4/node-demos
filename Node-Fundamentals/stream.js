const fs =require('fs');

/*var ReadStream = fs.ReadStream;
var rs = new ReadStream();
*/

//chunk size by default is 16KB
var readStream = fs.createReadStream('demo.txt',{encoding:'utf-8', highWaterMark:10});
var writeStream = fs.createWriteStream('demo-copy.txt',{encoding:'utf-8'});

/*
readStream.on('open',function(){
    console.log('File Opened for reading / copying...');
});

readStream.on('ready',function(){
    console.log('File is ready for reading...');
});

readStream.on('data',function(chunk){
    console.log('Reading...');
    //Printing it in the console
    console.log(chunk);
    console.log('Copying...');
    writeStream.write(chunk.replace('a','A'));
});

readStream.on('close',function(){
    console.log('File Closed for reading / copying ...');
});*/

console.log('Copying');
readStream.pipe(writeStream);
console.log('Copied'); 