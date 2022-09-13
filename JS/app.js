
/* conexion API */
const vehiculosstartwarContainer = document.querySelector('#vehiculosstartwar')
// const btnSiguiente = document.querySelector('#btnSiguiente')
// const btnAnterior = document.querySelector('#btnAnterior')

let request = "http://swapi.dev/api/vehicles/4/"
console.log (request)

fetch ("http://swapi.dev/api/vehicles/4/") 
         .then ((res)=> {
             return res.json ()
             //console.log(res)
         }) 
         .then((data)=> {
             console.log(data)
         })

 const pedirvhstwars = () => {

     fetch(`http://swapi.dev/api/vehicles/4/`)
         .then((resp) => resp.json())
         .then((vehiculosstartwar) => {
             console.log(vehiculosstartwar)
   
             vehiculosstartwarContainer.innerHTML = `
                             <h3>${vehiculosstartwar.name}</h3>
                             <p>${vehiculosstartwar.model}</p>
                             <p>${vehiculosstartwar.vehicle_class}</p>
                     `
         })
         .catch((err) => {
             // Swal.fire({
             //     title: 'Error',
//             //     icon: 'error'
//             // })
         })
 }



pedirvhstwars()





