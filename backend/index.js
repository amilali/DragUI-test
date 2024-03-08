const express = require('express');

const app = express();

app.listen(3000, ()=>console.log("Server is started at 3000"));

app.get('/', (req,res)=>{
    res.json({"200 ok" : "Hello from server"})
})