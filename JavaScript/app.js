function Sumar() {
    let a = prompt("Introduce un número: ");
    let b = window.prompt("Introduce otro número: ");

    //Casteo para tratarlos como números, no como cadena
    a = Number(a);
    b = Number(b);

 //   alert("La suma es: " + (a+b));

    if(isNaN(a) || isNaN(b)) {
        alert("Los numeros no son validos")
    } else {
        alert("La suma es: " + (a+b));
    }
}