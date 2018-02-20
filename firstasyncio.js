var fs = require('fs')
var result = fs.readFile(process.argv[2], callback)


function callback(err, data) {
    if (err) {
        return console.log(err);
    }
    var stringResult = data.toString().split("\n").length - 1
    console.log(stringResult)
}
