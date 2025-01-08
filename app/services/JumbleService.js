import { AppState } from "../AppState.js"

class JumbleService{
    
    setActiveJumble(jumbleName){
        console.log('Service Active Jumble...')
        const elmActiveJumble = document.getElementById('activeJumble')
        const activeJumble = AppState.jumbles.find(jumble => jumble.name === jumbleName)
        if (!elmActiveJumble){
            return
        }
        if (!activeJumble){
            return
        }
        AppState.activeJumble = activeJumble
        elmActiveJumble.innerHTML = activeJumble.activeJumbleTemplate
        console.log()
        this.startGame()
    }

    submitJumble(userInput){
        console.log('Service submitted text...')
        if (userInput == AppState.activeJumble.body){
            window.alert('winner!')
            this.endGame()
        }else{
            window.alert('loser :(, try again!')
            return
        }
        
    }

    startGame(){
        AppState.activeJumble.startTime = new Date()
    }

    endGame(){
        const activeJumble = AppState.activeJumble
        if (!activeJumble) return
        activeJumble.endTime = new Date()
        console.log("End Time Set:", activeJumble.endTime);
        AppState.emit("endTimeChanged")
        return
    }
}

export const jumbleService = new JumbleService()