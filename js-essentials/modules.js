//IIFE : Immediately invoking function Expression
/*var i = (function(){
    return 5;
})();*/


//Module Revealing Pattern
var Calculator = (function () {
    var _add = function (a, b) { return a + b };
    var _multiply = function (a, b) { return a * b };
   return {
        add: _add,
        multiply: _multiply
    }
})();

console.log(Calculator.add(5,6));
console.log(Calculator.multiply(5,6));



