/**Dashboard */

/***************************************************/

/**
 * Redirecciona al html nuevo.html
 */
function redireccionarNuevoProducto(){
    window.alert("Redirigiendo para crear un cambalache");
    window.location.href = "http://isw512_cambalaches.com/ventanas_cambalaches/nuevo.html";
}

/***************************************************/


/**
 * Obtiene el nombre del ultimo logueado
 * 
 */
function nombreUsuario(){
    let jsonIngresos = JSON.parse(localStorage.getItem('IngresoCambalaches'));

    let nombre = "";

    for (x of jsonIngresos){
        nombre = x.nombre;
    }

    let nombreUsuario = document.getElementById("nombreUsuario");

    nombreUsuario.innerText = nombre;

    return nombre;
}

/***************************************************/

/**
 * Carga los cambalaches que son del usuario
 * con botones de editar y eliminar
 */
function cargarSusCambalaches(){
    
    const dbCambalaches = JSON.parse(localStorage.getItem('DatosCambalaches'));

    let contador = 1;
    let cambalaches1 = "";
    let cambalaches2 = "";
    let cambalaches3 = "";
    let cambalaches4 = "";
    let nombre =  nombreUsuario();
    
    //Creo las filas
    crearFila();


    // Agregar cambalaches al row.
    for (iterador of dbCambalaches){
     
        if (iterador.publicado == nombre){
               //Valido que sea igual a 3
            if (contador <= 3){
                cambalaches1 += `<div id="cambalache" class="col-4 col-sm-2" > <div class="marco" onclick="detalle(${iterador.id})"> <img id="imagen" src="${iterador.imagen}"> </div> <div class="descripcion">
                <button id="btnEditar" class="btnEditar" onclick = "editar(${iterador.id});">Editar</button> <button id="btnEliminar" class="btnEliminar" onclick = "eliminar(${iterador.id});">Eliminar</button> </div> </div>`;
                document.getElementById("row1").innerHTML = cambalaches1;
                contador += 1;
            }
            else if (contador <= 6){
                cambalaches2 += `<div id="cambalache" class="col-4 col-sm-2"> <div class="marco" onclick="detalle(${iterador.id})"> <img id="imagen" src="${iterador.imagen}"> </div> <div class="descripcion">
                <button id="btnEditar" class="btnEditar" onclick = "editar(${iterador.id});">Editar</button> <button id="btnEliminar" class="btnEliminar" onclick = "eliminar(${iterador.id});">Eliminar</button> </div> </div>`;
                document.getElementById("row2").innerHTML = cambalaches2;
                contador += 1;
        }
            else if (contador <= 9){
                cambalaches3  += `<div id="cambalache" class="col-4 col-sm-2" > <div class="marco" onclick="detalle(${iterador.id})"> <img id="imagen" src="${iterador.imagen}"> </div> <div class="descripcion">
                <button id="btnEditar" class="btnEditar" onclick = "editar(${iterador.id});">Editar</button> <button id="btnEliminar" class="btnEliminar" onclick = "eliminar(${iterador.id});">Eliminar</button> </div> </div>`;
                document.getElementById("row3").innerHTML = cambalaches3;
                contador += 1;
            }
            else if (contador <= 12){
                cambalaches4 += `<div id="cambalache" class="col-4 col-sm-2" > <div class="marco" onclick="detalle(${iterador.id})"> <img id="imagen" src="${iterador.imagen}"> </div> <div class="descripcion">
                <button id="btnEditar" class="btnEditar" onclick = "editar(${iterador.id});">Editar</button> <button id="btnEliminar" class="btnEliminar" onclick = "eliminar(${iterador.id});">Eliminar</button> </div> </div>`;
                document.getElementById("row4").innerHTML = cambalaches4;
                contador += 1;

            } 
        } 
    };
}

/***************************************************/


/**
 * Crea filas
 */
 function crearFila(){
    //Agregar el row al container.
    row = `<div id="${"row1"}" class="row"> </div> <div id="${"row2"}" class="row"> </div> <div id="${"row3"}" class="row"> </div> <div id="${"row4"}" class="row"> </div>`
    ;
    document.getElementById("container").innerHTML = row;
}

/***************************************************/

/**
 * elimina los cambalaches por medio del id
 * @param {int} cambalache 
 */
function eliminar(cambalache){
    const cambalaches = JSON.parse(localStorage.getItem('DatosCambalaches'));

    const guardarCambalaches = [];

    cambalaches.forEach((iterador) => {
        if (iterador.id != cambalache){
            guardarCambalaches.push(iterador);
        }
        else{

            window.alert("Camabalache " + iterador.titulo + " eliminado");
            console.log(iterador.id + "Eliminado");
        }
    });

    localStorage.setItem('DatosCambalaches', JSON.stringify(guardarCambalaches));

    cargarSusCambalaches();

}

/***************************************************/

/**
 * Redirecciona para editar el cambalache por medio
 * de un identificador 
 * @param {int} cambalache 
 */
function editar(cambalache){
    localStorage.setItem('editarCambalache', cambalache);
    window.location.href =  window.alert("Redirigiendo para editar su cambalache");
    window.location.href = "http://isw512_cambalaches.com/ventanas_cambalaches/nuevo.html";
}

/***************************************************/

/**
 * Redirecciona para ver el cambalache
 * @param {*} idCambalache 
 */
 function detalle(idCambalache){

    localStorage.setItem("MostrarCambalache", idCambalache);
    window.alert("Redirigiendo para ver el detalle del producto");
    window.location.href = "http://isw512_cambalaches.com/ventanas_cambalaches/detalle_producto.html";

}


//Llama la función para colocar el nombre de usuario
nombreUsuario();
//Llama la funcion de cargar sus propio cambalaches
cargarSusCambalaches();