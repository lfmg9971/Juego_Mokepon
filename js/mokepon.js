let ataquejugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarjuego () {
    let sectionseleccionarataque = document.getElementById("seleccionar_ataque")
    sectionseleccionarataque.style.display = "none"

    let sectionreiniciar = document.getElementById("boton_reiniciar")
    sectionreiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton_mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton_fuego")
    botonFuego.addEventListener("click", ataquefuego)
    let botonAgua = document.getElementById("boton_agua")
    botonAgua.addEventListener("click", ataqueagua)
    let botonTierra = document.getElementById("boton_tierra")
    botonTierra.addEventListener("click", ataquetierra)

    let botonReiniciar = document.getElementById("boton_reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionseleccionarmascota = document.getElementById("seleccionar_mascota")
    sectionseleccionarmascota.style.display = "none"

    let sectionseleccionarataque = document.getElementById("seleccionar_ataque")
    sectionseleccionarataque.style.display = "block"

    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueta = document.getElementById("Ratigueta")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked) {
       spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueta.checked) {
        spanMascotaJugador.innerHTML = "Ratigueta"
    } else {
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "hipodoge"
    } else if (mascotaleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "ratigueya"
    }
}

function ataquefuego() {
    ataquejugador = "FUEGO"
    ataquealeatorioEnemigo()
}
function ataqueagua() {
    ataquejugador = "AGUA"
    ataquealeatorioEnemigo()
}
function ataquetierra(){
    ataquejugador = "TIERRA"
    ataquealeatorioEnemigo()
}

function ataquealeatorioEnemigo(){
    let ataquealeatorio = aleatorio (1,3)

    if (ataquealeatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataquealeatorio == 2){
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    combate()
}

function combate(){
    let sapmVidasJugador = document.getElementById("vidas-jugador")
    let sapmVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataquejugador){
         crearmensaje ("Empate")
    } else if (ataquejugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearmensaje ("Ganaste")
        vidasEnemigo --
        sapmVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataquejugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearmensaje ("Ganaste")
        vidasEnemigo --
        sapmVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataquejugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearmensaje ("Ganaste")
        vidasEnemigo --
        sapmVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearmensaje("Perdiste")
        vidasJugador --
        sapmVidasJugador.innerHTML = vidasJugador
    }

    revisarvidas()
}

function revisarvidas () {
    if (vidasEnemigo == 0){
        crearmensajefinal("Felicitaciones, GANASTE")
    } else if (vidasJugador == 0) {
        crearmensajefinal("Lo siento, PERDISTE")
    }
}

function crearmensaje(resultado) {
    let sectionMensajes = document.getElementById("Mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota ataco con " + ataquejugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + ", " + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearmensajefinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("Mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton_fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton_agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton_tierra")
    botonTierra.disabled = true

    let sectionreiniciar = document.getElementById("boton_reiniciar")
    sectionreiniciar.style.display = "block"
}

function reiniciarJuego () {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+min)
}
window.addEventListener("load", iniciarjuego)