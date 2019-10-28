const eventEmitter=require('events');
const emitter=new eventEmitter();

//Add a listener
emitter.on('LogMessage',function(){
    console.log("Listener called");
});

//Add a listener to receive a message
emitter.on('SendMessage',(args)=>{
console.log(args.Message);
});

//Raise an event
emitter.emit('LogMessage');

//Raise an event with message as parameter
emitter.emit('SendMessage', {Message:'Hello There'});
