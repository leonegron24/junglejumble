import { AppState } from "../AppState.js"
import { jumbleService } from "../services/JumbleService.js"

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

    setActiveJumble(jumbleName){
        console.log('setting Active Jumble...')
        jumbleService.setActiveJumble(jumbleName)
    }

    submitJumble(){
        const textarea = document.getElementById('typeJumble')
        if (!textarea){
            return
        }
        const userInput = textarea.value.trim();
        if (!userInput){
            return
        }
        console.log('Users text submission:', userInput)
        console.log('Active Jumble', AppState.activeJumble)
        jumbleService.submitJumble(userInput)
    }
}