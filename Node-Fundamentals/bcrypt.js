const bcryptjs = require('bcryptjs');

var dataToBeEncrypted = 'Karthik works in capgemini university as senior manager';

var encryptedData;

bcryptjs.hash(dataToBeEncrypted, 10).then((data) => {
    encryptedData = data;
    console.log(encryptedData);
    bcryptjs.compare('Karthik works in capgemini university as senior manager', encryptedData).then((result) => {
        if (result) {
            console.log('Matched');
        }
        else {
            console.log('Not Matched');
        }
    });
});