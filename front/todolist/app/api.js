class ApiRequests{


    async getAllToDos(evt){
        const response = await fetch("http://localhost:3002/", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type' : 'application/json'
            }
        })
        const body = await response.json()
        return body
    }

    async postNewTask(task){
        const JSONtask = JSON.stringify({task:task})
        console.log(JSONtask)
        const response = await fetch("http://localhost:3002/", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSONtask
        })
    }

    async deleteTask(task){
        const response = await fetch(`http://localhost:3002/${task}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-type' : 'application/json'
            }
        })
    }

    async toggleCheckbox(task, isChecked){
        const JSONisChecked = JSON.stringify({isChecked: isChecked})
        const response = await fetch(`http://localhost:3002/${task}/toggle`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-type' : 'application/json'
            },
            body : JSONisChecked
        })
    }

    async updateTask(task, taskEdtion){
        const JSONtask = JSON.stringify({task: taskEdtion})
        const response = await fetch(`http://localhost:3002/${task}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-type' : 'application/json'
            },
            body : JSONtask
        })
    }
}
  export default ApiRequests