let c1 = document.getElementById("t1");

c1.addEventListener("keyup", function() {
    let contenido = document.getElementById("t1").value;
    document.getElementById("t2").value = contenido;
});