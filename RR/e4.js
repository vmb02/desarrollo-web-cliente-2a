let imag = document.querySelector("img");
let tipo = document.querySelector("img").getAttribute("src");

document.querySelectorAll("button")[1].onclick = function() {
    let img = document.querySelector("img");
    let ruta = document.querySelector("img").getAttribute("src");
    switch(ruta) {
        case "IMG/f1.jpg":
            img.setAttribute("src", "IMG/f2.jpg");
            document.querySelectorAll("button")[0].removeAttribute("disabled", "");
            break;
        case "IMG/f2.jpg":
            img.setAttribute("src", "IMG/f3.jpg");
            break;
        case "IMG/f3.jpg":
            img.setAttribute("src", "IMG/f4.jpg");
            break;
        case "IMG/f4.jpg":
            img.setAttribute("src", "IMG/f5.jpg");
            document.querySelectorAll("button")[1].setAttribute("disabled", "true");
            break;
    }
}

document.querySelectorAll("button")[0].onclick = function() {
    let img = document.querySelector("img");
    let ruta = document.querySelector("img").getAttribute("src");
    switch(ruta) {
        case "IMG/f5.jpg":
            img.setAttribute("src", "IMG/f4.jpg");
            document.querySelectorAll("button")[1].removeAttribute("disabled", "");
        break;
        case "IMG/f4.jpg":
            img.setAttribute("src", "IMG/f3.jpg");
            break;
        case "IMG/f3.jpg":
            img.setAttribute("src", "IMG/f2.jpg");
            break;
        case "IMG/f2.jpg":
            img.setAttribute("src", "IMG/f1.jpg");
            document.querySelectorAll("button")[0].setAttribute("disabled", "true");
            break;

    }
}