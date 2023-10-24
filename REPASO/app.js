var returnedArray = [];

function pedirValores() {
    
    do {
        lectura = prompt("Introduce un número: ");
        if(lectura == "*") {
            contador = 11;
        } else {
            lectura = Number(lectura);
            if(isNaN(lectura)) {
                alert("Los datos introducidos no son válidos")
            } else {
                returnedArray.push(lectura);
                contador++;
            }
        }
    } while(contador <= 9);
    console.log(returnedArray);
    return returnedArray;
}

function calcula() {
    let arrayEntrada = pedirValores();
    calculaResultado(arrayEntrada);
}

function calculaResultado(arrEntrada) {
    let elem;
    let contador = 1;
    //Opción 1
    for(var i = 0; i < arrEntrada.length; i++) {
        returnedArray[i] = new Array(arrEntrada.length);
        for(var j = 0; j < arrEntrada.length; j++) {
            returnedArray[i][j] = arrEntrada[i]*(j+1);
        }
    }

    //Opción 2
    for(var i = 0; i < arrEntrada.length; i++) {
        returnedArray[i] = [];
        for(var j = 0; j < arrayEntrada.length; j++) {
            returnedArray[i].push(arrayEntrada[i]*contador); 
            contador++;
        }
    }
}

    //Opcion 1
    pintaResultado(returnedArray);

    //Opcion 2
    printaResultadoSinParametro();

    pintaQuokka(returnedArray);
    function pintaQuokka(arrMatriz) {
        console.log(arrMatriz);
    }
    //


    //Con DOM
    function pintaResultado(arrMatriz) {
        let elem;
        let longitud = arrMatriz.length;
        for(var i = 0; i < longitud; i++) {
            switch(i) {
                case 0: elem = document.getElementById("resultado1"); break;
                case 1: elem = document.getElementById("resultado2"); break;
                case 2: elem = document.getElementById("resultado3"); break;
                case 3: elem = document.getElementById("resultado4"); break;
                case 4: elem = document.getElementById("resultado5"); break;
                case 5: elem = document.getElementById("resultado6"); break;
                case 6: elem = document.getElementById("resultado7"); break;
                case 7: elem = document.getElementById("resultado8"); break;
                case 8: elem = document.getElementById("resultado9"); break;
                case 9: elem = document.getElementById("resultado10"); break;
            }
            elem.innerHTML = arrMatriz[i];
            console.log("Array " + i + " ");
        }
    }
