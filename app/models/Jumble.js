import { generateId } from "../utils/GenerateId.js";
export class Jumble {
    /**
     * 
     * @param {{
     * name: string,
     * body: string,
     * startTime: Date | String,
     * endTime: Date | String,
     * }} data 
     */

    constructor(data) {
      this.id = generateId();
      this.name = data.name;
      this.body = data.body;
      this.startTime = data.startTime ? new Date(data.startTime) : '';
      this.endTime = data.endTime ? new Date(data.endTime) : '';
    }
    
  
      get jumbleTemplate() { // a basic list template to get drawing
          return /*html*/ `
          <li>
          <button onclick = "app.JumbleController.setActiveJumble('${this.name}')" class='btn btn-success m-1'> ${this.name} </button>
          </li>`
      }

      get activeJumbleTemplate(){
        return /*html*/ `
        <div id="activeJumble">
        <h1 class = 'mt-4 text-center'> ${this.name} </h1>
        <p> ${this.body} </p>
        <div class='text-center'>
        ${this.startTime
          ? ` 
            <textarea name="typeJumble" id="typeJumble"></textarea> 
            <button onclick="app.JumbleController.submitJumble()" class = 'btn btn-success mt-4'> Submit!</button>
            ` 

          : ' <button onclick = "app.JumbleController.startGame()"> Start Game </button> ' 
        }
        </div>
        <div> Start Time: ${this.startTimeFormat}</div>
        <div>End Time: ${this.endTimeFormat ?this.endTimeFormat: ''} </div>  
        <div class='d-flex justify-content-center'>
        <div class = 'text-center bg-white text-danger w-25'>Fastest Time: ${this.fastestTimeFormat}</div> 
        </div>
        </div>
        `
      }

      get startTimeFormat(){
        return this.startTime ? this.startTime.toLocaleTimeString(undefined) : ''
      }

      get endTimeFormat(){
        return this.endTime ? this.endTime.toLocaleTimeString(undefined) : ''
      }

      get fastestTimeFormat() {
        if (this.fastestTimeFormat){return}
        if (this.startTime && this.endTime) {
          const timeDifference = this.endTime - this.startTime; // Difference in milliseconds
          const seconds = Math.floor((timeDifference / 1000) % 60);
          const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
          const hours = Math.floor(timeDifference / (1000 * 60 * 60));
          return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        return '';
      }
  } 