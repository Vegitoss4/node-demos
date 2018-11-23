const mongoose = require('mongoose');

var uri = 'mongodb://localhost/SampleDB';

mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => {
        var connection = mongoose.connection;

        //Defining the Person Model
        let Person = mongoose.model('Person', {
            name: {
                type: String,
                required: [true, 'Name Required'],
                match: [/^[a-zA-Z]+$/, 'Only Alphabets Allowed']
            },
            age: {
                type: Number,
                min: [30, 'Age must be minimum 30'],
                max: [40, 'Age must be maximum 40']
            },
            salutation: {
                type: String,
                enum: {
                    values: ['Mr', 'Ms', 'Mrs', 'Dr'],
                    message: 'For {PATH}, the value {VALUE} is not valid.Only Mr,Ms,Mrs,Dr allowed'
                }
            },
            status: {
                type: String,
                default: 'Alive'
            },
            location: {
                type: String,
                validate: {
                    validator: (val) => val.length >= 5 && val.length <= 10,
                    message: 'Only 5 to 10 characters allowed'
                }
            }
        }, 'persons');

        //Creating the person instance from schema which passes all the validation
        /*let person = new Person({
            name:'Ashik',
            age:35,
            salutation:'Mr',
            location:'Chennai'
        });
        */

        //Creating the person instance from schema with all possible validation errors
        let person = new Person({
            name: 'Ashik4',
            age: 45,
            salutation: 'Mister',
            location: 'Bangalore City'
        });
        person.save().then((document) => {
            console.log('Document Added Successfully');
            console.log(document);
            connection.close();
        }).catch((err) => {
            var validationError = {};
            for (const errKey in err.errors) {
                validationError[errKey] = err.errors[errKey].message;
            }
            console.log(validationError);
            connection.close();
        });

    })
    .catch((err) => {
        console.log(`Error in establishing connection : ${err}`);
    }); 
 
