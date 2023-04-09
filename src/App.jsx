import { useState } from "react"
import Formulario from "./Componentes/Formulario"
import Contactos from "./Componentes/Contactos"


function App() {

  //Creamos un valor inicial para nuestro estado agenda este sera un array de objetos
  const valorInicial = [{
    id:1,
    nombre: "Juan",
    direccion: "chiapas",
    telefono: "123456789",
  }]
  //Creamos el estado llamado agenda el cual tendra el valor inicial creado previamente
  const [agenda, setAgenda] = useState(valorInicial)
  const [contactoAEditar, setContactoAEditar] = useState(null)

///////////////////////////// FUNCIONES NECESARIAS ///////////////////////////////

  //Funcion para agregar contacto
  const agregarContacto = (contacto) => {
    setAgenda([...agenda, contacto])
  }

  //Funcion para eliminar ontactos
  const eliminarContacto =(id)=>{
    // filtramos la agenda y guardermos en una nueva variable 
    // todos los elementos que tengas un id diferente al que se le pasa como 
    // paramatro en la funcion  
    const agendaFiltrada = agenda.filter((elemento)=> elemento.id != id)
    setAgenda(agendaFiltrada)
  }

  //Funcion para actualizar contactos
  const actualizarContacto=(persona)=>{
    let agendaActualizada = agenda.map(elemento => elemento.id === persona.id ? persona : elemento)
    setAgenda(agendaActualizada);
  }


  /////////////////////////////////////////////////////////////////////////////

  return (
    <div className="App">
      
      <nav className="barra-navegacion">
        <h1 className="text-center  h1"> Agenda</h1>
      </nav>
      
      <div className="contenedor-Principal ">
        <Formulario 
        agregarContacto = {agregarContacto} 
        actualizarContacto={actualizarContacto}
        contactoAEditar ={contactoAEditar}
        setContactoAEditar={setContactoAEditar} />

        <Contactos 
        agenda = {agenda} 
        eliminarContacto = {eliminarContacto} 
        setContactoAEditar={setContactoAEditar} />
      </div>


    </div>
  )
}

export default App
