let counterValue = 0;

const decrementBtn = document.querySelector("button[data-action=decrement]");
const incrementBtn = document.querySelector("button[data-action=increment]");
const numberCounter = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  numberCounter.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  numberCounter.textContent = counterValue;
});
