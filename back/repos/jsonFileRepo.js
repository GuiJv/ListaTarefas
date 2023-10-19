const fs = require('fs')

class JsonFileRepo{

    readFile(){
        return JSON.parse(fs.readFileSync('taskDB/task.json', 'utf-8'))
    }

    writeFile(task){
        const files = this.readFile()
        files.push(task)
        fs.writeFileSync('taskDB/task.json', JSON.stringify(files))
    }

    updateFile(taskIndex, newTask){
        const files = this.readFile()
        console.log(newTask)
        files[taskIndex] = newTask
        fs.writeFileSync('taskDB/task.json', JSON.stringify(files))
        
    }

    deleteFile(taskIndex){
        const files = this.readFile()
        files.splice(taskIndex,1)
        fs.writeFileSync('taskDB/task.json', JSON.stringify(files))

    }

    updateCheckFile(taskIndex, checkState){
        const files = this.readFile()
        files[taskIndex].isChecked = checkState
        const newFile = files
        fs.writeFileSync('taskDB/task.json', JSON.stringify(files))
    }

}

module.exports = JsonFileRepo