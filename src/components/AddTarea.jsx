import React from 'react'
import { useState } from 'react';

const AddTarea = ({onAdd}) => {

    const [texto, setTexto] = useState('')
    const [fecha, setFecha] = useState('')
    const [terminado, setTerminada] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        if(!texto){
            alert('Por favor ingresa una tarea')
            return
        }
        onAdd({texto,fecha,terminado})
    }




return (
    <form className="add-form" onSubmit={onSubmit}>
    <div className="form-control">
        <label htmlFor="">Tarea</label>
        <input type="text" placeholder="Agregar Tarea" value={texto} onChange={(e) => setTexto(e.target.value)}/>
    </div>
    <div className="form-control">
        <label htmlFor="">Fecha</label>
        <input type="text" placeholder="Teclea Fecha" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
    </div>
    <div className="form-control form-control-check">
        <label htmlFor="">Terminada</label>
        <input type="checkbox" checked={terminado} onChange={(e) =>  setTerminada(e.currentTarget.checked)}/>
    </div>
        <input type="submit" value="Agregar" className='btn btn-block' />
    </form>
);
}

export default AddTarea