import "./Games.css";

import { printTemplate as loginTemplate } from "../Login/Login";
import { printTemplate as pokeApiTemplate } from "../Hub_Games/PokeApi/PokeApi";
import { printTemplate as pptTemplate } from "../Hub_Games/Piedra_papel_tijera/Piedra_papel_tijera";
import { printTemplate as ahorcadoTemplate } from "../Hub_Games/Ahorcado/Ahorcado";

const eliminar = () => {
  const volverAtras = document.querySelector(".volver");
  volverAtras.style.display = "none";
}

const eliminarCerrarSesion = () => {
  const volverAtras = document.querySelector(".logOut");
  volverAtras.style.display = "block";
}

let nameValue;

const template = () =>
  `
    <section class="games">
        <div class="welcome">
            <h1>Hola ${nameValue}, bienvenid@.</h1>
        </div>
        <h1 class="h1Title">JUEGOS O APLICACIONES</h1>
        <div class="games2">
        <a href="#" class="pokeApi" id="pokeApi">
            <div>
                <div id="pokeApi" class="pokeApi"><img src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1675453504/International_Pok%C3%A9mon_logo.svg_lmrbp3.png" /></div>
            </div>
          
        </a>
        <a href="#" class="ppt" id="ppt">
            <div>
                <div id="ppt" class="ppt"><img class="imagenppt" src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1675712265/piedra-papel-tijera_xu4uwg.png" /></div>
            </div>
        </a>
        <a href="#" class="ahorcado" id="ahorcado">
            <div>
                <div id="ahorcado" class="ahorcado"><img src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1675712387/32nQA_j1cuzg.png" /></div>
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
  ahorcado();
  eliminar();
  eliminarCerrarSesion();
};
