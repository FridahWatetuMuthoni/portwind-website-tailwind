const close = document.getElementById("close");
const open = document.getElementById("open");
const menu = document.getElementById("menu");

open.addEventListener("click", handleOpen);
close.addEventListener("click", handleClose);
menu.addEventListener("click", handleClose);

function handleOpen() {
  menu.classList.remove("hidden");
}

function handleClose() {
  menu.classList.add("hidden");
}
