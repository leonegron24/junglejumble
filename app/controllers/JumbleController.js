import { AppState } from "../AppState.js"

export class JumbleController{

    constructor(){
        console.log('🎛️')
        this.drawJumble()
    }
    drawJumble(){
        console.log('🖊️')
        const elmJumble = document.getElementById('jumbles')
        const jumbles = AppState.jumbles
        if (!elmJumble){return}
        jumbles.forEach(jumble => elmJumble.innerHTML += jumble.jumbleTemplate)
    }

    // setActiveJumble(){
    //     const selectedJumble = 
    // }
}