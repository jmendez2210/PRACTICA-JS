//--------------------------------------------------------------------------------
// OBJETOS
//--------------------------------------------------------------------------------
// const producto = {
//     id: 1,
//     marca: "mazda",
//     modelo:"cx5",
//     version: "CX-5 SIGNATURE 2.5T AWD 6AT",
//     precio: 32000000 
// }
// const producto2 = {
//     id: 2,
//     marca: "mazda",
//     modelo:"cx9",
//     version: "CX-9 R 2.5 T 2WD 6AT",
//     precio: 31290000 
// }
// console.log(producto) 
// console.log(producto2) 
// console.log (producto.modelo)
// console.log (producto2.modelo)
//--------------------------------------------------------------------------------
//OBJETO CONSTRUCTOR
//--------------------------------------------------------------------------------

// function Producto (id, marca, modelo, version, precio){
// this.id = id
// this.marca = marca
// this.modelo = modelo
// this.version = version
// this.precio = precio

// this.cotizar = function () {
//     console.log("****COTIZA TU VEHICULO MAZDA****")
// }
// this.calcularIva = () => {
//     return this.precio * 1.19
// }
// }
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
//OBJETO CON CLASES
//--------------------------------------------------------------------------------

// class Producto {
//     constructor (id, marca, modelo, version, precio) {
//         this.id = id
//         this.marca = marca
//         this.modelo = modelo
//         this.version = version
//         this.precio = precio

//     }
//     cotizar () {
//         console.log("****COTIZA TU VEHICULO MAZDA**** " + this.marca + " " + this.modelo)
//     }
// }

// const producto1 = new Producto(1, 'Mazda', 'CX5','CX-5 SIGNATURE 2.5T AWD 6AT', 32000000)
// const producto2 = new Producto(1, 'Mazda', 'CX9','CX-9 SIGNATURE 2.5T AWD 6AT', 35000000)
// producto1.cotizar ();
// console.log (producto1)

// producto2.cotizar ();
// console.log (producto2)
// console.log ( producto1.calcularIva())

//--------------------------------------------------------------------------------
//DECLARANDO EL ARRAY
//--------------------------------------------------------------------------------
// const marca = ["Mazda", "Suzuki", "Opel", "Peugeot",]
// for (let i = 0; i < marca.length; i++) {
//     console.log ( marca[i])
// }
// console.log (marca.join (', * '))

//--------------------------------------------------------------------------------
//ARRAY CON OBJETOS
//--------------------------------------------------------------------------------

// const versionescx5 = [
//     {
//        id: 1,
//        marca: "mazda",
//        modelo:"cx5",
//        version: "CX-5 SIGNATURE 2.5T AWD 6AT",
//        precio: 32890000, 
//        color: "rojo"
//     },
//     {
//         id: 2,
//         marca: "mazda",
//         modelo:"cx5",
//         version: "CX-5 SPORT 2.5 AWD 6AT",
//         precio: 31290000, 
//         color: "gris metalico"
//     },
//     {
//         id: 3,
//         marca: "mazda",
//         modelo:"cx5",
//         version: "CX-5 CORE 2.0 2WD 6MT",
//         precio: 23990000, 
//         color: "blanco"
//     },
//     {
//         id: 4,
//         marca: "mazda",
//         modelo:"cx5",
//         version: "CX-5 HIGH 2.5 AWD 6AT",
//         precio: 30590000, 
//         color: "negro"
//     },
//     {
//         id: 5,
//         marca: "mazda",
//         modelo:"cx5",
//         version: "CX-5 HIGH 2.0 AWD 6AT",
//         precio: 29290000, 
//         color: "negro"
//     }

// ]

// console.log (versionescx5)
// console.log("****COTIZA TU VEHICULO MAZDA**** ")
// versionescx5.push ( {
//         id: 6,
//         marca: "mazda",
//         modelo:"NEW cx5",
//         version: "CX-5-NEW CX-5 CORE 2.0 2WD 6AT",
//         precio: 25190000, 
//         color: "rojo metalico"
// } )

// // Para acceder a cada elemento del array
// for ( let i = 0; i < versionescx5.length; i++){
//      console.log ( versionescx5[i].version )
// }
// console.log("****COTIZA TU VEHICULO MAZDA**** ")



//--------------------------------------------------------------------------------
 /* */
console.log(document)



 //INICIO PRIMERA ENTREGA 
//--------------------------------------------------------------------------------



const vehiculos = []
class versionvh {
    // constructor - props
    constructor (marca, modelo, version, precio, color) {
        this.marca = marca
        this.modelo = modelo
        this.version = version
        this.precio = precio
        this.color = color
    }
 }

 //destructuracion del oobjeto
const { marca, modelo, version } = versionvh
console.log(marca, modelo, version)

 const version1 = new versionvh("Mazda", "CX9", "CX-9 R 2.5 T 2WD 6AT", 35090000, "Blanco")
 vehiculos.push (version1)
 const version2 = new versionvh("Mazda", "CX9", "CX-9 R 2.5 T 2WD 6MT", 30090000, "rojo")
 vehiculos.push (version2)
 const version3 = new versionvh("Mazda", "CX5", "CX-5 R 2.5 T 2WD 6AT", 35090000, "Blanco")
 vehiculos.push (version3)
 const version4 = new versionvh("Mazda", "CX5", "CX-5 R 2.5 T 2WD 6MT", 30090000, "rojo")
 vehiculos.push (version4)
 const version5 = new versionvh("Mazda", "CX30", "CX-30 R 2.5 T 2WD 6AT", 35090000, "Blanco")
 vehiculos.push (version5)
 const version6 = new versionvh("Mazda", "CX30", "CX-30 R 2.5 T 2WD 6MT", 30090000, "rojo")
 vehiculos.push (version6)
// const versiones = [
//     new versionvh("Mazda", "CX9", "CX-9 R 2.5 T 2WD 6AT", 35090000, "Blanco"),
//     new versionvh("Mazda", "CX9", "CX-9 R 2.5 T 2WD 6MT", 33090000, "Rojo"),
// ]
// // push para agregar nuevas versiones
// versiones.push ( new versionvh ("Mazda", "CX9", "CX-9 R 2.5 T 2WD 6MT", 33090000, "azul") )

//console.log(versiones)

/*
//--------------------------------------------------------------------------------
//INICIO OBJETO VERSIONES 
//--------------------------------------------------------------------------------
// const agregarversion = () => {
//     const marca = prompt ('Ingrese Marca', 'Mazda')
//     const modelo = prompt ('Ingrese Modelo',"NEW CX5")
//     const version = prompt('Ingrese Version',"CX-9 HIGH 2.2 D AWD 6AT")
//     const precio = Number( prompt ('Ingrese precio version: ' , 25190000)) 
//     const color = prompt ('Ingrese color ',"rojo metalico")

//     versiones.push(new versionvh(marca, modelo, version, precio, color)  )
//     const agregarversion = new versionvh(marca, modelo, version, precio, color)
//     versiones.push (agregarversion)

// }
// agregarversion()
// console.log (versiones)
//--------------------------------------------------------------------------------
//FIN OBJETO VERSIONES
//--------------------------------------------------------------------------------
*/

//--------------------------------------------------------------------------------
//INICIO FUNCION AGREGAR VERSIONES
//--------------------------------------------------------------------------------
//push para agregar versiones de autos
function agregarversion() {
        const marca = prompt ('Ingrese Marca', 'Mazda')
        const modelo = prompt ('Ingrese Modelo',"NEW CX5")
        const version = prompt('Ingrese Version',"CX-9 HIGH 2.2 D AWD 6AT")
        const precio = Number(prompt ('Ingrese precio version: ' , 25190000)) 
        const color = prompt ('Ingrese color ',"rojo metalico")
    
        const agregarversion = new versionvh (marca, modelo, version, precio, color)
        vehiculos.push (agregarversion)
    
}
//agregarversion ()
//--------------------------------------------------------------------------------
//FIN FUNCION AGREGAR VERSIONES
//--------------------------------------------------------------------------------*/

//--------------------------------------------------------------------------------/*
// solicitar al usuario ingresar nueva version
//--------------------------------------------------------------------------------
function bienvenido() {
    const consulta = prompt ("¿Desea ingresar una nueva version de vehiculo?", "NO") 
    
    if (consulta.toUpperCase () === "SI") {
        agregarversion ()
        bienvenido ()
        console.log (vehiculos)
    }else{
        alert ("El usuario no ingresara mas versiones")
        //console.log(vehiculos)
    }
} 
bienvenido()
//--------------------------------------------------------------------------------
// fIN solicitar al usuario ingresar nueva version
//--------------------------------------------------------------------------------


//--------------------------------------------------------------------------------
// Inicio calcular iva
//--------------------------------------------------------------------------------
//FUNCIONES CON FUNCIÓN COMO PARÁMETRO -- FOREACH
vehiculos.forEach((versionvh) => {
let iva = 1.21
return (versionvh.precio *= iva)
})
console.log(vehiculos);

//--------------------------------------------------------------------------------
// Termino calcular iva
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
//SORT: ORDENAR ARRAY DE OBJETOS POR PROPIEDAD
//--------------------------------------------------------------------------------
//Ordenar por dato numérico
console.log("****ordenar versiones por precio****")
 const ordenXPrecio = vehiculos.sort((a, b) => a.precio - b.precio)
 console.log(ordenXPrecio)



//Ordenar por cadena de string
console.log("****ordenar versiones por modelos****") 
const ordenarXmodelo = vehiculos.sort((a, b) => {
   if (a.modelo > b.modelo) {
     return 1
   } else if (a.modelo < b.modelo) {
     return -1
   }
 })
 console.log(ordenarXmodelo)


//--------------------------------------------------------------------------------
//MAP
//--------------------------------------------------------------------------------
 const modelosmazda = vehiculos.map((versionvh) => {
   return versionvh.marca
 })
 console.log(modelosmazda)

 const newvehiculos = vehiculos.map((versionvh) => {
   const nuevaversionvh = {
     autor: versionvh.marca,
     titulo: versionvh.modelo,
     año: versionvh.version,
     precio: versionvh.precio,
     color: versionvh.color,
     stock: 100,
   }
   return nuevaversionvh
 })
 console.log(newvehiculos)
//--------------------------------------------------------------------------------
//termino MAP
//--------------------------------------------------------------------------------