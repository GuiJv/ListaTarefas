'use client'

import { useState } from 'react'
import ApiRequests from "../api"

const ToDos = (props) =>{
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


    const onClickDelete = (evt) => {
        const deleted = evt.target.name
        console.log(deleted)
        apiRequest.deleteTask(deleted)
        location.reload()
    }



    const [edit, setEdit] = useState("")
    const onChangeEdit = (evt) =>{
        setEdit(evt.target.value)
    }

    const onClickUpdate = (evt) => {
        console.log(evt.target.name)
        console.log(edit)
        apiRequest.updateTask(evt.target.name, edit)
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
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
        {props.body.map(task => (
            <tr key = {task.task}>
                <td>{task.task}</td>
                {check(task.isChecked, task.task)}
                <td><button name = {task.task} onClick={ onClickDelete }> X </button></td>
                <td><input type= "text"  onChange = { onChangeEdit }></input><button name = {task.task} onClick = {  onClickUpdate  }>🖊️</button></td>
            </tr>
        ))}
    </tbody>
  </table>
</div>

    )
}

export default ToDos