document.querySelectorAll("div")[0].onmouseover = function() {
    document.querySelector("body").style.setProperty("background-color", "green");
}
document.querySelectorAll("div")[0].onmouseleave = function() {
    document.querySelector("body").style.setProperty("background-color", "white");
}
document.querySelectorAll("div")[1].onmouseover = function() {
    document.querySelector("body").style.setProperty("background-color", "purple");
}
document.querySelectorAll("div")[1].onmouseleave = function() {
    document.querySelector("body").style.setProperty("background-color", "white");
}
document.querySelectorAll("div")[2].onmouseover = function() {
    document.querySelector("body").style.setProperty("background-color", "yellow");
}
document.querySelectorAll("div")[2].onmouseleave = function() {
    document.querySelector("body").style.setProperty("background-color", "white");
}