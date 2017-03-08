const express = require("express");

const app = express();


app.get("/",(req,res)=>{
    res.send("Hello");
});

app.get("/world",(req,res)=>{
    res.send("Hello world");
});

app.listen(3333,()=> console.log("server started"));