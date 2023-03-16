document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("button");
  let errorMessage = document.getElementById("error-message");
  let errorIcon = document.getElementById("error-icon");

  var regexp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function validateEmail() {
    let email = document.forms["subscribe"]["email"].value;
    let correctEmail = regexp.test(String(email).toLowerCase());
    if (correctEmail == false) {
      errorMessage.style.display = "inline";
      errorIcon.style.display = "inline";
    }
  }

  button.addEventListener("click", validateEmail);
});
