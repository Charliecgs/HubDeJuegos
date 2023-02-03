import "./Login.css";

import { printTemplate as gamesTemplate } from "../Games/Games";

const template = () => `
<div class="login">
<h2>HUB DE JUEGOS</h2>
<p>POR FAVOR, INTRODUZCA SU NOMBRE PARA REGISTRARSE Y PODER ACCEDER A LOS JUEGOS</p>
<input type="text" placeholder="Introduce tu nombre" id="loginInput">
<button id="loginBtn" class="mainBtn">Entrar</button>
</div>
`;

const addListeners = () => {
    const loginInput = document.querySelector("#loginInput");
    document.querySelector("#loginBtn").addEventListener("click", () => {     
            if (loginInput.value == "") {
              alert("Por favor introduce un nombre para iniciar sesion");
            } else {
              localStorage.setItem("user", loginInput.value);
              gamesTemplate();
            }
          
//        localStorage.setItem("user", loginInput.value);      
    })
}

export const printTemplate = () => {
    document.querySelector("#app").innerHTML = template();
    addListeners();
}