let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");
let check3 = document.getElementById("check3");
let check4 = document.getElementById("check4");
let check5 = document.getElementById("check5");
let div = document.getElementsByClassName("gigante")[0];

check1.addEventListener("click", function(){
    if(check1.checked) {
        div.style.backgroundColor = "blue";
    }
});

check2.addEventListener("click", function(){
    if(check2.checked) {
        div.style.backgroundColor = "red";
    }
});

check3.addEventListener("click", function(){
    if(check3.checked) {
        div.style.backgroundColor = "green";
    }
});

check4.addEventListener("click", function(){
    if(check4.checked) {
        div.style.backgroundColor = "yellow";
    }
});

check5.addEventListener("click", function(){
    if(check5.checked) {
        div.style.backgroundColor = "pink";
    }
});