let fs = require('fs');
let http= require('http');
http.createServer(function (request,response){
    fs.readFile('1.html',function (err,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data);
        response.end();
    });
}).listen(3000);