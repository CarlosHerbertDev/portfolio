import { toggleMode } from "./services/dark-light.js";
import { iconDarkLight, arrowRight, slides, containerSlide, arrows, navegation } from "./variables.js";
import { createMarkers } from "./services/markersFunctions.js";

iconDarkLight.addEventListener('click', () => {
    toggleMode()
})

createMarkers (slides, navegation)

containerSlide.addEventListener('mouseover', () => {
    arrows.classList.remove("not-opacity")  
    navegation.classList.remove("not-opacity")
})
    
containerSlide.addEventListener('mouseout', () => { 
    arrows.classList.add("not-opacity")
    navegation.classList.add("not-opacity")
})




