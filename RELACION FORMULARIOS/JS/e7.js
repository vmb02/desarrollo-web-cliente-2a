let boton = document.getElementById("boton");

boton.addEventListener("click", function() {

    let textito = document.getElementById("texto").value;
    console.log(textito);

    if(textito.length <= 0) {
        alert("Introduzca el texto");
        return;
    } else if(textito.length > 100) {
        alert("El texto no puede ser superior a 100 caracteres");
    } else {
        let div = document.createElement("div");
        div.setAttribute("class", "tweet");
        textito = textito.split("");
        let textitoAux = "";
        for(let i = 0; i < textito.length && i < 50; i++) {
            textitoAux += textito[i];
        }
        let texto = document.createTextNode(textitoAux);
        div.appendChild(texto);
        document.body.appendChild(div);
    }
});