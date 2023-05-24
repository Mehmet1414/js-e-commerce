const openOffcanvas = document.querySelector(".open-offcanvas");
const offcanvasMenu = document.querySelector(".offcanvas");

openOffcanvas.addEventListener("click", function (toggleElement) {
  offcanvasMenu.style.left =
    offcanvasMenu.style.left === "-50%" ? "0" : "-50%";
});
