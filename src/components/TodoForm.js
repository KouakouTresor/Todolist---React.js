import React, { useState } from 'react'
//rfce
function TodoForm(props) {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })
        setInput('')

    }

    return (
        <form onSubmit={handleSubmit}>
            {props.edit ? (
                <div className="row justify-content-center">
                    <div className="col-8">
                        <input type="text" placeholder="Modifier la tache..." value={input} name="text" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-info col" name="submit" onSubmit={handleSubmit}>Modifier</button>
                    </div>
                </div>
            ) : (
                <div className="row justify-content-center">
                    <div className="col-8">
                        <input
                            placeholder='Tache...'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            className='form-control'
                        />
                    </div>
                    <div className="col">
                        <button type="submit" onClick={handleSubmit}  className="btn btn-primary col" >
                            Rajouter
                        </button>
                    </div>       
                     </div>

            )}
        </form>
    )
}

export default TodoForm
