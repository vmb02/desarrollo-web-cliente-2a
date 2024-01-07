let seleccion = document.getElementsByName("lista")[0];
let check1 = document.getElementById("cb1");
let check2 = document.getElementById("cb2");
let check3 = document.getElementById("cb3");
let check4 = document.getElementById("cb4");

check1.addEventListener("click", function() {
    if(check1.checked) {
        let opcion = document.createElement("option");
        opcion.setAttribute("id", "s1");
        let texto = document.createTextNode(check1.value);
        opcion.appendChild(texto);
        seleccion.appendChild(opcion);
    } else {
        let op = document.getElementById("s1");
        seleccion.removeChild(op);
    }
});

check2.addEventListener("click", function() {
    if(check2.checked) {
        let opcion = document.createElement("option");
        opcion.setAttribute("id", "s2");
        let texto = document.createTextNode(check2.value);
        opcion.appendChild(texto);
        seleccion.appendChild(opcion);
    } else {
        let op = document.getElementById("s2");
        seleccion.removeChild(op);
    }
});

check3.addEventListener("click", function() {
    if(check3.checked) {
        let opcion = document.createElement("option");
        opcion.setAttribute("id", "s3");
        let texto = document.createTextNode(check3.value);
        opcion.appendChild(texto);
        seleccion.appendChild(opcion);
    } else {
        let op = document.getElementById("s3");
        seleccion.removeChild(op);
    }
});

check4.addEventListener("click", function() {
    if(check4.checked) {
        let opcion = document.createElement("option");
        opcion.setAttribute("id", "s4");
        let texto = document.createTextNode(check4.value);
        opcion.appendChild(texto);
        seleccion.appendChild(opcion);
    } else {
        let op = document.getElementById("s4");
        seleccion.removeChild(op);
    }
});