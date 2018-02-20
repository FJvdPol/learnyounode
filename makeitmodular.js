const fs = require('fs')
const path = require('path')

module.exports = function(folder, extension, callback) {
    extension = "." + extension.toString()
    var directoryFiles = fs.readdir(folder, afterReadingDirectory)
    function afterReadingDirectory(err, data){
        if (err){
            return callback(err)
        }
        var files = data.filter(function(file){
            return path.extname(file) === extension
        })
        callback(null, files)
    }

}
