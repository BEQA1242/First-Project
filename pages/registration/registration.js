const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  let isFormValid = true;

  if (usernameValue === "") {
    setError(username, "Username is required");
    isFormValid = false;
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
    isFormValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
    isFormValid = false;
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
    isFormValid = false;
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters.");
    isFormValid = false;
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
    isFormValid = false;
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords don't match");
    isFormValid = false;
  } else {
    setSuccess(password2);
  }
  if (isFormValid) {
    // Redirect to another page if the form is valid
    window.location.href = "/pages/Ze%20bmwe30/ZE%20bmwe30.html"; // Change this to your desired URL
  }
};
