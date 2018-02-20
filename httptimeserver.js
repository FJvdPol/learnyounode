var net = require("net")
var port = process.argv[2]

var server = net.createServer(function(datastream){
    datastream.write(getCurrentTime() + "\n")
    datastream.end()
})
function getCurrentTime(){
    var date = new Date();
    var month = date.getMonth() + 1
    if (month.toString().length < 2){
        month = "0" + month
    }
    var timeString = ""+ date.getFullYear() + "-" + month + "-" + date.getDate() + " " + date.getHours() +":"+ date.getMinutes() + ""
    return timeString
}
server.listen(port)
