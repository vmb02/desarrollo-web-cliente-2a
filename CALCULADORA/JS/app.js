function sumar() {

    let a = prompt("Introduce un número: ");
    let b = prompt("Introduce un número: ");
    a = Number(a);
    b = Number(b);
    
   if(isNaN(a) || isNaN(b)) {
        alert("Los numeros no son validos")
    } else {
        alert("La suma es: " + (a+b));
    }
}
/*
let suma = () => {
    pedirValores();
    let result = a + b;
    alert (result);
    return result;
}
*/
function restar() {

    let a = prompt("Introduce un número: ");
    let b = prompt("Introduce un número: ");
    a = Number(a);
    b = Number(b);
    
   if(isNaN(a) || isNaN(b)) {
        alert("Los numeros no son validos")
    } else {
        alert("La resta es: " + (a-b));
    }
}

function dividir() {

    let a = prompt("Introduce un número: ");
    let b = prompt("Introduce un número: ");
    a = Number(a);
    b = Number(b);
    
   if(isNaN(a) || isNaN(b)) {
        alert("Los numeros no son validos")
    } else if(b == 0){
        alert("No se puede dividir entre 0");
    } else {
        alert("La división es: " + (a/b));

    }
}

function multiplicar() {

    let a = prompt("Introduce un número: ");
    let b = prompt("Introduce un número: ");
    a = Number(a);
    b = Number(b);
    
   if(isNaN(a) || isNaN(b)) {
        alert("Los numeros no son validos")
    } else {
        alert("La multiplicacion es: " + (a*b));
    }
}

function potencia() {

    let a = prompt("Introduce un número: ");
    let b = prompt("Introduce un número: ");
    a = Number(a);
    b = Number(b);
    
   if(isNaN(a) || isNaN(b)) {
        alert("Los numeros no son validos")
    } else {
        alert("La potencia es: " + (a**b));
    }
}

function modulo() {

    let a = prompt("Introduce un número: ");
    let b = prompt("Introduce un número: ");
    a = Number(a);
    b = Number(b);
    
   if(isNaN(a) || isNaN(b)) {
        alert("Los numeros no son validos")
    } else if(b == 0){
        alert("No se puede dividir entre 0");
    } else {
        alert("El modulo es: " + (a/b));

    }
}

function incremento() {

    let a = prompt("Introduce un número: ");
    let b = prompt("Introduce un número: ");
    a = Number(a);
    b = Number(b);
    
   if(isNaN(a)) {
        alert("El número no es válido")
    } else {
        alert("El incremento es: " + (a++));
    }
}

function decremento() {

    let a = prompt("Introduce un número: ");
    a = Number(a);
    
   if(isNaN(a)) {
        alert("El número no es válido")
    } else {
        alert("El decremento es: " + (a--));
    }
}