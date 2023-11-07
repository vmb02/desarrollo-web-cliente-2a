document.querySelectorAll("button")[0].onclick = function () {
    document.querySelectorAll("button")[0].setAttribute("disabled", "disabled");
    let timer = setInterval(function () {
        let valorAntiguo = document.getElementById("descarga").value;
        let valorActual = parseInt(valorAntiguo) + 1;
        document.getElementById("descarga").value = valorActual;
        if(valorActual == 100){
            clearInterval(timer);
            alert("Descarga completada")
            document.querySelectorAll("button")[0].removeAttribute("disabled");
        }
    }, 50); 
    
};

document.querySelectorAll("button")[1].onclick = function () {
    document.querySelectorAll("button")[1].setAttribute("disabled", "disabled");
    let timer = setInterval(function () {
        let valorAntiguo = document.getElementById("carga").value;
        let valorActual = parseInt(valorAntiguo) + 1;
        document.getElementById("carga").value = valorActual;
        if(valorActual == 100){
            clearInterval(timer);
            alert("Carga completada")
            document.querySelectorAll("button")[1].removeAttribute("disabled");
        }
    }, 50); 
};