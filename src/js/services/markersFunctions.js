
export function createMarkers(slide, navegation) {

    for (let i= 0; i < slide.length; i++) {
        if (i === 0) {
            navegation.innerHTML = ' <div class="auto-btn btn-select"></div>'
        } else {       
            navegation.innerHTML += ' <div class="auto-btn"></div>'
        }
        
    }
}