const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const inputColor = document.querySelector(".input_color");
const tools = document.querySelectorAll(".button_tool");
const sizeButtons = document.querySelector(".button_size");
const ButtonClear = document.querySelector(".button_clear");

let brushSize = 50;
ctx.fillStyle = "#000";

canvas.addEventListener("mousedown", (event) => {
  const { clientX, clientY } = event;
  draw(clientX, clientY);
});
const draw = (x, y) => {
  ctx.
    ctx.fillRect(
    x - canvas.offsetLeft,
    y - canvas.offsetTop,
    brushSize,
    brushSize
  );
};
