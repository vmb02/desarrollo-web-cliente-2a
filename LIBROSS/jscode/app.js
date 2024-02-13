document.addEventListener("DOMContentLoaded", function() {

    let nLibros = library.length;
    let numero = document.createElement("p");
    let texto = document.createTextNode("Hay " + nLibros + " libros en la librería");
    numero.appendChild(texto);
    document.getElementsByTagName("h1")[0].appendChild(numero);
    
    let titulo = "";
    let portada = "";
    let seccion = document.getElementsByTagName("section")[0];

    for(let i = 0; i < nLibros; i++) {
        titulo = library[i].title;
        portada = library[i].cover;

        let nodoTitulo = document.createElement("h3");
        let textoTitulo = document.createTextNode(titulo);
        nodoTitulo.appendChild(textoTitulo);

        let nodoPortada = document.createElement("img");
        nodoPortada.setAttribute("src", portada);
        nodoPortada.setAttribute("alt", titulo);

        let article = document.createElement("article");
        article.appendChild(nodoTitulo);
        article.appendChild(nodoPortada);
        article.setAttribute("class", "presentacion");
        seccion.appendChild(article);

        article.addEventListener("click", function() {
            let cadena = JSON.stringify(library[i]);
            sessionStorage.setItem('libro', cadena);
            location.replace("mostrar.html");
        });
    }

    let boton = document.getElementsByTagName("a")[0];
    boton.addEventListener("click", function() {
        location.replace("nuevoLibro.html");
    });
})