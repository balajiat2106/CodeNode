const express=require('express');
const app=express();

let courses=[{id:1,name:"course 1"},{id:2,name:"course 2"},{id:3,name:"course 3"}];

app.get('/',(req,res)=>{
res.send('Base page reloaded');
});

app.get('/next',(req,res)=>{
    res.send(JSON.stringify([1,2,3]));
})

app.get('/next/:id',(req,res)=>{
    let course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course)res.status(404).send('Not found!')    
    res.send(course);
});

app.get('/next/:id',(req,res)=>{
    res.send(req.params);
});

var port=process.env.port||200;
app.listen(port,()=>{console.log(`Listening on ${port}`)});