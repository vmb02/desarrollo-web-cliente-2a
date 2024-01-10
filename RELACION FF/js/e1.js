let boton = document.getElementById("btn");

boton.addEventListener("click", function() {
    let texto1 = document.getElementById("t1").value;
    let texto2 = document.getElementById("t2");
    texto2.value = texto1;
});