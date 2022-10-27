const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req,res)=>{
    res.send("Hello I am running")
})



app.listen(port, ()=>{
    console.log('English learning website running', port);
})