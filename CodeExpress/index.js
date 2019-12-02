const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Base url");
});

app.get('/api',(req,res)=>{
    res.send("API url");
});

app.listen(3000,()=>console.log("Listening on port 3000..."));