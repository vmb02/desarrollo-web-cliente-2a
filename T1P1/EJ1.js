function convertidorPeso() {

    let p = 0;
    let ok;

    do {
        ok = false;
        p = prompt("Introduzca un numero: ");
        p = Number(p);
        if(isNaN(p) || p <= 0) {
            alert("ERROR: Número no válido.");
            ok = true;
        }
    } while(p <= 0 || ok);

    let pFinal = p/1000;

    alert(p + " gramo/s equivalen a " + pFinal + " kilogramos");
}