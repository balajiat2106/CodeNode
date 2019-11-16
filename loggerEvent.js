var EventEmitter=require('events');

class LoggerEvent extends EventEmitter{
    logMessageWithParams(args){
        console.log(args);
        this.emit('logMessageReturnsBool', {Id:1,Status:true});
    }    
}

module.exports=LoggerEvent;