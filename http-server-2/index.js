const express = require('express');

const app = express();

function getSum(n){
    let ans = 0;
    for(let i=0;i<n;i++){
        ans += i;
    }
    return ans;
}

app.get('/',function(req,res){
    
    const n = req.query.n;
    const ans = getSum(n);
    res.send(`ans is ${ans}`);
})

app.listen(3000,()=>{
    console.log('server working...');
})