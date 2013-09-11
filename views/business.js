var fs = require('fs');
var hyperspace = require('hyperspace');
var html = fs.readFileSync(__dirname + '/../static/row.html');

function render() {
    return hyperspace(html, function (json) {
        return {
            '.name': json.Name,
            '.address': json.Address
        };
    });
}

module.exports = render;
