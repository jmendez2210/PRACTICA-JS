let usuario = localStorage.getItem('usuario')




const datoscontacto = JSON.parse( localStorage.getItem('guardarform') )
console.log(datoscontacto)



// ====== EJEMPLO APLICADO ==========

const listaUsuarios = document.querySelector('#lista-usuarios')

const usuarios = JSON.parse( localStorage.getItem('usuarios') )

console.log(usuarios)

datoscontacto.forEach( (datoscontacto) => {
    const li = document.createElement('li')
    li.innerHTML = `
                    <h4>Nombre: ${datoscontacto.nombre}</h4>
                    <p>Email: ${datoscontacto.email}</p>
                `
    listaUsuarios.append(li)
} )


