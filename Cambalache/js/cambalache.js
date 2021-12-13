

/***************************************************** */

/**
 * carga todos los cambalaches.
 */
function cargarCambalaches(){
    const dbCambalaches = JSON.parse(localStorage.getItem('DatosCambalaches'));

    let contador = 1;
    let cambalaches1 = "";
    let cambalaches2 = "";
    let cambalaches3 = "";
    let cambalaches4 = "";
    
    //Creo las filas
    crearFila();


    // Agregar cambalaches al row.
    for (iterador of dbCambalaches){
     
        

        //Valido que sea igual a 3
        if (contador <= 3){
            cambalaches1 += `<div id="cambalache" class="col-4 col-sm-2" onclick="detalle(${iterador.id})"> <div class="marco"> <img id="imagen" src="${iterador.imagen}"> </div> <div class="descripcion"> <p id="titulo" class="titulo_cambalache"> ${iterador.titulo} </p> <p id="propietario" class"propietario"> ${iterador.publicado} </p> </div> </div>`;
            document.getElementById("row1").innerHTML = cambalaches1;
            contador += 1;
        }
        else if (contador <= 6){
            cambalaches2 +=`<div id="cambalache" class="col-4 col-sm-2" onclick="detalle(${iterador.id})"> <div class="marco"> <img id="imagen" src="${iterador.imagen}"> </div> <div class="descripcion"> <p id="titulo" class="titulo_cambalache"> ${iterador.titulo} </p> <p id="propietario" class"propietario"> ${iterador.publicado} </p> </div> </div>`;
            document.getElementById("row2").innerHTML = cambalaches2;
            contador += 1;
        }
        else if (contador <= 9){
            cambalaches3 += `<div id="cambalache" class="col-4 col-sm-2" onclick="detalle(${iterador.id})"> <div class="marco"> <img id="imagen" src="${iterador.imagen}"> </div> <div class="descripcion"> <p id="titulo" class="titulo_cambalache"> ${iterador.titulo} </p> <p id="propietario" class"propietario"> ${iterador.publicado} </p> </div> </div>`;
            document.getElementById("row3").innerHTML = cambalaches3;
            contador += 1;
        }
        else if (contador <= 12){
            cambalaches4 +=`<div id="cambalache" class="col-4 col-sm-2" onclick="detalle(${iterador.id})"> <div class="marco"> <img id="imagen" src="${iterador.imagen}"> </div> <div class="descripcion"> <p id="titulo" class="titulo_cambalache"> ${iterador.titulo} </p> <p id="propietario" class"propietario"> ${iterador.publicado} </p> </div> </div>`;
            document.getElementById("row4").innerHTML = cambalaches4;
            contador += 1;

        } 
    };
}

/***************************************************** */

/**
 * Crea filas
 */
function crearFila(){
    //Agregar el row al container.
    row = `<div id="${"row1"}" class="row"> </div> <div id="${"row2"}" class="row"> </div> <div id="${"row3"}" class="row"> </div> <div id="${"row4"}" class="row"> </div>`
    ;
    document.getElementById("container").innerHTML = row;
}

/***************************************************** */

/**
 * Redirecciona para ver el cambalache
 * @param {*} idCambalache 
 */
function detalle(idCambalache){

    localStorage.setItem("MostrarCambalache", idCambalache);
    window.alert("Redirigiendo para ver el detalle del producto");
    window.location.href = "http://isw512_cambalaches.com/ventanas_cambalaches/detalle_producto.html";

}


//Carga 
cargarCambalaches();
