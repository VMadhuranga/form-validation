const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span");

export function validateEmail() {
  email.addEventListener("input", () => {
    if (!email.validity.valid) {
      emailValidation();
    } else {
      emailError.textContent = "";
    }
  });
}

export function emailValidation() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Email is required";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Enter valid email";
  }
}
