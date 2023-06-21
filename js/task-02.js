const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const allElem = document.querySelector("#ingredients");
const addEl = ingredients.map((el, index, array) => {
  const newEl = document.createElement("li");
  newEl.classList.add("item");
  newEl.innerHTML = el;
  allElem.append(newEl);
  console.log(newEl);
});
