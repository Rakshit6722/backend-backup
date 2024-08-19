const express = require("express");
const env = require('dotenv').config();
//to access body of a request
const bodyParser = require("body-parser");

const app = express();
// require('dotenv').config()

//middleware
app.use(bodyParser.json());

// const port = 3000;
//another way
const port = process.env.PORT; 

app.get("/route",function(req,res){
    res.json({
        name:"rakshit",
        age:21
    })
})
app.post('/conversations',(req,res)=>{
    console.log(req.headers["authorization"]);
    console.log(req.body); 
    console.log(req.body.message); 
    res.send({
        msg: "2+2 = 4"
    })
})
app.get('/',function(req,res){
    res.send('Hello World');
})
app.listen(port,()=>{console.log("running"  + process.env.PORT)});
 