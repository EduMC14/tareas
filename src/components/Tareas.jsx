import React from 'react'
import Tarea from './Tarea'
const Tareas = ({tareas, OnDelete, onToggle}) => {
    return (
        
    <>
    {tareas.map((tarea) => (<Tarea key={tarea.id} tarea={tarea} OnDelete={OnDelete} onToggle={onToggle}/>)) }
    </>
    )
}

export default Tareas