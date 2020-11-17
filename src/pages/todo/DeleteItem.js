import React from 'react';

const DeleteItem = ({ remove, id }) => {
    return (
        <div>
            <button onClick={() => remove(id)}>❌</button>
        </div>
    );
}

export default DeleteItem;