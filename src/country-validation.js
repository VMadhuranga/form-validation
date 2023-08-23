import { checkZIP } from "./zip-validation";

export const country = document.querySelector("#country");
const countryError = document.querySelector("#country + span");

export function validateCountry() {
  country.addEventListener("change", () => {
    if (!country.validity.valid) {
      countryValidation();
    } else {
      countryError.textContent = "";
    }

    checkZIP();
  });
}

export function countryValidation() {
  if (country.validity.valueMissing) {
    countryError.textContent = "Country is required";
  }
}
