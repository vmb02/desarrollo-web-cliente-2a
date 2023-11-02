function consulta() {

    var dedo = document.getElementById("unico");
    var estilos = window.getComputedStyle(dedo);
/*
    var resultado = 1000;

    //dedo.style.width = resultado+"px";
    dedo.style.setProperty('width', resultado+'px');
    dedo.style.height = "500px";
    dedo.style.color = "#FFF";
    dedo.style.border = "2px dashed black";

    //dedo.style.backgroundColor = "#777";
    dedo.style.setProperty('background-color', '#0F0');
    dedo.style.fontSize = "4em";
    dedo.style.fontWeight = "Normal";

    //Consultar valores de propiedades CSS

    var salida = dedo.style.color;
    console.log(salida);
    salida = dedo.style.border;
    console.log(salida);
    salida = dedo.style.fontSize;
    console.log(salida);
    salida = dedo.style.textAlign;
    console.log("Este es el textAlign: "+salida);
    salida = dedo.style.margin;
    console.log("Este es el margin: "+salida);
    //Estas dos últimas no salen porque hemos tocado el estilo, no directamente las propiedades definidas en el CSS

*/
    //getComputedStyle
    //lo primero que tenemos que hacer es obtener su hoja de estilo
    var salida = estilos.getPropertyValue('width');
    console.log("Anchura: "+salida);

    var salida = estilos.getPropertyValue('text-align');
    console.log("TA: "+salida);

    var salida = estilos.getPropertyValue('margin');
    console.log("Margin: "+salida);

    var salida = estilos.getPropertyValue('margin-top');
    console.log("MT: "+salida);

    var salida = estilos.getPropertyValue('margin-left');
    console.log("ML: "+salida);

    var salida = estilos.getPropertyValue('margin-right');
    console.log("MR: "+salida);

    var salida = estilos.getPropertyValue('background-color');
    console.log("BC: "+salida);
    
    var salida = estilos.getPropertyValue('font-size');
    console.log("FS: "+salida);

}