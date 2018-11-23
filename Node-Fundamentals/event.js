const EventEmitter = require('events');

//Creating the Instance
var eventEmitter = new EventEmitter();

var listener01 = function(...args){
    console.log(`cgEvent Occured by calling listener01 with the argument passed : ${args[0]}`);
}

var listener02 = function(...args){
    console.log(`cgEvent Occured by calling listener02 with the argument passed : ${args[1]}`);
}

var listener03 = function(...args){
    console.log(`cgEvent Occured by calling listener03 with the argument passed : ${args[2]}`);
}

//To Hookup / subscribe the lister with custom event
eventEmitter.addListener('cgEvent',listener01);
eventEmitter.on('cgEvent',listener02);

//To unsubscribe the lister with custom event
eventEmitter.removeListener('cgEvent',listener02);

//To remove all the listeners from the custom event
eventEmitter.removeAllListeners('cgEvent');

//Listener funciton will be triggered only once
eventEmitter.once('cgEvent',listener03);

//To trigger custom event
eventEmitter.emit('cgEvent','a','b','c');
eventEmitter.emit('cgEvent','d','e'); 
 

