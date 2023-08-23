const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#conform-password");
const passwordError = document.querySelector("#password + span");
const confirmPasswordError = document.querySelector("#conform-password + span");

export function validatePassword() {
  password.addEventListener("input", () => {
    if (!password.validity.valid) {
      passwordValidation();
    } else {
      passwordError.textContent = "";
    }

    checkPassword();
  });
}

export function passwordValidation() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "Password is required";
  } else if (password.validity.tooShort) {
    passwordError.textContent =
      "Password should have minimum 5 and maximum 8 characters ";
  }
}

export function validateConfirmPassword() {
  confirmPassword.addEventListener("input", () => {
    if (!password.validity.valid) {
      passwordValidation();
    } else if (!confirmPassword.validity.valid) {
      confirmPasswordValidation();
    } else {
      confirmPasswordError.textContent = "";
    }

    checkPassword();
  });
}

export function confirmPasswordValidation() {
  if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = " Password confirmation is required";
  }
}

function checkPassword() {
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Password do not match";
  } else {
    confirmPasswordError.textContent = "";
  }
}
