const resizeInputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");
resizeInputEl.addEventListener("input", () => {
  spanTextEl.style.fontSize = resizeInputEl.value + "px";
});
console.dir(resizeInputEl);
