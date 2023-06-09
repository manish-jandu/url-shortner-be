const express = require("express");
const app = express();

const port = 4001;

app.get("/",(req,res) => { 
    res.status(200).json({message:"Pinging Success"});
});

app.listen(port,()=>{
    console.log("Server started at port ",port);
});