let email = document.getElementsByName("email")[0];

email.addEventListener("keyup", function() {
    let contenido = document.getElementsByName("email")[0].value;
    document.getElementsByName("remail")[0].value = contenido;
});

let aficion1 = document.getElementsByName("af1")[0];
let aficion2 = document.getElementsByName("af2")[0];
let aficion3 = document.getElementsByName("af3")[0];

aficion1.addEventListener("click", function() {
    if(aficion1.checked) {
        document.getElementsByTagName("textarea")[0].value += aficion1.value + "\n";
    } else {
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(aficion1.value + "\n", "");
    }
});

aficion2.addEventListener("click", function() {
    if(aficion2.checked) {
        document.getElementsByTagName("textarea")[0].value += aficion2.value + "\n";
    } else {
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(aficion2.value + "\n", "");
    }
});

aficion3.addEventListener("click", function() {
    if(aficion3.checked) {
        document.getElementsByTagName("textarea")[0].value += aficion3.value + "\n";
    } else {
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(aficion3.value + "\n", "");
    }
});

let botonEnviar = document.getElementsByTagName("input")[16]; 

botonEnviar.addEventListener("click", function(evt) {
    evt.preventDefault();
    let nombre = document.getElementsByName("nombre")[0].value;
    let clave = document.getElementsByName("clave")[0].value;
    let repclave = document.getElementsByName("rclave")[0].value;
    let respuesta = document.getElementsByName("respuesta")[0].value;
    let edad = document.getElementsByName("edad")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let captcha = document.getElementsByTagName("input")[13].value;
    let pregunta = document.getElementsByName("pregunta")[0].value;
    let r1 = document.getElementsByName("sexo")[0];
    let r2 = document.getElementsByName("sexo")[1];
    let r3 = document.getElementsByName("sexo")[2];
    let condiciones = document.getElementsByTagName("input")[14];
    let estaVacio = vacio(nombre, clave, repclave, respuesta, edad, email, captcha);

    if(!estaVacio) {
        validarClave(clave);
        validarRepClave(clave, repclave);
        validarNombreClave(nombre, clave);
        validarPregunta(pregunta);
        validarRespuesta(respuesta);
        validarRadio(r1, r2, r3);
        validarEdad(edad);
        validarSeguridad(captcha);
        validarCondiciones(condiciones);

        if(validarClave(clave) && validarRepClave(clave, repclave) && validarNombreClave(nombre, clave)
        && validarPregunta(pregunta) && validarRespuesta(respuesta) && validarRadio(r1,r2,r3) 
        && validarEdad(edad) && validarSeguridad(captcha) && validarCondiciones(condiciones)) {
            alert("Enviado correctamente")
            //Aquí se haría el envío del formulario
        }

    } else {
        let error = document.createElement("p");
        let texto = document.createTextNode("ERROR: Todos los campos deben estar completos");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.getElementById("errores").appendChild(error);
    }
});

function vacio(nombre, clave, repclave, respuesta, edad, email, captcha) {
    if(nombre == "" || clave == "" || repclave == "" || respuesta == "" || edad == "" || email == "" || captcha == "") {
        return true;
    } 
        return false;
}

function validarClave(clave) {
    let long = clave.length;
    if(long < 8) {
        let error = document.createElement("p");
        let texto = document.createTextNode("ERROR: La clave debe tener al menos 8 caracteres");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.getElementById("errores").appendChild(error);
        return false;
    } else {
        return true;
    }
}

function validarRepClave(clave, repclave) {
    if(clave == repclave) {
        return true;
    } else {
        let error = document.createElement("p");
        let texto = document.createTextNode("ERROR: La clave no coincide con la repetición");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.getElementById("errores").appendChild(error);
        return false;
    }
}

function validarNombreClave(nombre, clave) {
    if(nombre != clave) {
        return true;
    } else {
        let error = document.createElement("p");
        let texto = document.createTextNode("ERROR: El nombre no puede ser igual a la clave");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.getElementById("errores").appendChild(error);
        return false;
    }
}

function validarPregunta(pregunta) {
    if(pregunta == 0) {
        let error = document.createElement("p");
        let texto = document.createTextNode("ERROR: La pregunta debe ser seleccionada");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.getElementById("errores").appendChild(error);
        return false;
    } else {
        return true;
    }
}

function validarRespuesta(respuesta) {
    if(respuesta.length < 6) {
        let error = document.createElement("p");
        let texto = document.createTextNode("ERROR: La respuesta debe tener mínimo 6 caracteres");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.getElementById("errores").appendChild(error);
        return false;
    } else {
        return true;
    }
}

function validarRadio(r1, r2, r3) {
    if(r1.checked || r2.checked || r3.checked) {
        return true;
    } else {
        let error = document.createElement("p");
        let texto = document.createTextNode("ERROR: Marcar al menos una opción en sexo");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.getElementById("errores").appendChild(error);
        return false;
    }
}

function validarEdad(edad) {
    if(edad<3 || edad > 99 || isNaN(edad)) {
        let error = document.createElement("p");
        let texto = document.createTextNode("ERROR: La edad debe estar comprendida entre 3 y 99 y ser un número");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.getElementById("errores").appendChild(error);
        return false;
    } else {
        return true;
    }
}

function validarSeguridad(captcha) {
    if(captcha == "QGPHJD") {
        return true;
    } else {
        let error = document.createElement("p");
        let texto = document.createTextNode("ERROR: El texto de la imagen de seguridad no es correcto");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.getElementById("errores").appendChild(error);
        return false;
    }
}

function validarCondiciones(condiciones) {
    if(condiciones.checked) {
        return true;
    } else {
        let error = document.createElement("p");
        let texto = document.createTextNode("ERROR: Las condiciones no se han aceptado");
        error.setAttribute("id", "errores");
        error.appendChild(texto);
        document.getElementById("errores").appendChild(error);
        return false;
    }
}


