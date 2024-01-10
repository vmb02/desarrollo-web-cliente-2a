let texto1 = document.getElementById("texto1");

texto1.addEventListener("keyup", function() {
    let texto = texto1.value;
    document.getElementById("texto2").value = texto;
});