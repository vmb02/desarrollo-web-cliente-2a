document.querySelectorAll("a")[0].onmouseover = function() {
    let d = document.createElement("div");
    let enlace = document.querySelectorAll("a")[0].getAttribute("href");
    let letras = document.createTextNode("La URL es: "+enlace);
    d.setAttribute("class", "divi");
    d.appendChild(letras);
    document.body.appendChild(d);
}

document.querySelectorAll("a")[0].onmouseleave = function() {
    document.body.removeChild(document.querySelectorAll("div")[0]);
}

document.querySelectorAll("a")[1].onmouseover = function() {
    let d = document.createElement("div");
    let enlace = document.querySelectorAll("a")[1].getAttribute("href");
    let letras = document.createTextNode("La URL es: "+enlace);
    d.setAttribute("class", "divi");
    d.appendChild(letras);
    document.body.appendChild(d);
}

document.querySelectorAll("a")[1].onmouseleave = function() {
    document.body.removeChild(document.querySelectorAll("div")[0]);
}

