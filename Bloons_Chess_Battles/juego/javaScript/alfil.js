function moverAlfil(alfil) {
    //identificar direcciones
    casillaOriginal = alfil.id;
    var posicion = [alfil.id[0], alfil.id[2]];
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


    //Movimiento alfiles blancos
    if (alfil.childNodes[0].id.includes("Blc")) {
        //Alfiles blancos en diagonal arriba izquierda
        if (alfil.id[0] != 0 && alfil.id[2] != 0) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza arriba a la izquierda o hay una pieza negra, marca la celda como posible movimiento
            if (!arribaIzquierda.hasChildNodes() || arribaIzquierda.childNodes[0].id.includes("Ngr") && posicion[0] > 0 && posicion[1] > 0) {
                marcarCelda(arribaIzquierda);
                arribaIzquierda.addEventListener("click", movimientoPiezaAlfil);
                while (arribaIzquierda.childNodes[0].id.includes("cruzVerde") && arriba > 0 && izquierda > 0) {
                    arriba--;
                    izquierda--;
                    arribaIzquierda = document.getElementById(arriba + "-" + izquierda);
                    if (arribaIzquierda.hasChildNodes()) {
                        if (!arribaIzquierda.childNodes[0].id.includes("Blc")) {
                            marcarCelda(arribaIzquierda);
                            arribaIzquierda.addEventListener("click", movimientoPiezaAlfil);
                        }
                    }
                    else {
                        marcarCelda(arribaIzquierda);
                        arribaIzquierda.addEventListener("click", movimientoPiezaAlfil);
                    }
                }
            }
        }
        //Alfiles blancos en diagonal arriba derecha
        if (alfil.id[0] != 0 && alfil.id[2] != 7) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza arriba a la Derecha o hay una pieza negra, marca la celda como posible movimiento
            if (!arribaDerecha.hasChildNodes() || arribaDerecha.childNodes[0].id.includes("Ngr") && posicion[0] > 0 && posicion[1] > 0) {
                marcarCelda(arribaDerecha);
                arribaDerecha.addEventListener("click", movimientoPiezaAlfil);
                while (arribaDerecha.childNodes[0].id.includes("cruzVerde") && arriba > 0 && derecha < 7) {
                    arriba--;
                    derecha++;
                    arribaDerecha = document.getElementById(arriba + "-" + derecha);
                    if (arribaDerecha.hasChildNodes()) {
                        if (!arribaDerecha.childNodes[0].id.includes("Blc")) {
                            marcarCelda(arribaDerecha);
                            arribaDerecha.addEventListener("click", movimientoPiezaAlfil);
                        }
                    }
                    else {
                        marcarCelda(arribaDerecha);
                        arribaDerecha.addEventListener("click", movimientoPiezaAlfil);
                    }
                }
            }
        }
        //Alfiles blancos en diagonal abajo izquierda
        if (alfil.id[0] != 7 && alfil.id[2] != 0) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza abajo a la izquierda o hay una pieza negra, marca la celda como posible movimiento
            if (!abajoIzquierda.hasChildNodes() || abajoIzquierda.childNodes[0].id.includes("Ngr") && posicion[0] < 7 && posicion[1] > 0) {
                marcarCelda(abajoIzquierda);
                abajoIzquierda.addEventListener("click", movimientoPiezaAlfil);
                while (abajoIzquierda.childNodes[0].id.includes("cruzVerde") && abajo < 7 && izquierda > 0) {
                    abajo++;
                    izquierda--;
                    abajoIzquierda = document.getElementById(abajo + "-" + izquierda);
                    if (abajoIzquierda.hasChildNodes()) {
                        if (!abajoIzquierda.childNodes[0].id.includes("Blc")) {
                            marcarCelda(abajoIzquierda);
                            abajoIzquierda.addEventListener("click", movimientoPiezaAlfil);
                        }
                    }
                    else {
                        marcarCelda(abajoIzquierda);
                        abajoIzquierda.addEventListener("click", movimientoPiezaAlfil);
                    }
                }
            }
        }
        //Alfiles blancos en diagonal abajo derecha
        if (alfil.id[0] != 7 && alfil.id[2] != 7) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza abajo a la derecha o hay una pieza negra, marca la celda como posible movimiento
            if (!abajoDerecha.hasChildNodes() || abajoDerecha.childNodes[0].id.includes("Ngr") && posicion[0] < 7 && posicion[1] < 7) {
                marcarCelda(abajoDerecha);
                abajoDerecha.addEventListener("click", movimientoPiezaAlfil);
                while (abajoDerecha.childNodes[0].id.includes("cruzVerde") && abajo < 7 && derecha < 7) {
                    abajo++;
                    derecha++;
                    abajoDerecha = document.getElementById(abajo + "-" + derecha);
                    if (abajoDerecha.hasChildNodes()) {
                        if (!abajoDerecha.childNodes[0].id.includes("Blc")) {
                            marcarCelda(abajoDerecha);
                            abajoDerecha.addEventListener("click", movimientoPiezaAlfil);
                        }
                    }
                    else {
                        marcarCelda(abajoDerecha);
                        abajoDerecha.addEventListener("click", movimientoPiezaAlfil);
                    }
                }
            }
        }
    }
    //Movimiento alfiles negros
    if (alfil.childNodes[0].id.includes("Ngr")) {
        //Alfiles blancos en diagonal arriba izquierda
        if (alfil.id[0] != 0 && alfil.id[2] != 0) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza arriba a la izquierda o hay una pieza negra, marca la celda como posible movimiento
            if (!arribaIzquierda.hasChildNodes() || arribaIzquierda.childNodes[0].id.includes("Blc") && posicion[0] > 0 && posicion[1] > 0) {
                marcarCelda(arribaIzquierda);
                arribaIzquierda.addEventListener("click", movimientoPiezaAlfil);
                while (arribaIzquierda.childNodes[0].id.includes("cruzVerde") && arriba > 0 && izquierda > 0) {
                    arriba--;
                    izquierda--;
                    arribaIzquierda = document.getElementById(arriba + "-" + izquierda);
                    if (arribaIzquierda.hasChildNodes()) {
                        if (!arribaIzquierda.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(arribaIzquierda);
                            arribaIzquierda.addEventListener("click", movimientoPiezaAlfil);
                        }
                    }
                    else {
                        marcarCelda(arribaIzquierda);
                        arribaIzquierda.addEventListener("click", movimientoPiezaAlfil);
                    }
                }
            }
        }
        //Alfiles blancos en diagonal arriba derecha
        if (alfil.id[0] != 0 && alfil.id[2] != 7) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza arriba a la Derecha o hay una pieza negra, marca la celda como posible movimiento
            if (!arribaDerecha.hasChildNodes() || arribaDerecha.childNodes[0].id.includes("Blc") && posicion[0] > 0 && posicion[1] > 0) {
                marcarCelda(arribaDerecha);
                arribaDerecha.addEventListener("click", movimientoPiezaAlfil);
                while (arribaDerecha.childNodes[0].id.includes("cruzVerde") && arriba > 0 && derecha < 7) {
                    arriba--;
                    derecha++;
                    arribaDerecha = document.getElementById(arriba + "-" + derecha);
                    if (arribaDerecha.hasChildNodes()) {
                        if (!arribaDerecha.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(arribaDerecha);
                            arribaDerecha.addEventListener("click", movimientoPiezaAlfil);
                        }
                    }
                    else {
                        marcarCelda(arribaDerecha);
                        arribaDerecha.addEventListener("click", movimientoPiezaAlfil);
                    }
                }
            }
        }
        //Alfiles blancos en diagonal abajo izquierda
        if (alfil.id[0] != 7 && alfil.id[2] != 0) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza abajo a la izquierda o hay una pieza negra, marca la celda como posible movimiento
            if (!abajoIzquierda.hasChildNodes() || abajoIzquierda.childNodes[0].id.includes("Blc") && posicion[0] < 7 && posicion[1] > 0) {
                marcarCelda(abajoIzquierda);
                abajoIzquierda.addEventListener("click", movimientoPiezaAlfil);
                while (abajoIzquierda.childNodes[0].id.includes("cruzVerde") && abajo < 7 && izquierda > 0) {
                    abajo++;
                    izquierda--;
                    abajoIzquierda = document.getElementById(abajo + "-" + izquierda);
                    if (abajoIzquierda.hasChildNodes()) {
                        if (!abajoIzquierda.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(abajoIzquierda);
                            abajoIzquierda.addEventListener("click", movimientoPiezaAlfil);
                        }
                    }
                    else {
                        marcarCelda(abajoIzquierda);
                        abajoIzquierda.addEventListener("click", movimientoPiezaAlfil);
                    }
                }
            }
        }
        //Alfiles blancos en diagonal abajo derecha
        if (alfil.id[0] != 7 && alfil.id[2] != 7) {
            arriba = posicion[0]; arriba--;
            abajo = posicion[0]; abajo++;
            izquierda = posicion[1]; izquierda--;
            derecha = posicion[1]; derecha++;
            //Si no hay ninguna pieza abajo a la derecha o hay una pieza negra, marca la celda como posible movimiento
            if (!abajoDerecha.hasChildNodes() || abajoDerecha.childNodes[0].id.includes("Blc") && posicion[0] < 7 && posicion[1] < 7) {
                marcarCelda(abajoDerecha);
                abajoDerecha.addEventListener("click", movimientoPiezaAlfil);
                while (abajoDerecha.childNodes[0].id.includes("cruzVerde") && abajo < 7 && derecha < 7) {
                    abajo++;
                    derecha++;
                    abajoDerecha = document.getElementById(abajo + "-" + derecha);
                    if (abajoDerecha.hasChildNodes()) {
                        if (!abajoDerecha.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(abajoDerecha);
                            abajoDerecha.addEventListener("click", movimientoPiezaAlfil);
                        }
                    }
                    else {
                        marcarCelda(abajoDerecha);
                        abajoDerecha.addEventListener("click", movimientoPiezaAlfil);
                    }
                }
            }
        }
    }
}


function movimientoPiezaAlfil(seleccionar) {
    let cruces = document.querySelectorAll("img");
    let idCruces = new Array();
    for (i = 0; i < cruces.length; i++) {
        if (cruces[i].id.includes("cruz")) {
            document.getElementById(cruces[i].id).parentNode.removeEventListener("click", movimientoPiezaAlfil);
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
