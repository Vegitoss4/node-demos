
/*var divideNumbers = (a, b, fn) => {
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

divideNumbers(25,0,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
});*/


var divideNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        var result;
        setTimeout(() => {
            try {
                if (b == 0)
                    throw 'Cannot divide by zero';
                result = a / b;
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }, 1000);
    });
}

divideNumbers(25,0).then((result)=>{
    console.log(`Result : ${result}`);
},(err)=>{
    console.log(`Error : ${err}`);
}); 
 
 
