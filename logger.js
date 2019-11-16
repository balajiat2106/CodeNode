console.log(__dirname);
console.log(__filename);
var LoggerEvent=require('./loggerEvent');
var ObjLogMessage=new LoggerEvent();

function logMessage(temp){
console.log(temp);
    
}

function logAppendedMessage(temp){
    return temp+": Appended";
}

ObjLogMessage.on('logMessageReturnsBool',(args)=>{
    console.log('Message Logged'+ args.Status);
});

ObjLogMessage.logMessageWithParams("Message from LoggerEvent");

//export multiple modules
module.exports={
    LogMessage:logMessage,
    LogAppendedMessage:logAppendedMessage
}