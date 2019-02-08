/*let http=requireuire('http');
let url =requireuire('url');
http.createServer(funcion (require,response) {
    response.writeHead(200,{'Content-Type':'text/html'})
    let q=url.parse(require.url,true).query;
    let txt=q.year+" "+q.month;
    response.end(txt);
}).listen(3000);*/
let http = require('http');
let url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let q = url.parse(req.url, true).query;
  let txt = q.year + " " + q.month;
  res.end(txt);
}).listen(3000);