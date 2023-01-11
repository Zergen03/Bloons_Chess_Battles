document.addEventListener("mousedown", () => {
    cambiarCursor(true)
})
document.addEventListener("mouseup", () => {
    cambiarCursor(false)
})

function cambiarCursor(cierto) {
    if (cierto) {
        document.getElementById("documento").classList.remove("cursorSinPulsar")
        document.getElementById("documento").classList.add("cursorPulsado")
    } else if (!cierto) {
        document.getElementById("documento").classList.remove("cursorPulsado")
        document.getElementById("documento").classList.add("cursorSinPulsar")
    }
}

function pulsar() {
    document.getElementById("botonPlay").style.display = "none"
    document.getElementById("botonPlayPulsado").style.display = ""
    window.location.href = "ajedrez.html";
}

//Creacion del tablero
function tablero() {
    casillas = document.getElementById("tablero");
    //bucle que crea 8 filas
    for (f = 0; f < 8; f++) {
        var fila = casillas.insertRow();
        //bucle que crea 8 casillas por fila
        for (c = 0; c < 8; c++) {
            var celda = fila.insertCell();
            //Asigna id a las celdas de esta manera: fila-celda
            celda.setAttribute("id", f + "-" + c) //"["+y+","+x+"]"
            //Añade las piezas negras(monos) a la fila 0
            if (f == 0) {
                celda.innerHTML = "<img src =" + piezasN[c] + " width= '90px' onclick= 'cogerPieza(this)' id= " + idsNegras[c] + ">"
            }
            //Añade los peones negros(monos) a la fila 1
            else if (f == 1) {
                celda.innerHTML = "<img src =" + peonesN + " width= '75px' onclick= 'cogerPieza(this)' id= peonNgr" + numeroPeon + ">"
                numeroPeon++
            } else if (f == 2) {
                numeroPeon = 1;
            }
            //Añade los peones blancos(glovos) a la fila 6
            else if (f == 6) {
                celda.innerHTML = "<img src =" + peonesB + " width= '75px' onclick= 'cogerPieza(this)' id= peonBlc" + numeroPeon + ">"
                numeroPeon++
            }
            //Añade las piezas blancas(glovos) a la fila 7
            else if (f == 7) {
                celda.innerHTML = "<img src =" + piezasB[c] + " width= '90px' onclick= 'cogerPieza(this)' id= " + idsBlancas[c] + ">"
            }
        }
    }
}

function cogerPieza(pieza) {
    //comprueba si hay alguna pieza seleccionada
    if (!moviendo) {

        if (turnoBlancas) {
            if (pieza.id.includes("Blc")) {
                //declara que hay una pieza seleccionada
                moviendo = true
                //combierte la variable propia de la funcion a variable global
                piezaGlobal = pieza;
                //Hace la pieza semitransparente
                pieza.style.opacity = ".4"
            }

            if (pieza.id.includes("alfilBlc")) {
                moverAlfil(pieza.parentNode, true);
                pieza.setAttribute("onclick", "movimientoPiezaAlfil(false)")
            }
            if (pieza.id.includes("caballoBlc")) {
                moverCaballo(pieza.parentNode, true);
                pieza.setAttribute("onclick", "movimientoPiezaCaballo(false)")
            }
            if (pieza.id.includes("peonBlc")) {
                moverPeon(pieza.parentNode, true);
                pieza.setAttribute("onclick", "movimientoPiezaPeon(false)")
            }
            if (pieza.id.includes("reinaBlc")) {
                moverReina(pieza.parentNode, true);
                pieza.setAttribute("onclick", "movimientoPiezaReina(false)")
            }
            if (pieza.id.includes("reyBlc")) {
                moverRey(pieza.parentNode, true);
                pieza.setAttribute("onclick", "movimientoPiezaRey(false)")
            }
            if (pieza.id.includes("torreBlc")) {
                moverTorre(pieza.parentNode, true);
                pieza.setAttribute("onclick", "movimientoPiezaTorre(false)")
            }
        }
        else {
            if (pieza.id.includes("Ngr")) {
                //declara que hay una pieza seleccionada
                moviendo = true
                //combierte la variable propia de la funcion a variable global
                piezaGlobal = pieza;
                //Hace la pieza semitransparente
                pieza.style.opacity = ".4"
            }

            if (pieza.id.includes("alfilNgr")) {
                moverAlfil(pieza.parentNode, false);
                pieza.setAttribute("onclick", "movimientoPiezaAlfil(false)")
            }
            if (pieza.id.includes("caballoNgr")) {
                moverCaballo(pieza.parentNode, false);
                pieza.setAttribute("onclick", "movimientoPiezaCaballo(false)")
            }
            if (pieza.id.includes("peonNgr")) {
                moverPeon(pieza.parentNode, false);
                pieza.setAttribute("onclick", "movimientoPiezaPeon(false)")
            }
            if (pieza.id.includes("reinaNgr")) {
                moverReina(pieza.parentNode, false);
                pieza.setAttribute("onclick", "movimientoPiezaReina(false)")
            }
            if (pieza.id.includes("reyNgr")) {
                moverRey(pieza.parentNode, false);
                pieza.setAttribute("onclick", "movimientoPiezaRey(false)")
            }
            if (pieza.id.includes("torreNgr")) {
                moverTorre(pieza.parentNode, false);
                pieza.setAttribute("onclick", "movimientoPiezaTorre(false)")
            }
        }
    }
}



//MOVIMIENTOS DE PIEZAS

var numeroCruz = 1
function marcarCelda(celda, marcarEnroque) {
    if (celda.hasChildNodes()) {
        celda.innerHTML += "<img src= './Imagenes/Ajedrez/cruceta.png' class='cruces' id='cruz" + numeroCruz + "'>"
        numeroCruz++
        if (marcarEnroque) {
            celda.innerHTML += "<img src= './Imagenes/Ajedrez/crucetaAzul.png' class='cruces' id='cruzAzul" + numeroCruz + "'>"
            numeroCruz++
        }
    }
    else {
        celda.innerHTML = "<img src= './Imagenes/Ajedrez/crucetaVerde.png' width= '96px' id='cruzVerde" + numeroCruz + "'>"
        numeroCruz++
    }

}
