function matriz() {

    let n = 0;
    let ok;

    do {
        ok = false;
        n = prompt("Introduzca un número entero comprendido entre 2 y 5 (incluidos): ");
        n = Number(n);
        if(isNaN(n)) {
            ok = true;
        }
    } while((n<2 || n>5) || ok);

    let matriz = new Array(n);
    let suma = 0;

    for(i = 0; i < matriz.length; i++) {
        matriz[i] = [];
    }

    for(i = 0; i < matriz.length; i++) {
        for(j = 0; j < matriz.length; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100 + 1);    
            suma += matriz[i][j];
        }
    }

    ///Motrar matriz
    let imprimirMatriz = "";
    for(i = 0; i < matriz.length; i++) {
        for(j = 0; j < matriz.length; j++) {
            if(matriz[i][j] < 10)  {
                imprimirMatriz = imprimirMatriz + "0" + matriz[i][j] + "  ";
            } else {
                imprimirMatriz = imprimirMatriz + matriz[i][j] + "  ";
            }
        }
        console.log(imprimirMatriz);
        imprimirMatriz = "";
    }


    let media = suma / (n*n);
    console.log("El valor de la media es: " + media);


    let array_res = new Array(2);
    let t = 0;
    let q = 0;

    for(i = 0; i < array_res.length; i++) {
        array_res[i] = [];
    }

    for(i = 0; i < matriz.length; i++) {
        for(j=0;j<matriz.length; j++) {
            if(matriz[i][j] > media) {
                array_res[0][t] = matriz[i][j];
                t++;
            } else {
                array_res[1][q] = matriz[i][j];
                q++;
            }
        }
    }
   


    let imprimirMatriz2 = "";
    //Mostrar segunda matriz
    for(i = 0; i < array_res.length; i++) {
        for(j = 0; j < array_res[i].length; j++) {
            if(array_res[i][j] < 10)  {
                imprimirMatriz2 = imprimirMatriz2 + "0" + array_res[i][j] + "  ";
            } else {
                imprimirMatriz2 = imprimirMatriz2 + array_res[i][j] + "  ";
            }
        }
        console.log(imprimirMatriz2);
        imprimirMatriz2 = "";
    }


    let o = -1;
    do {
        o = prompt("Introduce el orden a aplicar (0 para ascendente y 1 para descendente): ");
    } while(((o != 0) && (o != 1)) || isNaN(o));


    if(o == 0) {
        array_res[0].sort(function(a,b){return a - b});
        array_res[1].sort(function(a,b){return a - b});
    } else {
        array_res[0].sort(function(a,b){return a - b});
        array_res[1].sort(function(a,b){return a - b});
        array_res[0].reverse();
        array_res[1].reverse();
    }

    let imprimirMatriz3 = "";
    //Mostrar segunda matriz
    for(i = 0; i < array_res.length; i++) {
        for(j = 0; j < array_res[i].length; j++) {
            if(array_res[i][j] < 10)  {
                imprimirMatriz3 = imprimirMatriz3 + "0" + array_res[i][j] + "  ";
            } else {
                imprimirMatriz3 = imprimirMatriz3 + array_res[i][j] + "  ";
            }
        }
        console.log(imprimirMatriz3);
        imprimirMatriz3 = "";
    }

}