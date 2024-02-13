document.addEventListener("DOMContentLoaded", function() {

    let boton1 = document.querySelectorAll("section input")[0];
    let boton2 = document.querySelectorAll("section input")[1];

    boton1.addEventListener("click", function() {
        fetch("https://randomuser.me/api")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
    });

    boton2.addEventListener("click", function() {
        fetch("https://randomuser.me/api") 
        .then((response) => response.json())
        .then((data) => {

            let nombre = data.results[0].name.first;
            let apellido = data.results[0].name.last;
            let edad = data.results[0].dob.age;
            let imagen = document.createElement("img");
            imagen.setAttribute("src", data.results[0].picture.medium)
            imagen.setAttribute("alt", nombre);

            let texto = document.createTextNode(nombre + " " + apellido + ": " + edad);
            
            let article = document.createElement("article");
            article.setAttribute("class", "usuario");
            article.appendChild(texto);
            article.appendChild(imagen);

            let div = document.querySelector("section div");
            div.appendChild(article);
        });
    });
});