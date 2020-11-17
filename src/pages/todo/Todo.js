import React, { useState } from 'react';
import AddTask from './AddTask'
import '../../styles/Todo.css'
import TaskList from './TaskList'

const Todo = () => {

    const [tasks, newTasks] = useState([
        { id: 1, text: 'go for a walk' },
        { id: 2, text: 'eat something' },
    ])

    const removetodo = (id) => {
        newTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div className="todo">
            <h2>Todo list</h2>
            <AddTask tasks={tasks} newTasks={newTasks} />
            <TaskList remove={removetodo} tasks={tasks} />
        </div>
    )
}

export default Todo;



