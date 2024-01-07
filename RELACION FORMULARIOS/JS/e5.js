let boton = document.getElementById("boton");

boton.addEventListener("click", function() {

    let palabra1 = document.getElementById("p1").value;
    let palabra2 = document.getElementById("p2").value;

    if(palabra1 == "" || palabra2 == "") {
        alert("No has introducido las dos palabras");
        return;
    }

    palabra1 = palabra1.toUpperCase();
    palabra2 = palabra2.toUpperCase();

    let caracteresPalabra1 = palabra1.split("").sort();
    let caracteresPalabra2 = palabra2.split("").sort();

    console.log(caracteresPalabra1);
    console.log(caracteresPalabra2);

    if(caracteresPalabra1.length != caracteresPalabra2.length) {
        alert("Las palabras no son anagramas");
        return;
    }

    for(let i = 0; i < caracteresPalabra1.length; i++) {
        if(caracteresPalabra1[i] != caracteresPalabra2[i]) {
            alert("No son anagramas");
            return;
        }
    }
    alert("Ambas palabras son anagramas");
});