function mostrar() {
    var enlace = document.getElementsByTagName("a")[0];
    console.log(enlace.getAttribute("href"));
    console.log(enlace.textContent);
}

function cambiar() {
    var enlace = document.getElementsByTagName("a")[0];
    if(enlace.textContent === "He cambiado flojo") {
        enlace.textContent = "Google";
        return;
    }
    enlace.textContent = "He cambiado flojo";
}