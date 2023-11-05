function cambios() {


    var m = document.getElementById('mensaje').toString();
    var pa = document.getElementById("parrafo");

    if(m == 'Mostrar') {
        m.textContent = "Ocultar";
        pa.textContent = "Java Script me está tocando los kindeeers";


    } else {
        m.textContent = "Ocultar";
        pa.textContent = "";
    }
    
}
