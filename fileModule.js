var fileModule=require('fs');

console.log(fileModule.readdirSync('./')); // synchronous

fileModule.readdir('./',function(err,files){
    if(err)
    console.log("Error");
    if(files)
    console.log(files.length);
})