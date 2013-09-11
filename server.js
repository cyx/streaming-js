var fs = require('fs');
var http = require('http');

var render = require('./views/business.js');

var server = http.createServer(function (req, res) {
    var results = fs.createReadStream('data/results.json');

    results.pipe(render()).pipe(res);
});

server.listen(8000);
