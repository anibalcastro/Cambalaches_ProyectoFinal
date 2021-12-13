
/***************************************************** */

/**
 * Muestra al detalle el producto seleccionado.
 */
function mostrarDetalleProducto(){
    //Obtiene el arrglo del localstorage
    const dbCambalache = JSON.parse(localStorage.getItem('DatosCambalaches'));
    //Obtiene el id del cambalache
    const idCambalache = localStorage.getItem('MostrarCambalache');
    //Inicializamos la variable que tendrá el html
    let cambalaches = "";

    //Recorremos el arrelo dbCambalache
    dbCambalache.forEach((cambalache) => {
        
        if (cambalache.id == idCambalache){
            cambalaches += `
            <!--Contiene la imagen del producto-->
            <div class="contenedor_imagen">
                <div class="marco">
                    <img id="urlImagen" src="${cambalache.imagen}"
                        alt="montanna">
                </div>
            </div>
            <!--Información del vendedor descripcion del producto y lo que ofrece-->
            <div class="info_vendedor">
                <h1 id="titulo" class="titulo">${cambalache.titulo}</h1>
                <p  class="propietario">ofrecido por: <a id="propietario" href="#">${cambalache.publicado}</a></p>
                <br>
                <div class="linea_media"></div>
    
                <h4>DESCRIPCIÓN</h4>
                <p id="descripcion_cambalache" class="txt_descripcion">
                    ${cambalache.description}
                </p>
    
                <h4>BUSCO</h4>
                <p id="busco" class="txt_busco">${cambalache.busco}</p>
                     
                <div class="linea_corta"></div>
                <br>
                <button id="btn_agregar" class="btn_agregar">Agregar</button>
            </div>`

            //Agregamos al id detalle lo que sale en cambalaches.
            document.getElementById("detalle").innerHTML =  cambalaches;
        }
    });
}

/***************************************************** */

mostrarDetalleProducto();