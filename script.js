const startDate = new Date("2025-07-04T00:00:00");

function actualizarTiempo(){
let now = new Date();
let diff = now - startDate;

let dias = Math.floor(diff/(1000*60*60*24));
document.getElementById("tiempo").innerText = dias + " días ❤️";
}

setInterval(actualizarTiempo,1000);


const song = document.getElementById("song");

const game = document.querySelector(".game");

let progreso = 0;
let totalNotas = 400;

function crearFila(){

let fila = document.createElement("div");
fila.className = "row";

let negraIndex = Math.floor(Math.random()*4);

for(let i=0;i<4;i++){

let tecla = document.createElement("div");
tecla.className="key";

if(i==negraIndex){
tecla.classList.add("black");

tecla.onclick = ()=>{

if(!tecla.classList.contains("clicked")){

tecla.classList.add("clicked");

progreso++;

let porcentaje = (progreso/totalNotas)*100;

document.getElementById("barra").style.width = porcentaje+"%";

song.currentTime=(song.duration/totalNotas)*progreso;
song.play();

fila.remove();

if(progreso>=totalNotas){

alert(`💖 Te amo mi Nai 💖

Gracias por estos meses tan hermosos.

Eres mi niña preciosa,
mi ojito de uva,
mi niña hermosa.

Desde el 4 de julio de 2025
mi vida cambió para mejor contigo.

Siempre quiero seguir a tu lado.
Te amo muchísimo ❤️`);
}

}

};

}else{

tecla.onclick=()=>{

alert("Fallaste 😢 vuelve a intentar");
location.reload();

}

}

fila.appendChild(tecla);
}

game.prepend(fila);

}

setInterval(crearFila,700);
