// ========== DOM =======

/*console.dir (document)*/




// llamar elemento de html
/*const titulos = document.getElementById('titulos')
console.log (titulos)
const marca = document.getElementById('marca')
console.log (marca)
const listItems = document.getElementsByClassName('item')

const parrafo = document.getElementById ('parrafo')
console.log (parrafo.innerHTML)*/

// modificar elemento de html
// parrafo.innerHTML = "************** texto pruebalaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaan**************"

// crear elementos al parrafo
/*const parrafomarca = document.createElement ('parrafomarca')
parrafomarca.innerHTML = " lorem ipsum blblblblbbllbblblblblblbl"

parrafo.append(parrafomarca)*/

// const lista = document.getElementById ('lista')

// const li = document.createElement('li')
// li.innerHTML = "**************NUEVO TEXTO AGREGADO **************"


// lista.append(li)

//arreglo agregar versiones 
/*const modelospeugoet = ["208", "308", "3008", "5008", "Traveller", "Landtrek", "Partner"] 
const listamodelospg = document.getElementById('modelospeugoet')


for (const modelos of modelospeugoet) {
    const li = document.createElement('li')
    li.innerHTML = modelos
    
    listamodelospg.append(li)
    
}*/

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

// parrafo.remove ()



/* ---------------------------------------------------------------------- */
//dom con objetos
/* ----------------------------------------------------------------------*/

/*const vehiculosdom = [
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
})*/

/* ----------------------------------------------------------------------*/
//DOM PARA PAGINA PEUGEOT.
/* ----------------------------------------------------------------------*/

const section = document.querySelector("#seccion-modelos-peugoet")
const temp = document.querySelector ("template") 
const card = temp.content.querySelector("div")

clonado(vehiculos)


function clonado (array){
    array.forEach((elm) => {
        let cardClonada = card.cloneNode (card,true)
        cardClonada.children[1].innerText = elm.modelo
        cardClonada.children[2].innerText = elm.version
        cardClonada.children[3].innerText = elm.precio
        
    
        section.appendChild(cardClonada)
        
        
     });

}

/* llamada de selectores para el formulario*/
// const inputnombre = document.querySelector('#nombre')
// const inputapellido = document.querySelector('#apellido')
// const inputemail = document.querySelector('#email')
// const inputtelefono = document.querySelector('#telefono')
// const inputdesicioncompra = document.querySelector('#desicion-compra')
// const inputtestdrive1 = document.querySelector('#test-drive1')
// const inputtestdrive2 = document.querySelector('#test-drive2')
// const inputmodocontacto1 = document.querySelector('#modo-contacto1')
// const inputmodocontacto2 = document.querySelector('#modo-contacto2')


// const form = document.querySelector('#formulario')

// const usersList = document.querySelector('#usuarios') 


