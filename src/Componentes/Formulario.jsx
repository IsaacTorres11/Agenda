import { useEffect, useState } from "react"
import Swal from "sweetalert2"

 //Creamos el estado inicial para el estado Persona
 const personaInicial = {
    id: null,
    nombre: '',
    direccion: '',
    telefono: ''
}

const Formulario =({agregarContacto, actualizarContacto, contactoAEditar, setContactoAEditar})=>{            

   useEffect(()=>{
    contactoAEditar ? setPersona(contactoAEditar)
    : setPersona(personaInicial) 
   },[contactoAEditar])

    //Creamos un estado llamado persona el cual tendra el valor inicial de personaInicial
    const [persona, setPersona] = useState(personaInicial)

    //Destructuramos el estado persona 
    const {id, nombre, direccion,telefono} = persona

////////////////////////////// Funciones del componente Formulario ////////////////////////////////
    

    //Creamos la funcion para manejar el evento onChange
    const handleChange =(e)=>{
        // destructuramos la propiedad name y value del objeto e.target
        const {name, value} = e.target
        setPersona({
            ...persona,
            [name]: value       
        })
    }

    //Funcion Enviar
    const enviar = (e)=>{
        e.preventDefault()
        
        if( !nombre.trim() || !direccion.trim() || !telefono.trim()){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Los campos Nombre, Direccion, Telefono no deben estar vacios...',
                footer: '<a href="">Why do I have this issue?</a>'
              }) 

        }
        else if(id === null){
            //si el id del estado persona esta como null entonces agregaremos un contacto...
            agregarContacto({
                    ...persona,
                    id: Date.now(),
                })
           
            Swal.fire({
                icon:'success',
                title: '¡Gracias!',
                text: 'El contacto se ha agregado correctamente...',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
        else{ 
            //si el id no esta como null entonces quiere decir que tenemos seleccionado un registro,
            // por lo que ejecutaremos la funcion actualizar contacto
            actualizarContacto (persona)
        }

        //Posteriormente limpiamos el formulario
        limpiar()
    }

    //Funcion para limpiar el formulario
    const limpiar =(e)=>{
        setPersona(personaInicial)
        setContactoAEditar(null)
    } 
    
////////////////////////////////////////////////////////////////////////////////////////////////
    return(
        
        <div className="contenedor-formulario w-75 m-auto bg-info-subtle p-3">
            <h3>{contactoAEditar ? "Editar" : "Agregar"}</h3>
            <form className="formulario border border-2 border-danger" onSubmit={enviar}  >
            
                <label htmlFor="html">Ingresa tu Nombre </label>
                <input type="text" 
                className=" form-text mt-2 mb-2 form-control p-2"
                placeholder="Ingresa Tu Nombre"
                name="nombre"
                value={nombre}
                onChange={handleChange}/>

                <label htmlFor="html">Ingresa tu Direccion </label>
                <input type="text" 
                className=" form-text mt-2 mb-2 form-control p-2"
                placeholder="Ingresa Tu Direccion"
                name = "direccion"
                value={direccion}
                onChange={handleChange}/>

                <label htmlFor="html">Ingresa tu Telefono </label>
                <input type="text" 
                className=" form-text mt-2 mb-2 form-control p-2"
                placeholder="Ingresa Tu Telefono"
                name="telefono"
                value={telefono}
                onChange={handleChange}/>
                
                <input type="reset" onClick={limpiar} value="Limpiar" className="btn-enviar btn btn-primary w-25"/>
                <button className="btn-enviar btn btn-primary w-25"> Enviar </button>
            </form>
        </div>
    )

    

}

export default Formulario