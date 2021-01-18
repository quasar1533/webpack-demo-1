import y from "./y.js";
import img from "./assets/flower.png";

const div = document.getElementById("app");
div.innerHTML = `
  <image src="${img}">
`;

console.log(y);
console.log("hi");

const button = document.createElement("button");
button.innerText = "懒加载";
button.onclick = () => {
  const promise = import("./lazy.js");
  promise
    .then((module) => {
      const fn = module.default;
      fn();
    })
    .catch((err) => {
      console.log("!!!!!!!!!!");
    });
};
div.appendChild(button);
