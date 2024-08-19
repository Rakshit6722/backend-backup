const express = require('express');
const app = express();


//middleware - function which runs before any route
app.use(function(req,res,next){
    console.log("Hello from middleare");
    next();//provides a jump so that program can reach actual route
})
app.get("/",function(req, res){
    res.send("hello");
})
app.get("/profile",function(req, res){
    res.send("hello from profile");
})
app.listen(3000);