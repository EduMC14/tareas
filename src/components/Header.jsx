import React from 'react'
import Button from './Button'
const Header = ({titulo, onAdd, mostrarForm}) => {

    /*  const saludo = () => {
        console.log('Hola Eduardo')
    } */
    
    return (
        <header className='header'>
            <h1>{titulo}</h1>
            <Button texto={mostrarForm?'Cerrar': 'Agregar'} color={mostrarForm? 'black': 'green'} onClick={onAdd}/>
            {/* <Button texto='Enviar' color='green'  onClick={saludo}/> */}
        </header>

    )
}

Header.defaultProps = {
    titulo: 'Tareas'
}

/* const  estiloEncabezado = {
    color: 'red',
    backgroundColor: 'black'
} */

export default Header