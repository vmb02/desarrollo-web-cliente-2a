let boton = document.getElementById("boton");

boton.addEventListener("click", function() {

    let campo1 = document.getElementById("c1").value;
    let campo2 = document.getElementById("c2").value;

    if(campo1 == "" || campo2 == "") {
        alert("ERROR: Ambos campos deben estar completados");
        return;
    } else {

        campo1.toUpperCase();
        campo2.toUpperCase();

        campo1 = campo1.split("").sort();
        campo2 = campo2.split("").sort();

        if(campo1.length != campo2.length) {
            alert("ERROR: Las palabras no son anagramas");
            return;
        } else {
            for(let i = 0; i < campo1.length; i++) {
                if(campo1[i] != campo2[i]) {
                    alert("ERROR: Las palabras no son anagramas");
                    return;
                }
            }
            alert("Las palabras son anagramas");
        }
    }
});