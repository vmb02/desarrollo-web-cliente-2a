document.addEventListener("DOMContentLoaded", function() {

    let insertar = document.querySelector('[value="Insertar"]');
    let resetear = document.querySelector('[value="Resetear"]');
    let cancelar = document.querySelector('[value="Cancelar"]');

    cancelar.addEventListener("click", function() {
        sessionStorage.clear();
        window.location.href="inicio.html";
    });  

    resetear.addEventListener("click", function() {
        document.forms[0].reset();
    });  

    insertar.addEventListener("click", function() {
        crear_libro();
    });

    function crear_libro() {
        let formulario = document.getElementsByTagName("form")[0];
        console.log(formulario["titulo"].value);
        console.log(formulario["numpaginas"].value);        
        console.log(formulario["genero"].value);
        console.log(formulario["cover"].value);
        console.log(formulario["resumen"].value);
        console.log(formulario["anio"].value);
        console.log(formulario["isbn"].value);
        console.log(formulario["autor"].value);

        console.log(library.length);
        library.push(
            {
                "title": formulario["titulo"].value,
                "pages": formulario["numpaginas"].value,
                "genre": formulario["genero"].value,
                "cover": formulario["cover"].value,
                "synopsis": formulario["resumen"].value,
                "year": formulario["anio"].value,
                "ISBN": formulario["isbn"].value,
                "author": formulario["autor"].value
            }
        );
    }
});