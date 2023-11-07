document.querySelector("p").onclick = function() {
    let parrafo = document.querySelector("p");
    if(parrafo.getAttribute("class") == "uno") {
        parrafo.setAttribute("class", "dos");
    } else {
        parrafo.setAttribute("class", "uno");
    }
}