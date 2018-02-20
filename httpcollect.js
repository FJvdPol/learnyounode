var http = require("http")
var url = process.argv[2]
http.get(url, callback)

function callback(response){
    var totalData = ""
    response.setEncoding('utf-8')
    response.on('data', function(data){
        totalData += data
    })
    response.on('error', function(err){
        console.log(err)
    })
    response.on('end', function(){
        console.log(totalData.length)
        console.log(totalData)
    })
}
