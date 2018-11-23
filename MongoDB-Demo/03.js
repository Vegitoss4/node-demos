const mongoose = require('mongoose');

var uri = 'mongodb://localhost/SampleDB';

mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
    var connection = mongoose.connection;

    //Creating Department Model (Schema) using mongoose ODM
    var Department = mongoose.model('Department', { name: String }, 'departments');

    var department = new Department({name:'Finance'});
    
    //Inserting document using callback
    /*department.save((err,document)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('Document Inserted');
        console.log(document);
        connection.close();
    });*/

    //Inserting document using promise
    department.save().then((document)=>{
        console.log('Document Inserted');
        console.log(document);
        connection.close();
    }).catch((err)=>{
        console.log(`Error in saving the document: ${err}`);
    })
}).catch((err) => {
    console.log(`Error in establishing the connection: ${err}`);
}); 