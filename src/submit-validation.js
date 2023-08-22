import { emailValidation } from "./email-validation";
import { countryValidation } from "./country-validation";
import { zipValidation } from "./zip-validation";

const form = document.querySelector("#form");

export function validateOnSubmit() {
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      emailValidation();
      countryValidation();
      zipValidation();

      e.preventDefault();
    }
  });
}
