let boton = document.getElementById("boton");

boton.addEventListener("click", function() {

    let texto = document.getElementById("t1").value;
    document.getElementById("t2").value = texto;

});