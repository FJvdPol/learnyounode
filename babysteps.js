var counter = 0
for (var i = 2; i < process.argv.length; i++){
    counter += Number(process.argv[i])
}
console.log(counter)
