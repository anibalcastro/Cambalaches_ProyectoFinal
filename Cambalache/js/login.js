/**Inicio de sesion */

//------------------------------------------------------**


//------------------------------------------------------**

/**
 * valida existencia de los datos ingresados.
 */
function validarDatos(){
    const email = document.getElementById("inp_email").value;
    const password = document.getElementById("inp_password").value;

    const jsonPersonales = JSON.parse(localStorage.getItem('DatosPersonales'));
    let nombreLogin  = "";

    let valido = false;

    for (x of jsonPersonales){
        if (x.email === email && x.password === password){
            console.log("Email y constraseñas encontradas");
            nombreLogin = x.nombre + " " + x.apellido;
            guardarRegistroLogin(nombreLogin);
            valido = true;
            redireccionarDashboard();
            break;
        }
    }

    if (!valido) 
    {
       window.alert("Error usuario o contraseña invalidas")
    }
}

//------------------------------------------------------**

/**
 * Redirecciona al dashboard
 */
function redireccionarDashboard(){
    reset();
    window.alert("Redirigendo al dashboard.")
    window.location.href = "http://isw512_cambalaches.com/ventanas_cambalaches/dashboard.html";
}

//------------------------------------------------------**

/**
 * Redirecciona al inicio
 */
function redireccionInicio(){
    reset();
    window.alert("Redirigendo al inicio.")
    window.location.href = "http://isw512_cambalaches.com/";

}
//------------------------------------------------------**

function redireccionRegistro(){
    reset();
    window.alert("Redirigendo al registro.")
    window.location.href = "http://isw512_cambalaches.com/ventanas_cambalaches/sign_up.html";
}

//------------------------------------------------------**

/**
 * Limpia los campos
 */
function reset(){
    document.getElementById("inp_email").value = "";
    document.getElementById("inp_password").value = "";
}

//------------------------------------------------------**

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
