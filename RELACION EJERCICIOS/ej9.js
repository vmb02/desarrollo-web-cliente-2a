function matriz() {

let n = 3;
/*
do{
    n = Number(prompt("Introduzca el tamaño mayor que 2: "));
}while(n <= 2); */
let array = [];
let cont = 1;
for(let i = 0; i < n; i++){
    let aAux = []; 
    for(let j = 0; j < n; j++){
        aAux.push(n * cont);
        cont++;
    }
    //console.log(aAux); 
    //console.log("\n");
    array.push(aAux);
}
console.log(array);
}

matriz();