import React, { useState } from 'react';

const AddTask = ({ tasks, newTasks }) => {

    const [text, addText] = useState('')
    const [id, newId] = useState(tasks.length + 1)

    const [error, newError] = useState(false);

    const handleTextInput = (e) => {
        addText(e.target.value)
    }

    const handleAddNewTask = (e) => {
        e.preventDefault()
        if (text !== '') {
            newId(prevId => prevId + 1)
            newTasks([...tasks, { id: id, text: text }])
            newError(false)
        } else {
            newError(true)
        }
    }

    return (
        <div>
            <form className='add-el' onSubmit={handleAddNewTask}>
                <input id="form-add-item" type="text" value={text} onChange={handleTextInput} placeholder={error ? 'Write something first and then add!' : null}></input>
                <button>➕</button>
            </form>
        </div>
    );
}

export default AddTask;