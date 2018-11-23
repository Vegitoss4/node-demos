class Foo{
  
    constructor(id,name){
        //Initialize the properties for the class
        this.id = id;
        this.name = name;
    }
    printFooDetails(){
        //return 'Id: '+this.id+' Name: '+this.name;
        return `Id: ${this.id} Name: ${this.name}`;
    }
}

var fooObj = new Foo(101,'Karthik');
console.log(fooObj.printFooDetails()); 