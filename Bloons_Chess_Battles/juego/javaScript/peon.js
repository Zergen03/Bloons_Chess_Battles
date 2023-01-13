function moverPeon(peon) {

    //convierte la id de la casilla donde esta el peon en un principio en variable gloval
    casillaOriginal = peon.id;
    //la posicion del peon
    var posicion = [peon.id[0], peon.id[2]];
    //Seleccionar la celda de delante dependiendo del color del peon
    var colorPeon;
    if(peon.childNodes[0].id.includes("Blc")){
        colorPeon = true;
    }else{
        colorPeon = false
    }
    if (colorPeon) {
        posicion[0]--;
        var idCelda = posicion[0] + "-" + posicion[1];
        var celdaDelante = document.getElementById(idCelda);
    } else if (!colorPeon) {
        posicion[0]++;
        var idCelda = posicion[0] + "-" + posicion[1];
        var celdaDelante = document.getElementById(idCelda);
    }


    //Busca la diagonal izquierda
    comerIzquierda = [idCelda[0], idCelda[2]];
    comerIzquierda[1]--;
    comerIzquierda = comerIzquierda[0] + "-" + comerIzquierda[1];
    //Busca la diagonal derecha
    comerDerecha = [idCelda[0], idCelda[2]];
    comerDerecha[1]++;
    comerDerecha = comerDerecha[0] + "-" + comerDerecha[1];


    //Comprobar si hay una pieza en la diagonal izquierda
    if (peon.id[2] != 0) {
        if (document.getElementById(comerIzquierda).hasChildNodes()) {
            //comprueba si la pieza de la diagonal derecha es del mismo color que esta, de lo contrario permite matarla
            if (peon.childNodes[0].id.includes("Blc")) {
                if (!document.getElementById(comerIzquierda).childNodes[0].id.includes("Blc")) {
                    marcarCelda(document.getElementById(comerIzquierda));
                    document.getElementById(comerIzquierda).addEventListener("click", movimientoPiezaPeon);
                }
            }
            else if (peon.childNodes[0].id.includes("Ngr")) {
                if (!document.getElementById(comerIzquierda).childNodes[0].id.includes("Ngr")) {
                    marcarCelda(document.getElementById(comerIzquierda));
                    document.getElementById(comerIzquierda).addEventListener("click", movimientoPiezaPeon);
                }
            }
        }
    }


    //Comprobar si hay una pieza en la diagonal derecha
    if (peon.id[2] != 7) {
        if (document.getElementById(comerDerecha).hasChildNodes()) {
            //comprueba si la pieza de la diagonal derecha es del mismo color que esta, de lo contrario permite matarla
            if (peon.childNodes[0].id.includes("Blc")) {
                if (!document.getElementById(comerDerecha).childNodes[0].id.includes("Blc")) {
                    marcarCelda(document.getElementById(comerDerecha));
                    document.getElementById(comerDerecha).addEventListener("click", movimientoPiezaPeon);
                }
            }
            else if (peon.childNodes[0].id.includes("Ngr")) {
                if (!document.getElementById(comerDerecha).childNodes[0].id.includes("Ngr")) {
                    marcarCelda(document.getElementById(comerDerecha));
                    document.getElementById(comerDerecha).addEventListener("click", movimientoPiezaPeon);
                }
            }

        }
    }


    //se tienen que iluminar las celdas a las que se puede mover
    if (!celdaDelante.hasChildNodes()) {
        marcarCelda(celdaDelante);
    }

    //añadir evento a las celdas a las que se puede mover
    celdaAdelante = celdaDelante.id;
    //si no hay piezas en la casilla de delante permite mover a esta
    if (celdaDelante.childNodes[0].id.includes("cruzVerde")) {
        celdaDelante.addEventListener("click", movimientoPiezaPeon);
    }


    // mover blancos 2 casillas
    if (celdaDelante.childNodes[0].id.includes("cruzVerde")) {
        if (peon.childNodes[0].id.includes("Blc")) {
            if (peon.id[0] == 6) {
                celdaDoblePeon = [idCelda[0], idCelda[2]];
                celdaDoblePeon[0]--;
                celdaDoblePeon = celdaDoblePeon[0] + "-" + celdaDoblePeon[1];
                if (!document.getElementById(celdaDoblePeon).hasChildNodes()) {
                    marcarCelda(document.getElementById(celdaDoblePeon));
                    document.getElementById(celdaDoblePeon).addEventListener("click", movimientoPiezaPeon);
                }
            }
        }
        if (peon.childNodes[0].id.includes("Ngr")) {
            if (peon.id[0] == 1) {
                celdaDoblePeon = [idCelda[0], idCelda[2]];
                celdaDoblePeon[0]++;
                celdaDoblePeon = celdaDoblePeon[0] + "-" + celdaDoblePeon[1];
                if (!document.getElementById(celdaDoblePeon).hasChildNodes()) {
                    marcarCelda(document.getElementById(celdaDoblePeon));
                    document.getElementById(celdaDoblePeon).addEventListener("click", movimientoPiezaPeon);
                }
            }
        }
    }
}

function movimientoPiezaPeon(seleccionar) {

    let cruces = document.querySelectorAll("img");
    let idCruces = new Array();
    for (i = 0; i < cruces.length; i++) {
        if (cruces[i].id.includes("cruz")) {
            document.getElementById(cruces[i].id).remove();
        }
    }
    let hijo = document.getElementById(casillaOriginal).childNodes[0];
    if (seleccionar) {
        if (this.hasChildNodes()) {
            if (this.childNodes[0].id.includes("reyBlc")) {
                window.location.href = "./victoriaMonos.html";
            }
            else if (this.childNodes[0].id.includes("reyNgr")) {
                window.location.href = "./victoriaGlobos.html";
            }
        }

        hijo.parentNode.removeChild(hijo);
        hijo = "";

        if(turnoBlancas){
            turnoBlancas= false;
        }
        else{
            turnoBlancas= true;
        }
    }
    else {
        hijo.removeAttribute("onclick");
        hijo.removeAttribute("style");
        hijo.setAttribute("onclick", "cogerPieza(this)");
    }
    this.innerHTML = "<img src =" + piezaGlobal.src + " width=" + piezaGlobal.width + " onclick= 'cogerPieza(this)' id=" + piezaGlobal.id + " style='position: relative;'>";

    moviendo = false;
    document.getElementById(celdaAdelante).removeEventListener("click", movimientoPiezaPeon);
    if (document.getElementById(casillaOriginal).id[2] != 7) {
        document.getElementById(comerDerecha).removeEventListener("click", movimientoPiezaPeon);
    }
    if (document.getElementById(casillaOriginal).id[2] != 0) {
        document.getElementById(comerIzquierda).removeEventListener("click", movimientoPiezaPeon);
    }
    if (celdaDoblePeon != "") {
        document.getElementById(celdaDoblePeon).removeEventListener("click", movimientoPiezaPeon);
        celdaDoblePeon = "";
    }
    if(this.childNodes[0].id.includes("Blc")){
        comprobarJaque("Blc");
    }else{
        comprobarJaque("Ngr");
    }
}