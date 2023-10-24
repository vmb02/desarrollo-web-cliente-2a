function pedir() {

    let n, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10;
    let contador = 1;
    let suma = 0;

    for(i = 1; i <= 10; i++) {
        n = prompt("Introduce el número " + i + ": ");
        n = Number(n);
        if(isNaN(n) || n<0) {
            i = 11;
            alert("ERROR: Número no válido");
        } else {
            switch(i) {
                case 1: n1 = n; suma+=n; break;
                case 2: n2 = n; suma+=n; break;
                case 3: n3 = n; suma+=n; break;
                case 4: n4 = n; suma+=n; break;
                case 5: n5 = n; suma+=n; break;
                case 6: n6 = n; suma+=n; break;
                case 7: n7 = n; suma+=n; break;
                case 8: n8 = n; suma+=n; break;
                case 9: n9 = n; suma+=n; break;
                case 10: n10 = n; suma+=n; break;
            }

        }

    }

    let media = suma/10;
    let cadena = "Los elementos que superan el valor medio (" + media + ") son: ";
    let cadenaDoble = "Los elementos que superan el doble de la media (" + media*2 + ") son: ";

    for(i = 1; i <= 10; i++) {
        switch(i) {
            case 1:if(n1>media) cadena = cadena + n1 + " "; if(n1>(media*2)) cadenaDoble = cadenaDoble + n1 + " "; break;
            case 2:if(n2>media) cadena = cadena + n2 + " "; if(n2>(media*2)) cadenaDoble = cadenaDoble + n2 + " "; break;
            case 3:if(n3>media) cadena = cadena + n3 + " "; if(n3>(media*2)) cadenaDoble = cadenaDoble + n3 + " "; break;
            case 4:if(n4>media) cadena = cadena + n4 + " "; if(n4>(media*2)) cadenaDoble = cadenaDoble + n4 + " "; break;
            case 5:if(n5>media) cadena = cadena + n5 + " "; if(n5>(media*2)) cadenaDoble = cadenaDoble + n5 + " "; break;
            case 6:if(n6>media) cadena = cadena + n6 + " "; if(n6>(media*2)) cadenaDoble = cadenaDoble + n6 + " "; break;
            case 7:if(n7>media) cadena = cadena + n7 + " "; if(n7>(media*2)) cadenaDoble = cadenaDoble + n7 + " "; break;
            case 8:if(n8>media) cadena = cadena + n8 + " "; if(n8>(media*2)) cadenaDoble = cadenaDoble + n8 + " "; break;
            case 9:if(n9>media) cadena = cadena + n9 + " "; if(n9>(media*2)) cadenaDoble = cadenaDoble + n9 + " "; break;
            case 10:if(n10>media) cadena = cadena + n10 + " "; if(n10>(media*2)) cadenaDoble = cadenaDoble + n10 + " "; break;
        }
    }
    alert(cadena);
    alert(cadenaDoble);
}