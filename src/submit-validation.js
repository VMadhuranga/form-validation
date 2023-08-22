import { emailValidation } from "./email-validation";

const form = document.querySelector("#form");

export function validateOnSubmit() {
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      emailValidation();

      e.preventDefault();
    }
  });
}
