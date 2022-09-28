import React from 'react'
import {FaTimes} from 'react-icons/fa'

const tarea = ({tarea,OnDelete, onToggle}) => {
return (
    <div className={`tarea ${tarea.terminado? 'terminada': ''}`} onDoubleClick={() => onToggle(tarea.id)}>
        <h3>{tarea.texto} <FaTimes style={{color:'red',cursor:'pointer'}} onClick={() => OnDelete(tarea.id)} /> </h3>
        <p>{tarea.fecha}</p>
    </div>
)
}

export default tarea