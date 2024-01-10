let boton = document.getElementById("envio");

boton.addEventListener("click", function(evt){
    evt.preventDefault();
    let dni = document.getElementsByName("dni")[0].value;
    let nombre = document.getElementsByName("nombre")[0].value;
    let apellidos = document.getElementsByName("apellidos")[0].value;
    let fechaNacimiento = document.getElementsByName("fechaNacimiento")[0].value;
    let web = document.getElementsByName("WebPersonal")[0].value;
    let contrasena = document.getElementsByName("pass")[0].value;
    let estaVacio = vacio(dni, nombre, apellidos, fechaNacimiento, contrasena);
    console.log(web);
    if(!estaVacio){
       if(comprobarDNI(dni) && comprobarNombre(nombre) && comprobarApellidos(apellidos) && comprobarFecha(fechaNacimiento) && compararWeb(web) && compararContrasena(contrasena))
        alert("Formulario Correcto");
    }

});

function vacio (dni, nombre, apellidos, fecha, contrasena){
    if(dni == "" || nombre == "" || apellidos == "" || fecha =="" || web == "" || contrasena ==""){
        return true;
    }
    return false;
}

function comprobarDNI(dni){
    let letras =['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
   
    dni = dni.split("");
    if(dni[dni.length -1].toUpperCase() < "A" || dni[dni.length -1].toUpperCase() > "Z"){
       document.getElementById("dni").innerHTML = "Fallo, debe tener una letra al final";
       document.getElementById("dni").setAttribute("class", "error");
       return false;
    }else{
        if((dni.length) < 9 || (dni.length ) > 9){
            document.getElementById("dni").innerHTML = "Fallo, el DNI debe tener 9 digitos";
            document.getElementById("dni").setAttribute("class", "error");
            return false;
        }else{
            let letra = dni[dni.length - 1];
            let num = 0;

            for(let i = 0; i < (dni.length - 1); i++ ){
                num = num * 10 + parseInt(dni[i]);
            }

            let modulo = num % 23;
            let letramodulo = letras[modulo];
            letra = letra.toUpperCase();

            if(letramodulo === letra)
                return true;
            else{
                document.getElementById("dni").innerHTML = "DNI INCORRECTO";
                document.getElementById("dni").setAttribute("class", "error");
                return false;
            }
        }   
    }
}

function comprobarNombre(nombre){
    let spliteo = nombre.split(" ");
    if(spliteo.length < 3){
        return true;
    }else{
        document.getElementById("nombre").innerHTML = "Error como mucho son dos nombres";
        document.getElementById("nombre").setAttribute("class", "error");
        return false;
    }
}

function comprobarApellidos(apellidos){
    let spliteo = apellidos.split(" ");
    if(spliteo.length < 3){
        return true;
    }else{
        document.getElementById("apellidos").innerHTML = "Error como mucho son dos apellidos";
        document.getElementById("apellidos").setAttribute("class", "error");
        return false;
    }
}

function comprobarFecha(fecha){
    let spliteo = fecha.split("-");
    if((spliteo[2] <= 31 && spliteo[2] >= 1) && (spliteo[1] <=12 && spliteo[1] >= 1) && (spliteo[0] >= 1900 && spliteo[0] <= 2030)){
        return true;
    }else{
        document.getElementById("fecha").innerHTML = "Error. La fecha debe ser dd/mm/aaaa";
        document.getElementById("fecha").setAttribute("class", "error");
        return false;
    }
}

function compararWeb(web){
    let spliteo = web.split("https://");
    console.log(spliteo[0]);
    if(spliteo[0] == "https://"){
        return true;
    }else{
        document.getElementById("web").innerHTML = "Error. Debe empezar por https://";
        document.getElementById("web").setAttribute("class", "error"); 
        return false;
    }
}

function compararContrasena(contrasena){
    if(contrasena.length <= 8 && contrasena.length >=12){
        document.getElementById("contrasena").innerHTML = "Error. la contraseña debe tener entre 8 y 12 caracteres";
        document.getElementById("contrasena").setAttribute("class", "error");
        return false;
    }else{
        return true;
    }
}