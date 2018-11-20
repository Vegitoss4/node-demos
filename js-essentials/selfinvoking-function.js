//It can be reused 'N' number of times
var sayHi = function(name){
    console.log('Hi '+name);
}
//Invoking named function Explicitly
sayHi('Karthik');

//Self Invoking Anonymous function, we cannot reuse it
(function(n){
    console.log('Square : '+ n*n);
})(5); 