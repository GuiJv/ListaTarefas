const getAllToDos = async(evt) => {
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
  
  export default getAllToDos