const urlParams = new URLSearchParams(window.location.search);
const templateSlug = urlParams.get("template");
const embeddedForm = document.getElementById("embedded-pdf-form");
embeddedForm.setAttribute("data-src", `https://docuseal.co/s/${templateSlug}`);
embeddedForm.addEventListener("completed", onEmbeddedFormSubmit);
function onEmbeddedFormSubmit(event) {
  console.log("event", event);
}
