import React, { useState } from 'react';
import "./Todo.css";
import AddTask from './AddTask';
import ListTask from './ListTask';


const Todo = () => {
    const [tasks, setTasks] = useState([
        {title: "Learn HTML"},
        {title: "Learn CSS"},
        {title: "Learn JAVASCRIPT"},
    ]);

    const addTask = (title)=>{
        const newTask = [...tasks,{title}]
        setTasks(newTask);

    }
  return (
    <div>
        <div className='todo-container'>
        
            <div className="header">Todo App</div>
            <div className="add-task">Add Task</div>
            <AddTask addTask = {addTask} />
            <div className="tasks">List Task</div>
            {tasks.map((task) =>(
                <ListTask task={task} />

            ) )}
            

        </div>
      
    </div>
  )
}

export default Todo
