document.querySelectorAll("input")[0].onclick = function() {

    //Habilitamos el botón limpiar
    document.querySelectorAll("input")[1].removeAttribute("disabled", "");
    
    //Almacenamos la ruta
    let ruta = prompt("Inserte la ruta de la imagen: ");

    //Si la ruta está vacía, ponemos la ruta por defecto
    if(ruta === "") {
        ruta = "img/terra.jpg";
    }

    let imagen = document.createElement("img");
    imagen.setAttribute("class", "foto");
    imagen.setAttribute("src", ruta);
    
    let contenedor = document.getElementById("contenedor");
    contenedor.appendChild(imagen);

    document.querySelectorAll("input")[1].onclick = function() {
        let imagenes = document.querySelectorAll("img");
        for(let i = 0; i < imagenes.length; i++) {
            contenedor.removeChild(contenedor.firstChild);
        }
        document.querySelectorAll("input")[1].setAttribute("disabled", "true")
    }
}