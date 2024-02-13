document.addEventListener("DOMContentLoaded", function() {

    let insertar = document.querySelector('[value="Insertar"]');
    let resetear = document.querySelector('[value="Resetear"]');
    let cancelar = document.querySelector('[value="Cancelar"]');

    cancelar.addEventListener("click", function() {
        sessionStorage.clear();
        window.location.href = "inicio.html";
    });

    resetear.addEventListener("click", function() {
        document.forms[0].reset();
    });

    insertar.addEventListener("click", function() {
        crea_libro();
    });
});

function crea_libro() {
    let formulario = document.forms[0];
    console.log(formulario["titulo"].value);
    console.log(library.length);

    library.push({
        "title": formulario["titulo"].value,
        "pages": formulario["numpaginas"].value,
        "genre": formulario["genero"].value,
        "cover": formulario["cover"].value,
        "synopsis": formulario["resumen"].value,
        "year": formulario["anio"].value,
        "ISBN": formulario["isbn"].value,
        "author": formulario["autor"].value
    });
    console.log(library.length);
}