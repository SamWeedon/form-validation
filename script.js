const form = document.querySelector("form");
const email = document.querySelector("#user-email");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const password = document.querySelector("#password");
const confirmation = document.querySelector("#password-confirmation");
const submitButton = document.querySelector("#submit-button");

const inputs = [email, country, zip, password, confirmation];

password.setCustomValidity(
  "Must contain at least 8 characters, one letter, one number, and one special character"
);

// display individual validation errors when leaving an input field
inputs.forEach((input) => {
  input.addEventListener("focusout", (e) => {
    e.target.nextSibling.textContent = e.target.validationMessage;
  });
});

const handleSubmission = function (submitEvent) {
  // if the form is invalid, prevent submission and display all validation errors
  if (!form.checkValidity()) {
    submitEvent.preventDefault();
    console.log("not valid");
    inputs.forEach((input) => {
      input.nextSibling.textContent = input.validationMessage;
    });
  }

  // and if the passwords don't match, tell the user this
  if (password.value !== confirmation.value) {
    console.log("no match");
    submitEvent.preventDefault();
    password.nextSibling.textContent = "The passwords don't match";
  }
};

// link the submit button to its handler function
form.addEventListener("submit", (e) => handleSubmission(e));
