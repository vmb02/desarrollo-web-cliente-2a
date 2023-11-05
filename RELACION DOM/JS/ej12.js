function izquierda() {
    var dedo = document.getElementById("unico");
    var estilos = window.getComputedStyle(dedo);

    var valor = parseInt(estilos.getPropertyValue('left'));
    valor -= 100;

    if(valor >= 0) {
        dedo.style.left = valor+"px";
    }
}

function derecha() {
    var dedo = document.getElementById("unico");
    var estilos = window.getComputedStyle(dedo);

    var valor = parseInt(estilos.getPropertyValue('left'));
    valor += 100;

    if(parseInt(estilos.getPropertyValue('right')) >= 100) {
        dedo.style.left = valor+"px";
    }
}