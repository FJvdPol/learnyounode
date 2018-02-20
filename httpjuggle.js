var http = require("http")

var results = [];
var urls = []
process.argv.forEach(function(argument){
    urls.push(argument)
})
urls.splice(0, 2)

for (var i = 0; i < urls.length; i++){
    handleRequest(urls[i], i)
}

function handleRequest(url, index){
    http.get(url, function(response){
        var totalData = ""
        response.setEncoding('utf-8')
        response.on('data', function(data){
            totalData += data
        })
        response.on('end', function(){
            results[index] = totalData
            if (results.length == urls.length){
                printOutput()
            }
        })
    }).on('error', function (error){
        console.log(error);
    })
}
function printOutput(){
    for (var i = 0; i < results.length; i++){
        console.log(results[i])
    }
}
