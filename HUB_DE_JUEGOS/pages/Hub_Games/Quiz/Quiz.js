import "./Quiz.css";
import { printTemplate as gamesTemplate } from "../../Games/Games";

const template = () => `
<section class="secQuiz">
    <div>
        <button id="volver" class="volver">Volver a juegos</button>
    </div>
    <div class="titlePPT">
        <h1> QUIZ DE PREGUNTAS</h1>
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
  

export const printTemplate = () => {
    document.querySelector("#app").innerHTML = template();
    volver();
  };