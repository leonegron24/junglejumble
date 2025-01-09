import { AppState } from "../AppState.js"

class JumbleService{
    
    setActiveJumble(jumbleName){
        console.log('Service Active Jumble...')
        const activeJumble = AppState.jumbles.find(jumble => jumble.name === jumbleName)
        if (!activeJumble){
            return
        }
        AppState.activeJumble = activeJumble
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
        if (AppState.activeJumble.startTime){
            return
        }
        AppState.activeJumble.startTime = new Date()
        AppState.emit('activeJumble')
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