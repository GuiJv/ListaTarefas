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
        console.log({task : task})
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

}
  export default ApiRequests