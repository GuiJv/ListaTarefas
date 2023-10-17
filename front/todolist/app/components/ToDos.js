'use client'

import ApiRequests from "../api"

const ToDos = async(props) =>{
    const apiRequest = new ApiRequests
    const onCheck= (evt) =>{
        apiRequest.toggleCheckbox(evt.target.name, evt.target.checked)
    }

    const check = (isChecked, task) => {
        if(isChecked){
            return <td><input type= "checkbox" name = { task } onChange={ onCheck } defaultChecked></input></td>
        }else{
            return <td><input type= "checkbox" name = { task } onChange={ onCheck } ></input></td>
        }
    }
    const onClick = (evt) => {
        const deleted = evt.target.name
        console.log(deleted)
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
                {check(task.isChecked, task.task)}
                <td><button name = {task.task} onClick={ onClick }>X</button></td>
            </tr>
        ))}
    </tbody>
  </table>
</div>

    )
}

export default ToDos