import ApiRequests from "../api"

const ToDos = async() =>{
    const apiRequest = new ApiRequests
    const body = await apiRequest.getAllToDos()
    return(
        <div>
  <table>
    {/* head */}
    <thead>
      <tr>
        <th>Task</th>
        <th>Check</th>
      </tr>
    </thead>
    <tbody>
        {body.map(task => (
            <tr>
                <td>{task.task}</td>
                <td><input type= "checkbox"></input></td>
            </tr>
        ))}
    </tbody>
  </table>
</div>

    )
}

export default ToDos