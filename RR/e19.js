document.querySelector("button").onclick = function() {
    let lista = document.querySelector("ul");
    let elemento = document.createElement("li");
    let nuevo_texto = prompt("Añada un elemento nuevo: ");
    elemento.innerText = nuevo_texto;
    lista.appendChild(elemento);
}