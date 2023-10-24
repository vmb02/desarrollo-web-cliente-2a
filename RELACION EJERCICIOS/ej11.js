let colores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];

function generador() {

    let franjas = 3;
    let coloresFinal = [];
/*
    do {
        franjas = prompt("Introduce el número de franjas: ");
        franjas = Number(franjas);
    } while(franjas<1 && franjas>5); */

    for(let i = 0; i < franjas; i++) {
        coloresFinal[i] = franjas[Math.random*colores.length];
    }

    
}