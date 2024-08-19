const express = require('express');

const app = express();


//input check without middleware
// app.get('/health-checkup',(req,res)=>{
//     const username = req.headers.username;
//     const password = req.headers.password; 
//     const kidneyId = req.query.kidneyId;

//     if(username !== "rakshit" || password!=="pass"){
//         res.status(400).json({
//             msg:"bad input"
//         })
//         return
//     }
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(400).json({
//             msg:"bad kidneyId"
//         })
//         return
//     }
//     res.json({
//         msg:"Your kidney is fine!"
//     })
// })


//input check with middlewares

function credentialsCheck(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username !== "rakshit" || password !== "pass"){
        res.status(400).json({msg:"bad input"})
    }
    else{
        next();
    }
    
}

function kidneyId(req,res,next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({
            msg:"bad input"
        })
    }
    else{
        next();
    }
}

app.use(credentialsCheck,kidneyId);

app.get('/health-checkup',(req,res)=>{
    res.status(200).json({
        msg:"Your kidney is healthy"
    })
})

app.listen(3000,()=>{
    console.log('server working...')
})