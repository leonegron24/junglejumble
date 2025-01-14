import { AppState } from "../AppState.js"
import {saveState} from "../utils/Store.js"
import { loadState } from "../utils/Store.js"

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
        AppState.activeJumble.startTime = null
        AppState.emit('startTimeChanged')
        console.log('starting game over', AppState.activeJumble.startTime)
        return
    }

    saveFastestTime(){
        if (AppState.activeJumble.fastestTimeFormat){
            saveState('fastestTimeFormat', AppState.activeJumble.fastestTimeFormat)
        }
    }

    loadFastestTime(){
        const fastestTime = loadState('fastestTimeFormat')
        console.log('fastest time', fastestTime)
        AppState.activeJumble.fastestTime = fastestTime
    }

}

export const jumbleService = new JumbleService()