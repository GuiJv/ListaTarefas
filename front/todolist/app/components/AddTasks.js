"use client";

import ApiRequests from "../api"
import { useState } from 'react'
import styles from "../styles/AddTask.module.css"

const AddTasks = () =>{
    const [task, setTask] = useState("")
    const apiRequest = new ApiRequests
    const onChangeTask = (evt) =>{
        setTask(evt.target.value)
    }

    const onClick = (evt) =>{
        apiRequest.postNewTask(task)
        document.location.reload()
    }

    console.log(task)
    return(
        <div>
            <form>
                <input className = { styles.addTask } type="text" name = "task" placeholder="Insert task" value= { task } onChange = {onChangeTask} maxLength={50} required></input>
                <button className = { styles.button } type="submit" onClick={ onClick }>+</button>
            </form>
        </div>
    )
}

export default AddTasks