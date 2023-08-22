import "./style.css";
import { validateEmail } from "./email-validation";
import { validateOnSubmit } from "./submit-validation";
import { validateCountry } from "./country-validation";
import { validateZip } from "./zip-validation";

validateEmail();
validateCountry();
validateZip();
validateOnSubmit();
