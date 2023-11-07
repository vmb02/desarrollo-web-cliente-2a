window.onload = function() {
    var enlaces = document.querySelectorAll("a");

    for(let i = 0; i < enlaces.length; i++) {
        enlaces[i].onclick = function(e) {
            //e hace referencia al evento
            e.preventDefault();
            //this.href="#";
            alert("Enlaces de la página bloqueados.");
        }
    }
}