let boton = document.getElementsByTagName("button")[0];
let s1 = document.getElementsByTagName("section")[0];
let s2 = document.getElementsByTagName("section")[1];

boton.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((producto) => {
            let nuevoTitulo = document.createElement("p");
            nuevoTitulo.textContent = producto.title;

            nuevoTitulo.addEventListener("mouseover", function() {
                let img = producto.image;
                let imagen = document.createElement("img");
                imagen.setAttribute("src", img);
                imagen.setAttribute("alt", producto.title);
                imagen.setAttribute("display", "block");
                s2.appendChild(imagen);
            });

            nuevoTitulo.addEventListener("mouseout", function() {
                s2.removeChild(document.getElementsByTagName("img")[0]);
            });

            s1.appendChild(nuevoTitulo);
        });
    });
});

