
function sumaParcial(arr) {

    let suma = 0;
    let array = [];

    for(let i = 0; i < arr.length; i++) {
        suma += arr[i];
        array[i] = suma;
    }

    console.log(array);
}


sumaParcial([1,2,3,4,5,6]);