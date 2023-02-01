import "./Home.css";

const template = () => `
<div>
<h2>HUB DE JUEGOS</h2>
<p>POR FAVOR, INTRODUZCA SU NOMBRE PARA REGISTRARSE Y PODER ACCEDER A LOS JUEGOS</p>
<input type="text" placeholder="Introduce tu nombre">
<button class="mainBtn">Entrar</button>
</div>
`;

export const printTemplate = () => {
    document.querySelector("#app").innerHTML = template();
}

