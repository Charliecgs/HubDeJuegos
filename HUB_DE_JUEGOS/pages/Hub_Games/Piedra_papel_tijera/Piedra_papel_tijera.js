import "./Piedra_papel_tijera.css";
import { printTemplate as gamesTemplate } from "../../Games/Games";

const template = () => `
<section class="secPPT">
    <div>
        <button id="volver" class="volver">Volver a juegos</button>
    </div>
    <div class="titlePPT">
        <h1> PIEDRA, PAPEL O TIJERAS</h1>
    </div>
    <div class="pptDiv">
       <div class="j1">
       <h1>Jugador 1</h1>
        <button class="piedra">Piedra</button>
        <button class="papel">Papel</button>
        <button class="tijera">Tijera</button>
       </div>
       <div class="imagenes">
        <img>🪨</img>
        <img>🧻</img>
        <img>✂️</img>
       </div>
       <div class="j2">
       <h1>Jugador 2</h1>
        <button class="piedraj2">Piedra</button>
        <button class="papelj2">Papel</button>
        <button class="tijeraj2">Tijera</button>
       </div>
    </div>
    <button class="jugarOtraVez">Volver a jugar</button>
    <div class="container"></div>
</section>
`;


let jugador1 = [];
let jugador2 = [];

const comparacion = () => {
    if(jugador1 == 1 && jugador2 == 1 || jugador1 == 2 && jugador2 == 2 || jugador1 == 3 && jugador2 == 3) {
        document.querySelector(".pptDiv").innerHTML="EMPATE";
        jugador1 = [];
        jugador2 = [];
    } else if(jugador1 == 2 && jugador2 == 1 || jugador1 == 3 && jugador2 == 2 || jugador1 == 1 && jugador2 == 3){
        document.querySelector(".pptDiv").innerHTML="HA GANADO EL JUGADOR 1";
        jugador1 = [];
        jugador2 = [];
    } else if(jugador1 == 1 && jugador2 == 2 || jugador1 == 2 && jugador2 == 3 || jugador1 == 3 && jugador2 == 1){
        document.querySelector(".pptDiv").innerHTML="HA GANADO EL JUGADOR 2";
        jugador1 = [];
        jugador2 = [];
    }
}

const piedra = () => {
    const btnPiedra = document.querySelector(".piedra");
    btnPiedra.addEventListener("click", () => {
        jugador1 = [];
        jugador1.push(1);
        document.querySelector(".j1").innerHTML="";
        comparacion();
    })
}
const papel = () => {
    const btnPapel = document.querySelector(".papel");
    btnPapel.addEventListener("click", () => {
        jugador1 = [];
        jugador1.push(2);
        document.querySelector(".j1").innerHTML="";
        comparacion();
    })
}
const tijera = () => {
    const btnTijera = document.querySelector(".tijera");
    btnTijera.addEventListener("click", () => {
        jugador1 = [];
        jugador1.push(3);
        document.querySelector(".j1").innerHTML="";
        comparacion();
    })
}

const piedraj2 = () => {
    const btnPiedra = document.querySelector(".piedraj2");
    btnPiedra.addEventListener("click", () => {
        jugador2 = [];
        jugador2.push(1);
        document.querySelector(".j2").innerHTML="";
        comparacion();

    })
}
const papelj2 = () => {
    const btnPapel = document.querySelector(".papelj2");
    btnPapel.addEventListener("click", () => {
        jugador2 = [];
        jugador2.push(2);
        document.querySelector(".j2").innerHTML="";
        comparacion();
    })
}
const tijeraj2 = () => {
    const btnTijera = document.querySelector(".tijeraj2");
    btnTijera.addEventListener("click", () => {
        jugador2 = [];
        jugador2.push(3);
        document.querySelector(".j2").innerHTML="";
        comparacion();
    })
}

const volverAJugar = () => {
    const btnPlayAgain = document.querySelector(".jugarOtraVez")
    btnPlayAgain.addEventListener("click", () => {
       printTemplate();
    })
}


const volver = () => {
    const back = document.querySelector("#volver");
    back.addEventListener("click", () => {
      gamesTemplate();
    });
  };
  

export const printTemplate = () => {
    document.querySelector("#app").innerHTML = template();
    volver();
    piedra();
    papel();
    tijera();
    piedraj2();
    papelj2();
    tijeraj2();
    volverAJugar();
  };