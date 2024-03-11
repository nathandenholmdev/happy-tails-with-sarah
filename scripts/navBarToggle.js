const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
const navLinks = document.getElementsByClassName("nav-link");
for (let navLink of navLinks) {
  navLink.addEventListener("click", toggleNav);
}
hamburger.addEventListener("click", toggleNav);
function toggleNav() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("nav-open");
  return true;
}
