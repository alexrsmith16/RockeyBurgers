let $emailInput = document.querySelector("#emailInput");
$emailInput.addEventListener("change", validateEmailFormat())

function validateEmailFormat() {
  let isValid = emailIsValid($emailInput);
  if (!isValid) {
    $emailInput.setCustomValidity("Email must be formatted as name@domain.com");
  }
  else {
    $emailInput.setCustomValidity("");
  }
}

function emailIsValid(control) {
  let email = control.value;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}