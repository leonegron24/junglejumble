import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
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
        if (AppState.isTyping){
            return
        }
        AppState.activeJumble.startTime = new Date()
        AppState.activeJumble.endTime = ''
        AppState.isTyping = true
        AppState.emit('activeJumble')
    }

    endGame(){
        const activeJumble = AppState.activeJumble
        if (!activeJumble) return
        activeJumble.endTime = new Date()
        AppState.isTyping = false
        const timeDifference = activeJumble.endTime - activeJumble.startTime;
        if (timeDifference < activeJumble.fastestTime || !activeJumble.fastestTime ){
            activeJumble.fastestTime = timeDifference
        }
        console.log("End Time Set:", activeJumble.endTime);
        AppState.emit("endTimeChanged")
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

    createJumble(newJumble){
        console.log('servicing new jumble')
        AppState.jumbles.push(newJumble)
        let jumble = AppState.jumbles
        saveState('jumbles', jumble)
        const newJumbleList = loadState('jumbles', [Jumble])
        AppState.jumbles = newJumbleList
    }

}

export const jumbleService = new JumbleService()