function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const newColor = document.querySelector("body");
const btnEl = newColor.querySelector(".change-color");
const span = newColor.querySelector(".color");

const onColor = () => {
  const changeColor = getRandomHexColor();
  newColor.style.backgroundColor = changeColor;
  span.textContent = changeColor;
};

btnEl.addEventListener("click", onColor);
