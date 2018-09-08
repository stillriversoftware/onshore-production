import './styles.css';
import './index.html';
import './images/onshore_logo.svg';
import './images/stapleton.jpg';
import './images/jessi.jpg';
import './images/spencer.jpg';
import './images/uncw_logo.jpg';
import './images/profile_picture.jpg';

document.addEventListener("DOMContentLoaded", function () {
  let menu = document.getElementById("js-nav-menu")
  let navIconContainer = document.getElementById("nav-icon-container")
  let closeElements = document.getElementsByClassName("js-menu-dismiss")

  for (let i = 0; i < closeElements.length; i++) {
    closeElements[i].addEventListener("click", function () {
      if (!menu.classList.contains("hidden")) {
        menu.classList.add("hidden");
      }
      if (!navIconContainer.classList.contains("hidden")) {
        navIconContainer.classList.add("hidden");
      }
    })
  }
  document.getElementById("js-nav-menu-button").addEventListener("click", toggleMenu)
});

function toggleMenu() {
  document.getElementById("js-nav-menu").classList.toggle("hidden");
  document.getElementById("nav-icon-container").classList.toggle("hidden");
}

let shiftWindow = function () {
  scrollBy(0, -60)
};
window.addEventListener("hashchange", shiftWindow);

function load() {
  if (window.location.hash) shiftWindow();
}
