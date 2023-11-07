document.querySelectorAll("button")[1].onclick = function() {
    var dedo = document.getElementById("unico");
    var estilo = window.getComputedStyle(dedo);

    var valor = parseInt(estilo.getPropertyValue("left"));
    valor += 5;
    dedo.style.left = valor+"px";
    if(parseInt(dedo.style.left) > 0) {
        document.querySelectorAll("button")[0].removeAttribute("disabled", "");
    } 
}

document.querySelectorAll("button")[0].onclick = function() {
    var dedo = document.getElementById("unico");
    var estilo = window.getComputedStyle(dedo);

    var valor = parseInt(estilo.getPropertyValue("left"));
    valor -= 5;
    if(valor >0) {
        dedo.style.left = valor+"px";
    } else {
        document.querySelectorAll("button")[0].setAttribute("disabled", "true");
    }
}