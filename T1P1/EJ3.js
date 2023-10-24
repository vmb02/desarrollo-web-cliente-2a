function array() {

    let n = 0;
    let ok;

    do {
        ok = false;
        n = prompt("Introduzca un número entero comprendido entre 5 y 10 (incluidos): ");
        n = Number(n);
        if(isNaN(n)) {
            ok = true;
        }
    } while((n<5 || n>10) || ok);

    let arr = new Array(n);
    let cadena = "El resultado del array generado es: ";
    let suma = 0;
    
    for(i = 0; i < arr.length; i++) {
        arr[i] = n * Math.floor(Math.random() * 10);
        cadena = cadena + arr[i] + " ";
        suma += arr[i];
    }
    
    let media = suma/n;
    let cadenaMedia = "Los valores que superan el valor de la media(" + media + ") son: ";
    for(i = 0; i < arr.length; i++) {
        if(arr[i] > media) {
            cadenaMedia = cadenaMedia + arr[i] + " ";
        }
    }

    console.log(cadena);
    console.log(cadenaMedia);
}