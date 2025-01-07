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

    constructor( data) {
      this.id = generateId() 
      this.name = data.name
      this.body = data.body
      // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
      this.fastestTime = null
      this.startTime = new Date(data.startTime)
      this.endTime = new Date(data.endTime)
      console.log("startTime:", data.startTime);
      console.log("endTime:", data.endTime);

    }
  
      get jumbleTemplate() { // a basic list template to get drawing
          return /*html*/ `
          <li>
          <button onclick = "app.JumbleController.setActiveJumble('${this.name}')" class='btn btn-success m-1'> ${this.name} </button>
          </li>`
      }

      get activeJumbleTemplate(){
        return /*html*/ `
        <h1 class = 'mt-4 text-center'> ${this.name} </h1>
        <p> ${this.body} </p>
        <div class='text-center'>
        <textarea name="typeJumble" id="typeJumble"></textarea>
        <button onclick="app.JumbleController.submitJumble()" class = 'btn btn-success mt-4'> Submit!</button>
        </div>
        <div> Start Time: ${this.startTimeFormat}</div>
        <div>End Time: ${this.endTimeFormat} </div>
        `
      }

      get startTimeFormat(){
        return this.startTime.toLocaleTimeString()
      }

      get endTimeFormat(){
        return this.endTime.toLocaleTimeString()
      }
  } 