import "./style.css";
import { validateEmail } from "./email-validation";
import { validateCountry } from "./country-validation";
import { validateZip } from "./zip-validation";
import {
  validatePassword,
  validateConfirmPassword,
} from "./password-validation";
import { validateOnSubmit } from "./submit-validation";

validateEmail();
validateCountry();
validateZip();
validatePassword();
validateConfirmPassword();
validateOnSubmit();
