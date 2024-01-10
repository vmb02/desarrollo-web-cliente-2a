/*let boton = document.getElementById("boton");

boton.addEventListener("click", function() {

    let casilla1 = document.getElementById("c1");
    let casilla2 = document.getElementById("c2");
    let casilla3 = document.getElementById("c3");
    let texto = "";

    if(casilla1.checked) {
        texto += casilla1.value + "\n";
    }
    if(casilla2.checked) {
        texto += casilla2.value + "\n";
    }
    if(casilla3.checked) {
        texto += casilla3.value + "\n";
    }

    document.getElementById("ronco").value = texto;
});*/

let casilla1 =  document.getElementById("c1");
let casilla2 =  document.getElementById("c2");
let casilla3 =  document.getElementById("c3");
let texto = document.getElementById("ronco");

casilla1.addEventListener("click", function() {

    let textito = "";
    if(casilla1.checked) {
        textito = (texto.value + casilla1.value + "\n");
    } else {
        textito = texto.value.replace(casilla1.value + "\n", "");
    }
    texto.value = textito;
});

casilla2.addEventListener("click", function() {

    let textito = "";
    if(casilla2.checked) {
        textito = (texto.value + casilla2.value + "\n");
    } else {
        textito = texto.value.replace(casilla2.value + "\n", "");
    }
    texto.value = textito;
});

casilla3.addEventListener("click", function() {

    let textito = "";
    if(casilla3.checked) {
        textito = (texto.value + casilla3.value + "\n");
    } else {
        textito = texto.value.replace(casilla3.value + "\n", "");
    }
    texto.value = textito;
});