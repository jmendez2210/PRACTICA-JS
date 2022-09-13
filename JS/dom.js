// ========== DOM =======


const containervehiculospeugeot = document.querySelector('#contenedor-vehiculos-peugeot')
const Containermodal = document.querySelector('#modalContactForm')
const actualizarmodelo = document.querySelector('#agregarmodelomodal')
let guardarformvh = localStorage.getItem('guardarformvh')

// const peugeot3008 = modelo3008[0]

/*RENDERIZAR COTIZADOR DE VEHICULOS*/
modelo3008.forEach((peugeot3008) => {

    const div = document.createElement('div')
    div.className = "vehiculospeugeot"
    div.innerHTML = `
    <div class="card" style="width: 20rem;">
    <img src=${peugeot3008.img} alt="...">
    <div class="card-body">
        <h5 class="card-title text-center">${peugeot3008.modelo}</h5>
        <p class="card-text text-center">${peugeot3008.version}</p>
        <p class="card-text text-center"><b>Precio:</b> $${peugeot3008.precio}</p>
    </div>
    <!-- INICIO FOOTER MODAL formulario contacto -->
    <div class="card-footer ">
        <!-- INICIO MODAL AUTO -->
        <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <!-- INICIO MODAL CONTENIDO -->
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <h4 class="modal-title w-100 font-weight-bold">Usted esta Cotizando</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <!-- MODAL DESCRIPCION AUTO -->
                    <div class="modal-body mx-3">
                        <div id="agregarmodelomodal" class="md-form text-center" style="width: auto;">
                        </div>
                        <form class="" id="formulario">
                            <!-- INGRESAR NOMBRE -->
                            <div class="form-group md-form mb-5" id="grupo__nombre">
                                <i class="fas fa-user prefix grey-text"></i>
                                <label class="formulario__label" data-error="wrong" data-success="right"
                                    for="form34">Nombre</label>
                                <input type="text" class="form-control formulario__input" name="nombre"
                                    id="nombre" placeholder="Nombre">
                                <i class="formulario__validacion-estado fa-solid fa-circle-xmark"></i>
                                <p class="formulario__input-error">Ingrese solo su Nombre</p>
                            </div>
                            <!-- INGRESAR APELLIDO -->
                            <div class="form-group  md-form mb-5" id="grupo__apellido">
                                <i class="fas fa-user prefix grey-text"></i>
                                <label class="formulario__label" data-error="wrong" data-success="right"
                                    for="form35">Apellido</label>
                                <input type="text" class="form-control formulario__input" name="apellido"
                                    id="apellido" placeholder="Apellido">
                                <i class="formulario__validacion-estado  fa-solid fa-circle-xmark"></i>
                                <p class="formulario__input-error">Ingrese solo su Apellido</p>
                            </div>
                            <!-- INGRESAR EMAIL -->
                            <div class="form-group md-form mb-5" id="grupo__email">
                                <i class="fas fa-envelope prefix grey-text"></i>
                                <label class="formulario__label">Email</label>
                                <input type="email" class="form-control formulario__input" name="email"
                                    id="email" placeholder="example@mail.cl">
                                <i class="formulario__validacion-estado fa-solid fa-circle-xmark"></i>
                                <p class="formulario__input-error">Ingrese un correo valido</p>
                            </div>
                            <!-- INGRESAR TELEFONO -->
                            <div class="form-group  lg-form mb-5" id="grupo__telefono">
                                <i class="fas fa-phone prefix grey-text"></i>
                                <label class="formulario__label">Telefono</label>
                                <input type="tel" class="form-control formulario__input" name="telefono"
                                    id="telefono" placeholder="+56 9 1234 1234">
                                <i class="formulario__validacion-estado fa-solid fa-circle-xmark"></i>
                                <p class="formulario__input-error">Ingrese un numero telefonico valido</p>
                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                <div id="formulario__mensaje" class="alert alert-danger formulario__mensaje col"
                                    role="alert">
                                    <p><i class="fa-solid fa-triangle-exclamation"></i><b> Error:</b> Por favor ingresar
                                        los datos del formulario correctamente.</p>
                                </div>
                                <div id="formulario__mensaje" class="alert alert-danger formulario__mensaje col"
                                    role="alert">
                                    <p><i class="fa-solid fa-triangle-exclamation"></i><b> Error:</b> Por favor ingresar
                                        los datos del formulario correctamente.</p>
                                </div>
                                <div class="form-group formulario__grupo-btn-enviar col">
                                    <button id="btncotizar" type="submit" class="btn btn-outline-dark ">Enviar
                                        Cotizar</button>

                                    <div class="alert alert-success formulario__mensaje_exitoso"
                                        id="formulario__mensaje_exitoso" role="alert">
                                        <p id="texto-confirmacion">¡Se ha enviado exitosamente su cotizacion!</p>
                                    </div>
                                </div>
                            </div>
                         </form>
                    </div>

                </div>
                <!-- TERMINO MODAL CONTENIDO -->
            </div>
        </div>
        <!-- TERMINO MODAL AUTO -->
        <div class="text-center">
            <button id="cot-${peugeot3008.id}" type="submit" class="btn btn-outline-dark" data-toggle="modal"
                data-target="#modalContactForm">Cotizar
                <i class="fas fa-paper-plane-o ml-1"></i></button>
        </div>
    </div>
    <!-- Termino FOOTER MODAL formulario contacto -->
</div>
 `
    containervehiculospeugeot.append(div)

    /* recuperar boton para cotizar modelo*/
    const btnagregarmodelo = document.querySelector(`#cot-${peugeot3008.id}`)

    btnagregarmodelo.addEventListener('click', () => {
        agregarmodelo3008(peugeot3008.id)

        //console.log   (btnagregarmodelo)
    })

})
/*Agregar modelo al modal */
const actualizarmodal = []

const agregarmodelo3008 = (id) => {

    const peugeot3008 = modelo3008.find((pgt3008) => pgt3008.id === id)
    // console.log (peugeot3008)

    const agregarmodelo = document.querySelector('#agregarmodelomodal')

    const div = document.createElement('div')
    div.className = "agregarmodelomodal"
    div.innerHTML = `        
                                 <div class="md-form text-center" style="width: auto;">
                                   <img src=${peugeot3008.img} class="card-img-top" alt="...">
                                   <div class="">
                                     <h5 class="">${peugeot3008.modelo}</h5>
                                     <p class="">${peugeot3008.version}</p>  
                                     <p class="">$${peugeot3008.precio}</p>            
                                   </div>
                                 </div>
                                   `
    actualizarvhmodal()
    agregarmodelo.append(div)

    console.log   (peugeot3008 )

    /*Para almacenar la informacion en el local storage*/
    localStorage.setItem('guardarform', JSON.stringify(formulariocontacto) )
    localStorage.setItem('guardarformvh', JSON.stringify(peugeot3008) )



}

const actualizarvhmodal = (id) => {
    const peugeot3008 = modelo3008.reduce((pgt3008) => pgt3008.id === id)
    //console.log   (peugeot3008 + " nuevo modelo")
    if (peugeot3008 === true) {
        const agregarmodelo = document.querySelector('#agregarmodelomodal')

        const div = document.createElement('div')
        div.className = "agregarmodelomodal"
        agregarmodelo.innerHTML = ""
        agregarmodelo.append(div)
    }
    
}
