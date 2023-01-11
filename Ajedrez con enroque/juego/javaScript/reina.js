function moverReina(reina, colorReina) {
    //identificar direcciones
    casillaOriginal = reina.id;
    colorPieza= colorReina;

    var posicion = [reina.id[0], reina.id[2]];
    let arriba = posicion[0];
    arriba--;
    let abajo = posicion[0];
    abajo++;
    let izquierda = posicion[1];
    izquierda--;
    let derecha = posicion[1];
    derecha++;
    var arribaIzquierda = document.getElementById(arriba + "-" + izquierda);
    var arribaDerecha = document.getElementById(arriba + "-" + derecha);
    var abajoIzquierda = document.getElementById(abajo + "-" + izquierda);
    var abajoDerecha = document.getElementById(abajo + "-" + derecha);

    var celdaArriba = document.getElementById(arriba + "-" + posicion[1]);
    var celdaAbajo = document.getElementById(abajo + "-" + posicion[1]);
    var celdaIzquierda = document.getElementById(posicion[0] + "-" + izquierda);
    var celdaDerecha = document.getElementById(posicion[0] + "-" + derecha);



    //Movimiento reina blancas
    if (reina.childNodes[0].id.includes("Blc")) {
        //reina blancas en diagonal arriba izquierda
        if (reina.id[0] != 0 && reina.id[2] != 0) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza arriba a la izquierda o hay una pieza negra, marca la celda como posible movimiento
            if (!arribaIzquierda.hasChildNodes() || arribaIzquierda.childNodes[0].id.includes("Ngr") && posicion[0] > 0 && posicion[1] > 0) {
                marcarCelda(arribaIzquierda);
                arribaIzquierda.addEventListener("click", movimientoPiezaReina);
                while (arribaIzquierda.childNodes[0].id.includes("cruzVerde") && arriba > 0 && izquierda > 0) {
                    arriba--;
                    izquierda--;
                    arribaIzquierda = document.getElementById(arriba + "-" + izquierda);
                    if (arribaIzquierda.hasChildNodes()) {
                        if (!arribaIzquierda.childNodes[0].id.includes("Blc")) {
                            marcarCelda(arribaIzquierda);
                            arribaIzquierda.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(arribaIzquierda);
                        arribaIzquierda.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
        //reina blancas en diagonal arriba derecha
        if (reina.id[0] != 0 && reina.id[2] != 7) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza arriba a la Derecha o hay una pieza negra, marca la celda como posible movimiento
            if (!arribaDerecha.hasChildNodes() || arribaDerecha.childNodes[0].id.includes("Ngr") && posicion[0] > 0 && posicion[1] > 0) {
                marcarCelda(arribaDerecha);
                arribaDerecha.addEventListener("click", movimientoPiezaReina);
                while (arribaDerecha.childNodes[0].id.includes("cruzVerde") && arriba > 0 && derecha < 7) {
                    arriba--;
                    derecha++;
                    arribaDerecha = document.getElementById(arriba + "-" + derecha);
                    if (arribaDerecha.hasChildNodes()) {
                        if (!arribaDerecha.childNodes[0].id.includes("Blc")) {
                            marcarCelda(arribaDerecha);
                            arribaDerecha.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(arribaDerecha);
                        arribaDerecha.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
        //reina blancas en diagonal abajo izquierda
        if (reina.id[0] != 7 && reina.id[2] != 0) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza abajo a la izquierda o hay una pieza negra, marca la celda como posible movimiento
            if (!abajoIzquierda.hasChildNodes() || abajoIzquierda.childNodes[0].id.includes("Ngr") && posicion[0] < 7 && posicion[1] > 0) {
                marcarCelda(abajoIzquierda);
                abajoIzquierda.addEventListener("click", movimientoPiezaReina);
                while (abajoIzquierda.childNodes[0].id.includes("cruzVerde") && abajo < 7 && izquierda > 0) {
                    abajo++;
                    izquierda--;
                    abajoIzquierda = document.getElementById(abajo + "-" + izquierda);
                    if (abajoIzquierda.hasChildNodes()) {
                        if (!abajoIzquierda.childNodes[0].id.includes("Blc")) {
                            marcarCelda(abajoIzquierda);
                            abajoIzquierda.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(abajoIzquierda);
                        abajoIzquierda.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
        //reina blancas en diagonal abajo derecha
        if (reina.id[0] != 7 && reina.id[2] != 7) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza abajo a la derecha o hay una pieza negra, marca la celda como posible movimiento
            if (!abajoDerecha.hasChildNodes() || abajoDerecha.childNodes[0].id.includes("Ngr") && posicion[0] < 7 && posicion[1] < 7) {
                marcarCelda(abajoDerecha);
                abajoDerecha.addEventListener("click", movimientoPiezaReina);
                while (abajoDerecha.childNodes[0].id.includes("cruzVerde") && abajo < 7 && derecha < 7) {
                    abajo++;
                    derecha++;
                    abajoDerecha = document.getElementById(abajo + "-" + derecha);
                    if (abajoDerecha.hasChildNodes()) {
                        if (!abajoDerecha.childNodes[0].id.includes("Blc")) {
                            marcarCelda(abajoDerecha);
                            abajoDerecha.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(abajoDerecha);
                        abajoDerecha.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
        if (reina.id[0] != 0) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza arriba o hay una pieza negra marca la celda como posible movimiento
            if (!celdaArriba.hasChildNodes() || celdaArriba.childNodes[0].id.includes("Ngr")) {
                marcarCelda(celdaArriba);
                celdaArriba.addEventListener("click", movimientoPiezaReina);
                while (celdaArriba.childNodes[0].id.includes("cruzVerde") && arriba > 0) {
                    arriba--;
                    celdaArriba = document.getElementById(arriba + "-" + posicion[1]);
                    if (celdaArriba.hasChildNodes()) {
                        if (!celdaArriba.childNodes[0].id.includes("Blc")) {
                            marcarCelda(celdaArriba);
                            celdaArriba.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(celdaArriba);
                        celdaArriba.addEventListener("click", movimientoPiezaReina);
                    }

                }
            }
        }
        // reinas blancas hacia abajo
        if (reina.id[0] != 7) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            if (!celdaAbajo.hasChildNodes() || celdaAbajo.childNodes[0].id.includes("Ngr")) {
                marcarCelda(celdaAbajo);
                celdaAbajo.addEventListener("click", movimientoPiezaReina);
                while (celdaAbajo.childNodes[0].id.includes("cruzVerde") && abajo < 7) {
                    abajo++;
                    celdaAbajo = document.getElementById(abajo + "-" + posicion[1]);
                    if (celdaAbajo.hasChildNodes()) {
                        if (!celdaAbajo.childNodes[0].id.includes("Blc")) {
                            marcarCelda(celdaAbajo);
                            celdaAbajo.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(celdaAbajo);
                        celdaAbajo.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
        //reinas blancas hacia la Izquierda
        if (reina.id[2] != 0) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            if (!celdaIzquierda.hasChildNodes() || celdaIzquierda.childNodes[0].id.includes("Ngr")) {
                marcarCelda(celdaIzquierda);
                celdaIzquierda.addEventListener("click", movimientoPiezaReina);
                while (celdaIzquierda.childNodes[0].id.includes("cruzVerde") && izquierda > 0) {
                    izquierda--;
                    celdaIzquierda = document.getElementById(posicion[0] + "-" + izquierda);
                    if (celdaIzquierda.hasChildNodes()) {
                        if (!celdaIzquierda.childNodes[0].id.includes("Blc")) {
                            marcarCelda(celdaIzquierda);
                            celdaIzquierda.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(celdaIzquierda);
                        celdaIzquierda.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
        //reinas Blancas hacia la derecha
        if (reina.id[2] != 7) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            if (!celdaDerecha.hasChildNodes() || celdaDerecha.childNodes[0].id.includes("Ngr")) {
                marcarCelda(celdaDerecha);
                celdaDerecha.addEventListener("click", movimientoPiezaReina);
                while (celdaDerecha.childNodes[0].id.includes("cruzVerde") && derecha < 7) {
                    derecha++;
                    celdaDerecha = document.getElementById(posicion[0] + "-" + derecha);
                    if (celdaDerecha.hasChildNodes()) {
                        if (!celdaDerecha.childNodes[0].id.includes("Blc")) {
                            marcarCelda(celdaDerecha);
                            celdaDerecha.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(celdaDerecha);
                        celdaDerecha.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
    }
    //Movimiento reina negras
    if (reina.childNodes[0].id.includes("Ngr")) {
        //reinaes blancos en diagonal arriba izquierda
        if (reina.id[0] != 0 && reina.id[2] != 0) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza arriba a la izquierda o hay una pieza negra, marca la celda como posible movimiento
            if (!arribaIzquierda.hasChildNodes() || arribaIzquierda.childNodes[0].id.includes("Blc") && posicion[0] > 0 && posicion[1] > 0) {
                marcarCelda(arribaIzquierda);
                arribaIzquierda.addEventListener("click", movimientoPiezaReina);
                while (arribaIzquierda.childNodes[0].id.includes("cruzVerde") && arriba > 0 && izquierda > 0) {
                    arriba--;
                    izquierda--;
                    arribaIzquierda = document.getElementById(arriba + "-" + izquierda);
                    if (arribaIzquierda.hasChildNodes()) {
                        if (!arribaIzquierda.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(arribaIzquierda);
                            arribaIzquierda.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(arribaIzquierda);
                        arribaIzquierda.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
        //reina negra en diagonal arriba derecha
        if (reina.id[0] != 0 && reina.id[2] != 7) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza arriba a la Derecha o hay una pieza negra, marca la celda como posible movimiento
            if (!arribaDerecha.hasChildNodes() || arribaDerecha.childNodes[0].id.includes("Blc") && posicion[0] > 0 && posicion[1] > 0) {
                marcarCelda(arribaDerecha);
                arribaDerecha.addEventListener("click", movimientoPiezaReina);
                while (arribaDerecha.childNodes[0].id.includes("cruzVerde") && arriba > 0 && derecha < 7) {
                    arriba--;
                    derecha++;
                    arribaDerecha = document.getElementById(arriba + "-" + derecha);
                    if (arribaDerecha.hasChildNodes()) {
                        if (!arribaDerecha.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(arribaDerecha);
                            arribaDerecha.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(arribaDerecha);
                        arribaDerecha.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
        //reina negra en diagonal abajo izquierda
        if (reina.id[0] != 7 && reina.id[2] != 0) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza abajo a la izquierda o hay una pieza negra, marca la celda como posible movimiento
            if (!abajoIzquierda.hasChildNodes() || abajoIzquierda.childNodes[0].id.includes("Blc") && posicion[0] < 7 && posicion[1] > 0) {
                marcarCelda(abajoIzquierda);
                abajoIzquierda.addEventListener("click", movimientoPiezaReina);
                while (abajoIzquierda.childNodes[0].id.includes("cruzVerde") && abajo < 7 && izquierda > 0) {
                    abajo++;
                    izquierda--;
                    abajoIzquierda = document.getElementById(abajo + "-" + izquierda);
                    if (abajoIzquierda.hasChildNodes()) {
                        if (!abajoIzquierda.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(abajoIzquierda);
                            abajoIzquierda.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(abajoIzquierda);
                        abajoIzquierda.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
        //reina negra en diagonal abajo derecha
        if (reina.id[0] != 7 && reina.id[2] != 7) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza abajo a la derecha o hay una pieza negra, marca la celda como posible movimiento
            if (!abajoDerecha.hasChildNodes() || abajoDerecha.childNodes[0].id.includes("Blc") && posicion[0] < 7 && posicion[1] < 7) {
                marcarCelda(abajoDerecha);
                abajoDerecha.addEventListener("click", movimientoPiezaReina);
                while (abajoDerecha.childNodes[0].id.includes("cruzVerde") && abajo < 7 && derecha < 7) {
                    abajo++;
                    derecha++;
                    abajoDerecha = document.getElementById(abajo + "-" + derecha);
                    if (abajoDerecha.hasChildNodes()) {
                        if (!abajoDerecha.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(abajoDerecha);
                            abajoDerecha.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(abajoDerecha);
                        abajoDerecha.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
        //reinas Negras hacia arriba
        if (reina.id[0] != 0) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza arriba o hay una pieza negra marca la celda como posible movimiento
            if (!celdaArriba.hasChildNodes() || celdaArriba.childNodes[0].id.includes("Blc")) {
                marcarCelda(celdaArriba);
                celdaArriba.addEventListener("click", movimientoPiezaReina);
                while (celdaArriba.childNodes[0].id.includes("cruzVerde") && arriba > 0) {
                    arriba--;
                    celdaArriba = document.getElementById(arriba + "-" + posicion[1]);
                    if (celdaArriba.hasChildNodes()) {
                        if (!celdaArriba.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(celdaArriba);
                            celdaArriba.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(celdaArriba);
                        celdaArriba.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
        // reinas Negras hacia abajo
        if (reina.id[0] != 7) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            if (!celdaAbajo.hasChildNodes() || celdaAbajo.childNodes[0].id.includes("Blc")) {
                marcarCelda(celdaAbajo);
                celdaAbajo.addEventListener("click", movimientoPiezaReina);
                while (celdaAbajo.childNodes[0].id.includes("cruzVerde") && abajo < 7) {
                    abajo++;
                    celdaAbajo = document.getElementById(abajo + "-" + posicion[1]);
                    if (celdaAbajo.hasChildNodes()) {
                        if (!celdaAbajo.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(celdaAbajo);
                            celdaAbajo.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(celdaAbajo);
                        celdaAbajo.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
        //reinas Negras hacia la Izquierda
        if (reina.id[2] != 0) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            if (!celdaIzquierda.hasChildNodes() || celdaIzquierda.childNodes[0].id.includes("Blc")) {
                marcarCelda(celdaIzquierda);
                celdaIzquierda.addEventListener("click", movimientoPiezaReina);
                while (celdaIzquierda.childNodes[0].id.includes("cruzVerde") && izquierda > 0) {
                    izquierda--;
                    celdaIzquierda = document.getElementById(posicion[0] + "-" + izquierda);
                    if (celdaIzquierda.hasChildNodes()) {
                        if (!celdaIzquierda.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(celdaIzquierda);
                            celdaIzquierda.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(celdaIzquierda);
                        celdaIzquierda.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
        //reinas Negras hacia la derecha
        if (reina.id[2] != 7) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            if (!celdaDerecha.hasChildNodes() || celdaDerecha.childNodes[0].id.includes("Blc")) {
                marcarCelda(celdaDerecha);
                celdaDerecha.addEventListener("click", movimientoPiezaReina);
                while (celdaDerecha.childNodes[0].id.includes("cruzVerde") && derecha < 7) {
                    derecha++;
                    celdaDerecha = document.getElementById(posicion[0] + "-" + derecha);
                    if (celdaDerecha.hasChildNodes()) {
                        if (!celdaDerecha.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(celdaDerecha);
                            celdaDerecha.addEventListener("click", movimientoPiezaReina);
                        }
                    }
                    else {
                        marcarCelda(celdaDerecha);
                        celdaDerecha.addEventListener("click", movimientoPiezaReina);
                    }
                }
            }
        }
    }
}




function movimientoPiezaReina(seleccionar) {
    //seleccionar todas las crucetas
    let cruces = document.querySelectorAll("img");
    //crea un array para guardar todas las cruces
    let idCruces = new Array();
    for (i = 0; i < cruces.length; i++) {
        if (cruces[i].id.includes("cruz")) {
            //quita el eventListener para mover la pieza
            document.getElementById(cruces[i].id).parentNode.removeEventListener("click", movimientoPiezaReina);
            //elimina la cruz
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
}