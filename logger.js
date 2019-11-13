function logMessage(temp){
console.log(temp);
    
}

function logAppendedMessage(temp){
    return temp+": Appended";
}

//export multiple modules
module.exports={
    LogMessage:logMessage,
    LogAppendedMessage:logAppendedMessage
}