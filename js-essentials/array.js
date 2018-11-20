var numbers = [];

//To add an item into an array
numbers.push(10);
numbers.push(20);
numbers.push(30);
numbers.push(40);
numbers.push(50);

//To remove item from the array at last
numbers.pop();

//To delete an item from specified index
numbers.splice(numbers.indexOf(30),1);

//To update an item from specified index
numbers.splice(numbers.indexOf(40),1,400);

//To add an item at the beginning of the array
numbers.unshift(100);

console.log(numbers); 