//JS is asynchronous by nature and it is single threaded and it wont sleep. 
//We should not block the thread
/*(function(){
console.log('1');
console.log('2');
setTimeout(function(){
console.log('6');
},10);
setTimeout(function(){
console.log('3');
},0);
console.log('4');
console.log('5');
})();*/

//synchronous execution
/*var divideNumbers = function (a, b) {
var result;
result = a / b;
return result;
}

var divideResult = divideNumbers(25,5);
console.log(divideResult);
*/

//asynchronous execution and exception handling
/*var divideNumbers = function (a, b, fn) {
var result;
setTimeout(function () {
try {
if (b == 0)
throw 'Cannot divide by Zero';
//Result is produced in Deferred execution
result = a / b;
//passing the deferred execution result as a argument to the callback function
fn(null,result);
} catch (error) {
fn(error,null);
}
}, 1000);
//return result;//No point in returning because this data will have undefined
}

divideNumbers(25, 5, function (err,divideResult) {
if(err){
console.log(err);
return;
}
console.log(divideResult);
});
*/

const fs = require('fs');
const path = require('path');

var filePath = path.join(__dirname,'demo.txt');

//Synchronous Approach
console.log('Started Reading Sychronously...');
var fileBuffer = fs.readFileSync(filePath,{encoding:'utf-8'});
console.log(fileBuffer);
console.log('Completed Reading Sychronously.');

//Asynchronous Approach
fs.readFile(filePath,{encoding:'utf-8'},function(err,buffer){
if(err){
console.log(err);
return;
}else{
console.log('Started Reading Asychronously...');
console.log(buffer);
console.log('Completed Reading Asychronously.');
}
}); 

//Synchronous Approach
console.log('Started Reading Sychronously...');
var fileBuffer = fs.unlinkSync(filePath);
console.log(fileBuffer);
console.log('Completed Reading Sychronously.');

//Asynchronous Approach to delete file 
fs.unlink(filePath,function(err){
if(err){
console.log(err);
return;
}else{
console.log(`${filePath} deleted`);
}
});  