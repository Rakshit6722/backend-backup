const express = require("express");
// const body = require("body-parser");



const app = express();

app.use(express.json());

const users = [{
    name: "rakshit",
    kidneys: [{
        healthy: false
    }]
}];
// console.log(users[0].kidneys)

app.get('/',(req,res)=>{
    const kidneys = users[0].kidneys;
    const noOfKidney = kidneys.length;
    let noOfHealthyKidney = 0;
    for(let i=0;i<kidneys;i++){
        if(kidneys[i].healthy){
            noOfHealthyKidney++;
        }
    }

    res.json({
        kidneys,
        noOfKidney,
        noOfHealthyKidney
    })
})

app.post('/',(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "Done"
    })
})
app.put('/',(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg : "Done"
    })
})
app.delete('/',(req,res)=>{
    let atLeastOneUnhealthy = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthy = true;
        }
    }
    const newKidney = [];
    if(atLeastOneUnhealthy){
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidney.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys = newKidney;
        res.json({
            msg : "Done"
        })
    }
    else{
        res.status(411).send({
            msg : "You have no bad kidney"
        })
    }
})
app.listen(4000);

