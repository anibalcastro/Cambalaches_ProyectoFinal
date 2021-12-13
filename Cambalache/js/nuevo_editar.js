
/******************************************************/

function obtenerDatos(){

    let valido = validarCampos();

    if (!valido){
        //Obtener titulo
        let titulo = document.getElementById('nombre_producto').value;
        //Obtener descripcion
        let descripcion = document.getElementById('descripcion_producto').value;
        //Obtener url
        let urlImagen = document.getElementById('url_producto').value;
        //Obtener busco
        let busco = document.getElementById('busco_producto').value;

        //Obtenemos lo que hay en el localstorage.
        let editar = localStorage.getItem('editarCambalache');

        if(editar >= 0){
            //Llamamos la funcion 
            guardarEdicionCambalache(titulo, descripcion, urlImagen, busco);
        }
        else{
            //llamamos a la funcion
            guardar(titulo,descripcion,urlImagen,busco);    
        }

        
    }
    
}

/******************************************************/

function validarDescripcion(){
    let descripcion = document.getElementById('descripcion_producto').value;

    //Validar la longitud 
    console.log(descripcion.length);

    if (descripcion.length > 300){
        window.alert("Error la descripción no puede ser más de 300 letras.");
    }
}

/******************************************************/

function validarBusco(){
    let busco = document.getElementById('busco_producto').value;

    //Validar longitud
    if (busco.length > 300){
        window.alert("Error la descripción no puede ser más de 300 letras.");
    }
}

/******************************************************/

/**
 * guardamos en el localstorage
 * 
 * @param {string} titulo 
 * @param {string} descripcion 
 * @param {string url} url 
 * @param {string} busco 
 */
function guardar(titulo, descripcion, url, busco){
    //Obtengo lo del localstorage
    let bdCambalache = JSON.parse(localStorage.getItem('DatosCambalaches'));
    
    //Obtengo usuario
    let usuario = nombreUsuario();

    //Obtengo id
    let identificador = obtenerIdentificador()


    //lo declaro como arreglo
    if (!bdCambalache){
        bdCambalache = [];
    }

    //arreglo que agregaremos
    let nuevoCambalache = {
        id : identificador,
        titulo : titulo,
        description : descripcion,
        publicado : usuario,
        imagen : url,
        busco : busco
    };

    //lo agregamos al arreglo
    bdCambalache.push(nuevoCambalache);

    //lo insertamos en el localstorage
    localStorage.setItem("DatosCambalaches", JSON.stringify(bdCambalache));

    //redireccionamos al dashboard
    redireccionarDashboard();
}

/******************************************************/

/**
 * funcion para asignar identificador
 * @returns identificador
 */
function obtenerIdentificador(){
    //Obtengo lo del localstorage
    let bdCambalache = JSON.parse(localStorage.getItem('DatosCambalaches'));

    let identificador;

    //Obtengo el ultimo id
    for(x of bdCambalache){
        identificador = x.id;
    }

    //Sumo 1 al identificador
    identificador += 1;

    //Retorno el identificador
    return identificador;
}

/******************************************************/

/**
 * Redirecciona al dashboard
 */
 function redireccionarDashboard(){
    reset();
    localStorage.setItem('editarCambalache', "No hay que agregar");
    window.alert("Redirigendo al dashboard.")
    window.location.href = "http://isw512_cambalaches.com/ventanas_cambalaches/dashboard.html";
}

/******************************************************/

/**
 * Limpiar campos
 */
function reset(){
     //Limpiar titulo
     let titulo = document.getElementById('nombre_producto').value = "";
     //Limpiar descripcion
     let descripcion = document.getElementById('descripcion_producto').value = "";
     //Limpiar url
     let urlImagen = document.getElementById('url_producto').value = "";
     //Limpiar busco
     let busco = document.getElementById('busco_producto').value = "";
}

/******************************************************/

/**
 * Valida que no hayan espacios vacios.
 */
function validarCampos(){
    //Obtener titulo
    let titulo = document.getElementById('nombre_producto').value;
    //Obtener descripcion
    let descripcion = document.getElementById('descripcion_producto').value;
    //Obtener url
    let urlImagen = document.getElementById('url_producto').value;
    //Obtener busco
    let busco = document.getElementById('busco_producto').value;

    let valido = false;

    if (titulo == "" || descripcion == "" || urlImagen == "" || busco == "" ) {
        window.alert("Error hay espacios vacios");
        valido = true;
    }

    console.log(valido);

    return valido;
}

/******************************************************/


/**
 * Funcion que obtiene el ultimo ingreso de la plataforma
 * @returns nombrUsuario
 */
function nombreUsuario(){
    let jsonIngresos = JSON.parse(localStorage.getItem('IngresoCambalaches'));

    let nombre = "";

    for (x of jsonIngresos){
        nombre = x.nombre;
    }

   return nombre;
}

/******************************************************/

/**
 * Muestra los datos que se deben editar en los input
 * 
 */
function editarCambalache(){
    const dbCambalache = JSON.parse(localStorage.getItem('DatosCambalaches'));
    const idCambalache = localStorage.getItem('editarCambalache');
    let seEdita;

    dbCambalache.forEach((iterador) => {
        if (iterador.id == idCambalache){
            //Valor titulo
            document.getElementById('nombre_producto').value = iterador.titulo;
            console.log(iterador.titulo);
            //Obtener descripcion
            document.getElementById('descripcion_producto').value = iterador.description;
            console.log(iterador.titulo);
            //Obtener url
            document.getElementById('url_producto').value = iterador.imagen;
            console.log(iterador.titulo);
            //Obtener busco
            document.getElementById('busco_producto').value = iterador.busco;
            console.log(iterador.titulo);
            seEdita = true;
        }
    });
    
    return seEdita;
}

/******************************************************/

/**
 * guarda la edición
 * 
 * @param {string} titulo 
 * @param {string} descripcion 
 * @param {string} url 
 * @param {string} busco 
 */
function guardarEdicionCambalache(titulo, descripcion, url, busco){
    
    let bdCambalache = JSON.parse(localStorage.getItem('DatosCambalaches'));
    const idCambalache = localStorage.getItem('editarCambalache');

    const arregloEditado = bdCambalache.map((iterador) => {
        if (iterador.id == idCambalache){
            iterador.titulo = titulo,
            iterador.imagen = url,
            iterador.description = descripcion,
            iterador.busco = busco
        }
        return iterador;
    });

    localStorage.setItem("DatosCambalaches", JSON.stringify(arregloEditado));
    redireccionarDashboard();
}


editarCambalache();


