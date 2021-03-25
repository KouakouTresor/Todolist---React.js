import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
const [taches, setTaches] = useState([])

const addTache = (tache)=>{
    if(!tache.text || /^\s*$/.test(tache.text)){
        return 
    }
    const newTache = [tache, ...taches]
    setTaches(newTache)
}

const updateTache = (oldId, update) =>{
    if(!update.text || /^\s*$/.test(update.text)){
        return 
    }
    setTaches(old=>old.map(item=>( item.id === oldId ? update : item)))
}

const removeTache = (id) =>{
    const remove = [...taches].filter(tache=>tache.id !== id)
    setTaches(remove)

}

const completeTache = (id) =>{
    let updatedTaches = taches.map(tache=>{
        if(tache.id === id){
            tache.isComplete = !tache.isComplete;
        }
        return tache
    })
    setTaches(updatedTaches)
}
    return (
        <div>
            <p className="text-center text-dark font-italic mt-2 mb-2">Le planning de la semaine</p>
            <TodoForm onSubmit={addTache} />  
            <Todo taches={taches} 
            completeTache={completeTache} 
            removeTache={removeTache}
            updateTache={updateTache}
            />       
        </div>
    )
}

export default TodoList
