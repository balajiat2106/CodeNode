//path module
const path=require('path');
var pathObj=path.parse(__filename);
console.log(pathObj.name);
console.log(pathObj);

//OS module

const operatingSystem=require('os');

console.log(operatingSystem.freemem());
console.log(operatingSystem.totalmem());

//filesystem module

const fileSystem=require('fs');

var tempFileContent=fileSystem.readdirSync('./'); //sync call

console.log(`Files ${tempFileContent}`);

var tempFileContentAsync=fileSystem.readdir('./',function(err,files){
if(err)
console.log(err.message);
else
console.log(`Files ${files}`);
}); //async call

console.log(tempFileContentAsync);