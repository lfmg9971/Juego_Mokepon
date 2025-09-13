const sectionseleccionarataque = document.getElementById("seleccionar_ataque")
const sectionreiniciar = document.getElementById("boton_reiniciar")
const botonMascotaJugador = document.getElementById("boton_mascota")

sectionreiniciar.style.display = "none"

const botonReiniciar = document.getElementById("boton_reiniciar")

const sectionseleccionarmascota = document.getElementById("seleccionar_mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const sapmVidasJugador = document.getElementById("vidas-jugador")
const sapmVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesdeljugador = document.getElementById("ataques-del-jugador")
const ataquesdelenemigo = document.getElementById("ataques-del-enemigo")
const contenedortarjetas = document.getElementById("contenedortarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let mokepones = []
let ataquejugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge 
let inputCapipepo 
let inputRatigueta
let mascotajugador 
let ataquesMokepon
let ataquesMokeponEnemigo
let botonTierra
let botonFuego 
let botonAgua
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
    }
}

let hipodoge = new Mokepon ("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.webp", 5)

let capipepo = new Mokepon ("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.webp", 5)

let ratigueta = new Mokepon ("Ratigueta", "./assets/mokepons_mokepon_ratigueya_attack.webp", 5)

hipodoge.ataques.push(
    {nombre: "💧", id: "boton_agua"},
    {nombre: "💧", id: "boton_agua"},
    {nombre: "💧", id: "boton_agua"},
    {nombre: "🪨", id: "boton_tierra"},
    {nombre: "🔥", id: "boton_fuego"},
)

capipepo.ataques.push(
    {nombre: "🪨", id: "boton_tierra"},
    {nombre: "🪨", id: "boton_tierra"},
    {nombre: "🪨", id: "boton_tierra"},
    {nombre: "💧", id: "boton_agua"},
    {nombre: "🔥", id: "boton_fuego"},
)

ratigueta.ataques.push(
    {nombre: "🔥", id: "boton_fuego"},
    {nombre: "🔥", id: "boton_fuego"},
    {nombre: "🔥", id: "boton_fuego"},
    {nombre: "🪨", id: "boton_tierra"},
    {nombre: "💧", id: "boton_agua"},
)

mokepones.push(hipodoge, capipepo, ratigueta)

function iniciarjuego () {
    
    sectionseleccionarataque.style.display = "none"
    sectionVerMapa.style.display = "none"
    
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre} >
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre} >
        </label>
        `
    contenedortarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById("Hipodoge")
    inputCapipepo = document.getElementById("Capipepo")
    inputRatigueta = document.getElementById("Ratigueta")

    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}



function seleccionarMascotaJugador() {
    
    sectionseleccionarmascota.style.display = "none"    


    //sectionseleccionarataque.style.display = "flex"
    sectionVerMapa.style.display = "flex"
    


    if (inputHipodoge.checked) {
       spanMascotaJugador.innerHTML = inputHipodoge.id
       mascotajugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotajugador = inputCapipepo.id
    } else if (inputRatigueta.checked) {
        spanMascotaJugador.innerHTML = inputRatigueta.id
        mascotajugador = inputRatigueta.id
    } else {
        alert("Selecciona una mascota")
    }

    extraerAtaques(mascotajugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotajugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotajugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id="${ataque.id}" class="boton_de_ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    }) 

    botonTierra = document.getElementById("boton_tierra")
    botonFuego = document.getElementById("boton_fuego")
    botonAgua = document.getElementById("boton_agua")
    botones = document.querySelectorAll(".BAtaque")

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
       boton.addEventListener("click", (e) => {
            if(e.target.textContent === "🔥") {
                ataquejugador.push("FUEGO")
                console.log(ataquejugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }else if (e.target.textContent === "💧") {
                ataquejugador.push("AGUA")
                console.log(ataquejugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }else { 
                ataquejugador.push("TIERRA")
                console.log(ataquejugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            ataquealeatorioEnemigo()
       }) 
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaleatorio = aleatorio(0, mokepones.length -1)
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaleatorio].nombre
    ataquesMokeponEnemigo = mokepones[mascotaleatorio].ataques
    secuenciaAtaque()
}

function ataquealeatorioEnemigo(){
    let ataquealeatorio = aleatorio (0, ataquesMokeponEnemigo.length - 1)

    if (ataquealeatorio == 0 || ataquealeatorio ==1) {
        ataqueEnemigo.push("FUEGO")
    } else if (ataquealeatorio == 3 || ataquealeatorio ==4) {
        ataqueEnemigo.push("AGUA")
    } else {
        ataqueEnemigo.push("TIERRA")
    }
    iniciarPelea()
}

function iniciarPelea(){
    if (ataquejugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes (jugador, enemigo) {
    indexAtaqueJugador = ataquejugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
    
}

function combate(){

    for (let index = 0; index < ataquejugador.length; index++) {
        if(ataquejugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearmensaje ("EMPATE")
        } else if (ataquejugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA") {
            indexAmbosOponentes(index, index)
            crearmensaje ("GANASTE")
            victoriasJugador++
            sapmVidasJugador.innerHTML = victoriasJugador
        } else if (ataquejugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO") {
            indexAmbosOponentes(index, index)
            crearmensaje ("GANASTE")
            victoriasJugador++
            sapmVidasJugador.innerHTML = victoriasJugador
        } else if (ataquejugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA") {
            indexAmbosOponentes(index, index)
            crearmensaje ("GANASTE")
            victoriasJugador++
            sapmVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearmensaje ("PERDISTE")
            victoriasEnemigo++
            sapmVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarvictorias()
}

function revisarvictorias () {
    if (victoriasJugador == victoriasEnemigo){
        crearmensajefinal("Esto fue un empate")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearmensajefinal("FELICIDADES, GANASTE")
    } else {
        crearmensajefinal("PERDISTE")
    }
}

function crearmensaje(resultado) {

    let nuevoataquedeljugar = document.createElement("p")
    let nuevoataquedelenemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoataquedeljugar.innerHTML = indexAtaqueJugador
    nuevoataquedelenemigo.innerHTML = indexAtaqueEnemigo

    ataquesdeljugador.appendChild(nuevoataquedeljugar)
    ataquesdelenemigo.appendChild(nuevoataquedelenemigo)
}

function crearmensajefinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal

    sectionreiniciar.style.display = "block"
}

function reiniciarJuego () {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+min)
}

function pintarPersonaje() {
    lienzo.clearRect (0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        capipepo.mapaFoto,
        capipepo.x,
        capipepo.y,
        capipepo.ancho,
        capipepo.alto,
    )
}

function moverCapipepo() {
    capipepo.x = capipepo.x + 5
    pintarPersonaje()
}

window.addEventListener("load", iniciarjuego)