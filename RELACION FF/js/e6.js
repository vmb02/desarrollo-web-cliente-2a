let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let se = document.getElementsByTagName("select")[0];

c1.addEventListener("click", function() {

    if(c1.checked) {
        let opcion = document.createElement("option");
        opcion.setAttribute("id", "s1");
        let texto = document.createTextNode(c1.value);
        opcion.appendChild(texto);
        se.appendChild(opcion);
    } else {
        let op = document.getElementById("s1");
        se.removeChild(op);
    }
});

c2.addEventListener("click", function() {

    if(c2.checked) {
        let opcion = document.createElement("option");
        opcion.setAttribute("id", "s2");
        let texto = document.createTextNode(c2.value);
        opcion.appendChild(texto);
        se.appendChild(opcion);
    } else {
        let op = document.getElementById("s2");
        se.removeChild(op);
    }
});

c3.addEventListener("click", function() {

    if(c3.checked) {
        let opcion = document.createElement("option");
        opcion.setAttribute("id", "s3");
        let texto = document.createTextNode(c3.value);
        opcion.appendChild(texto);
        se.appendChild(opcion);
    } else {
        let op = document.getElementById("s3");
        se.removeChild(op);
    }
});