function moverTorre(torre, colorTorre) {
    //identificar direcciones
    casillaOriginal = torre.id
    colorPieza= colorTorre

    var posicion = [torre.id[0], torre.id[2]];
    let arriba = posicion[0]
    arriba--
    let abajo = posicion[0]
    abajo++
    let izquierda = posicion[1]
    izquierda--
    let derecha = posicion[1]
    derecha++
    var celdaArriba = document.getElementById(arriba + "-" + posicion[1])
    var celdaAbajo = document.getElementById(abajo + "-" + posicion[1])
    var celdaIzquierda = document.getElementById(posicion[0] + "-" + izquierda)
    var celdaDerecha = document.getElementById(posicion[0] + "-" + derecha)


    //movimiento de torres blancas
    if (torre.childNodes[0].id.includes("Blc")) {
        //Torres blancas hacia arriba
        if (torre.id[0] != 0) {
            //Si no hay ninguna pieza arriba o hay una pieza negra marca la celda como posible movimiento
            if (!celdaArriba.hasChildNodes() || celdaArriba.childNodes[0].id.includes("Ngr")) {
                marcarCelda(celdaArriba)
                celdaArriba.addEventListener("click", movimientoPiezaTorre)
                while (celdaArriba.childNodes[0].id.includes("cruzVerde") && arriba > 0) {
                    arriba--
                    celdaArriba = document.getElementById(arriba + "-" + posicion[1])
                    // console.log(celdaArriba.childNodes[0].id)
                    if (celdaArriba.hasChildNodes()) {
                        if (!celdaArriba.childNodes[0].id.includes("Blc")) {
                            marcarCelda(celdaArriba)
                            celdaArriba.addEventListener("click", movimientoPiezaTorre)
                        }
                    }
                    else{
                        marcarCelda(celdaArriba)
                        celdaArriba.addEventListener("click", movimientoPiezaTorre)
                    }

                }
            }
        }
        // Torres blancas hacia abajo 
        if (torre.id[0] != 7) {
            if (!celdaAbajo.hasChildNodes() || celdaAbajo.childNodes[0].id.includes("Ngr")) {
                marcarCelda(celdaAbajo)
                celdaAbajo.addEventListener("click", movimientoPiezaTorre)
                while (celdaAbajo.childNodes[0].id.includes("cruzVerde") && abajo < 7) {
                    abajo++
                    celdaAbajo = document.getElementById(abajo + "-" + posicion[1])
                    if (celdaAbajo.hasChildNodes()) {
                        if (!celdaAbajo.childNodes[0].id.includes("Blc")) {
                            marcarCelda(celdaAbajo)
                            celdaAbajo.addEventListener("click", movimientoPiezaTorre)
                        }
                    }
                    else{
                        marcarCelda(celdaAbajo)
                        celdaAbajo.addEventListener("click", movimientoPiezaTorre)
                    }
                }
            }
        }
        //Torres blancas hacia la Izquierda
        if (torre.id[2] != 0) {
            if (!celdaIzquierda.hasChildNodes() || celdaIzquierda.childNodes[0].id.includes("Ngr")) {
                marcarCelda(celdaIzquierda)
                celdaIzquierda.addEventListener("click", movimientoPiezaTorre)
                while (celdaIzquierda.childNodes[0].id.includes("cruzVerde") && izquierda > 0) {
                    izquierda--
                    celdaIzquierda = document.getElementById(posicion[0] + "-" + izquierda)
                    if (celdaIzquierda.hasChildNodes()) {
                        if (!celdaIzquierda.childNodes[0].id.includes("Blc")) {
                            marcarCelda(celdaIzquierda)
                            celdaIzquierda.addEventListener("click", movimientoPiezaTorre)
                        }
                    }
                    else{
                        marcarCelda(celdaIzquierda)
                        celdaIzquierda.addEventListener("click", movimientoPiezaTorre)
                    }
                }
            }
        }
        //Torres Blancas hacia la derecha
        if (torre.id[2] != 7) {
            if (!celdaDerecha.hasChildNodes() || celdaDerecha.childNodes[0].id.includes("Ngr")) {
                marcarCelda(celdaDerecha)
                celdaDerecha.addEventListener("click", movimientoPiezaTorre)
                while (celdaDerecha.childNodes[0].id.includes("cruzVerde") && derecha < 7) {
                    derecha++
                    celdaDerecha = document.getElementById(posicion[0] + "-" + derecha)
                    if (celdaDerecha.hasChildNodes()) {
                        if (!celdaDerecha.childNodes[0].id.includes("Blc")) {
                            marcarCelda(celdaDerecha)
                            celdaDerecha.addEventListener("click", movimientoPiezaTorre)
                        }
                    }
                    else{
                        marcarCelda(celdaDerecha)
                        celdaDerecha.addEventListener("click", movimientoPiezaTorre)
                    }
                }
            }
        }
    }
    else if (torre.childNodes[0].id.includes("Ngr")) {
        //Torres Negras hacia arriba
        if (torre.id[0] != 0) {
            //Si no hay ninguna pieza arriba o hay una pieza negra marca la celda como posible movimiento
            if (!celdaArriba.hasChildNodes() || celdaArriba.childNodes[0].id.includes("Blc")) {
                marcarCelda(celdaArriba)
                celdaArriba.addEventListener("click", movimientoPiezaTorre)
                while (celdaArriba.childNodes[0].id.includes("cruzVerde") && arriba > 0) {
                    arriba--
                    celdaArriba = document.getElementById(arriba + "-" + posicion[1])
                    if (celdaArriba.hasChildNodes()) {
                        if (!celdaArriba.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(celdaArriba)
                            celdaArriba.addEventListener("click", movimientoPiezaTorre)
                        }
                    }
                    else{
                        marcarCelda(celdaArriba)
                        celdaArriba.addEventListener("click", movimientoPiezaTorre)
                    }
                }
            }
        }
        // Torres Negras hacia abajo
        if (torre.id[0] != 7) {
            if (!celdaAbajo.hasChildNodes() || celdaAbajo.childNodes[0].id.includes("Blc")) {
                marcarCelda(celdaAbajo)
                celdaAbajo.addEventListener("click", movimientoPiezaTorre)
                while (celdaAbajo.childNodes[0].id.includes("cruzVerde") && abajo < 7) {
                    abajo++
                    celdaAbajo = document.getElementById(abajo + "-" + posicion[1])
                    if (celdaAbajo.hasChildNodes()) {
                        if (!celdaAbajo.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(celdaAbajo)
                            celdaAbajo.addEventListener("click", movimientoPiezaTorre)
                        }
                    }
                    else{
                        marcarCelda(celdaAbajo)
                        celdaAbajo.addEventListener("click", movimientoPiezaTorre)
                    }
                }
            }
        }
        //Torres Negras hacia la Izquierda
        if (torre.id[2] != 0) {
            if (!celdaIzquierda.hasChildNodes() || celdaIzquierda.childNodes[0].id.includes("Blc")) {
                marcarCelda(celdaIzquierda)
                celdaIzquierda.addEventListener("click", movimientoPiezaTorre)
                while (celdaIzquierda.childNodes[0].id.includes("cruzVerde") && izquierda > 0) {
                    izquierda--
                    celdaIzquierda = document.getElementById(posicion[0] + "-" + izquierda)
                    if (celdaIzquierda.hasChildNodes()) {
                        if (!celdaIzquierda.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(celdaIzquierda)
                            celdaIzquierda.addEventListener("click", movimientoPiezaTorre)
                        }
                    }
                    else{
                        marcarCelda(celdaIzquierda)
                        celdaIzquierda.addEventListener("click", movimientoPiezaTorre)
                    }
                }
            }
        }
        //Torres Negras hacia la derecha
        if (torre.id[2] != 7) {
            if (!celdaDerecha.hasChildNodes() || celdaDerecha.childNodes[0].id.includes("Blc")) {
                marcarCelda(celdaDerecha)
                celdaDerecha.addEventListener("click", movimientoPiezaTorre)
                while (celdaDerecha.childNodes[0].id.includes("cruzVerde") && derecha < 7) {
                    derecha++
                    celdaDerecha = document.getElementById(posicion[0] + "-" + derecha)
                    if (celdaDerecha.hasChildNodes()) {
                        if (!celdaDerecha.childNodes[0].id.includes("Ngr")) {
                            marcarCelda(celdaDerecha)
                            celdaDerecha.addEventListener("click", movimientoPiezaTorre)
                        }
                    }
                    else{
                        marcarCelda(celdaDerecha)
                        celdaDerecha.addEventListener("click", movimientoPiezaTorre)
                    }
                }
            }
        }
    }
}

function movimientoPiezaTorre(seleccionar) {

    let cruces = document.querySelectorAll("img")
    let idCruces = new Array();
    for (i = 0; i < cruces.length; i++) {
        if (cruces[i].id.includes("cruz")) {
            document.getElementById(cruces[i].id).parentNode.removeEventListener("click", movimientoPiezaTorre)
            document.getElementById(cruces[i].id).remove()
        }
    }
    let hijo = document.getElementById(casillaOriginal).childNodes[0]
    if (seleccionar) {
        if (this.hasChildNodes()) {
            if (this.childNodes[0].id.includes("reyBlc")) {
                window.location.href = "./victoriaMonos.html"
            }
            else if (this.childNodes[0].id.includes("reyNgr")) {
                window.location.href = "./victoriaGlobos.html"
            }
        }

        hijo.parentNode.removeChild(hijo)
        hijo = "";

        if(turnoBlancas){
            turnoBlancas= false
        }
        else{
            turnoBlancas= true
        }
    }
    else {
        hijo.removeAttribute("onclick")
        hijo.removeAttribute("style")
        hijo.setAttribute("onclick", "cogerPieza(this)")
    }
    this.innerHTML = "<img src =" + piezaGlobal.src + " width=" + piezaGlobal.width + " onclick= 'cogerPieza(this)' id=" + piezaGlobal.id + " style='position: relative;'>"
    moviendo = false
    if(!turnoBlancas){
        enroqueBlc = true
    }
    else{
        enroqueNgr = true
    }
}