const cors = require('cors')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json();

const port = 3002

app.use(cors())

app.get('/', (req, res) =>{
    const filesJson = JSON.parse(fs.readFileSync('taskDB/tasks.json', 'utf-8'))
    console.log("Get Request made")
    res.status(202)
    res.send(filesJson)
})

app.post('/', jsonParser ,(req, res) =>{
    console.log("Post Request Made")
    const files = JSON.parse(fs.readFileSync('taskDB/tasks.json', 'utf-8'))
    req.body.isChecked = false
    files.push(req.body)
    fs.writeFileSync('taskDB/tasks.json', JSON.stringify(files))
    res.status(200)
    res.json("ok")
})

app.delete('/:taskdel', jsonParser ,(req, res) =>{
    console.log("Delete request Made")
    const files = JSON.parse(fs.readFileSync('taskDB/tasks.json', 'utf-8'))
    const tasks = files.map((task => {
        return task.task
    }))
    const index = tasks.indexOf(req.params.taskdel)
    if (index == -1){
        res.status(404)
        res.json("file not found")
    }else{
        files.splice(index,1)
        fs.writeFileSync('taskDB/tasks.json', JSON.stringify(files))
        res.status(200)
        res.json("ok")
    }
})

app.put('/:taskup', jsonParser ,(req,res) => {
    const files = JSON.parse(fs.readFileSync('taskDB/tasks.json', 'utf-8'))
    const tasks = files.map((task => {
        return task.task
    }))
    const index = tasks.indexOf(req.params.taskup)
    if(index == -1){
        res.status(404)
        res.json("file not found")
    }else{
        files[index].task = req.body.task
        res.status(200)
        res.json("ok")
    }
    fs.writeFileSync('taskDB/tasks.json', JSON.stringify(files))
})

app.put('/:taskCheck/toggle', jsonParser,(req,res) =>{
    console.log("Put Request Made")
    const files = JSON.parse(fs.readFileSync('taskDB/tasks.json', 'utf-8'))
    const tasks = files.map((task => {
        return task.task
    }))
    const index = tasks.indexOf(req.params.taskCheck)
    if(index == -1){
        res.status(404)
        res.json("file not found")
    }else if(req.body.checkbox){
        files[index].isChecked = false
        res.status(200)
        res.json("ok")
    }else{
        files[index].isChecked = true
        res.status(200)
        res.json("ok")
    }
    fs.writeFileSync('taskDB/tasks.json', JSON.stringify(files))
})

app.listen(port, ()=>{
    console.log(`Escutando porta ${port}`)
})