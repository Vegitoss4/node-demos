var promiseObj = new Promise((resolve,reject)=>{
    resolve(5);
    //reject('Some error occured');
});

/*promiseObj.then((data)=>{
    //promise is fullfilled
    console.log(`Promise Fullfilled with ${data}`);
},(err)=>{
    //promise is rejected
    console.log(`Promise Rejected with ${err}`);
});*/

promiseObj.then((data)=>{
    //promise is fullfilled
    console.log(`Promise Fullfilled with ${data}`);
}).catch((err)=>{
    //promise is rejected or catching exception
    console.log(`Promise Rejected with ${err}`);
}); 