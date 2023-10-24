function countBy() {

    let x = prompt("Introduzca un numero: ");
    let y = prompt("Introduzca otro numero: ")

    let multiplos;
    let array = [];
    if(x<0 || y<0) {
        alert(array);
    } else {
        for(i = 1; i <= y; i++) {
            multiplos = x*i;
            array.push(multiplos);
        }
        alert(array);
    }
    
}
