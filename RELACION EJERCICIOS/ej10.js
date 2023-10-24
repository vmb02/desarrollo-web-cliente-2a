function repetido(array, elemento) {
    let c = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i] === elemento) {
            c++;
        }
    }

    if(c === 1) {
        return false;
    } else {
        return true;
    }
}

function ordenar(a1, a2) {

    let arrayFinal = [];
    for(let i = 0; i < a1.length; i++) {
        if(!a2.includes(a1[i]) && !repetido(a1, a1[i])) {
            arrayFinal.push(a1[i]);
        }
    }

    for(let i = 0; i < a1.length; i++) {
        if(!a1.includes(a2[i]) && !repetido(a2, a2[i])) {
            arrayFinal.push(a2[i]);
        }
    }
    console.log(arrayFinal);
}

let a1 = [1,2,3];
let a2 = [2,5,6];
ordenar(a1, a2);