var CallLogger=require('./logger');

var retVar="Hello";

//function example
var tempVar=function(){
    retVar="Hello Balaji";
    return retVar;
}

console.log(tempVar);
console.log(retVar);

CallLogger.LogMessage('I/\'m a logger');
var result2=CallLogger.LogAppendedMessage('I/\'m a logger');

console.log(result2);