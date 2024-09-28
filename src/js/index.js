import { toggleMode } from "./services/dark-light.js";
import { iconDarkLight } from "./variables.js";

iconDarkLight.addEventListener('click', () => {
    toggleMode()
})