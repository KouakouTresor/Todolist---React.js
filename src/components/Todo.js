import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';




function Todo({ taches, completeTache, removeTache, updateTache }) {
    const [ edit, setEdit]  = useState({
        id: null,
        value: ''
    })

    const submitUpdate = (value) => {
        updateTache(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }


    const newtache = taches.map((tache, index) => {
        return (
            <div className={tache.isComplete ? 'row' : 'row'} key={index} >
                <div className="col-9" key={tache.id} onClick={() => completeTache(tache.id)}>
                    {tache.text}
                </div>
                <div className="col-">
                    <RiCloseCircleLine
                        onClick={() => removeTache(tache.id)}
                        className='delete-icon'
                    />
                    <TiEdit
                        onClick={() => setEdit({ id: tache.id, value: tache.text })}
                        className='edit-icon'
                    />
                </div>
            </div>

        )

    })
    return (
        <div>
            {newtache}
        </div>
    )
}

export default Todo
