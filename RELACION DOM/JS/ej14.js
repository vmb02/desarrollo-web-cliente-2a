function menu(li) {
    var sub = document.querySelectorAll(".submenu");
    sub.forEach((sub, i) => {
        if(i === li) {
            sub.classList.toggle("active");
        } else {
            sub.classList.remove("active");
        }
    })
}