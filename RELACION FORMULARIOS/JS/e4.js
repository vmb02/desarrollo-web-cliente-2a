let boton = document.getElementById("boton");

boton.addEventListener("click", function() {

    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let opcion = document.getElementById("seleccion").value;
    let resultado = document.getElementById("resultado");
    let resFinal = 0;

    if(opcion == "dolarEuro") {
        resFinal = (cantidad * 0.83) + "€";
    } else {
        resFinal = (cantidad / 0.83) + "$";
    }
    resultado.value = resFinal;
});