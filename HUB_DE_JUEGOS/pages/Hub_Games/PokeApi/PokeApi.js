import "./PokeApi.css";
import { printTemplate as gamesTemplate } from "../../Games/Games";

const template = () => `
<section class="secPokeApi">
<div>
    <button id="volver" class="volver">Volver a juegos</button>
</div>
<div class="titlePokeApi">
    <h1>BIENVENIDOS A LA POKEAPI</h1>
    <h2>Te muestro una lista de todos los 150 primeros pokemons</h2>
</div>
<div class="tiposYRegion">
<button class="allPokemons">Todos los pokemons</button>
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

let pokemons = [];
let types = ["grass",
  "fire", 
  "water",
  "bug",
  "normal",
  "poison",
  "electric",
  "ground",
  "fairy",
  "fighting",
  "psychic",
  "rock",
  "ghost",
  "ice",
  "dragon"];

// const getGrass = () => {
//   const filteredGrass = pokemons.filter(
//     (grass) => grass.types[0].type.name === "grass"
//   );

//   const botonGrass = document.querySelector("#grass");
//   botonGrass.addEventListener("click", () => {
//     document.querySelector(".container").innerHTML = "";
//     mapPokemons(filteredGrass);
//   });
// };

// const allPokemons = () => {
//   const botonAll = document.querySelector("#botonAll");
//   botonAll.addEventListener("click", () => {
//     document.querySelector(".container").innerHTML = "";
//     mapPokemons(pokemons);
//   });
// };

const getCharacters = async () => {
  for (let i = 1; i <= 150; i++) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const json = await data.json();
    pokemons.push(json);
  }
  mapPokemons(pokemons);
};

const getAllPokemons = () => {
  const all = document.querySelector(".allPokemons");
  all.addEventListener("click", () => {
    document.querySelector(".container").innerHTML = "";
    mapPokemons(pokemons);
  })
}

let mappedPokemons;
const mapPokemons = (poke) => {
    mappedPokemons = poke.map((pokemon) => ({
    name: pokemon.name,
    weight: pokemon.weight,
    image: pokemon.sprites.other.dream_world.front_default,
    type: pokemon.types[0].type.name,
  }));
  getAllPokemons();
  printCharacters(mappedPokemons);
};

const printCharacters = (mapPokemons) => {
  for (const character of mapPokemons) {
    const container = document.querySelector(".container");
    container.innerHTML += `<figure>
        <p>${character.name}</p>
        <p>${character.weight} </p>
        <p>${character.type} </p>
        <img src=${character.image} />
        </figure>
        `;
  }
  
};

const typesPokemon = (array, type) =>{
  const filterTypes = array.filter((type1) => type1.type === type);
  printCharacters(filterTypes);
}

const createButtons = () => {
  const botones = document.querySelector(".tiposYRegion");
  for (const type of types) {
    const botons = document.createElement("button");
    botons.classList.add(`${type}`)
    botons.textContent = `${type}`;
    botones.appendChild(botons);
    botons.addEventListener("click", () => {
      document.querySelector(".container").innerHTML = "";
      typesPokemon(mappedPokemons, `${type}`);
    })
  }
}



export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  getCharacters();
  createButtons();
  volver();
};

//GRASS
