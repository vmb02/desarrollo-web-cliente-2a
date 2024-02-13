document.addEventListener("DOMContentLoaded", function() {

    let boton = document.querySelectorAll("body input")[0];

    boton.addEventListener("click", function() {
        
        fetch("https://www.jaimeweb.es/medac/datos.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((usuario) => {
                console.log(usuario);
            });
            for(let user of data) {
                let claves = Object.values(user);
                for(let propiedades of claves) {
                    console.log(propiedades);
                }
            }
        });
    });
});