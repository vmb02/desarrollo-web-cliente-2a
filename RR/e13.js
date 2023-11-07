document.querySelectorAll("p")[0].onclick = function() {
    var c = document.querySelectorAll("p")[0].textContent;
    if(c === "Mostrar") {
        document.querySelectorAll("p")[0].textContent = "Ocultar";
        document.querySelectorAll("p")[1].textContent = "Estoy hasta el nardo de JavaScript";
    } else {
        document.querySelectorAll("p")[0].textContent = "Mostrar";
        document.querySelectorAll("p")[1].textContent = "";
    }
}