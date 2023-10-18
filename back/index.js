const Utils = require('./utils/utils')
const cors = require('cors')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const utils = new Utils
const app = express()
const jsonParser = bodyParser.json();

const port = 3002

app.use(cors())

app.get('/', (req, res) =>{
    try{
    const filesJson = JSON.parse(fs.readFileSync('taskDB/tasks.json', 'utf-8'))
    console.log("Get Request made")
    res.status(202)
    res.send(filesJson)
    } catch (e) {
        console.log(e)
        res.status(500)
        res.json('Erro ao buscar tarefas')
    }
})

app.post('/', jsonParser ,(req, res) =>{
    try{
    console.log("Post Request Made")
    const files = JSON.parse(fs.readFileSync('taskDB/tasks.json', 'utf-8'))
    if(utils.isEmpty(req.body.task)|| utils.maxLength(req.body.task, 49)){
        console.log("error")
        throw 'bad request'

    }
    req.body.isChecked = false
    files.push(req.body)
    fs.writeFileSync('taskDB/tasks.json', JSON.stringify(files))
    res.status(200)
    res.json("ok")
    } catch (e) {
        console.log(e)
        res.status(400)
        res.json("Bad Request")
    }
})

app.delete('/:taskdel', jsonParser ,(req, res) =>{
    try{
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
    }} catch (e) {
        console.log(e)
        res.status(401)
        res.json("Erro ao deletar")
    }
})

app.put('/:taskup', jsonParser ,(req,res) => {
    try{
    console.log("Put Request Made : Edit")
    const files = JSON.parse(fs.readFileSync('taskDB/tasks.json', 'utf-8'))
    const tasks = files.map((task => {
        return task.task
    }))
    const index = tasks.indexOf(req.params.taskup)
    if(index == -1){
        res.status(404)
        res.json("file not found")
    }else{
        if(utils.isEmpty(req.body.task) || utils.maxLength(req.body.task, 49)){
            console.log("error")
            throw 'bad request'
        }
        files[index].task = req.body.task
        res.status(200)
        res.json("ok")
    }
    fs.writeFileSync('taskDB/tasks.json', JSON.stringify(files))
    }catch (e){
        console.log(e)
        res.status(400)
        res.json("Erro ao editar tarefa")
    }
})

app.put('/:taskCheck/toggle', jsonParser,(req,res) =>{
    try{
    console.log("Put Request Made : Toggle")
    const files = JSON.parse(fs.readFileSync('taskDB/tasks.json', 'utf-8'))
    const tasks = files.map((task => {
        return task.task
    }))
    const index = tasks.indexOf(req.params.taskCheck)
    if(index == -1){
        res.status(404)
        res.json("file not found")
    }else if(req.body.isChecked){
        files[index].isChecked = true
        res.status(200)
        res.json("ok")
    }else if(!req.body.checkbox){
        files[index].isChecked = false
        res.status(200)
        res.json("ok")
    }
    fs.writeFileSync('taskDB/tasks.json', JSON.stringify(files))
    } catch(e){
        console.log(e)
        res.status(400)
        res.json("Erro ao editar")
    }
})

app.listen(port, ()=>{
    console.log(`Escutando porta ${port}`)
})