let img = document.querySelectorAll("img");

img[0].onclick = function() {
    let capa = document.createElement("div");
    capa.style.position = "fixed";
    capa.style.top = "0";
    capa.style.left = "0";
    capa.style.right = "0";
    capa.style.bottom = "0";
    capa.style.width = "100%";
    capa.style.height = "100%"
    capa.style.backgroundColor = "rgba(0,0,0,0.7)";
    capa.style.zIndex = "9";

    let imgAmpliada = document.createElement("img");
    imgAmpliada.src = "img/img1.jpg";
    imgAmpliada.style.position = "absolute";
    imgAmpliada.style.top = "50%";
    imgAmpliada.style.left = "50%";
    imgAmpliada.style.transform = "translate(-50%, -50%)";
    imgAmpliada.style.maxWidth = "100%";
    imgAmpliada.style.maxHeight = "100%";

    capa.appendChild(imgAmpliada);
    document.body.appendChild(capa);

    capa.addEventListener("click", function () {
        document.body.removeChild(capa);
    });
}

img[1].onclick = function() {
    let capa = document.createElement("div");
    capa.style.position = "fixed";
    capa.style.top = "0";
    capa.style.left = "0";
    capa.style.right = "0";
    capa.style.bottom = "0";
    capa.style.width = "100%";
    capa.style.height = "100%"
    capa.style.backgroundColor = "rgba(0,0,0,0.7)";
    capa.style.zIndex = "9";

    let imgAmpliada = document.createElement("img");
    imgAmpliada.src = "img/img2.jpg";
    imgAmpliada.style.position = "absolute";
    imgAmpliada.style.top = "50%";
    imgAmpliada.style.left = "50%";
    imgAmpliada.style.transform = "translate(-50%, -50%)";
    imgAmpliada.style.maxWidth = "100%";
    imgAmpliada.style.maxHeight = "100%";

    capa.appendChild(imgAmpliada);
    document.body.appendChild(capa);

    capa.addEventListener("click", function () {
        document.body.removeChild(capa);
    });
}

