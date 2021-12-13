
/*************************************************************** */

/**
 * Cargar categorias con imagenes
 */
function cargarCategorias(){
    
    let img_1 = document.getElementById("img_1");
    img_1.src = 'https://gmedia.playstation.com/is/image/SIEPDC/ps4-product-thumbnail-01-en-14sep21?$facebook$';
    let cat_1 = document.getElementById("categoria_1");
    cat_1.innerHTML= ("Electronicos");

    let img_2 = document.getElementById("img_2");
    img_2.src = 'https://www.lg.com/cac/images/lavadoras-y-secadoras/md07532284/gallery/D-01.jpg';
    let cat_2 = document.getElementById("categoria_2");
    cat_2.innerHTML= ("Hogar");

    let img_3 = document.getElementById("img_3");
    img_3.src = 'https://th.bing.com/th/id/OIP.MDryR99L5x-wI1fRaq-2TQHaHa?pid=ImgDet&rs=1';
    let cat_3 = document.getElementById("categoria_3");
    cat_3.innerHTML= ("Deporte")
}

/*************************************************************** */

/**
 * Carga los cambalaches recientes
 */
function cargarCambalachesRecientes(){
    
    let jsonCambalaches = JSON.parse(localStorage.getItem('DatosCambalaches'));
    
    let tamannoCambalaches = jsonCambalaches.length;

    let reciente_1 = tamannoCambalaches - 2;
    let reciente_2 = tamannoCambalaches - 1;

    console.log(reciente_1);
    console.log(reciente_2);

    let htmlReciente = `<h1 class="titulo">Cambalaches Recientes</h1>
    <div class="contenedor_imagenes_1">
        <div class="icon"><img src="/icon/icons8-back-to-48.png" alt=""></div>
        <div class="imagen_1">
            <div class="marco_horizontal" onclick="detalle(${jsonCambalaches[reciente_2].id})">
                <img id="img_r1" src="${jsonCambalaches[reciente_2].imagen}" alt="cambalache_reciente">
            </div>
            <h4 id="txt_r1">${jsonCambalaches[reciente_2].titulo}</h4>
        </div>

        <div class="imagen_1">
            <div class="marco_horizontal onclick="detalle(${jsonCambalaches[reciente_1].id})"">
                <img id="img_r2" src="${jsonCambalaches[reciente_1].imagen}" alt="cambalache_reciente">
            </div>
            <h4 id="txt_r2">${jsonCambalaches[reciente_1].titulo}</h4>
        </div>
        <div class="icon"><img src="/icon/icons8-next-page-48.png" alt="" ></div>
    </div> `

    document.getElementById("contenedor_3").innerHTML = htmlReciente;
    
}

/*************************************************************** */

/**
 * Datos quemados
 */
function cargarLocalStorage(){

    let jsonDatosPersonales = [
        {   "id":0,
            "nombre":"Anibal",
            "apellido":"Castro",
            "direccion1":"Frente a la estación de bomberos",
            "direccion2": "50 metros sur",
            "pais":"Costa Rica",
            "city":"Fortuna",
            "email":"anibalcastro1515@gmail.com",
            "password":"1234"
        },
        {   "id":1,
            "nombre":"Allison",
            "apellido":"Brenes",
            "direccion1":"Barrio Dora",
            "direccion2": "50 metros del asilo",
            "pais":"Costa Rica",
            "city":"Fortuna",
            "email":"allisonledezma@gmail.com",
            "password":"1234"
        }
    ];

    let jsonDatosCambalaches = [
        {
            "id":0,
            "publicado":"Anibal Castro",
            "titulo":"Bola de voleibol",
            "description":"Bola de voleibol Mikasa",
            "busco":"Busco de una bicicleta o algo de mi interés recibo ofertas",
            "imagen": "https://media.nidux.net/pull/599/800/3365/117235_product_5a25e9bc59d58.jpg"
        },
        {
            "id":1,
            "publicado":"Anibal Castro",
            "titulo":"Acer Predator Helios",
            "description":"Computadora nueva, solo 2 meses de uso",
            "busco":"Busco de una bicicleta o algo de mi interés recibo ofertas",
            "imagen": "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/4/7/4710886059196_002.png"
        },
    ];

    localStorage.setItem("DatosPersonales", JSON.stringify(jsonDatosPersonales));
    localStorage.setItem("DatosCambalaches", JSON.stringify(jsonDatosCambalaches));
}

/*************************************************************** */

/**
 * 
 * @param {int} idCambalache 
 */
function detalle(idCambalache){
    localStorage.setItem("MostrarCambalache", idCambalache);
    window.alert("Redirigiendo para ver el detalle del producto");
    window.location.href = "http://isw512_cambalaches.com/ventanas_cambalaches/detalle_producto.html";
}


cargarCategorias();
cargarCambalachesRecientes();
