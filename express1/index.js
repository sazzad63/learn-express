var express = require('express');

app = express();

app.get("/", (req, res)=>{
    res.send("Express 1");
});

app.listen(8000, ()=>{
    console.log("Server run port 8000");
});