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
        let td1 = document.createElement("td");
        let dato = document.createTextNode(tablaDatos[i]);
        td1.appendChild(dato);
        let td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(valoresDatos[i]));
        fila.appendChild(td1);
        fila.appendChild(td2);
        tbody.appendChild(fila);
    }

    tabla.appendChild(tbody);

    let img = document.createElement("img");
    img.setAttribute("src", datosEnBruto.cover);
    img.setAttribute("alt", datosEnBruto.title);
    document.getElementById("info").appendChild(tabla);
    document.getElementById("info").appendChild(img);
}

document.getElementsByTagName("a")[0].addEventListener("click", function() {
    //location.replace("mostrar.html");
    alert("zomake");
});