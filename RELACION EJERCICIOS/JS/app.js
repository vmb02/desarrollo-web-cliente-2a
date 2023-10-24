let a1 = [1, 2, 3, 3, 6];
let a2 = [3, 2, 1, 4, 5];

function ordenar(array1, array2) {

    let arrayFinal = new Array();
    let arrayt = new Array();
    arrayt = [...array1, ...array2];
    arrayt.sort();

    for(let i=0;i<arrayt.length; i++) {
        if(arrayt[i] !== arrayt[i+1]) {
            arrayFinal.push(arrayt[i]);
        } else {
            while(arrayt[i] === arrayt[i+1]) i++;
        }
    }
return arrayFinal;
}

console.log(ordenar(a1,a2));