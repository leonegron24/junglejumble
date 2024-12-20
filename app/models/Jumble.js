import { generateId } from "../utils/GenerateId.js";
export class Jumble {
    /**
     * 
     * @param {{
     * name: string,
     * body: string,
     * }} data 
     */

    constructor( data) {
      this.id = generateId() 
      this.name = data.name
      this.body = data.body
      // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
      this.fastestTime = null
      this.startTime = null
      this.endTime = null
    }
  
      get jumbleTemplate() { // a basic list template to get drawing
          return /*html*/ `
          <li>
          <button class='btn'>
          ${this.name}
          </button>
          </li>`
      }
  }