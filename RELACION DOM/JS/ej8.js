document.querySelector("img").onmouseover = function() {
    document.querySelector("img").setAttribute("src", "IMG/f2.jpg");
}

document.querySelector("img").onmouseleave = function() {
    document.querySelector("img").setAttribute("src", "IMG/f1.jpg");
}