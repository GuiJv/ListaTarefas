import getAllToDos from "../api"

const ToDos = async() =>{
    const body = await getAllToDos()
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