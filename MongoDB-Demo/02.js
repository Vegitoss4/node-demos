//Connecting MongoDB using mongoose ODM(Object Data Modeling) library
const mongoose = require('mongoose');

var uri = 'mongodb://localhost/SampleDB';

//connect mongodb with mongoose using callback
mongoose.connect(uri,{ useNewUrlParser: true },(err)=>{
    if(err){
        console.log(err);
        return;
    }
    var connection = mongoose.connection;
    console.log(`Connected to Mongodb database : ${connection.db.databaseName} using Callback`);
    connection.close();
    console.log('Connection Closed');
});

//connect mongodb with mongoose using promise
mongoose.connect(uri,{ useNewUrlParser: true }).then(()=>{
    var connection = mongoose.connection;
    console.log(`Connected to Mongodb database : ${connection.db.databaseName} using Promise`);
    connection.close();
    console.log('Connection Closed');
}).catch((err)=>{
    console.log(err);
});