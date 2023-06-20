const allTotalCategories = document.querySelectorAll("li.item");
console.log("Number of categories:", allTotalCategories.length);
allTotalCategories.forEach(function (number) {
  console.log("Category:", number.querySelector("h2").textContent);
  console.log("Elements:", number.querySelectorAll("Li").length);
});
