const http=require('http');

const server=http.createServer((req,res)=>{

if(req.url==='/'){
    res.write('Hello Http');
res.end();
}
if(req.url==='/api/'){
    res.write('Hello Http New')
    res.end();
}
});

server.on('connection', ()=>{
    console.log('New connection...');
});

server.listen(2000);

console.log('Listening to port 2000');

