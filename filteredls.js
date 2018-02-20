// krijg 2 arguments directory process.argv[2] en extension process.argv[3] <- (voeg daar een dot aan toe)

const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const extension = "." + process.argv[3].toString()

var directoryFiles = fs.readdir(folder, afterReadingDirectory)

function afterReadingDirectory(err, result){
    var listOfFiles = result.filter(function(item){
        return path.extname(item) == extension
    })
    listOfFiles.forEach(function(file){
        console.log(file)
    })
}
