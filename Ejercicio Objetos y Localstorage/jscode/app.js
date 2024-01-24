document.addEventListener('DOMContentLoaded', function() {

    let titulo = "";
    let portada = "";
    let seccion = document.getElementsByTagName("section")[0];
   
    let nlibros = library.length;
    let numeroLibros = document.createElement("P");
    let texto = document.createTextNode("Hay " + nlibros + " libros en la biblioteca");
    numeroLibros.appendChild(texto);
    document.getElementsByTagName("h1")[0].appendChild(numeroLibros);


    for(let i = 0; i < library.length; i++) {
        titulo = library[i].title;
        portada = library[i].cover;
        let nodotitulo = document.createElement("h3");
        let textotitulo = document.createTextNode(titulo);
        nodotitulo.appendChild(textotitulo);
        let portadatitulo = document.createElement("img");
        portadatitulo.setAttribute("src", portada);  
        portadatitulo.setAttribute("alt", titulo);
        let article = document.createElement("article");
        article.appendChild(nodotitulo);
        article.appendChild(portadatitulo);
        article.setAttribute("class", "presentacion");
        seccion.appendChild(article);
        
        article.addEventListener("click", function() {
            let cadena = JSON.stringify(library[i]);
            sessionStorage.setItem('libro',cadena);
            location.replace("mostrar.html");
        });
    }
});