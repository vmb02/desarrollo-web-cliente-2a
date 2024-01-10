/*let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");

boton1.addEventListener("click", function() {
    let euros = document.getElementById("euros1").value;
    document.getElementById("pesetas1").value = euros * 0.83;
});

boton2.addEventListener("click", function() {
    let pesetas = document.getElementById("pesetas2").value;
    document.getElementById("euros2").value = pesetas / 0.83;
});*/

let boton = document.getElementById("boton");

boton.addEventListener("click", function() {

    let opcion = document.getElementsByTagName("select")[0].value;
    let cantidad1 = document.getElementById("n1").value;
    let cantidad2 = document.getElementById("n1").value;

    if(opcion == "Euros-Pesetas") {
        document.getElementById("n2").value = cantidad1 * 0.83;
    } else {
        document.getElementById("n2").value = cantidad1 / 0.83;
    }
});