const startDate = new Date("2025-07-04T00:00:00")

function actualizarTiempo(){

let now = new Date()

let diff = now - startDate

let dias = Math.floor(diff / (1000*60*60*24))

document.getElementById("tiempo").innerText = dias + " días ❤️"

}

setInterval(actualizarTiempo,1000)

const columns = [
document.getElementById("col1"),
document.getElementById("col2"),
document.getElementById("col3"),
document.getElementById("col4")
]

const song = document.getElementById("song")

let progreso = 0
let total = 500

function crearTecla(){

let col = columns[Math.floor(Math.random()*4)]

let tile = document.createElement("div")

tile.classList.add("tile")

tile.style.top = "-60px"

col.appendChild(tile)

let pos = -60

let bajar = setInterval(()=>{

pos += 4
tile.style.top = pos+"px"

if(pos>400){
tile.remove()
clearInterval(bajar)
}

},20)

tile.onclick = function(){

tile.remove()

progreso++

let porcentaje = (progreso/total)*100

document.getElementById("barra").style.width = porcentaje+"%"

song.currentTime = (song.duration/total)*progreso
song.play()

if(progreso>=total){

alert("💖 Te amo mi Nai 💖\nGracias por estos meses tan hermosos.\nEres mi niña preciosa, mi ojito de uva.\nCada día contigo es un regalo.\nSiempre quiero estar contigo.")

}

}

}

setInterval(crearTecla,800)
