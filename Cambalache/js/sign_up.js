
/**REGISTRO DE USUARIO**/




/********************************************************* */

/**
 * Obtiene los datos ingresados en la web
 */
function obtenerDatos(){
    
    let nombre = document.getElementById("first_name").value;
    let apellido = document.getElementById("last_name").value;
    let direccion = document.getElementById("adress").value;
    let direccion2 = document.getElementById("adress2").value;
    let pais = document.getElementById("country").value;
    let ciudad = document.getElementById("city").value;
    let email = document.getElementById("email_name").value;
    let password = document.getElementById("password").value;


    //Llamada de la función
    guardarDatos(nombre, apellido, direccion, direccion2, pais, ciudad, email, password);

}

/********************************************************* */

/**
 * Guarda los datos en el localstorage
 */
function guardarDatos(nombre, apellido, direccion, direccion2, pais, ciudad, email, password){
    
    let jsonPersonales = JSON.parse(localStorage.getItem('DatosPersonales'));

    if (!jsonPersonales){
        jsonPersonales = [];
    }

    //console.log(jsonPersonales);

    let consecutivo = jsonPersonales.length + 1;

    //console.log("El consecutivo es: ", consecutivo);

    const nuevo_ingreso = 
        {
            "id" : consecutivo,
            "nombre" : nombre,
            "apellido" : apellido,
            "direccion1" : direccion,
            "direccion2" : direccion2,
            "pais" : pais,
            "city" : ciudad,
            "email" : email,
            "password" : password
        };

    //console.log("El nuevo ingreso: ", nuevo_ingreso);

    jsonPersonales.push(nuevo_ingreso);


    //console.log("Nuevos Datos", jsonPersonales);

    localStorage.setItem('DatosPersonales',JSON.stringify(jsonPersonales));

    let nombreRetorno = (nombre + " " + apellido);
    guardarRegistroLogin(nombreRetorno);
    direccionarDashboard();
}

/********************************************************* */

/**
 * Redirecciona al dashboard
 */
function direccionarDashboard(){
    reset();
    window.alert("Redirigendo al dashboard.")
    window.location.href = "http://isw512_cambalaches.com/ventanas_cambalaches/dashboard.html";
}

/********************************************************* */

/**
 * Redireccionando al inicio
 */
function direccionarInicio(){
    reset();
    window.alert("Redirigendo al inicio.")
    window.location.href = "http://isw512_cambalaches.com/";
}

/********************************************************* */

/**
 * Limpia los campos
 */
 function reset(){
     document.getElementById("first_name").value = "";
     document.getElementById("last_name").value = "";
     document.getElementById("adress").value = "";
     document.getElementById("adress2").value = "";
     document.getElementById("country").value = "";
     document.getElementById("city").value = "";
     document.getElementById("email_name").value = "";
     document.getElementById("password").value = "";
}



/**
 * Retorna el nombre que se registro
 * @returns 
 */
 function guardarRegistroLogin(nombre){
   
    let jsonIngresos = JSON.parse(localStorage.getItem('IngresoCambalaches'));

    if (!jsonIngresos){
        jsonIngresos = [];
    }

    //console.log(jsonIngresos);

    const nuevoIngresoCambalache = 
        {
            "nombre" : nombre
        };

    //console.log("El nuevo ingreso: ", nuevo_ingreso);

    jsonIngresos.push(nuevoIngresoCambalache);


    //console.log("Nuevos Datos", jsonPersonales);

    localStorage.setItem('IngresoCambalaches',JSON.stringify(jsonIngresos));
}