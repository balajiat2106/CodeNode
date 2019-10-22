const importLogger=require('./logger')

importLogger.logEntry("I'm the called from app.js");

var printText=function Hello(){
    console.log("New Hello");
} 

console.log(printText);