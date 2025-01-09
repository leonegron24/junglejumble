import { generateId } from "../utils/GenerateId.js";
export class Jumble {
    /**
     * 
     * @param {{
     * name: string,
     * body: string,
     * startTime: Date,
     * endTime: Date
     * }} data 
     */

    constructor(data) {
      this.id = generateId();
      this.name = data.name;
      this.body = data.body;
      this.fastestTime = null;
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
        </div>
        `
      }

      get startTimeFormat(){
        return this.startTime ? this.startTime.toLocaleTimeString(undefined) : ''
      }

      get endTimeFormat(){
        return this.endTime ? this.endTime.toLocaleTimeString(undefined) : ''
      }
  } 