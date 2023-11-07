/*document.querySelectorAll("div")[0].onmouseover = function() {
    document.querySelectorAll("div")[1].style.setProperty("visibility", "visible");
}
document.querySelectorAll("div")[0].onmouseleave = function() {
    document.querySelectorAll("div")[1].style.setProperty("visibility", "hidden");
}*/
document.querySelectorAll("div")[2].onmouseover = function() {
    document.querySelectorAll("div")[1].style.setProperty("display", "");
}
document.querySelectorAll("div")[2].onmouseleave = function() {
    document.querySelectorAll("div")[1].style.setProperty("display", "none");
}