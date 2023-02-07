import small from "./assets/small.jpg";

const button = document.createElement("button");

const image = document.createElement("img");
button.textContent = "click on me";

document.body.appendChild(button);
button.className = "btn";
button.addEventListener("click", () => {
  image.src = small;
  document.body.appendChild(image);
});
