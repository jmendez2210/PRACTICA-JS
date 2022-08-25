let usuario = localStorage.getItem('usuario')




const datoscontacto = JSON.parse( localStorage.getItem('guardarform') )
/* SPREAD DEL ARRAY DATOS DE CONTACTO */
console.log(...datoscontacto)






// ====== EJEMPLO APLICADO ==========

const listaUsuarios = document.querySelector('#lista-usuarios')

// const usuarios = JSON.parse( localStorage.getItem('usuarios') )


datoscontacto.forEach( (datoscontacto) => {
    const li = document.createElement('li')
    li.innerHTML = `
                    <h4>Nombre: ${datoscontacto.nombre} ${datoscontacto.apellido}</h4>
                    <p>Email: ${datoscontacto.email}</p>
                    <p>Telefono: ${datoscontacto.telefono}</p>
                    <p>Modelo: </p>
                `
    listaUsuarios.append(li)
} )
