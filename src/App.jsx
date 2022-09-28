import Header from "./components/Header"
import { useState } from "react"
import Tareas from "./components/Tareas"
import AddTarea from "./components/AddTarea"
function App() {
  const[mostrarForm, setMostrarForm] = useState(false)
  const [tareas, setTareas] = useState( [{
    id: 1,
    texto: 'Ir al cine',
    fecha: '02 de Febrero de 2022',
    terminado: true,
},
{
    id: 2,
    texto: 'Comprar en el supermercado',
    fecha: '10 de Febrero de 2022',
    terminado: false,
},
{
    id: 3,
    texto: 'Hacer app en React',
    fecha: '11 de Febrero de 2022',
    terminado: false,
}
])

//Borrar Tarea 
const borrarTarea = (id) => {
  /* console.log('borrar',id); */
  setTareas(tareas.filter( (tarea) => tarea.id !== id ))
}

//Terminar Tarea

const terminarTarea = (id) => {
  setTareas(tareas.map((tarea) => tarea.id === id ? {...tarea, terminado: !tarea.terminado}: tarea))
}

//Agregar Tarea

const addTarea = (tarea) => {
  const id = Math.floor(Math.random() * 10000) + 1
  
  const nuevaTarea = {id, ...tarea};
  console.log(nuevaTarea);

  setTareas([...tareas, nuevaTarea])

}


  return (
    <div className='container'>
      <Header onAdd={() => setMostrarForm(!mostrarForm)} mostrarForm={mostrarForm} />
      {mostrarForm && <AddTarea onAdd={addTarea}/>}
      {tareas.length > 0 ?<Tareas tareas={tareas} OnDelete={borrarTarea} onToggle={terminarTarea} />: <h5>No hay tareas que mostrar</h5>}
    </div>
  )
}

export default App
