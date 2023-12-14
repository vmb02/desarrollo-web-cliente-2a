/* let boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    let c1 = document.getElementById("c1");
    let c2 = document.getElementById("c2");
    let c3 = document.getElementById("c3");
    let c4 = document.getElementById("c4");
    let c5 = document.getElementById("c5");
    let texto = "";

    if(c1.checked) {
        texto += c1.value + "\n";
    }

    if(c2.checked) {
        texto += c2.value + "\n";
    }

    if(c3.checked) {
        texto += c3.value + "\n";
    }

    if(c4.checked) {
        texto += c4.value + "\n";
    }

    if(c5.checked) {
        texto += c5.value + "\n";
    }

    document.getElementsByTagName("textarea")[0].value = texto;
}); */

let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");

c1.addEventListener("click", function() {
    if(c1.checked) {
        document.getElementsByTagName("textarea")[0].value += c1.value + "\n";
    } else {
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(c1.value + "\n", "");
    }
});

c2.addEventListener("click", function() {
    if(c2.checked) {
        document.getElementsByTagName("textarea")[0].value += c2.value + "\n";
    } else {
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(c2.value + "\n", "");
    }
});

c3.addEventListener("click", function() {
    if(c3.checked) {
        document.getElementsByTagName("textarea")[0].value += c3.value + "\n";
    } else {
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(c3.value + "\n", "");
    }
});

c4.addEventListener("click", function() {
    if(c4.checked) {
        document.getElementsByTagName("textarea")[0].value += c4.value + "\n";
    } else {
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(c4.value + "\n", "");
    }
});

c5.addEventListener("click", function() {
    if(c5.checked) {
        document.getElementsByTagName("textarea")[0].value += c5.value + "\n";
    } else {
        document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(c5.value + "\n", "");
    }
});