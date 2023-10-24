//Para definir variables utilizamos "let"
let nombre="Víctor";
let b = "3";
let a = 25;
let simbolo = Symbol("mi simbolo");
let hora = 23;

console.log(typeof a);
console.log(typeof nombre);
console.log(a + " " + nombre); 
console.log(a+b);
console.log(typeof simbolo);




if(a >= 18) {
    console.log("Persona adulta");
} else {
    console.log("Pollo");
}

if(hora>6 && hora<12) {
    console.log("Buenos días");
} else  if(hora>=12 && hora < 20) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches")
}

if(a%2 == 0) {
    console.log("El número es par")
} else {
    console.log("El número es impar")
}

//Operador ternario
let parImpar = (a%2 == 0)? "Verdadero" : "Falso";
console.log(parImpar);

if(isNaN(a)) {
    console.log("no es un numero.");
} else {
    console.log("Miau")
}

let miNumero = "18";
let edad2 = Number(miNumero);
resultado = (edad2 >= 18) ? "Es mayor de edad" : "Menor de edad";
console.log(resultado);

let contador = 0;
while(contador<3) {
    console.log(contador);
    contador++;
}

let cont = 0;
do {
    console.log(cont);
    cont++;
} while(cont<4);

for(c = 0; c < 4; c++) {
    console.log(c);
}

//Incremento
//Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

//Post-incremento (el operador ++ después de la variable)
z = b++;
console.log(b);
console.log(z);

let xx = 5;
let yy = 10;
let zz = ++xx + yy--;
console.log(xx);
console.log(yy);
console.log(zz);

let result = 4 + 5 * 6 / 3;
console.log(result);

resultado = (4 + 5) * 6 / 3;
console.log(result);

let mes = 11;
let estacion = "Desconocida";

switch(mes) {
    case 1: case 2: case 12:
        estacion = "Invierno"; break;
    case 3: case 4: case 5:
        estacion ="Primavera"; break;
    case 6: case 7: case 8: 
        estacion = "Verano"; break;
    case 9: case 10: case 11:
        estacion = "Otoño"; break;
    default:
        estacion = "ERROR"; break;
}

console.log(estacion);

for(let contadorr = 0; contadorr <= 10; contadorr++) {
    if(contadorr%2 !== 0) {
        console.log(contadorr);
        break;
    }
}

for(let contador1 = 0; contador1 <= 5; contador1++) {
    for(let contador2 = 2; contador2 <= 5; contador2++) {
        console.log("c1: " + contador1 + " c2: " + contador2);
    }
}

for(let contador1 = 0; contador1 <= 5; contador1++) {
    for(let contador2 = 2; contador2 <= 5; contador2++) {
        continue;
        console.log("c1: " + contador1 + " c2: " + contador2);
    }
}

let objeto={
    nombre: "Víctor",
    apelido: "Moreno Benítez"
}

console.log(typeof objeto);

class Persona{
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);

//Array

let marcaCoches = ["BMW", "Audi", "Renault", "Mercedes"];
console.log(typeof marcaCoches); 

//tipo de dato de función

function Saludar() {
    console.log("Saludos desde la funcion");
}

xx = 9;
yy = 10;
function miFuncion(xx,yy) {
    console.log("Suma: " + (xx+yy));
}
console.log(typeof miFuncion);

miFuncion(xx, yy);

//Otra forma de crear funciones a través del constructor Function
var func = new Function("a", "b", "return a * b");
var resultado = func(10,10);
console.log(resultado);

//Funciones con notación flecha
const arrowF = (a, b) => a * b;

//No son adecuadas para definir métodos en los objetos
//Deben ser declaradas antes de su uso

//PASO DE PARÁMETROS

let x = 10;
function cambiarValor(a) {
    a = 20;
}
cambiarValor(x);
console.log(x);

//Ejemplo de parámetros con una persona
const persona = {
    nombre: 'Juan',
    apellido: 'Pérez'
}

function cambiarValorObjeto(p1) {
    p1.nombre = 'Carlos';
    p1.apelido = 'Lara';
}

cambiarValorObjeto(persona);
console.log(persona);

function miConcatenador(separator) {
    var result = "";
    var i;
    //itera a través de arguments
    for(i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    console.log(result);
    return result;
}

miConcatenador(",", "red", "orange", "blue");
