/*function poder() {
    var dedo = document.querySelector("p");
   
    dedo.onclick = function() {
        cambiar(22);
    }
    console.log("evento añadido");
}


function cambiar(num) {
    var dedo = document.querySelector("p");
        
    if(num%2 == 0) dedo.style.backgroundColor = "lime";
    else dedo.style.backgroundColor = "olive";

    dedo.style.fontSize = "1.5em";
}*/

//QUE CUANDO CARGUE SE EJECUTE ESTO
window.onload = function() {
    var parrafos = document.querySelectorAll("p");
    
    for(let i = 0; i < parrafos.length; i++) {
        //Asignamos la función a cada párrafo
        parrafos[i].onclick = function() {
            this.style.backgroundColor = "lime";
            this.style.fontSize = "1.5em";
        }
    }

}