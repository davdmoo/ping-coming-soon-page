const emailForm = document.getElementById("email-form");

// source: https://stackoverflow.com/a/46181
function validateEmail(email) {
  return String(email).toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function onSubmit(event) {
  event.preventDefault();
  const emailInput = emailForm["email"].value;
  let textInput = document.getElementById("email-input");
  let errorMessage = document.getElementById("error-msg");

  const isValidEmail = validateEmail(emailInput);
  if (isValidEmail) {
    textInput.classList.remove("error-input");
    errorMessage.innerHTML = "";
  } else {
    textInput.className = "error-input";
    errorMessage.innerHTML = "Please provide a valid email address";
  }
}

emailForm.addEventListener("submit", onSubmit);