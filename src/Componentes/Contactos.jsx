import React from 'react'

export const Contactos = ({agenda, eliminarContacto, setContactoAEditar}) => {
    
  return (
    <div>
        <h2>Contactos</h2>
        {
            agenda.map((item) => {
                const {id, nombre, direccion,telefono} = item
                return (
                    <div className='contenedor-info-contacto p-3' key={id}>
                        <div className='separador-info'>
                        <h3>Nombre: {nombre}</h3>
                        <h4>Direccion: {direccion}</h4>
                        <h4>Telefono: {telefono}</h4>
                        <button onClick={()=> setContactoAEditar(item)}> Modificar </button>
                        <button onClick={()=> eliminarContacto(id)}> Eliminar </button>
                        </div>
                        
                    </div>
                )
            })
        }
    </div>

  )
}

export default Contactos
