var EventEmitter=require('events');

class ClsLogMessage extends EventEmitter{
    logMessageWithParams(args){
        console.log(args);
        this.emit('logMessageReturnsBool',{Id:1,Status:true});
    }    
}

module.exports=ClsLogMessage;