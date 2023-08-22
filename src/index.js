import "./style.css";
import { validateEmail } from "./email-validation";
import { validateOnSubmit } from "./submit-validation";
import { validateCountry } from "./country-validation";

validateEmail();
validateCountry();
validateOnSubmit();
