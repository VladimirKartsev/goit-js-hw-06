const inputText = document.querySelector("#name-input");
const anonymousText = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  anonymousText.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
});
