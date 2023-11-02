// Por qué se define esto en la cabecera y debajo también????
let imag = document.querySelector("img");
let tipo = document.querySelector("img").getAttribute("src");

document.querySelectorAll("button")[1].onclick = function() {
    let imag = document.querySelector("img");
    let tipo = document.querySelector("img").getAttribute("src");
    switch(tipo) {
        case "IMG/f1.jpg":
            imag.setAttribute("src", "IMG/f2.jpg");
            document.querySelectorAll("button")[0].removeAttribute("disabled", "");
            break;
        case "IMG/f2.jpg":
            imag.setAttribute("src", "IMG/f3.jpg");
            break;
        case "IMG/f3.jpg":
            imag.setAttribute("src", "IMG/f4.jpg");
            break;
        case "IMG/f4.jpg":
            imag.setAttribute("src", "IMG/f5.jpg");
            document.querySelectorAll("button")[1].setAttribute("disabled", "");
            break;
        default:
            console.log("Boton deshabilitado");        
    }
}

document.querySelectorAll("button")[0].onclick = function() {
    let imag = document.querySelector("img");
    let tipo = document.querySelector("img").getAttribute("src");
    switch(tipo) {
        case "IMG/f2.jpg":
            imag.setAttribute("src", "IMG/f1.jpg");
            document.querySelectorAll("button")[0].setAttribute("disabled", "");
            break;
        case "IMG/f3.jpg":
            imag.setAttribute("src", "IMG/f2.jpg");
            break;
        case "IMG/f4.jpg":
            imag.setAttribute("src", "IMG/f3.jpg");
            break;
        case "IMG/f5.jpg":
            imag.setAttribute("src", "IMG/f4.jpg");
            document.querySelectorAll("button")[1].removeAttribute("disabled", "");
        default:
            console.log("Boton deshabilitado");        
    }
}