var numberVar = 5; //number
var stringVar = 'capgemini';//string
var booleanVar = false;//boolean
var undefinedVar;//undefined
var nullVar = null;//null

console.log(typeof(numberVar));//number; typeof will print the types only for primitives and base types
console.log(typeof(nullVar));//object;

var dt = new Date();
console.log(typeof(dt));//object
console.log(dt.constructor.name);//type(other than primitives) 