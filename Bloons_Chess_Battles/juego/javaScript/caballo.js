function moverCaballo(caballo) {
    //identificar direcciones
    casillaOriginal = caballo.id;

    var posicion = [caballo.id[0], caballo.id[2]];
    let arriba = posicion[0];
    arriba--;
    let arriba2 = posicion[0];
    arriba2 = parseInt(arriba2) - 2;
    let abajo = posicion[0];
    abajo++;
    let abajo2 = posicion[0];
    abajo2 = parseInt(abajo2) + 2;
    let izquierda = posicion[1];
    izquierda--;
    let izquierda2 = posicion[1];
    izquierda2 = parseInt(izquierda2) - 2;
    let derecha = posicion[1];
    derecha++;
    let derecha2 = posicion[1];
    derecha2 = parseInt(derecha2) + 2;
    var arriba2Izquierda = document.getElementById(arriba2 + "-" + izquierda);
    var arriba2Derecha = document.getElementById(arriba2 + "-" + derecha);
    var abajo2Izquierda = document.getElementById(abajo2 + "-" + izquierda);
    var abajo2Derecha = document.getElementById(abajo2 + "-" + derecha);
    var arribaIzquierda2 = document.getElementById(arriba + "-" + izquierda2);
    var arribaDerecha2 = document.getElementById(arriba + "-" + derecha2);
    var abajoIzquierda2 = document.getElementById(abajo + "-" + izquierda2);
    var abajoDerecha2 = document.getElementById(abajo + "-" + derecha2);

    //Movimiento caballos blancos
    if (caballo.childNodes[0].id.includes("Blc")) {
        //Caballo blanco arriba2 izquierda
        if (caballo.id[0] > 1 && caballo.id[2] > 0) {
            if ((!arriba2Izquierda.hasChildNodes() || arriba2Izquierda.childNodes[0].id.includes("Ngr")) && posicion[0] > 1 && posicion[1] > 0) {
                marcarCelda(arriba2Izquierda);
                arriba2Izquierda.addEventListener("click", movimientoPiezaCaballo);
            }
        }
        //Caballo blanco arriba2 derecha
        if (caballo.id[0] > 1 && caballo.id[2] < 7) {
            if ((!arriba2Derecha.hasChildNodes() || arriba2Derecha.childNodes[0].id.includes("Ngr")) && posicion[0] > 1 && posicion[1] < 7) {
                marcarCelda(arriba2Derecha);
                arriba2Derecha.addEventListener("click", movimientoPiezaCaballo);
            }
        }
        //Caballo blanco abajo2 izquierda
        if (caballo.id[0] < 6 && caballo.id[2] > 0) {
            if ((!abajo2Izquierda.hasChildNodes() || abajo2Izquierda.childNodes[0].id.includes("Ngr")) && posicion[0] < 6 && posicion[1] > 0) {
                marcarCelda(abajo2Izquierda);
                abajo2Izquierda.addEventListener("click", movimientoPiezaCaballo);
            }
        }
        //Caballo blanco abajo2 derecha
        if (caballo.id[0] < 6 && caballo.id[2] < 7) {
            if ((!abajo2Derecha.hasChildNodes() || abajo2Derecha.childNodes[0].id.includes("Ngr")) && posicion[0] < 6 && posicion[1] < 7) {
                marcarCelda(abajo2Derecha);
                abajo2Derecha.addEventListener("click", movimientoPiezaCaballo);
            }
        }
        //Caballo blanco arriba izquierda2
        if (caballo.id[0] > 0 && caballo.id[2] > 1) {
            if ((!arribaIzquierda2.hasChildNodes() || arribaIzquierda2.childNodes[0].id.includes("Ngr")) && posicion[0] > 0 && posicion[1] > 1) {
                marcarCelda(arribaIzquierda2);
                arribaIzquierda2.addEventListener("click", movimientoPiezaCaballo);
            }
        }
        //Caballo blanco arriba derecha2
        if (caballo.id[0] > 0 && caballo.id[2] < 6) {
            if ((!arribaDerecha2.hasChildNodes() || arribaDerecha2.childNodes[0].id.includes("Ngr")) && posicion[0] > 0 && posicion[1] < 6) {
                marcarCelda(arribaDerecha2);
                arribaDerecha2.addEventListener("click", movimientoPiezaCaballo);
            }
        }
        //Caballo blanco abajo izquierda2
        if (caballo.id[0] < 7 && caballo.id[2] > 1) {
            if ((!abajoIzquierda2.hasChildNodes() || abajoIzquierda2.childNodes[0].id.includes("Ngr")) && posicion[0] < 7 && posicion[1] > 1) {
                marcarCelda(abajoIzquierda2);
                abajoIzquierda2.addEventListener("click", movimientoPiezaCaballo);
            }
        }
        //Caballo blanco abajo derecha2
        if (caballo.id[0] < 7 && caballo.id[2] < 6) {
            if ((!abajoDerecha2.hasChildNodes() || abajoDerecha2.childNodes[0].id.includes("Ngr")) && posicion[0] < 7 && posicion[1] < 6) {
                marcarCelda(abajoDerecha2);
                abajoDerecha2.addEventListener("click", movimientoPiezaCaballo);
            }
        }
    }
    //Movimiento caballos negros
    if (caballo.childNodes[0].id.includes("Ngr")) {
        //Caballo blanco arriba2 izquierda
        if (caballo.id[0] > 1 && caballo.id[2] > 0) {
            if ((!arriba2Izquierda.hasChildNodes() || arriba2Izquierda.childNodes[0].id.includes("Blc")) && posicion[0] > 1 && posicion[1] > 0) {
                marcarCelda(arriba2Izquierda);
                arriba2Izquierda.addEventListener("click", movimientoPiezaCaballo);
            }
        }
        //Caballo negro arriba2 derecha
        if (caballo.id[0] > 1 && caballo.id[2] < 7) {
            if ((!arriba2Derecha.hasChildNodes() || arriba2Derecha.childNodes[0].id.includes("Blc")) && posicion[0] > 1 && posicion[1] < 7) {
                marcarCelda(arriba2Derecha);
                arriba2Derecha.addEventListener("click", movimientoPiezaCaballo);
            }
        }
        //Caballo negro abajo2 izquierda
        if (caballo.id[0] < 6 && caballo.id[2] > 0) {
            if ((!abajo2Izquierda.hasChildNodes() || abajo2Izquierda.childNodes[0].id.includes("Blc")) && posicion[0] < 6 && posicion[1] > 0) {
                marcarCelda(abajo2Izquierda);
                abajo2Izquierda.addEventListener("click", movimientoPiezaCaballo);
            }
        }
        //Caballo negro abajo2 derecha
        if (caballo.id[0] < 6 && caballo.id[2] < 7) {
            if ((!abajo2Derecha.hasChildNodes() || abajo2Derecha.childNodes[0].id.includes("Blc")) && posicion[0] < 6 && posicion[1] < 7) {
                marcarCelda(abajo2Derecha);
                abajo2Derecha.addEventListener("click", movimientoPiezaCaballo);
            }
        }
        //Caballo negro arriba izquierda2
        if (caballo.id[0] > 0 && caballo.id[2] > 1) {
            if ((!arribaIzquierda2.hasChildNodes() || arribaIzquierda2.childNodes[0].id.includes("Blc")) && posicion[0] > 0 && posicion[1] > 1) {
                marcarCelda(arribaIzquierda2);
                arribaIzquierda2.addEventListener("click", movimientoPiezaCaballo);
            }
        }
        //Caballo negro arriba derecha2
        if (caballo.id[0] > 0 && caballo.id[2] < 6) {
            if ((!arribaDerecha2.hasChildNodes() || arribaDerecha2.childNodes[0].id.includes("Blc")) && posicion[0] > 0 && posicion[1] < 6) {
                marcarCelda(arribaDerecha2);
                arribaDerecha2.addEventListener("click", movimientoPiezaCaballo);
            }
        }
        //Caballo negro abajo izquierda2
        if (caballo.id[0] < 7 && caballo.id[2] > 1) {
            if ((!abajoIzquierda2.hasChildNodes() || abajoIzquierda2.childNodes[0].id.includes("Blc")) && posicion[0] < 7 && posicion[1] > 1) {
                marcarCelda(abajoIzquierda2);
                abajoIzquierda2.addEventListener("click", movimientoPiezaCaballo);
            }
        }
        //Caballo negro abajo derecha2
        if (caballo.id[0] < 7 && caballo.id[2] < 6) {
            if ((!abajoDerecha2.hasChildNodes() || abajoDerecha2.childNodes[0].id.includes("Blc")) && posicion[0] < 7 && posicion[1] < 6) {
                marcarCelda(abajoDerecha2);
                abajoDerecha2.addEventListener("click", movimientoPiezaCaballo);
            }
        }
    }
}

function movimientoPiezaCaballo(seleccionar) {
    let cruces = document.querySelectorAll("img");
    let idCruces = new Array();
    for (i = 0; i < cruces.length; i++) {
        if (cruces[i].id.includes("cruz")) {
            document.getElementById(cruces[i].id).parentNode.removeEventListener("click", movimientoPiezaCaballo);
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
    if(this.childNodes[0].id.includes("Blc")){
        comprobarJaque("Blc");
    }else{
        comprobarJaque("Ngr");
    }
}