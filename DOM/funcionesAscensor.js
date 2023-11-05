function subir() {

    var dedo = document.getElementById("unico");
    var estilos = window.getComputedStyle(dedo);

    var valor = parseInt(estilos.getPropertyValue('top'));

    if((valor-100) >= 0) {
        valor -=100;
        dedo.style.top = valor+"px";
    }
}

function bajar() {

    var dedo = document.getElementById("unico");
    var estilos = window.getComputedStyle(dedo);
    
    //Obtengo el valor de TOP
    var valor = parseInt(estilos.getPropertyValue('top'));
    
    //Sumo px
    valor += 100;

    if(parseInt(estilos.getPropertyValue('bottom')) >= 100) {
        //Asigno el nuevo valor a TOP
        dedo.style.top = valor+"px";
    }


    
    
}