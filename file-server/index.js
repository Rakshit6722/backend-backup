const fs = require('fs');
const express = require('express');
const path = require('path');
// const { dirname } = require('path');

const app = express();

app.use(express.json());

const dirName = path.join(__dirname, 'files');

app.get('/files', (req, res) => {
    const arr = []
    fs.readdir(dirName, function (err, files) {
        if(err){
            console.log(err);
            return res.status(500).json({
                error : 'internal server error'
            })
        }
        files.forEach(function (file) {
            arr.push(file);
        })
        res.json({ arr })

    })
})

app.get('/files/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(dirName, fileName); 
    fs.readFile(filePath, (err, data) => { 
        if (err) {
            console.log(err);
            return res.status(500).json({
                error: 'No data found'
            });
        }
        res.json({
            data: data.toString()
        });
    });
});

app.listen(3000, () => {
    console.log("server working...")
});