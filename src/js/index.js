import { toggleMode } from "./services/dark-light.js";
import { iconDarkLight, arrowRight, arrowLeft, slides, containerSlide, arrows, navegation } from "./variables.js";
import { createMarkers } from "./services/markersFunctions.js";
let index = 0

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


arrowRight.addEventListener('click', () => {
    const slide = document.querySelectorAll(".slide")
    const markers = document.querySelectorAll(".auto-btn")
    markers[index].classList.remove('btn-select')
    
    if(index < slide.length - 1){
        slide[index].classList.add("passing-slide")
        markers[index + 1].classList.add('btn-select')
        
    } 
    else if (index = slide.length - 1) {
        slide.forEach((item)=> {
            item.classList.remove('passing-slide')
        })
        markers[0].classList.add('btn-select')
        index = - 1
    }
    index++

})

arrowLeft.addEventListener('click', () => {
    const slide = document.querySelectorAll(".slide")
    const markers = document.querySelectorAll(".auto-btn")
    markers[index].classList.remove('btn-select')
    
    
    if(index < slide.length && index !== 0){
        slide[index - 1].classList.remove("passing-slide")
        markers[index - 1].classList.add('btn-select')
        
    } 
    else if (index === 0) {
        slide.forEach((item, index) => {
            if (index < slide.length - 1) {
                item.classList.add("passing-slide")
            }
        })
        markers[slide.length - 1].classList.add('btn-select')
        index = slide.length
    } 
    index--
     
})

