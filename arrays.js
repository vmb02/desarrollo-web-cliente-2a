var items = new Array(1,6); //Creamos array con dos elementos
var items = new Array(6); //Creamos un array con 6 elementos

var pets = new Array("dog", "cat", "rabbit");
var pet = pets[0];
console.log(pet);
var people = ["José", "Antonio", "Luis", "Olga"];
people.length; //La longitud es 4

let resultado='';
let fLen = people.length;
for(i=0; i<fLen; i++) {
    if(i==(fLen-1)) {
        resultado += people[i];
    } else {
        resultado = people[i] + "," + resultado;
    }
    
}
console.log(resultado);

//Insertar elementos en array
people.push("José Miguel");

//Quita el último elemento
people.pop(); 

//Sacamos el 1er elemento
people.shift();

//Añadimos como 1er elemento
people.unshift("Miguel");

//Ordenación de Arrays ascendente
people.sort();

//Ordenación de Arrays descendente
people.reverse();

//Buscar un elemento en el array
let pos = people.indexOf("Miguel");
console.log(pos);

//Eliminar elemento que paso por posición, y el otro parámetro es el nº de elementos que borro desde ahí
people.splice(pos, 1, "pepe"); //La parte de Pepe se añade

//Copiar un array
let copiaArray = people.slice();

//funcion que recibe un Array
function llamame_Array(params) {
    for(i=0; i<params.length; i++) {
        alert(params[i]);
    }
}