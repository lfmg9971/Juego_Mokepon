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

let mokepones = []
let ataquejugador = []
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge 
let inputCapipepo 
let inputRatigueta
let mascotajugador 
let ataquesMokepon
let botonTierra
let botonFuego 
let botonAgua
let botones = []
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = [] 
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
    sectionseleccionarataque.style.display = "flex"

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
        <button id= ${ataque.id} class="boton_de_ataque BAtaque"> ${ataque.nombre} </button>
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
            if(e.target.texContent === "🔥") {
                ataquejugador.push("FUEGO")
                console.log(ataquejugador)
                boton.style.background = "#112f58"

            }else if (e.target.texContent === "💧") {
                ataquejugador.push("AGUA")
                console.log(ataquejugador)
                boton.style.background = "#112f58"
            }else { 
                ataquejugador.push("TIERRA")
                console.log(ataquejugador)
                boton.style.background = "#112f58"
            }
       }) 
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaleatorio = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaleatorio].nombre
    secuenciaAtaque()
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

    let nuevoataquedeljugar = document.createElement("p")
    let nuevoataquedelenemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoataquedeljugar.innerHTML = ataquejugador
    nuevoataquedelenemigo.innerHTML = ataqueEnemigo

    ataquesdeljugador.appendChild(nuevoataquedeljugar)
    ataquesdelenemigo.appendChild(nuevoataquedelenemigo)
}

function crearmensajefinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true    
    botonTierra.disabled = true

    sectionreiniciar.style.display = "block"
}

function reiniciarJuego () {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+min)
}
window.addEventListener("load", iniciarjuego)