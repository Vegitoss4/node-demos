//All primitives are immutables
var  i = 5; 
var j = i;//It will just copy the value not the address
j = 10; //Changing j value wont affect i
console.log('i: ' + i); //5
console.log('j: ' + j); //10

//Objects and arrays are Mutables
var fooObj = {i:5};
var bazObj = fooObj;// It is just referring the same address
bazObj.i = 10; //It will change fooObj value as well
console.log(fooObj);
console.log(bazObj);

var numbers = [1,2];
var anotherNumbers = numbers;
anotherNumbers[0]=100;
console.log(numbers);
console.log(anotherNumbers); 