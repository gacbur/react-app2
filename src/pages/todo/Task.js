import React from 'react';
import DeleteItem from './DeleteItem'

const Task = ({ text, remove, id }) => {
    return (
        <div className="todo-item">
            <li>{text}</li>
            <DeleteItem id={id} remove={remove} />
        </div>

    );
}

export default Task;