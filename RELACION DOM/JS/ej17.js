let timer;
let div1 = document.querySelectorAll("div")[0];
let div2 = document.querySelectorAll("div")[1];
let div3 = document.querySelectorAll("div")[2];
let div4 = document.querySelectorAll("div")[3];

document.querySelectorAll("button")[0].onclick = function () {
  let velocidades = [];
  let final = false;
  let estilo1 = window.getComputedStyle(div1);
  let estilo2 = window.getComputedStyle(div2);
  let estilo3 = window.getComputedStyle(div3);
  let estilo4 = window.getComputedStyle(div4);

  for (let i = 1; i <= 4; i++) {
    velocidades.push(parseInt(Math.random() * 5 + 1));
  }

  
  timer = setInterval(function() {
    if (!final) {
      div1.style.setProperty(
        "left",
        parseInt(estilo1.getPropertyValue("left")) + velocidades[0] + "px"
      );
      if (parseInt(estilo1.getPropertyValue("left")) >= 1080) {
        final = true;
        alert("Ha ganado el div 1");
      }
      div2.style.setProperty(
        "left",
        parseInt(estilo2.getPropertyValue("left")) + velocidades[1] + "px"
      );
      if (parseInt(estilo2.getPropertyValue("left")) >= 1080) {
        final = true;
        alert("Ha ganado el div 2");
      }
      div3.style.setProperty(
        "left",
        parseInt(estilo3.getPropertyValue("left")) + velocidades[2] + "px"
      );
      if (parseInt(estilo3.getPropertyValue("left")) >= 1080) {
        final = true;
        alert("Ha ganado el div 3");
      }
      div4.style.setProperty(
        "left",
        parseInt(estilo4.getPropertyValue("left")) + velocidades[3] + "px"
      );
      if (parseInt(estilo4.getPropertyValue("left")) >= 1080) {
        final = true;
        alert("Ha ganado el div 4");
      }
    } else {
      clearInterval(timer);
    }
  }, 50);
};

document.querySelectorAll("button")[1].onclick = function () {
  div1.style.setProperty("left", "0px");
  div2.style.setProperty("left", "0px");
  div3.style.setProperty("left", "0px");
  div4.style.setProperty("left", "0px");
  clearInterval(timer);
};