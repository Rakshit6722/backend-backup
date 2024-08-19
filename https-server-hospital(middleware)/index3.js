//authentication using zod library
const express = require('express')
const zod = require('zod')

const app = express();


//here we define a schema that the input should be an array consisting numbers
const schema = zod.array(zod.number());

app.use(express.json());

app.post('/health-checkup',(req,res)=>{
    const kidneys = req.body.kidneys;

    //now we actually check whether the input given by user is an array consisting of numbers
    const response = schema.safeParse(kidneys);
    
    res.json({
        response
    })
})


app.listen(4000,()=>{
    console.log('server working')
}) 