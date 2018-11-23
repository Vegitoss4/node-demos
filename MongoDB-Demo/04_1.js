const mongoose = require('mongoose');

var uri = 'mongodb://localhost/SampleDB';

mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
    var connection = mongoose.connection;

    //Creating model
    var Location = mongoose.model('Location', { _id: Number, location: String }, 'locations');

    /*Get all the location documents from location collection */
    /*Location.find().then((documents) => {
        documents.forEach((document) => {
            console.log(`Location Id: ${document._id} Location Name: ${document.location}`);
        });
        connection.close();
    }).catch((err) => {
        console.log(`Error in retrieving the documents: ${err}`);
    });*/


    /*
    Get the documents from location collection base on criteria using Promise
    //1st arg pass object to get the documents where the _id is greater than or equal to 2
    //2nd arg is used to specify the fields to be retrieved
    //3rd arg is used to limit the number of documents 
    */
    /*Location.find({_id:{$gte:2}},{_id:0,location:1},{limit:3}).then((documents)=>{
        documents.forEach((document) => {
            console.log(`Location Name: ${document.location}`);
        });
        connection.close();
    }).catch((err) => {
        console.log(`Error in retrieving the documents: ${err}`);
    });*/


    /*Get the First Matching document */
    /*Location.findOne({ _id: { $gte: 5 } }).then((document) => {
        console.log(`Location Id: ${document._id} Location Name: ${document.location}`);
        connection.close();
    }).catch((err) => {
        console.log(`Error in retrieving the document: ${err}`);
    });*/

    /*Get the  document based on a id (_id:4) */
    /*Location.findById(4).then((document) => {
        console.log(`Location Id: ${document._id} Location Name: ${document.location}`);
        connection.close();
    }).catch((err) => {
        console.log(`Error in retrieving the document: ${err}`);
    });
    */

    //To get the matching by querying and using the where condition using method chaining

    let query = Location.where('_id').gte(2).lt(6).where('location').equals('Chennai');

    //Execute the query
    query.exec().then((documents) => {
        documents.forEach((document) => {
            console.log(`Location Id: ${document._id} Location Name: ${document.location}`);
        });
        connection.close();
    }).catch((err) => {
        console.log(`Error in retrieving the document: ${err}`);
    })

}).catch((err) => {
    console.log(`Error in establishing the connection: ${err}`);
}); 
 
