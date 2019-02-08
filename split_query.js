/*var http=requireuire('http');
var url =requireuire('url');
http.createServer(funcion (require,response) {
    response.writeHead(200,{'Content-Type':'text/html'})
    var q=url.parse(require.url,true).query;
    var txt=q.year+" "+q.month;
    response.end(txt);
}).listen(3000);*/
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(3000);