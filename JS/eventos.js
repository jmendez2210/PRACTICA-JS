/* eventos para el cotizador */
// const btnpgt = document.querySelector('#btnpgt')
// const btnmza = document.querySelector('#btnmza')
// const btnhvl = document.querySelector('#btnhvl')
// const btnszk = document.querySelector('#btnszk')


// btnpgt.onclick = () => {
//     console.log("Enviar a Pagina Peugeot")
// }

// btnpgt.onmouseover = () => {
//     console.log("Al usuario le interesa esta marca!")
// }

// btnmza.onclick = () => {
//     console.log("Enviar a Pagina Mazda")
// }

// btnmza.onmouseover = () => {
//     console.log("Al usuario le interesa esta marca!")
// }


// btnhvl.onclick = () => {
//     console.log("Enviar a Pagina Haval")
// }

// btnhvl.onmouseover = () => {
//     console.log("Al usuario le interesa esta marca!")
// }

// btnszk.onclick = () => {
//     console.log("Enviar a Pagina Suzuki")
// }

// btnszk.onmouseover = () => {
//     console.log("Al usuario le interesa esta marca!")
// }

// btn1.addEventListener('click', (event) => {
//     console.log(event)

//     console.log("Hola Mundo!")
// })



// EVENTOS DE FORMULARIO

const inputNombre = document.querySelector('#input-nombre')
const inputApellido = document.querySelector('#input-apellido')
const inputtelefono = document.querySelector('#input-telefono')
const inputdesicioncompra = document.querySelector('#input-desicion-compra')
const inputtestdrive1 = document.querySelector('#input-test-drive1')
const inputtestdrive2 = document.querySelector('#input-test-drive2')
const inputmodocontacto1 = document.querySelector('#input-modo-contacto1')
const inputmodocontacto2 = document.querySelector('#input-modo-contacto2')



const form = document.querySelector('#formulario')

const usersList = document.querySelector('#usuarios')

const formulariocontacto = []

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const nombre = inputNombre.value
    const apellido = inputApellido.value
    const direccion = inputDireccion.value
    const telefono = inputtelefono.value
    const desicioncompra = inputdesicioncompra.value
    const testdrive1 = inputtestdrive1.value
    const testdrive2 = inputtestdrive2.value
    const modocontacto1 = inputmodocontacto1.value
    const modocontacto2 = inputmodocontacto2.value


    if (nombre.length < 5 || apellido.length < 5 || direccion.length < 5) {
        alert("DATOS INVALIDOS")
        return
    }

    const user = {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        telefono : telefono,
        desicioncompra : desicioncompra,
        testdrive1 : testdrive1,
        testdrive2 : testdrive2,
        modocontacto1 : modocontacto1,
        modocontacto2 : modocontacto2
    }

    formulariocontacto.push(user)

    console.log(formulariocontacto)

    form.reset()

    agregarUsuarioDOM(user)
})

const agregarUsuarioDOM = (user) => {
    const li = document.createElement('li')
    li.innerHTML = `
                <h5>${user.nombre} ${user.apellido}</h5>
                <p>${user.direccion}</p>
            `
    usersList.append(li)
}