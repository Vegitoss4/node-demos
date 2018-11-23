//bluebird is a 3rd party module which is used to convert callback to promise
const bluebird = require('bluebird');

//Callback function
var divideNumbers = (a, b, fn) => {
    var result;
    setTimeout(() => {
        try {
            if (b == 0)
                throw 'Cannot divide by zero';
            result = a / b;
            fn(null, result);
        } catch (error) {
            fn(error,null);
        }
    }, 1000);
}

//To convert callback to promise
var divideNumbersPromise = bluebird.promisify(divideNumbers);

divideNumbersPromise(25,5).then((result)=>{
    console.log(`Result : ${result}`);
},(err)=>{
    console.log(`${err}`);
});

//converting entire package callbacks to promise
const fs = bluebird.promisifyAll(require('fs'));

//fs.readFile callback method need to be accessed as readFileAsync
fs.readFileAsync('package.json','utf-8').then((data)=>{
    console.log(`${data}`);
}).catch((err)=>{
    console.log(`${err}`);
}); 