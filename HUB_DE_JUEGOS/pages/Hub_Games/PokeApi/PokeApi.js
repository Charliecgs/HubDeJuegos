import "./PokeApi.css";

import axios from "axios";

import { printTemplate as gamesTemplate } from "../../Games/Games";

const template = () => `
<section class="secPokeApi">
<div>
    <button id="volver" class="volver">Volver a juegos</button>
</div>
<div class="titlePokeApi">
    <h1>BIENVENIDOS A LA POKEAPI</h1>
    <h2>Te muestro una lista de todos los pokemon</h2>
</div>
<div class="container"></div>
</section>
`;

const volver = () => {
  const back = document.querySelector("#volver");
  back.addEventListener("click", () => {
    gamesTemplate();
  });
};

let pokemons = 1;

const getCharacters = () => {

    for (let i = 0; i <= 150; i++) {
        axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemons}`)
    .then((res) => printCharacters(res));

    pokemons++;
    }
    
};


const printCharacters = (res) => {
    for (const character of res) {
        const container = document.querySelector(".container");
        container.innerHTML += `
        <p>${character.name} </p>
        `;
    }
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  getCharacters();
  volver();
};

