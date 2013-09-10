var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    var results = fs.createReadStream('data/results.json');
    results.pipe(res);
});

server.listen(8000);
