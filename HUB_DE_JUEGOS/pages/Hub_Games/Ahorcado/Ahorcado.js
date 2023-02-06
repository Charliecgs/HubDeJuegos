import "./Ahorcado.css";
import { printTemplate as gamesTemplate } from "../../Games/Games";

const eliminar = () => {
  const volverAtras = document.querySelector(".volver");
  console.log(volverAtras);
  volverAtras.style.display = "block";
}

let fallos = 0;
let aciertos = 0;

const template = () => `
<section class="secAhorcado">
    <div class="titleAhorcado">
        <h1> AHORCADO</h1>
    </div>
    <div class="ahorcadoDiv">
        <div class="all">
            <div class="vacio">
                <img src="../../../public/icons/7.png" id="imagen" class="imgVacia"/>
            </div>
            <div class="introduce">
              <button class="word">Pulsa para crear palabra</button>
                  <p class="letra">INTRODUCE LETRA</p>
                  <h1 class="letrah1"></h1>
                  <div class="spans"></div>
            </div>
        </div>
        <div class="buttons"></div>
        <div class="volverAJugar"></div>
    <div>
    <div class="container"></div>
</section>
`;

let palabras = ["HOLA", "ADIOS", "CASA", "AVION"];
let palabra;

const word = () => {
  const word = document.querySelector(".word");
  word.addEventListener("click", () => {

    const botons = document.querySelectorAll(".botonesJuego");

    for (const boton of botons) {
      boton.disabled = false;
    }

    botons.disabled = false;
    aciertos = 0;
    fallos = 0;
    word.disabled = true;

    palabra = palabras[Math.floor(Math.random() * palabras.length)];

    console.log(palabra);
    for (let i = 0; i < palabra.length; i++) {
      const spans = document.querySelector(".spans");
      const span = document.createElement("span");
      // span.textContent = palabra[i];
      span.classList.add("allSpans");
      spans.appendChild(span);
    }
  });
};

let letras = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "k",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const crearBotones = () => {
  for (let i = 0; i < letras.length; i++) {
    let divButtons = document.querySelector(".buttons");
    let boton = document.createElement("button");
    boton.classList.add("botonesJuego");
    boton.textContent = letras[i];
    divButtons.appendChild(boton);
      boton.disabled = true;


    boton.addEventListener("click", () => {
      const spans = document.querySelectorAll("span");
      boton.disabled = true;
      const letra = boton.innerHTML.toUpperCase();
      let acierto = false;
      for (let i = 0; i < palabra.length; i++) {
        if (letra == palabra[i]) {
          spans[i].innerHTML = letra;
          acierto = true;
          aciertos++;
        }
      }

      if (acierto == false) {
        fallos++;
        const imagenes = `../../../public/icons/${fallos}_.png`;
        const imagen = document.querySelector("#imagen");
        imagen.src = imagenes;
      }

      if (fallos == 6) {
        document.querySelector(".letrah1").innerHTML = "HAS PERDIDO";
        const botonesJuego = document.querySelectorAll(".botonesJuego");

        for (const boton of botonesJuego) {
          boton.disabled = true;
        }

        const volverAJugar = document.querySelector(".volverAJugar");
        const crearBoton = document.createElement("button");
        crearBoton.textContent = "Volver a jugar";
        crearBoton.classList.add("vuelve");
        volverAJugar.appendChild(crearBoton);
        const botonVuelve = document.querySelector(".vuelve");
        botonVuelve.addEventListener("click", () => {
          fallos = 0;
          printTemplate();
        });

      }
      
      if (aciertos == palabra.length) {
        document.querySelector(".letrah1").innerHTML = "HAS GANADO";

        const botonesJuego = document.querySelectorAll(".botonesJuego");
        for (const boton of botonesJuego) {
          boton.disabled = true;
        }

        const volverAJugar = document.querySelector(".volverAJugar");
        const crearBoton = document.createElement("button");
        crearBoton.textContent = "Volver a jugar";
        crearBoton.classList.add("vuelve");
        volverAJugar.appendChild(crearBoton);
        const botonVuelve = document.querySelector(".vuelve");
        botonVuelve.addEventListener("click", () => {
          aciertos = 0;
          printTemplate();
        });
      }
    });
  }
};

const volver = () => {
  const back = document.querySelector("#volver");
  back.addEventListener("click", () => {
    gamesTemplate();
  });
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  volver();
  crearBotones();
  word();
  eliminar();
};
