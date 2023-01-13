function moverRey(rey, colorRey) {
    //identificar direcciones
    casillaOriginal = rey.id;
    colorPieza = colorRey;

    var posicion = [rey.id[0], rey.id[2]];
    let arriba = posicion[0];
    arriba--;
    let abajo = posicion[0];
    abajo++;
    let izquierda = posicion[1];
    izquierda--;
    let derecha = posicion[1];
    derecha++;
    let izquierda2 = parseInt(posicion[1]);
    izquierda2 -= 2;
    let derecha2 = parseInt(posicion[1]);
    derecha2 += 2;
    let derecha3 = parseInt(posicion[1]);
    derecha3 += 3;
    let izquierda3 = parseInt(posicion[1]);
    izquierda3 -= 3;
    let izquierda4 = parseInt(posicion[1]);
    izquierda4 -= 4;

    var celdaArriba = document.getElementById(arriba + "-" + posicion[1]);
    var celdaAbajo = document.getElementById(abajo + "-" + posicion[1]);
    var celdaIzquierda = document.getElementById(posicion[0] + "-" + izquierda);
    var celdaDerecha = document.getElementById(posicion[0] + "-" + derecha);

    if (turnoBlancas) {
        if (enroqueBlc == false) {
            var celda2Derecha = document.getElementById(posicion[0] + "-" + derecha2);
            var celda2Izquierda = document.getElementById(posicion[0] + "-" + izquierda2);
            var celdaTorreDerecha = document.getElementById(posicion[0] + "-" + derecha3);
            var celdaTorreIzquierda = document.getElementById(posicion[0] + "-" + izquierda4);
        }
    }
    else {
        if (enroqueNgr == false) {
            var celda2Derecha = document.getElementById(posicion[0] + "-" + derecha2);
            var celda2Izquierda = document.getElementById(posicion[0] + "-" + izquierda2);
            var celdaTorreDerecha = document.getElementById(posicion[0] + "-" + derecha3);
            var celdaTorreIzquierda = document.getElementById(posicion[0] + "-" + izquierda4);
        }
    }

    var arribaIzquierda = document.getElementById(arriba + "-" + izquierda);
    var arribaDerecha = document.getElementById(arriba + "-" + derecha);
    var abajoIzquierda = document.getElementById(abajo + "-" + izquierda);
    var abajoDerecha = document.getElementById(abajo + "-" + derecha);

    //Movimiento rey blanco
    if (rey.childNodes[0].id.includes("Blc")) {
        //Enroque derecha
        if (enroqueBlc == false && !celdaDerecha.hasChildNodes()) {
            if (!celda2Derecha.hasChildNodes()) {
                marcarCelda(celdaTorreDerecha, true);
                celdaTorreDerecha.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Enroque izquierda
        if (enroqueBlc == false && !celdaIzquierda.hasChildNodes()) {
            if (!celda2Izquierda.hasChildNodes()) {
                marcarCelda(celdaTorreIzquierda, true);
                celdaTorreIzquierda.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey blanco arriba
        if (rey.id[0] > 0) {
            if (!celdaArriba.hasChildNodes() || celdaArriba.childNodes[0].id.includes("Ngr")) {
                marcarCelda(celdaArriba);
                celdaArriba.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey blanco abajo
        if (rey.id[0] < 7) {
            if (!celdaAbajo.hasChildNodes() || celdaAbajo.childNodes[0].id.includes("Ngr")) {
                marcarCelda(celdaAbajo);
                celdaAbajo.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey blanco izquierda
        if (rey.id[2] > 0) {
            if (!celdaIzquierda.hasChildNodes() || celdaIzquierda.childNodes[0].id.includes("Ngr")) {
                marcarCelda(celdaIzquierda);
                celdaIzquierda.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey blanco derecha
        if (rey.id[2] < 7) {
            if (!celdaDerecha.hasChildNodes() || celdaDerecha.childNodes[0].id.includes("Ngr")) {
                marcarCelda(celdaDerecha);
                celdaDerecha.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey blanco arriba izquierda
        if (rey.id[0] > 0 && rey.id[2] > 0) {
            if (!arribaIzquierda.hasChildNodes() || arribaIzquierda.childNodes[0].id.includes("Ngr")) {
                marcarCelda(arribaIzquierda);
                arribaIzquierda.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey blanco arriba derecha
        if (rey.id[0] > 0 && rey.id[2] < 7) {
            if (!arribaDerecha.hasChildNodes() || arribaDerecha.childNodes[0].id.includes("Ngr")) {
                marcarCelda(arribaDerecha);
                arribaDerecha.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey blanco abajo izquierda
        if (rey.id[0] < 7 && rey.id[2] > 0) {
            if (!abajoIzquierda.hasChildNodes() || abajoIzquierda.childNodes[0].id.includes("Ngr")) {
                marcarCelda(abajoIzquierda);
                abajoIzquierda.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey blanco abajo derecha
        if (rey.id[0] < 7 && rey.id[2] < 7) {
            if (!abajoDerecha.hasChildNodes() || abajoDerecha.childNodes[0].id.includes("Ngr")) {
                marcarCelda(abajoDerecha);
                abajoDerecha.addEventListener("click", movimientoPiezaRey);
            }
        }

    }
    //Movimiento rey negro
    if (rey.childNodes[0].id.includes("Ngr")) {
        //Enroque derecha
        if (enroqueNgr == false && !celdaDerecha.hasChildNodes()) {
            if (!celda2Derecha.hasChildNodes()) {
                marcarCelda(celdaTorreDerecha, true);
                celdaTorreDerecha.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Enroque izquierda
        if (enroqueNgr == false && !celdaIzquierda.hasChildNodes()) {
            if (!celda2Izquierda.hasChildNodes()) {
                marcarCelda(celdaTorreIzquierda, true);
                celdaTorreIzquierda.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey negro arriba
        if (rey.id[0] > 0) {
            if (!celdaArriba.hasChildNodes() || celdaArriba.childNodes[0].id.includes("Blc")) {
                marcarCelda(celdaArriba);
                celdaArriba.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey negro abajo
        if (rey.id[0] < 7) {
            if (!celdaAbajo.hasChildNodes() || celdaAbajo.childNodes[0].id.includes("Blc")) {
                marcarCelda(celdaAbajo);
                celdaAbajo.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey negro izquierda
        if (rey.id[2] > 0) {
            if (!celdaIzquierda.hasChildNodes() || celdaIzquierda.childNodes[0].id.includes("Blc")) {
                marcarCelda(celdaIzquierda);
                celdaIzquierda.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey negro derecha
        if (rey.id[2] < 7) {
            if (!celdaDerecha.hasChildNodes() || celdaDerecha.childNodes[0].id.includes("Blc")) {
                marcarCelda(celdaDerecha);
                celdaDerecha.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey negro arriba izquierda
        if (rey.id[0] > 0 && rey.id[2] > 0) {
            if (!arribaIzquierda.hasChildNodes() || arribaIzquierda.childNodes[0].id.includes("Blc")) {
                marcarCelda(arribaIzquierda);
                arribaIzquierda.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey negro arriba derecha
        if (rey.id[0] > 0 && rey.id[2] < 7) {
            if (!arribaDerecha.hasChildNodes() || arribaDerecha.childNodes[0].id.includes("Blc")) {
                marcarCelda(arribaDerecha);
                arribaDerecha.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey negro abajo izquierda
        if (rey.id[0] < 7 && rey.id[2] > 0) {
            if (!abajoIzquierda.hasChildNodes() || abajoIzquierda.childNodes[0].id.includes("Blc")) {
                marcarCelda(abajoIzquierda);
                abajoIzquierda.addEventListener("click", movimientoPiezaRey);
            }
        }
        //Mover rey negro abajo derecha
        if (rey.id[0] < 7 && rey.id[2] < 7) {
            if (!abajoDerecha.hasChildNodes() || abajoDerecha.childNodes[0].id.includes("Blc")) {
                marcarCelda(abajoDerecha);
                abajoDerecha.addEventListener("click", movimientoPiezaRey);
            }
        }
    }
}



function movimientoPiezaRey(seleccionar) {
    let cruces = document.querySelectorAll("img");
    let idCruces = new Array();
    for (i = 0; i < cruces.length; i++) {
        if (cruces[i].id.includes("cruz")) {
            document.getElementById(cruces[i].id).parentNode.removeEventListener("click", movimientoPiezaRey);
            // document.getElementById(cruces[i].id).parentNode.removeEventListener("click", movimientoEnroque)
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

        if (turnoBlancas) {
            turnoBlancas = false;
        }
        else {
            turnoBlancas = true;
        }
    }
    else {
        hijo.removeAttribute("onclick");
        hijo.removeAttribute("style");
        hijo.setAttribute("onclick", "cogerPieza(this)");
    }
    if (seleccionar) {
        if (this.hasChildNodes()) {
            if (this.childNodes[0].id.includes("torre")) {
                if (this.childNodes[0].id.includes("drc")) {
                    let enroqueDerecha = this.id[0];
                    let enroqueDerechaTorre = document.getElementById(enroqueDerecha + "-" + "5");
                    enroqueDerecha = document.getElementById(enroqueDerecha + "-" + "6");
                    let torre = document.getElementById(this.childNodes[0].id);

                    document.getElementById(torre.id).remove();
                    enroqueDerechaTorre.innerHTML = "<img src =" + torre.src + " width=" + torre.width + " onclick= 'cogerPieza(this)' id=" + torre.id + " style='position: relative;'>";
                    enroqueDerecha.innerHTML = "<img src =" + piezaGlobal.src + " width=" + piezaGlobal.width + " onclick= 'cogerPieza(this)' id=" + piezaGlobal.id + " style='position: relative;'>";
                    if (!turnoBlancas) {
                        enroqueBlc = true;
                    }
                    else {
                        enroqueNgr = true;
                    }

                }
                else {
                    let enroqueIzquierda = this.id[0];
                    let enroqueIzquierdaTorre = document.getElementById(enroqueIzquierda + "-" + "3");
                    enroqueIzquierda = document.getElementById(enroqueIzquierda + "-" + "2");
                    let torre = document.getElementById(this.childNodes[0].id);

                    document.getElementById(torre.id).remove();
                    enroqueIzquierdaTorre.innerHTML = "<img src =" + torre.src + " width=" + torre.width + " onclick= 'cogerPieza(this)' id=" + torre.id + " style='position: relative;'>";
                    enroqueIzquierda.innerHTML = "<img src =" + piezaGlobal.src + " width=" + piezaGlobal.width + " onclick= 'cogerPieza(this)' id=" + piezaGlobal.id + " style='position: relative;'>";
                    if (!turnoBlancas) {
                        enroqueBlc = true;
                    }
                    else {
                        enroqueNgr = true;
                    }
                }
            }
        }
        else {
            this.innerHTML = "<img src =" + piezaGlobal.src + " width=" + piezaGlobal.width + " onclick= 'cogerPieza(this)' id=" + piezaGlobal.id + " style='position: relative;'>";
            if (!turnoBlancas) {
                enroqueBlc = true;
            }
            else {
                enroqueNgr = true;
            }
        }
    }
    moviendo = false;
}


function comprobarJaque(colorPieza) {
    var colorEnemigo;
    if (colorPieza == "Blc") {
        colorEnemigo = "Ngr";
    } else {
        colorEnemigo = "Blc";
    }
    var casillaReyEnemigo = buscarReyEnemigo(colorEnemigo);
    //poner cruces de todos los movimientos posibles
    for (fila = 0; fila < 8; fila++) {
        for (columna = 0; columna < 8; columna++) {
            if (document.getElementById(fila + "-" + columna).hasChildNodes()) {
                if (document.getElementById(fila + "-" + columna).childNodes[0].id.includes(colorPieza)) {
                    if (document.getElementById(fila + "-" + columna).childNodes[0].id.includes("alfil")) {
                        moverAlfil(document.getElementById(fila + "-" + columna));
                    } else if (document.getElementById(fila + "-" + columna).childNodes[0].id.includes("caballo")) {
                        moverCaballo(document.getElementById(fila + "-" + columna));
                    } else if (document.getElementById(fila + "-" + columna).childNodes[0].id.includes("peon")) {
                        moverPeon(document.getElementById(fila + "-" + columna));
                    } else if (document.getElementById(fila + "-" + columna).childNodes[0].id.includes("reina")) {
                        moverReina(document.getElementById(fila + "-" + columna));
                    } else if (document.getElementById(fila + "-" + columna).childNodes[0].id.includes("rey")) {
                        moverRey(document.getElementById(fila + "-" + columna));
                    } else if (document.getElementById(fila + "-" + columna).childNodes[0].id.includes("torre")) {
                        moverTorre(document.getElementById(fila + "-" + columna));
                    }
                }
            }
        }
    }
            for (i = 0; i < document.getElementById(casillaReyEnemigo).childNodes.length; i++) {
                if (document.getElementById(casillaReyEnemigo).childNodes[i].id.includes("cruz")) {
                    alert("jaque");
                }
            }
            let cruces = document.querySelectorAll("img");
            let idCruces = new Array();
            for (i = 0; i < cruces.length; i++) {
                if (cruces[i].id.includes("cruz")) {
                    document.getElementById(cruces[i].id).parentNode.removeEventListener("click", movimientoPiezaAlfil);
                    document.getElementById(cruces[i].id).parentNode.removeEventListener("click", movimientoPiezaCaballo);
                    document.getElementById(cruces[i].id).parentNode.removeEventListener("click", movimientoPiezaPeon);
                    document.getElementById(cruces[i].id).parentNode.removeEventListener("click", movimientoPiezaReina);
                    document.getElementById(cruces[i].id).parentNode.removeEventListener("click", movimientoPiezaTorre);
                    document.getElementById(cruces[i].id).parentNode.removeEventListener("click", movimientoPiezaRey);
                    document.getElementById(cruces[i].id).remove();
                }
            }




    // if (document.getElementById(casillaReyEnemigo.childNodes.includes("cruzRoja"))) {
    // }
}



function buscarReyEnemigo(colorEnemigo) {

    for (fila = 0; fila < 8; fila++) {
        for (columna = 0; columna < 8; columna++) {
            var casilla = document.getElementById(fila + "-" + columna);
            var idCasilla = (fila + "-" + columna);
            if(casilla.hasChildNodes()){
               if (casilla.childNodes[0].id.includes("rey" + colorEnemigo)) {
                return idCasilla;
            }
            }
        }
    }
    if(this.childNodes[0].id.includes("Blc")){
        comprobarJaque("Blc");
    }else{
        comprobarJaque("Ngr");
    }
}