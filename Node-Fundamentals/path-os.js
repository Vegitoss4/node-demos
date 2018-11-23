const os = require('os');
const path = require('path');
//returns the hostname of the operating system.
console.log(os.hostname());
//Returns the system uptime in number of seconds.
console.log(os.uptime());
console.log(path.join(__dirname,'index.html'));


/*Spread and Rest Operators */
function test(a,b,...args){ //Rest Operator
    console.log(a);
    console.log(b);
    console.log(args);
}

var numbers = [ 8, 54, 87, 43, 5 ];

test(3,7,...numbers); 

 
