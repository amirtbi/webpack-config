import Iconify from "@iconify/iconify";
import small from "./assets/small.jpg";
import "./styles/main.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";

const button = document.createElement("button");
button.textContent = "click on me";

document.body.appendChild(button);
button.onclick = () => {
  console.log("clicke me");
  const image = document.createElement("img");

  image.src = small;

  document.body.append(image);
};
