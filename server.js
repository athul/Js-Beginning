var http= require("http");
var dt=require("./my_first_mod");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("It's...Really Alive!!\n");
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(3000);