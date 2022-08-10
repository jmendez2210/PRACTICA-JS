

// solicitud de datos usuarios
function ingreseNombre (){
    // Ingrese Nombre
    let ingreseNombre = prompt('Ingrese nombre y Apellido','Jorge Mendez');
    return ingreseNombre
}


function ingreseCarrera (){
    // Ingrese Carrera
    let ingreseCarrera = prompt('Ingrese Carrera','FullStack JavaScripts');
    return ingreseCarrera
}

function cantidadnotas (){
    
    // Ingrese Ramo1
    let cantnotas = Number (prompt('Ingrese cantidad de Notas: ',"2"));
    return cantnotas
}

// llamado datos de usuario
ingreseNombre ();
ingreseCarrera ();
cantidadnotas ();

//ingreso de notas
function Ingresenotas (){
    const nota1 = Number(prompt("Ingrese su Nota1: " ,'8'));
    const nota2 = Number(prompt("Ingrese su Nota2: " ,'8'));

    // console.log(nota1)
    // console.log(nota2)
    // console.log(suma)
    return Ingresenotas
}
Ingresenotas ();

//calcula promedio
function suma (nota1 , nota2) {
        return (nota1 + nota2) 
    }
let promedio = suma / cantidadnotas;
 console.log (promedio)
// console.log (nota2)
// console.log (suma)


// valida promedio
function validapromedio (){
    if (promedio >= 7){
        alert (ingreseNombre + " su promedio es:" + "[" + promedio +"]" + 
        ", ha aprobado el curso!!!" + " en la Carrera de " + ingreseCarrera);
    }else{
        alert (ingreseNombre + " su promedio es:" + "[" + promedio +"]" + 
        ", ha reprobado el curso!!!" + " en la Carrera de " + ingreseCarrera);
    }
    return validapromedio
}

validapromedio();