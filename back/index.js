const Utils = require('./utils/utils')
const JsonFileRepo = require('./repos/jsonFileRepo')
const cors = require('cors')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const utils = new Utils
const repo = new JsonFileRepo
const app = express()
const jsonParser = bodyParser.json();

const port = 3002

app.use(cors())

app.get('/', jsonParser,(req, res) =>{
    try{
    const filesJson = repo.readFile()
    console.log("Get Request made")
    res.status(202)
    res.send(filesJson)
    } catch (e) {
        console.log(e)
        res.status(500)
        res.json('Erro ao buscar tarefas')
    }
})

app.post('/',jsonParser,(req, res) =>{
    try{
    console.log("Post Request Made")
    if(utils.isEmpty(req.body.task) || utils.maxLength(req.body.task, 49) || utils.isType("string", req.body.task)){
        console.log("error")
        throw 'bad request'
    }
    req.body.isChecked = false
    repo.writeFile(req.body)
    res.status(200)
    res.json("ok")
    } catch (e) {
        console.log(e)
        res.status(400)
        res.json("Bad Request")
    }
})

app.delete('/:taskdel',jsonParser,(req, res) =>{
    try{
    console.log("Delete request Made")
    const files = repo.readFile()
    const tasks = files.map((task => {
        return task.task
    }))
    const index = tasks.indexOf(req.params.taskdel)
    if (index == -1){
        res.status(404)
        res.json("file not found")
    }else{
        repo.deleteFile(index)
        res.status(200)
        res.json("ok")
    }} catch (e) {
        console.log(e)
        res.status(401)
        res.json("Erro ao deletar")
    }
})

app.put('/:taskup',jsonParser,(req,res) => {
    try{
    console.log("Put Request Made : Edit")
    const files = repo.readFile()
    const tasks = files.map((task => {
        return task.task
    }))
    const index = tasks.indexOf(req.params.taskup)
    if(index == -1){
        res.status(404)
        console.log("not found")
        res.json("file not found")
    }else{
        if(utils.isEmpty(req.body.task) || utils.maxLength(req.body.task, 49) || utils.isType("string", req.body.task)){
            console.log("error")
            throw 'bad request'
        }
        repo.updateFile(index, req.body)
        res.status(200)
        res.json("ok")
    }
    }catch (e){
        console.log(e)
        res.status(400)
        res.json("Erro ao editar tarefa")
    }
})

app.put('/:taskCheck/toggle',jsonParser,(req,res) =>{
    try{
    console.log("Put Request Made : Toggle")
    const files = repo.readFile()
    const tasks = files.map((task => {
        return task.task
    }))
    if(utils.isType("boolean", req.body.isChecked)){
        throw 'bad request'
        
    }
    const index = tasks.indexOf(req.params.taskCheck)
    if(index == -1){
        res.status(404)
        res.json("file not found")
    }else if(req.body.isChecked){
        repo.updateCheckFile(index, true)
        res.status(200)
        res.json("ok")
    }else if(!req.body.isChecked){
        repo.updateCheckFile(index, false)
        res.status(200)
        res.json("ok")
    }
    } catch(e){
        console.log(e)
        res.status(400)
        res.json("Erro ao editar")
    }
})

app.listen(port, ()=>{
    console.log(`Escutando porta ${port}`)
})