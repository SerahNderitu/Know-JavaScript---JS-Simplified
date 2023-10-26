// click event
document.addEventListener("click", () => {
  console.log("You clicked this")
});

document.addEventListener("click", (event) => {
  console.log(event.target);
});

// mouseover event

h1.addEventListener("mouseover", () => {
  h1.textContent = "hovering";
});
