const userDetailsForm = document.getElementById("user-form");
userDetailsForm.addEventListener("submit", handleUserDetailsSubmit);
async function handleUserDetailsSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const { email, formType } = Object.fromEntries(formData);
  try {
    const response = await fetch(
      "https://dajho7fii3vyp.cloudfront.net/createDocusealSubmission",
      {
        method: "POST",
        body: JSON.stringify({
          email,
          formType,
        }),
      }
    );
    const { slug } = await response.json();
    window.location.href = `../pages/embedded-signing-form.html?template=${slug}`;
  } catch (error) {
    window.location.href = "../pages/error.html";
  }
}
