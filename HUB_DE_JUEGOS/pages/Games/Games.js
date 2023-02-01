import "./Games.css";

import { printTemplate as loginTemplate } from "../Login/Login";
import { printTemplate as pokeApiTemplate } from "../Hub_Games/PokeApi/PokeApi";

let nameValue;

const template = () =>
  `
    <section class="games">
        <div class="welcome">
            <h1>Hola ${nameValue}, bienvenido, para cerrar sesion pulse aquí</h1>
            <button id="logOut" class="logOut">Cerrar sesion</button>
        </div>
        <h2>JUEGOS O APLICACIONES</h2>
        <a href="#" class="pokeApi" id="pokeApi">
            <div>
                <div id="pokeApi" class="pokeApi">POKEAPI</div>
            </div>
        </a>
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



export const printTemplate = () => {
  nameValue = localStorage.getItem("user");
  document.querySelector("#app").innerHTML = template();
  logOut();
  poKeApi();
};
