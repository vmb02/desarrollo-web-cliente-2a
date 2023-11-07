let body = document.querySelector("body");

document.querySelectorAll("button")[0].onclick = function() {
    let p = document.createElement("p");
    p.setAttribute("class", "dos");
    var texto = document.createTextNode("Este parrafo no esistía antes.");
    p.appendChild(texto);
    body.insertBefore(p, body.children[body.children.length-5]);
    document.querySelectorAll("button")[2].removeAttribute("disabled", "");
}

document.querySelectorAll("button")[1].onclick = function() {
    let original = document.querySelectorAll("p")[body.children.length-5];
    body.removeChild(original);
    document.querySelectorAll("button")[1].setAttribute("disabled", "true");
    document.querySelectorAll("button")[3].setAttribute("disabled", "true");
}

document.querySelectorAll("button")[2].onclick = function() {
    let nuevos = document.querySelectorAll("p.dos");
    for(let i = 0; i < nuevos.length; i++) {
        body.removeChild(nuevos[i]);
    }
    document.querySelectorAll("button")[2].setAttribute("disabled", "true");
}

document.querySelectorAll("button")[3].onclick = function() {
    let p_antiguo = document.querySelector("p.uno");
    let t = document.createElement("table");
    t.innerHTML = "<tbody><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></tbody>";
    body.replaceChild(t, p_antiguo);
} 
/*   
FORMA PABLO
document.querySelectorAll("button")[3].onclick = function () {
    let parrafoAntiguos = document.querySelectorAll("p")[0];
    let tabla = document.createElement("table");
    tabla.innerHTML = "<tbody><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></tbody>";
    parrafoAntiguos.innerHTML = "";
    parrafoAntiguos.appendChild(tabla);

};
*/