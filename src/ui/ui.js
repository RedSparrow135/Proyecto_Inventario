// src/ui/ui.js
function loadUIComponents() {
  fetch("src/ui/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("afterbegin", data);
    });

  fetch("src/ui/menu.html")
    .then((response) => response.text())
    .then((data) => {
      document
        .querySelector(".main-container")
        .insertAdjacentHTML("afterbegin", data);
    });
}

window.addEventListener("DOMContentLoaded", loadUIComponents);
