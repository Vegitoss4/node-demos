var fooVar = { };//Object Literal or Associative Arrays(It has Key and Value Pairs)

//To attach property to object
fooVar.id = 108331; //Dot notation
fooVar['name'] = 'Karthik'; //Square Bracket notation

//To retrieve value from the property of an object
console.log(fooVar.id);
console.log(fooVar['name']); //Recommended

//Iterate all the key and value we need to use for..in loop
for (var prop in fooVar) {
   console.log(prop,fooVar[prop]);
}