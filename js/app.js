const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");
const width = window.innerWidth;

width < 800 ? menu.addEventListener("click", toggleMenu) : null;

function toggleMenu() {
    nav.classList.toggle("menu-responsive")
}

