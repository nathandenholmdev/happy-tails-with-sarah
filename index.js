const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 24,
});
function initMap() {
  const center = { lat: 52.12358307853808, lng: -1.0716746091767593 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center,
  });
  new google.maps.Circle({
    strokeColor: "#2e2e2e",
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: "#9c61f1",
    fillOpacity: 0.35,
    map,
    center,
    radius: 18000,
  });
}

window.initMap = initMap;
