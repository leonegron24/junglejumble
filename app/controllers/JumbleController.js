import { AppState } from "../AppState.js"
import { jumbleService } from "../services/JumbleService.js"
import { getFormData } from "../utils/FormHandler.js"

export class JumbleController{

    constructor(){
        console.log('🎛️')
        this.drawJumbles()
        AppState.on("endTimeChanged", this.updateActiveJumble)
        AppState.on("activeJumble", this.drawActiveJumble)
        AppState.on('jumbles', this.drawJumbles)
        jumbleService.loadJumble()
    }
    drawJumbles(){
        console.log('🖊️')
        const jumbles = AppState.jumbles
        let listContent = ''
        jumbles.forEach(jumble => listContent += jumble.jumbleTemplate)
        const elmJumble = document.getElementById('jumbles')
        if (!elmJumble){return}
        elmJumble.innerHTML = listContent
    }
    
    drawActiveJumble(){
        const elmActiveJumble = document.getElementById('activeJumble')
        if (!elmActiveJumble){return}
        elmActiveJumble.innerHTML = AppState.activeJumble.activeJumbleTemplate
        console.log()
    }

    setActiveJumble(jumbleName){
        console.log('setting Active Jumble...')
        jumbleService.setActiveJumble(jumbleName)
    }

    startGame(){
        console.log("starting game")    
        jumbleService.startGame()
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

    updateActiveJumble() {
        const activeJumble = AppState.activeJumble;
        if (!activeJumble) return;
    
        // Find the DOM element to update
        const elmActiveJumble = document.getElementById("activeJumble");
        if (elmActiveJumble) {
          // Redraw the active jumble template with updated endTime
          elmActiveJumble.innerHTML = activeJumble.activeJumbleTemplate;
        }
      }
    
    createJumble(){
        console.log('controlling new jumble')
        event.preventDefault()
        const newJumble = event?.target
        const jumbleData = getFormData(newJumble)
        console.log('submitted', newJumble, jumbleData)
        jumbleService.createJumble(jumbleData)
    }
    
}