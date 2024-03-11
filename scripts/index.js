const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 24,
});
function initMap() {
  const center = { lat: 52.123, lng: -1.071 };
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
