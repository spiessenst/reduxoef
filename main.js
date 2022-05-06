import "./style.css";
import store from "./data";
import { addColor } from "./data/colorinfo";
import { nanoid } from "@reduxjs/toolkit";

function render() {
  document.querySelector("#colors").innerHTML = store
    .getState()
    .colorState.map(
      (colorinfo) => `<div class="color">
    <div class="colortile" style="background-color: ${colorinfo.hex}"></div>
    <p style="color: ${colorinfo.hex}">${colorinfo.colorname}</p>
    <input type="color" name="colorveld" id="colorveld" value=${colorinfo.hex} />
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
