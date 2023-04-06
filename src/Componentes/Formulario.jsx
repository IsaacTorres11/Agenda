import { useState } from "react"
import Swal from "sweetalert2"


const Formulario =()=>{            

    //Creamos el estado inicial persona el cual sera un objeto con las propieades nombre, direccion y telefono
    const [persona, setPersona] = useState({
        nombre: '',
        direccion: '',
        telefono: ''
    })

    //Destructuramos el estado persona 
    const {nombre, direccion,telefono} = persona


    //Creamos la funcion Enviar
    const enviar = (e)=>{
        e.preventDefault()

        if( !nombre.trim() || !direccion.trim() || !telefono.trim()){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Los campos Nombre, Direccion, Telefono no deben estar vacios...',
                footer: '<a href="">Why do I have this issue?</a>'
              }) 

        }else{
            console.log(persona)
        }

        
    }

    //Creamos la funcion para manejar el evento onChange
    const handleChange =(e)=>{
        // destructuramos la propiedad name y value del objeto e.target
        const {name, value} = e.target
        setPersona({
            ...persona,
            [name]: value       
        })
    }

    return(
        
        <div className="formulario">
            <form onSubmit={enviar} >
            
                <label htmlFor="html">Ingresa tu Nombre </label>
                <input type="text" 
                placeholder="Ingresa Tu Nombre"
                name="nombre"
                value={nombre}
                onChange={handleChange}/>

                <label htmlFor="html">Ingresa tu Direccion </label>
                <input type="text" 
                placeholder="Ingresa Tu Direccion"
                name = "direccion"
                value={direccion}
                onChange={handleChange}/>

                <label htmlFor="html">Ingresa tu Telefono </label>
                <input type="text" 
                placeholder="Ingresa Tu Telefono"
                name="telefono"
                value={telefono}
                onChange={handleChange}/>

                <button> Enviar </button>
            </form>
        </div>
    )

    

}

export default Formulario