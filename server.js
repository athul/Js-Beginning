let http= require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("It's ....Really Alive!!");
    res.end();
}).listen(3000);