const form = document.querySelector("form");
const email = document.querySelector("#user-email");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const password = document.querySelector("#password");
const confirmation = document.querySelector("#password-confirmation");
const submitButton = document.querySelector("#submit-button");

const inputs = [email, country, zip, password, confirmation];

inputs.forEach((input) => {
  input.addEventListener("focusout", (e) => {
    //e.target.reportValidity();
    e.target.nextSibling.textContent = e.target.validationMessage;
  });
});

const passwordConfirmation = function (submitEvent) {
  if (!form.checkValidity()) {
    console.log("not valid");
    submitEvent.preventDefault();
    inputs.forEach((input) => {
      input.nextSibling.textContent = input.validationMessage;
    });
  }
  if (password.value !== confirmation.value) {
    console.log("no match");
    submitEvent.preventDefault();
    submitEvent.target.nextSibling.textContent = "The passwords don't match";
  }
};

form.addEventListener("submit", passwordConfirmation);
