let texto = document.getElementsByName("dni")[0];
let letras =['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

texto.addEventListener("focusout", function() {

    let dni = texto.value;
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
        alert("DNI CORRECTO");
    } else {
        alert("DNI INCORRECTO");
    }
});