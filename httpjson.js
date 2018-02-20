const http = require("http")
const fs = require("fs")
const url = require("url")
const port = Number(process.argv[2])


var server = http.createServer(function(req, res){
    var reqUrl = url.parse(req.url, true)
    var result = {};
    var queryTime = new Date(reqUrl.query.iso)

    if (reqUrl.pathname == "/api/parsetime") {
       result.hour = queryTime.getHours()
       result.minute = queryTime.getMinutes()
       result.second = queryTime.getSeconds()
    } else if (reqUrl.pathname == "/api/unixtime") {
       result.unixtime = queryTime.getTime()
    }

    if (result !== {} || result !== undefined || result !== null){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404)
        res.end()
    }
})


server.listen(port)
