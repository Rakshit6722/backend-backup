const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

let todo = [];

app.get('/todos',(req,res)=>{
    res.status(200).json(todo);
})

app.post('/todos',(req,res)=>{
    const newTodo = {
        id: Math.floor(Math.random() * 1000000),
        title : req.body.title,
        description : req.body.description,
    }
    todo.push(newTodo);
    res.status(200).json('Done!');
})

app.get('/todos/:id',(req,res)=>{
    const findTodo = todo.find(t => t.id === parseInt(req.params.id) );
    if(!findTodo){
        res.status(400).send();
    }
    else{
        res.json({
            findTodo
        });
    }
})

app.put('/todos/:id',(req,res)=>{
    const todoIndex = todo.find(t => t.id === parseInt(req.params.id));
    if(todoIndex === -1){
        res.status(400).send();
    }
    else{
        todo[todoIndex].title = req.body.title;
        todo[todoIndex].description = req.body.description;
        res.json(todo[todoIndex]);
    }
})

app.delete('/todos/:id',(req,res)=>{
    const todoIndex = todo.findIndex(t => t.id === parseInt(req.params.id));
    if(!todoIndex){
        res.status(400).send();
    }
    else{
        todo.splice(todoIndex,1);
        res.status(200).send();
    }
})

app.listen(3000,()=>{
    console.log('server working...')
})