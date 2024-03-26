new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  spaceBetween: 24,
});
function initMap() {
  const center = { lat: 52.12, lng: -1.07 };
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
    radius: 15000,
    path: google.maps.SymbolPath.CIRCLE,
  });
}
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      toggleLoading(true);
      emailjs.sendForm("service_yfkd8zb", "template_9ogim8t", this).then(
        () => {
          toggleLoading(false);
        },
        () => {
          toggleLoading(false);
        }
      );
    });
};
const toggleLoading = (isLoading) => {
  const elem = document.getElementById("contact-form-submit");
  if (isLoading) {
    elem.setAttribute("value", "Sending...");
    elem.disabled = true;
  } else {
    elem.setAttribute("value", "Send message");
    elem.disabled = false;
  }
};

window.initMap = initMap;
