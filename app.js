const close = document.getElementById("close");
const open = document.getElementById("open");
const menu = document.getElementById("menu");
const footer_date = document.getElementById("footer_date");
const body = document.getElementById("body");
const mode = document.getElementById("mode");

open.addEventListener("click", handleOpen);
close.addEventListener("click", handleClose);
menu.addEventListener("click", handleClose);
mode.addEventListener("click", toggleMode);

function handleOpen() {
  menu.classList.remove("hidden");
}

function handleClose() {
  menu.classList.add("hidden");
}

function toggleMode() {
  body.classList.toggle("dark");
}

const year = new Date().getFullYear();
footer_date.innerHTML = `©${year} Portwind. Design with ♥️ by Fridah.`;
