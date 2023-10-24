function matriz() {
    
    let n = 0;
    do {
        n = prompt("Introduzca un numero mayor a 2: ");
        n = Number(n);
    } while(n<=2);

    var Array = [];
    for(i=0; i < n; i++) {
        Array[i] = new Array[n];
    }

    let contador = 1;
    for(j=0;j<n;j++) {
        for(k=0;k<n;k++) {
            Array[j][k] = n * contador;
            contador++;
        }
    }

    console.log(Array);

}

function matrizN() {
    n = 4;
    var acum=0;
    var matriz= [];

    iniciarMatriz(n);
    
    for (let f= 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            acum+=n;
            matriz[f][c] = acum;
        }
    }

    function iniciarMatriz(n){
        for (let f= 0; f < n; f++) {
            matriz.push([]);
        }
    }
}