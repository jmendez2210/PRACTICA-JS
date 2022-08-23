const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const formulariocontacto = []

let guardarform = localStorage.getItem('guardarform')

const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    testdrive1: /^[si]$/,
    testdrive2: /^[no]$/,
    modocontacto1: /^[opcion1]$/,
    modocontacto2: /^[opcion2]$/,
}
/*objeto creado para validacion de campos*/
const campos = {
	nombre: false,
	apellido: false,
	email: false,
	telefono: false,
    desicioncompra: false,
    testdrive1: false,
    testdrive2: false,
    modocontacto1: false,
    modocontacto2: false
}






/*inicio validacion de campos en el formulario*/
const validarFormulario = (e) => {

	switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "apellido":
                validarCampo(expresiones.apellido, e.target, 'apellido');
            break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
        case "desicioncompra":
			validarCampo(expresiones.desicioncompra, e.target, 'desicioncompra');
		break;
        case "testdrive1":
			validarCampo(expresiones.testdrive1, e.target, 'testdrive1');
		break;
        case "modocontacto1":
			validarCampo(expresiones.modocontacto1, e.target, 'modocontacto1');
		break;
        case "modocontacto2":
			validarCampo(expresiones.modocontacto2, e.target, 'modocontacto2');
		break;
        
	}
    
}


const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check'); 
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keydown', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
/*termino validacion de campos en el formulario*/

/*-----------------------------------------------------------------*/
// EVENTOS DE FORMULARIO submit
/*-----------------------------------------------------------------*/

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const nombre = inputnombre.value
        const apellido = inputapellido.value
        const email = inputemail.value
        const telefono = inputtelefono.value
        const desicioncompra = inputdesicioncompra.value
        const testdrive1 = inputtestdrive1.value
        const testdrive2 = inputtestdrive2.value
        const modocontacto1 = inputmodocontacto1.value
        const modocontacto2 = inputmodocontacto2.value
    
    
        const prospecto = {
            nombre: nombre, 
            apellido: apellido, 
            email: email,
            telefono: telefono,
            desicioncompra: desicioncompra,
            testdrive1: testdrive1,
            testdrive2: testdrive2,
            modocontacto1: modocontacto1,
            modocontacto2: modocontacto2
        }
        formulariocontacto.push(prospecto)
        /*Para almacenar la informacion en el local storage*/
        //localStorage.setItem('guardarform',formulariocontacto)
        localStorage.setItem('guardarform', JSON.stringify(formulariocontacto) )
        // localStorage.setItem('prospecto',nombre)
        // localStorage.setItem('prospecto',apellido)
        // localStorage.setItem('prospecto',email)

    
        /* MENSAJE DE VALIDACION FORMULARIO*/
        // const terminos = document.getElementById('terminos');
        if(campos.nombre && campos.apellido && campos.email && campos.telefono ){
            formulario.reset();
    
            document.getElementById('formulario__mensaje_exitoso').classList.add('formulario__mensaje-exito-activo');

            //RECUPERAR DATOS DEL LS...
            document.querySelector('#texto-confirmacion').innerText = `¡Se ha enviado exitosamente su cotizacion! a ${nombre} ${apellido}, email: ${email}`

            const datoscontacto = JSON.parse( localStorage.getItem('guardarform') )
            console.log(datoscontacto)

            setTimeout(() => {
                document.getElementById('formulario__mensaje_exitoso').classList.remove('formulario__mensaje-exito-activo');
            }, 10000);
    
            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario__grupo-correcto');


            });
        } else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
            }, 3000);
        }

    
    });

