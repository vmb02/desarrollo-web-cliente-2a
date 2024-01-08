let marca = document.getElementsByTagName("select")[0];
let modelos = document.getElementsByTagName("select")[1];
let boton = document.getElementById("boton");

marca.addEventListener("change", function(){

    let opciones;
    if(marca.value == "intel") {
        opciones = ["HD3000", "HD4000", "IRIS600"];
    } else if(marca.value == "amd") {
        opciones = ["RX Series 500", "Vega Series", "RX Series 6000"];
    } else if(marca.value == "nvidia") {
        opciones = ["GTX Serie 1000", "GTX Serie 2000", "GTX Serie 3000"];
    }

    while(modelos.childNodes.length > 1) {
        modelos.removeChild(modelos.lastElementChild);
    }

    for(let i = 0; i < opciones.length; i++) {
        let opcion = document.createElement("option");
        let texto = document.createTextNode(opciones[i]);
        opcion.setAttribute("value", opciones[i]);
        opcion.appendChild(texto);
        modelos.appendChild(opcion);
    }
});

boton.addEventListener("click", function(){ 
    if(marca.value == "" || modelos.value == "") {
        alert("ERROR: No se han seleccionado todos los campos");
    } else {
        alert("OÍDO");
    }
});