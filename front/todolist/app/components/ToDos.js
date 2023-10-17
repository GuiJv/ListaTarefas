'use client'

import ApiRequests from "../api"

const ToDos = async(props) =>{
    const onClick = (evt) => {
        const deleted = evt.target.name
        console.log(deleted)
        const apiRequest = new ApiRequests
        apiRequest.deleteTask(deleted)
        location.reload()
    }
    return(
        <div>
  <table>
    {/* head */}
    <thead>
      <tr>
        <th>Task</th>
        <th>Check</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {props.body.map(task => (
            <tr key = {task.task}>
                <td>{task.task}</td>
                <td><input type= "checkbox"></input></td>
                <td><button name = {task.task} onClick={ onClick }>X</button></td>
            </tr>
        ))}
    </tbody>
  </table>
</div>

    )
}

export default ToDos