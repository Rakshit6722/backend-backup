const express = require('express');

const app = express();

app.use(express.json());

app.post('/health-checkup',(req,res)=>{
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;


    res.send("Your kidney length is "+kidneyLength);
})

//global catches => type of middleware which runs after all the ruotes and functions if there is an error
app.use(function(err,req,res,next){
    res.json({
        msg:"wrong input"
    })
})

app.listen(3000,()=>{
    console.log('server working')
}) 