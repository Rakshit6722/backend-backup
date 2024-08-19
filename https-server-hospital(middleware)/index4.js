const express = require('express');
const zod = require('zod');

const app = express();
app.use(express.json());

// schema = {
//     email,
//     password,
//     dob,
// }

const schema = zod.object({
    email: zod.string(),
    password: zod.string().min(8),
    dob: zod.number()
})

app.post('/sign-in',(req,res)=>{
    const {email,password,dob} = req.body;

    const response = schema.safeParse({email,password,dob})

    res.send({
        response
    })
})

app.listen(3000,()=>{
    console.log('server working')
})