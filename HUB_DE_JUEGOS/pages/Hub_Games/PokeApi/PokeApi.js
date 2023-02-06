import "./PokeApi.css";
import { printTemplate as gamesTemplate } from "../../Games/Games";

const template = () => `
<section class="secPokeApi">
<div class="titlePokeApi">
    <img src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1675453504/International_Pok%C3%A9mon_logo.svg_lmrbp3.png" class="img"/>
</div>
 <div class="botonesDeTYP">
 <button class="tipos">Tipos</button>
 <button class="regiones">Regiones</button>
 </div>

<div class="tiposYRegion">
</div>
<div>
<input type="text" id="searchInput" placeholder="Buscar..." class="inputBuscar"/>
</div>
<div><img  class="spinner" src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1675716053/La-vida-dentro-de-una-Pokebola-2_oexgkq.png" /></div>
<div class="container"></div>
</section>
`;

const eliminar = () => {
  const volverAtras = document.querySelector(".volver");
  volverAtras.style.display = "block";
}

const volver = () => {
  const back = document.querySelector("#volver");
  back.addEventListener("click", () => {
    gamesTemplate();
  });
};

let pokemons = [];
let types = [
  "grass",
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
  "dragon",
];

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
  pokemons = [];
  const spinner = document.querySelector(".spinner");
  spinner.style.display = "block";
  for (let i = 1; i <= 150; i++) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const json = await data.json();
    pokemons.push(json);
  }
  mapPokemons(pokemons);
  spinner.style.display = "none";
};

let mappedPokemons;
const mapPokemons = (poke) => {
  mappedPokemons = poke.map((pokemon) => ({
    name: pokemon.name,
    weight: pokemon.weight,
    image: pokemon.sprites.other.dream_world.front_default,
    type: pokemon.types[0].type.name,
  }));
  // getAllPokemons();
  printCharacters(mappedPokemons);
};

const printCharacters = (mapPokemons) => {
  for (const character of mapPokemons) {
    const container = document.querySelector(".container");
    container.innerHTML += `<figure class="${character.type}">
    <img src=${character.image} />
        <p>Nombre: ${character.name}</p>
        <p>Peso: ${character.weight/10} KG </p>
        <p>Tipo: ${character.type} </p>
        </figure>
        `;
  }
};

// const getAllPokemons = () => {
//   const all = document.querySelector(".allPokemons");
//   all.addEventListener("click", () => {
//     document.querySelector(".container").innerHTML = "";
//     mapPokemons(pokemons);
//   });
// };

const typesPokemon = (array, type) => {
  const filterTypes = array.filter((type1) => type1.type === type);
  printCharacters(filterTypes);
};

const createButtons = () => {
  const botones = document.querySelector(".tiposYRegion");
  for (const type of types) {
    const botons = document.createElement("button");
    botons.classList.add(`${type}`);
    botons.textContent = `${type}`;
    botones.appendChild(botons);
    botons.addEventListener("click", () => {
      document.querySelector(".container").innerHTML = "";
      typesPokemon(mappedPokemons, `${type}`);
    });
  }
};

const filterCharacters = (characters) => {
  const searchInput = document.querySelector("#searchInput");
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  printCharacters(filteredCharacters);
};

const addListener = () => {
  searchInput.addEventListener("input", () => {
    document.querySelector(".container").innerHTML = "";
    filterCharacters(mappedPokemons);
  });
};


const disabledDiv = () => {
  const butonDisabled = document.querySelector(".tipos");
  butonDisabled.addEventListener("click", () => {
    document.querySelector(".tiposYRegion").innerHTML = "";
    createButtons();
    document.querySelector(".container").innerHTML = "";
    getCharacters();
  })
};


//REGIONES
let regions = [
  {
  name: "kanto",
  img: "https://res.cloudinary.com/dqoiir5ii/image/upload/v1675443180/kanto_p59oun.png"
},
{
  name: "johto",
  img: "https://res.cloudinary.com/dqoiir5ii/image/upload/v1675444351/Johto_HGSS_zg8g3s.webp"
},
{
  name: "hoenn",
  img: "https://res.cloudinary.com/dqoiir5ii/image/upload/v1675444478/1200px-Mapa_de_Hoenn_ROZA_j7ejpo.png"
},
{
  name: "sinnoh",
  img: "https://res.cloudinary.com/dqoiir5ii/image/upload/v1675443180/kanto_p59oun.png"
},
{
  name: "unova",
  img: "https://res.cloudinary.com/dqoiir5ii/image/upload/v1675444739/Teselia_N2B2_umlb4g.webp"
},
{
  name: "kalos",
  img: "https://res.cloudinary.com/dqoiir5ii/image/upload/v1675444783/Mapa_Kalos_sim4rb.webp"
},
{
  name: "alola",
  img: "https://res.cloudinary.com/dqoiir5ii/image/upload/v1675444842/Alola_xgsdfb.webp"
},
{
  name: "galar",
  img: "https://res.cloudinary.com/dqoiir5ii/image/upload/v1675445778/1200px-Galar_vptgns.png"
},  
{
  name: "hisui",
  img: "https://res.cloudinary.com/dqoiir5ii/image/upload/v1675445836/Husui_stef4o.webp"
},  
{
  name: "paldea",
  img: "https://res.cloudinary.com/dqoiir5ii/image/upload/v1675445875/1200px-Paldea_miug27.jpg"
}
];

// const getRegions = async () => {
//     for (let i = 1; i <= 10; i++) {
//       const data = await fetch(`https://pokeapi.co/api/v2/region/${i}`);
//       const json = await data.json();
//       totalRegions.push(json);
//     }
//     mapRegions(totalRegions);
//   };
  
  
  const printRegions = () => {
    for (const region of regions) {
      const container = document.querySelector(".container");
      container.innerHTML += `<figure class="regionColor">
          <p>${region.name}</p>
          <img src= ${region.img} />
          </figure>
          `;
    }
    
  
  };
  
  // const regionsName = (array, name) => {
  //   const filterTypes = array.filter((type1) => type1.name === name);
  //   printRegions(filterTypes);
   
  // };
  
  // const createButtonsRegion = () => {
    
  // };
    // for (const region of regions) {
    //   const botons = document.createElement("button");
    //   botons.classList.add(`${region.name}`);
    //   botons.textContent = `${region.name}`;
    //   botones.appendChild(botons);
      
    // }

  
  // const filterRegions = (regions) => {
  //   const searchInput = document.querySelector("#searchInputRegion");
  //   const filteredRegions = regions.filter((region) =>
  //   region.name.toLowerCase().includes(searchInput.value.toLowerCase())
  //   );
  //   printRegions(filteredRegions);
  // };
  
  // const addListenerRegion = () => {
  //   searchInput.addEventListener("input", () => {
  //     document.querySelector(".container").innerHTML = "";
  //     filterRegions(mappedRegions);
  //   });
  //   }
  
  
  const disabledDivRegiones = () => {
    const butonDisabled = document.querySelector(".regiones");
    butonDisabled.addEventListener("click", () => {
      document.querySelector(".container").innerHTML = "";
      printRegions();

    })
  };




export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  getCharacters();
  // getRegions();
  addListener();
  disabledDiv();
  disabledDivRegiones();
  volver();
  eliminar();
};

