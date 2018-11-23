const http = require('http');

//request : Readable Stream
//response : Writable Stream
var cws = http.createServer(function (request, response) {
    console.log(request.socket.remoteAddress);//To get the request address
    if (request.url == '/home') {
        response.write('<h1>Welcome to Capgemini Web Server</h1>');
        response.end();
    } else {
        response.setHeader('Content-Type', 'text/plain');
        response.write('<h1>Welcome to Node.js Web Developement</h1>');
        response.end();
    }
});

cws.listen(3000, function () {
    console.log('Server Started and listening on localhost at port 3000');
}); 

var addnumbers = function (a, b) {
    console.log(`Adding ${a} and  ${b}`);
    return a + b;
}
 //var add = (a, b) => a + b;