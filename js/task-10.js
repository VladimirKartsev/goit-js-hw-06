function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const newEl = document.querySelector("#controls");
const newSizeEl = document.querySelector("#boxes");
newEl.addEventListener("click",)
function ()