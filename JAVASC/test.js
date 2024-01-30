window.onload = () =>{
    const origen = "texto.txt";
    let salida = document.querySelector("section");

    //1 - creo el código
    xhr = new XMLHttpRequest();

    //2 - hago la petición
    xhr.open("GET", origen);

    //3 
    xhr.addEventListener("load", function(respuesta) {
        console.log("TODO OK");
        let resultado = JSON.parse(respuesta.target.response);
        //console.log(respuesta);
        /*
        for(const libro of resultado.library) {
            salida.innerHTML += `<div>${libro.book.title} >><< ${libro.book.pages}</div>`;
        }*/
    });    

    //4
    xhr.addEventListener("error", function(respuesta) {
        console.log("ERROR");
        console.log(respuesta);
    }); 

    //5
    xhr.send();

    //Esto no es asíncrono
    console.log("Soy la última en aparecer");


};