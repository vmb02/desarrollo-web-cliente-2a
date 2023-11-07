function sumar() {
    var num = document.getElementsByTagName("p")[0];
    num.textContent = parseInt(num.textContent)+1;
}

function restar() {
    var num = document.querySelector("p");
    num.textContent = parseInt(num.textContent)-1;
}