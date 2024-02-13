document.addEventListener('DOMContentLoaded', function() { 

    let titulo = "";
    let portada = "";
    let seccion = document.getElementsByTagName("section")[0];

    let nLibros = library.length;
    let numeroLibros = document.createElement("p");
    let texto = document.createTextNode("Hay " + nLibros + " libros.");
    numeroLibros.appendChild(texto);
    document.getElementsByTagName("h1")[0].appendChild(numeroLibros);

    console.log(library.length);
    for(let i = 0; i < library.length; i++) {
        titulo = library[i].title;
        portada = library[i].cover;

        let nodoTitulo = document.createElement("h3");
        let textoTitulo = document.createTextNode(nodoTitulo);
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

    let boton = document.querySelectorAll("footer a")[0];
    boton.addEventListener("click", function() {
        window.location.href="nuevoLibro.html";
    });

});