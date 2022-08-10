// //1.- Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.
// //SOLICITAR NUMERO A USUARIO
//  let tabla = Number( prompt("Por Favor Ingrese Numero"));

//  for ( tabla ; tabla <= 10; tabla++){
//      console.log(tabla)
//  }


// //2.- Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

//  let resultado = "";
//         //PEDIMOS LA CADENA POR TECLADO
//         let solicitud = prompt("Ingresar palabra: ");     

//         //MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
//         while(solicitud != "ESC" ){
//             alert("El usuario ingresó "+ solicitud);
//             //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
            
//             if (solicitud == "ESC") {
//                 //CONCATENAMOS SIN UTILIZAR GUIÓN
//                 solicitud = prompt("Ingresar otro dato");
//                 resultado = resultado + solicitud;
//             }
//             //SINÓ
//             else {
//                 //CONCATENAMOS CON GUIÓN
//                 break
//             }
            
//         }
// //3.- Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.   
// let numero = Number(prompt("Ingrese un numero"));
// let hola = Hola;
// for (i ; i<= numero ;  i++){
//     console.log (hola * numero) 
// }

for (let i = 1; i <= 20; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}


console.log("*** FIN DEL PROGRAMA ***")