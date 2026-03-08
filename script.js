const song = document.getElementById("song");

const board = document.querySelector(".game");

let progreso = 0;
let total = 300;
let gameOver = false;

function crearFila(){

let fila = document.createElement("div");
fila.className = "row";

let negra = Math.floor(Math.random()*4);

for(let i=0;i<4;i++){

let key = document.createElement("div");

key.className="key";

if(i===negra){
key.classList.add("black");

key.onclick = ()=>{

if(gameOver) return;

progreso++;

song.currentTime=(song.duration/total)*progreso;
song.play();

fila.remove();

let porcentaje=(progreso/total)*100;

document.getElementById("barra").style.width=porcentaje+"%";

if(progreso>=total){
alert("💖 Te amo mi Nai 💖\nGracias por estos meses hermosos.\nEres mi niña preciosa y mi ojito de uva ❤️");
}

}

}else{

key.onclick=()=>{

gameOver=true;

alert("Fallaste 😢\nLa canción vuelve a empezar");

location.reload();

}

}

fila.appendChild(key);

}

board.prepend(fila);

}

function gameLoop(){

if(gameOver) return;

crearFila();

let filas=document.querySelectorAll(".row");

filas.forEach(fila=>{

let pos=fila.offsetTop;

fila.style.top=(pos+80)+"px";

if(pos>500){

gameOver=true;

alert("Perdiste 😢");

location.reload();

}

});

}

setInterval(gameLoop,700);
