var casillas;
var piezaSeleccionada;
var celdaSeleccionada;
var moviendo = false;
var numeroId = 1;
var numeroPeon = 1;
var moverPeon;
var idActual;
var piezaGlobal;
var casillaOriginal;
var comerIzquierda;
var comerDerecha;
var celdaAdelante;
var celdaDoblePeon;
var piezaDeseleccion;
var turnoBlancas= true;
var colorPieza;
var enroqueBlc = false;
var enroqueNgr = false;
var piezasN = [
    "./Imagenes/Ajedrez/torreN.png",
    "./Imagenes/Ajedrez/caballoN.png",
    "./Imagenes/Ajedrez/alfilN.png",
    "./Imagenes/Ajedrez/reinaN.png",
    "./Imagenes/Ajedrez/reyN.png",
    "./Imagenes/Ajedrez/alfilN.png",
    "./Imagenes/Ajedrez/caballoN.png",
    "./Imagenes/Ajedrez/torreN.png"
];
var piezasB = [
    "./Imagenes/Ajedrez/torreB.png",
    "./Imagenes/Ajedrez/caballoB.png",
    "./Imagenes/Ajedrez/alfilB.png",
    "./Imagenes/Ajedrez/reinaB.png",
    "./Imagenes/Ajedrez/reyB.png",
    "./Imagenes/Ajedrez/alfilB.png",
    "./Imagenes/Ajedrez/caballoB.png",
    "./Imagenes/Ajedrez/torreB.png"
];
var peonesN = "./Imagenes/Ajedrez/peonN.png";
var peonesB = "./Imagenes/Ajedrez/peonB.png";
var idsNegras = [
    "torreNgrizq",
    "caballoNgrizq",
    "alfilNgrizq",
    "reinaNgr",
    "reyNgr",
    "alfilNgrdrc",
    "caballoNgrdrc",
    "torreNgrdrc"
];
var idsBlancas = [
    "torreBlcizq",
    "caballoBlcizq",
    "alfilBlcizq",
    "reinaBlc",
    "reyBlc",
    "alfilBlcdrc",
    "caballoBlcdrc",
    "torreBlcdrc"
];