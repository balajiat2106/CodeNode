console.log(__dirname);
console.log(__filename);
var loggerEvent=require('./loggerEvent');
var ClsLogMessage=new loggerEvent();

function logMessage(temp){
console.log(temp);
    
}

function logAppendedMessage(temp){
    return temp+": Appended";
}

ClsLogMessage.on('logMessageReturnsBool',(args)=>{
    console.log("Message Logged"+args);
});

//export multiple modules
module.exports={
    LogMessage:logMessage,
    LogAppendedMessage:logAppendedMessage
}