document.querySelector("input").onclick = function() {

    let filas;
    let columnas;
    do {
        filas = parseInt(prompt("Introduzca el número de filas: "));
        columnas = parseInt(prompt("Introduzca el número de columnas: "));
    } while((filas<=0) || (filas>10) || (columnas<=0) || (columnas>10) || isNaN(filas) || isNaN(columnas));

    let tabla = document.createElement("table");
    tabla.setAttribute("class", "tabla");
    console.log(filas);
    console.log(columnas);
    for(let i = 1; i <= filas; i++) {
        let fil = document.createElement("tr");
        for(let j = 1; j <= columnas; j++) {
            let colum = document.createElement("td");
            let texto = document.createTextNode(i);
            colum.appendChild(texto);
            fil.appendChild(colum);
        }
        tabla.appendChild(fil);
    }
    console.log(tabla);
    let solucion = document.querySelector("div");
    solucion.appendChild(tabla);
}