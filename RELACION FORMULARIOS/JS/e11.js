let boton = document.getElementById("envio");

boton.addEventListener("click", function() {

    let dni = document.getElementsByName("dni")[0].value;
    let nombre = document.getElementsByName("nombre")[0].value;
    let apellidos = document.getElementsByName("apellidos")[0].value;
    let fechaNacimiento = document.getElementsByName("fechaNacimiento")[0].value;
    let web = document.getElementsByName("webPersonal")[0].value;
    let contrasena = document.getElementsByName("pass")[0].value;
    let estaVacio = vacio(dni, nombre, apellidos, fechaNacimiento, web, contrasena);

    if(!estaVacio) {
        
        
    } else {
        alert("ERROR: Todos los campos deben estar rellenos")
    }

    function vacio(dni, nombre, apellidos, fecha, contrasena) {
        if(dni == "" || nombre == "" || apellidos == "" || fecha == "" || contrasena == "") {
            return true;
        } else {
            return false;
        }
    }

    function comprobarDni(dni) {
        let letras =['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        dni = dni.split("");
        if(dni[dni.length-1].toUpperCase() < "A" || dni[dni.length-1].toUpperCase() > "Z") {
            alert("ERROR: Debe tener una letra al final");
            return;
        }

        if(dni.length != 9) {
            alert("ERROR: El DNI debe tener 9 dígitos");
            return;
        }

        let letra = dni[dni.length-1];
        let num = 0;

        for(let i = 0; i < (dni.length-1); i++) {
            num = num*10 + parseInt(dni[i]);
        }

        let modulo = num % 23;
        let letraModulo = letras[modulo];
        letra = letra.toUpperCase();

        if(letra === letraModulo) {
            return true;
        } else {
            document.getElementById("dni").innerHTML = "DNI INCORRECTO";
            document.getElementById("dni").setAttribute("class", "error");
            return false;
        }
    }

    function comprobarNombre(nombre) {
        let nombreDividido = nombre.split(" ");
        if(nombreDividido.length <= 2) {
            return true;
        } else {
            document.getElementById("nombre").innerHTML = "ERROR: Máximo dos nombres";
            document.getElementById("nombre").setAttribute("class", "error");
            return false;
        }
    }

    function comprobarApellidos(apellidos) {
        
    }

});