import "./Header.css";

const template = () => `
<nav>
  <button id="colorBtn">🎨</button>
</nav>
`;

const getRandomColor = () => {
  let allComponents = "0123456789ABCDEF";
  let pad = "#";

  for (let i = 0; i < 6; i++) {
    pad = pad + allComponents[Math.floor(Math.random() * 16)];
  }
  return pad;
};

const addListeners = () => {
  const colorBtn = document.querySelector("#colorBtn");
  colorBtn.addEventListener("click", () => {
    document.body.style.background = getRandomColor();
  });
};


export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
