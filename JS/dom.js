// ========== DOM =======

console.dir (document)




// llamar elemento de html
const titulos = document.getElementById('titulos')
console.log (titulos)
const marca = document.getElementById('marca')
console.log (marca)
const listItems = document.getElementsByClassName('item')

const parrafo = document.getElementById ('parrafo')
console.log (parrafo.innerHTML)

// modificar elemento de html
parrafo.innerHTML = "************** texto pruebalaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaan**************"

// crear elementos al parrafo
const parrafomarca = document.createElement ('parrafomarca')
parrafomarca.innerHTML = " lorem ipsum blblblblbbllbblblblblblbl"

parrafo.append(parrafomarca)

// const lista = document.getElementById ('lista')

// const li = document.createElement('li')
// li.innerHTML = "**************NUEVO TEXTO AGREGADO **************"


// lista.append(li)

//arreglo agregar versiones 
const modelospeugoet = ["208", "308", "3008", "5008", "Traveller", "Landtrek", "Partner"] 
const listamodelospg = document.getElementById('modelospeugoet')


for (const modelos of modelospeugoet) {
    const li = document.createElement('li')
    li.innerHTML = modelos
    
    listamodelospg.append(li)
    
}

// const modelosmazda = ["Mazda 3", "Mazda 2", "CX-5", "CX-9", "CX-30", "MX-5","BT-50"] 
// const listamodelosmz = document.getElementById('modelosmazda')


// for (const modelos of modelosmazda) {
//     const li = document.createElement('li')
//     li.innerHTML = modelos
    
//     listamodelospg.append(li)
    
// }

// console.log (modelospeugoet)
// console.log (li)

//eliminar elementos

parrafo.remove ()



/* ---------------------------------------------------------------------- */
//dom con objetos
/* ----------------------------------------------------------------------*/

const vehiculosdom = [
         {
            id: 1,
            marca: "mazda",
            modelo:"cx5",
            version: "CX-5 SIGNATURE 2.5T AWD 6AT",
            precio: 32890000, 
            color: "rojo"
         },
         {
             id: 2,
             marca: "Peugeot",
             modelo:"3008",
             version: "3008 allure GTI",
             precio: 22000000, 
             color: "gris metalico"
         },
         {
             id: 3,
             marca: "mazda",
             modelo:"cx9",
             version: "CX-9 CORE 2.0 2WD 6MT",
             precio: 23990000, 
             color: "blanco"
         }
 ]

 const containervehiculosdom = document.getElementById('vehiculosdom')
 vehiculosdom.forEach((vehiculosdom) => {
    const div = document.createElement('div')
    div.innerHTML = `<h4>${vehiculosdom.marca}</h4>
                    <h4>${vehiculosdom.modelo}</h4>
                    <h4>${vehiculosdom.version}</h4>
                    <p>Precio: ${vehiculosdom.precio}</p>
                    <small>Color: ${vehiculosdom.color}</small>`

                    containervehiculosdom.append(div)
})

/* eventos para el cotizador */
const btnpgt = document.querySelector('#btnpgt')
const btnmza = document.querySelector('#btnmza')
const btnhvl = document.querySelector('#btnhvl')
const btnszk = document.querySelector('#btnszk')


btnpgt.onclick = () => {
    console.log("Enviar a Pagina Peugeot")
}

btnpgt.onmouseover = () => {
    console.log("Al usuario le interesa esta marca!")
}

btnmza.onclick = () => {
    console.log("Enviar a Pagina Mazda")
}

btnmza.onmouseover = () => {
    console.log("Al usuario le interesa esta marca!")
}


btnhvl.onclick = () => {
    console.log("Enviar a Pagina Haval")
}

btnhvl.onmouseover = () => {
    console.log("Al usuario le interesa esta marca!")
}

btnszk.onclick = () => {
    console.log("Enviar a Pagina Suzuki")
}

btnszk.onmouseover = () => {
    console.log("Al usuario le interesa esta marca!")
}
