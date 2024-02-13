window.onload = function() {

    let datosEnBruto = JSON.parse(sessionStorage.getItem('libro'));
    let tablaDatos = ["Titulo", "Autor", "Paginas", "Genero", "Año", "ISBN", "Sinopsis"];
    let valoresDatos = [];

    valoresDatos.push(datosEnBruto.title);
    valoresDatos.push(datosEnBruto.author.name);
    valoresDatos.push(datosEnBruto.pages);
    valoresDatos.push(datosEnBruto.genre);
    valoresDatos.push(datosEnBruto.year);
    valoresDatos.push(datosEnBruto.ISBN);
    valoresDatos.push(datosEnBruto.synopsis);

    let tabla = document.createElement("table");
    let tbody = document.createElement("tbody");

    for(let i = 0; i < 7; i++) {
        let fila = document.createElement("tr");
        let c1 = document.createElement("td");
        let dato = document.createTextNode(tablaDatos[i]);
        c1.appendChild(dato);
        let c2 = document.createElement("td");
        c2.appendChild(document.createTextNode(valoresDatos[i]));
        fila.appendChild(c1);
        fila.appendChild(c2);
        tbody.appendChild(fila);
    }
    tabla.appendChild(tbody);

    let img = document.createElement("img");
    img.setAttribute("src", datosEnBruto.cover);
    img.setAttribute("alt", img);
    
    document.getElementsByTagName("section")[0].appendChild(tabla);
    document.getElementsByTagName("section")[0].appendChild(img);

    let boton = document.getElementsByTagName("a")[0];
    boton.addEventListener("click", function() {
        location.replace("inicio.html"); 
    });
}