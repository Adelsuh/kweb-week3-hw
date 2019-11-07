const http = require('http');
const calc = require('./calc');
const querystring = require('querystring');
const url = require('url');

const hostname='127.0.0.1';
const port=3000;

const server=http.createServer((req, res) => {
    res.statusCode=200;
    res.writeHead(200, {"Content-Type": "text/plain"});
    var query=url.parse(req.url, true).query;
    if (url.parse(req.url, true).pathname != '/') res.end('Page Not Found!');
    else if(query.a && query.b && query.operator) {
        var a=parseInt(query.a);
        var b=parseInt(query.b);
        if (query.operator=="add") res.end(calc.add(a, b).toString());
        else if (query.operator=="sub") res.end(calc.sub(a, b).toString());
        else if (query.operator=="mult") res.end(calc.mult(a, b).toString());
        else if (query.operator=="div") res.end(calc.div(a, b).toString());
    } else res.end('Invalid Query!');
});

server.listen(port, console.log("server is working..."));
