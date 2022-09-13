let usuario = localStorage.getItem('usuario')




const datoscontacto = JSON.parse( localStorage.getItem('guardarform') )
const datosauto = JSON.parse( localStorage.getItem('guardarformvh') )
/* SPREAD DEL ARRAY DATOS DE CONTACTO */
console.log(...datoscontacto)
//console.log(...datosauto)






// ====== EJEMPLO APLICADO ==========

const listaUsuarios = document.querySelector('#lista-usuarios')

// const usuarios = JSON.parse( localStorage.getItem('usuarios') )


datoscontacto.forEach( (datoscontacto) => {
    const li = document.createElement('li')
    li.innerHTML = `
                    <h4>Nombre: ${datoscontacto.nombre} ${datoscontacto.apellido}</h4>
                    <p>Email: ${datoscontacto.email}</p>
                    <p>Telefono: ${datoscontacto.telefono}</p>
                    <p>Modelo: ${datosauto.version}</p>
             `
            
            // if ( ) {
            //     const datosauto = agregarmodelo3008.find((datosauto) => datosauto.id === id)

            // }

    listaUsuarios.append(li)
} )
