import { toggleMode } from "./services/dark-light.js";
import { iconDarkLight, arrowRight, slides, containerSlide, arrows, navegation, projects  } from "./variables.js";

iconDarkLight.addEventListener('click', () => {
    toggleMode()
})



// projects.forEach((item)=> {



    containerSlide.addEventListener('mouseover', () => {
    
        arrows.classList.remove("not-opacity")
        // navegation.classList.remove("not-opacity")
        // arrows.classList.add("opacity")
        // navegation.classList.add("opacity")
    
    })
    
    containerSlide.addEventListener('mouseout', () => {
    
        arrows.classList.add("not-opacity")
        // navegation.classList.add("not-opacity")
        // arrows.classList.remove("opacity")
        // navegation.classList.remove("opacity")
    
    })


// })

