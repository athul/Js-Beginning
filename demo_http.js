var http=require("http");
http.createServer(function(require,response){
    response.writeHead(200,{'Content-Type':'text/head'});
    response.write(require.url);
    response.end();    
}).listen(3000);