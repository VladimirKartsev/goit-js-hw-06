const inputTextValid = document.querySelector("#validation-input");
inputTextValid.addEventListener("blur", () => {
  const textEl = inputTextValid.value.trim();
  if (textEl.length === Number(inputTextValid.dataset.length)) {
    inputTextValid.classList.add("valid");
    inputTextValid.classList.remove("invalid");
  } else {
    inputTextValid.classList.add("invalid");
    inputTextValid.classList.remove("valid");
  }
});
console.log(inputTextValid);
