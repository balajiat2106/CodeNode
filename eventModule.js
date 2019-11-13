var EventEmitter=require('events');
var objEmitter=new EventEmitter();

//Event with no arguments
objEmitter.on('WriteMessage',function(){
    console.log("Event Emitter called");
})

objEmitter.emit('WriteMessage');

//Event with more arguments
objEmitter.on('LogMessage',(args)=>{
    console.log("ID: "+args.Id);
    console.log("Message: "+args.Message);
})

objEmitter.emit('LogMessage',{Id:"001",Message:"Success"});
