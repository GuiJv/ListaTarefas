const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json();

const port = 3001

app.get('/', (req, res) =>{
    const filesJson = JSON.parse(fs.readFileSync('back/taskDB/tasks.json', 'utf-8'))
    res.send(filesJson)
})

app.post('/', jsonParser ,(req, res) =>{
    const files = JSON.parse(fs.readFileSync('back/taskDB/tasks.json', 'utf-8'))
    files.push(req.body)
    fs.writeFileSync('back/taskDB/tasks.json', JSON.stringify(files))
    res.status(200)
    res.json("ok")
})


app.listen(port, ()=>{
    console.log(`Escutando porta ${port}`)
})