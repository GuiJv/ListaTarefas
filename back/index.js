const fs = require('fs')
const express = require('express')

const app = express()

const port = 3001

app.get('/', (req, res) =>{
    const filesJson = JSON.parse(fs.readFileSync('back/taskDB/tasks.json', 'utf-8'))
    res.send(filesJson)
})


app.listen(port, ()=>{
    console.log(`Escutando porta ${port}`)
})