import { country, countryValidation } from "./country-validation";

const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zip + span");

export function validateZip() {
  zip.addEventListener("input", () => {
    if (!country.validity.valid) {
      countryValidation();
      zipError.textContent = "Please select country";
    } else if (!zip.validity.valid) {
      zipValidation();
    } else {
      zipError.textContent = "";
    }
  });
}

export function zipValidation() {
  if (zip.validity.valueMissing) {
    zipError.textContent = "ZIP is required";
  }
}

function checkZIP() {
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  if (!country.value) return;
  const constraint = new RegExp(constraints[country.value][0], "");

  if (constraint.test(zip.value)) {
    zipError.textContent = "";
  } else {
    zipError.textContent = constraints[country.value][1];
  }
}

window.onload = () => {
  country.onchange = checkZIP;
  zip.oninput = checkZIP;
};
