import "./style.css";
import store from "./data";
import { addColor, changeColor } from "./data/colorinfo";
import { nanoid } from "@reduxjs/toolkit";

function render() {
  document.querySelector("#colors").innerHTML = store
    .getState()
    .colorState.map(
      (colorinfo) => `<div class="color" >
    <div class="colortile" style="background-color: ${colorinfo.hex}"></div>
    <p contenteditable="true" style="color: ${colorinfo.hex}">${colorinfo.colorname}</p>
    <input data-id="${colorinfo.id}" type="color" name="colorveld" id="colorveld_${colorinfo.id}" class="colorveld" value=${colorinfo.hex} />
    </div>`
    )
    .join("");
}

render();

store.subscribe(render);

const form = document.querySelector("form");
form.onsubmit = function (e) {
  e.preventDefault();
  if (form.elements["veld"].value !== "") {
    store.dispatch(
      addColor({
        id: nanoid(4),
        colorname: form.elements["veld"].value,
        hex: form.elements["colorveld"].value,
      })
    );
  }

  form.reset();
};

document.querySelector(".colors").oninput = (e) => {
  if (e.target.classList.contains("colorveld")) {
    store.dispatch(
      changeColor({
        id: e.target.dataset.id,
        hex: document.getElementById(`colorveld_${e.target.dataset.id}`).value,
      })
    );
  }
};
