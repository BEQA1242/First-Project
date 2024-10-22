document.getElementById("btnregister").addEventListener("click", function () {
  window.location.href = "/pages/registration/registration.html";
});
document
  .getElementById("backToHomeButton")
  .addEventListener("click", function () {
    const isFormValid = true;
    if (isFormValid) {
      window.location.href = "./pages/Ze%20bmwe30/ZE%20bmwe30.html";
    } else {
      alert("Form is invalid. Please check your input.");
    }
  });
