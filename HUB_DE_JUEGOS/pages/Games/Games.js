import "./Games.css";

import { printTemplate as loginTemplate } from "../Login/Login";
import { printTemplate as pokeApiTemplate } from "../Hub_Games/PokeApi/PokeApi";
import { printTemplate as pptTemplate } from "../Hub_Games/Piedra_papel_tijera/Piedra_papel_tijera";
import { printTemplate as quizTemplate } from "../Hub_Games/Quiz/Quiz";
import { printTemplate as ahorcadoTemplate } from "../Hub_Games/Ahorcado/Ahorcado";

let nameValue;

const template = () =>
  `
    <section class="games">
        <div class="welcome">
            <h1>Hola ${nameValue}, bienvenido, para cerrar sesion pulse aquí</h1>
            <button id="logOut" class="logOut">Cerrar sesion</button>
        </div>
        <h2>JUEGOS O APLICACIONES</h2>
        <div class="games2">
        <a href="#" class="pokeApi" id="pokeApi">
            <div>
                <div id="pokeApi" class="pokeApi">POKEAPI</div>
            </div>
          
        </a>
        <a href="#" class="ppt" id="ppt">
            <div>
                <div id="ppt" class="ppt">PIEDRA, PAPEL O TIJERAS</div>
            </div>
        </a>
        <a href="#" class="quiz" id="quiz">
            <div>
                <div id="quiz" class="quiz">QUIZ DE PREGUNTAS</div>
            </div>
        </a>
        <a href="#" class="ahorcado" id="ahorcado">
            <div>
                <div id="ahorcado" class="ahorcado">AHORCADO</div>
            </div>
        </a>
        </div>
    </section>
    `;

const logOut = () => {
  const logOut = document.querySelector("#logOut");
  logOut.addEventListener("click", () => {
    localStorage.removeItem("user");
    loginTemplate();
  });
};

const poKeApi = () =>{
    const btnPokeApi = document.querySelector("#pokeApi");
    btnPokeApi.addEventListener("click", () => {
        pokeApiTemplate();
    })
}

const piedraPT = () => {
  const btnPPT = document.querySelector("#ppt");
  btnPPT.addEventListener("click", () => {
    pptTemplate();
  })
}

const quiz = () =>{
  const btnPokeApi = document.querySelector("#quiz");
  btnPokeApi.addEventListener("click", () => {
    quizTemplate();
  })
}


const ahorcado = () =>{
  const btnPokeApi = document.querySelector("#ahorcado");
  btnPokeApi.addEventListener("click", () => {
    ahorcadoTemplate();
  })
}

export const printTemplate = () => {
  nameValue = localStorage.getItem("user");
  document.querySelector("#app").innerHTML = template();
  logOut();
  poKeApi();
  piedraPT();
  quiz();
  ahorcado();
};
