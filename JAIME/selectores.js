function altAnch(){
    let altura = prompt("Dame la altura");
    let anchura = prompt("Dame la anchura");

    let tablita = document.querySelector('table');
    //let tablita = document.getElementsByTagName('table')[0];
    tablita.setAttribute('height', altura);
    tablita.setAttribute('width', anchura);
}

function altAnchNuevo(){
    let altura = prompt("Dame la altura");
    let anchura = prompt("Dame la anchura");

    let tablita = document.querySelector('table');
    let alturaActual =tablita.getAttribute('height');
    tablita.setAttribute('height', altura+alturaActual);
    let anchuraActual =parseInt(tablita.getAttribute('width'));
    tablita.setAttribute('width', anchura+anchuraActual);
//parseInt("14");
}

function borde(){
    let borde = prompt("Que tipo de borde quieres?");
    let tablita = document.querySelector('table');

    tablita.setAttribute('border', borde);
}

function alineacion(){
    let tablita = document.querySelector('table');
    let alineacionActual = tablita.getAttribute('align');
    switch (alineacionActual) {
        case 'left':
            tablita.setAttribute('align', 'center');
            break;
        case 'center':
            tablita.setAttribute('align','right');
            break;
        case 'right':
            tablita.setAttribute('align','left');
            break;
        default:
                tablita.setAttribute('align', 'center');
    }
}



function clase(){
    let tablita = document.querySelector('table');
    let claseActual = tablita.getAttribute('class');

    if(claseActual == 'pakita'){
        tablita.setAttribute('class', 'chichio');
    }else if(claseActual == 'chichio'){    
        tablita.setAttribute('class', 'mierda');
    
    }else{
        tablita.setAttribute('class', 'pakita');
    }
}