document.addEventListener("DOMContentLoaded", function() {
    
    let boton = document.getElementsByTagName("input")[0];

    boton.addEventListener("click", function(evento) {
        evento.preventDefault();

        fetch("https://www.jaimeweb.es/medac/getProfesores.php")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((profesores) => {

                let dni = profesores.dni;
                let nombre = profesores.nombre;

                let dniTexto = document.createTextNode(dni);
                let nombreTexto = document.createTextNode(nombre);
                let salto = document.createElement("br");

                let article = document.createElement("article");
                article.setAttribute("class", "ficha");
                article.appendChild(dniTexto);
                article.appendChild(salto);
                article.appendChild(nombreTexto);

                let div = document.getElementsByTagName("div")[0];
                div.appendChild(article);

            });
        });
    });
});