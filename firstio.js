var fs = require('fs')
var result = fs.readFileSync(process.argv[2])
var stringResult = result.toString().split("\n")
console.log(stringResult.length - 1)
