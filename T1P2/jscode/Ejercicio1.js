document.querySelectorAll("input")[0].onclick = function() {
    
    document.querySelectorAll("input")[0].setAttribute("disabled", "true");
    document.querySelectorAll("input")[1].removeAttribute("disabled", "");

    //Div izquierdo
    let dI = document.getElementById("ladoIzq");
    

    //Div derecho
    let dD = document.getElementById("ladoDer"); 
  
    //Div salida
    let dS = document.getElementById("salida");
    dS.textContent = "";
    
    let timer;

    timer = setInterval(function() {
        dI.textContent = parseInt(Math.random() * 50 + 1);
        dD.textContent = parseInt(Math.random() * 50 + 1);
    }, 500);

    document.querySelectorAll("input")[1].onclick = function() {
        clearInterval(timer);

        //Si el contenido del div derecho es mayor al izquierdo, asignamos al de salida el valor del derecho
        if(dD.textContent > dI.textContent) {
            dS.textContent = dD.textContent;
        } else {
            //Sino asignamos el izquierdo
            dS.textContent = dI.textContent;
        }
        document.querySelectorAll("input")[0].removeAttribute("disabled", "");
        document.querySelectorAll("input")[1].setAttribute("disabled", "true");
    }    
}